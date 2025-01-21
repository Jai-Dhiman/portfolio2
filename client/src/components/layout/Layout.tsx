// components/layout/Layout.tsx
import { ReactNode } from 'react';
import Navbar from './Navbar';
// import Footer from './Footer'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-100 transition-colors duration-200">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  );
}