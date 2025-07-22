import React, { Suspense, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Loader from "./components/loader";
import { trackPageView } from "./lib/amplitude";

// Lazy load pages for better performance
const HomePage = React.lazy(() => import("./pages/HomePage"));
const CaptureDeepDive = React.lazy(() => import("./pages/CaptureDeepDive"));

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
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <PageTracker />
        <Layout>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/capture" element={<CaptureDeepDive />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </QueryClientProvider>
  );
} 
