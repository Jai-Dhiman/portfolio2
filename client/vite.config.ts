import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import path from 'node:path';

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: "dist/stats.html",
      open: false, // Don't auto-open in production builds
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  define: {
    __AMPLITUDE_API_KEY__: JSON.stringify(process.env.VITE_AMPLITUDE_API_KEY || ''),
  },
  assetsInclude: ['**/*.glb'],
  resolve: {
    dedupe: ['react', 'react-dom'],
    alias: [],
  },
  optimizeDeps: {
    include: [
      "react", 
      "react-dom", 
      "react-router-dom",
      "framer-motion",
      "@tanstack/react-query",
      "lucide-react",
      // Force prebundle of scheduler so named ESM exports are available in dev
      "scheduler",
      // Also prebundle 3D libs in dev to ensure consistent module graph
      "three",
      "@react-three/fiber",
      "@react-three/drei"
    ],
    // Do not exclude any deps for now; we want a unified optimized graph
    exclude: [],
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8787",
        changeOrigin: true,
      },
    },
  },
  build: {
    target: 'es2020', // Use modern JavaScript for better performance
    minify: 'terser', // Better compression than esbuild
    cssMinify: true,
    reportCompressedSize: false, // Speeds up build
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name]-[hash].js`,
        chunkFileNames: `assets/[name]-[hash].js`,
        assetFileNames: `assets/[name]-[hash].[ext]`,
        manualChunks: {
          // Core vendor chunk
          vendor: ['react', 'react-dom'],
          // Router and query management
          routing: ['react-router-dom', '@tanstack/react-query'],
          // Heavy 3D libraries (lazy loaded)
          three: ['three', '@react-three/fiber', '@react-three/drei', '@react-three/rapier', 'meshline'],
          // Animation libraries
          animations: ['framer-motion', 'react-parallax-tilt'],
          // Particle system (lazy loaded)
          particles: ['react-tsparticles', 'tsparticles-engine', 'tsparticles-slim'],
          // UI components
          ui: ['lucide-react'],
          // Analytics
          analytics: ['@amplitude/analytics-browser'],
        },
        // Optimize chunk loading
        experimentalMinChunkSize: 1000,
      }
    },
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
        drop_debugger: true,
        pure_funcs: ['console.log'], // Remove specific functions
      },
    },
  },
});
