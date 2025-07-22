import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: "dist/stats.html",
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  define: {
    __CF_ANALYTICS_TOKEN__: JSON.stringify(process.env.VITE_CF_ANALYTICS_TOKEN || ''),
    __AMPLITUDE_API_KEY__: JSON.stringify(process.env.VITE_AMPLITUDE_API_KEY || ''),
  },
  assetsInclude: ['**/*.glb'],
  optimizeDeps: {
    include: ["react", "react-dom"],
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
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          three: ['three', '@react-three/fiber', '@react-three/drei', '@react-three/rapier'],
          animations: ['framer-motion', 'react-parallax-tilt', 'react-tsparticles', 'tsparticles-engine', 'tsparticles-slim'],
          ui: ['lucide-react', '@tanstack/react-query'],
        }
      }
    }
  },
});
