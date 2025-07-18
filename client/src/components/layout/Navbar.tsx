import { useState } from 'react';
import { useDarkMode } from '../../hooks/useDarkMode';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const { darkMode, setDarkMode } = useDarkMode();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 glass-effect">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="h-8">
          <img
            src="/icons/portfolioIcon.png"
            alt="Jai Dhiman"
            className="h-full w-auto object-contain hover-lift"
          />
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors hover:text-primary-600 dark:hover:text-accent-gold ${location.pathname === '/'
              ? 'text-primary-600 dark:text-accent-gold'
              : 'text-gray-700 dark:text-gray-300'
              }`}
          >
            Portfolio
          </Link>
          <Link
            to="/capture"
            className={`text-sm font-medium transition-colors hover:text-primary-600 dark:hover:text-accent-gold ${location.pathname === '/capture'
              ? 'text-primary-600 dark:text-accent-gold'
              : 'text-gray-700 dark:text-gray-300'
              }`}
          >
            Capture Case Study
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden btn-secondary p-2"
            aria-label="Toggle mobile menu"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="btn-secondary p-2"
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-dark-400/95 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4 space-y-2">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 text-sm font-medium transition-colors hover:text-primary-600 dark:hover:text-accent-gold ${location.pathname === '/'
                ? 'text-primary-600 dark:text-accent-gold'
                : 'text-gray-700 dark:text-gray-300'
                }`}
            >
              Portfolio
            </Link>
            <Link
              to="/capture"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 text-sm font-medium transition-colors hover:text-primary-600 dark:hover:text-accent-gold ${location.pathname === '/capture'
                ? 'text-primary-600 dark:text-accent-gold'
                : 'text-gray-700 dark:text-gray-300'
                }`}
            >
              Capture Case Study
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}