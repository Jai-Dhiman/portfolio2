import React, { Suspense, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Loader from "./components/loader";
import PreloadAssets from "./components/PreloadAssets";
import { trackPageView } from "./lib/amplitude";
import { trackEvent } from "./lib/amplitude";

// Lazy load pages for better performance with better error boundaries
const HomePage = React.lazy(() => 
  import("./pages/HomePage").then(module => ({ 
    default: module.default 
  }))
);

// Optimized query client with better defaults
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (renamed from cacheTime)
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
});

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
      <PreloadAssets />
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
