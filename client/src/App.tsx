import React, { Suspense, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Loader from "./components/loader";
import { trackPageView } from "./lib/amplitude";
import { trackEvent } from "./lib/amplitude";

// Lazy load pages for better performance
const HomePage = React.lazy(() => import("./pages/HomePage"));

const queryClient = new QueryClient();

// Component to track page views
function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    const pageName = location.pathname === '/' ? 'Home' : location.pathname.slice(1);
    trackPageView(pageName);
  }, [location]);

  return null;
}

export default function App() {
  useEffect(() => {
    trackEvent("Test Event", { source: "App.tsx" });
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <PageTracker />
        <Layout>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<Navigate to="/" replace />} />
              <Route path="/capture" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </QueryClientProvider>
  );
} 
