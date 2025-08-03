import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { QrCode, BarChart3, Menu, X } from 'lucide-react';
import ThemeToggle from '../ThemeToggle';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/generator', label: 'QR Generator', icon: <QrCode className="h-5 w-5" /> },
    { path: '/analytics', label: 'Analytics', icon: <BarChart3 className="h-5 w-5" /> },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-80 w-[90%] md:w-auto md:max-w-screen-md">
      <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-md rounded-full shadow-lg transition-colors duration-300 border border-gray-200/50 dark:border-gray-700/50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 h-16">
          <div className="flex justify-between items-center h-full">
            {/* Logo - Mobile */}
            <div className="md:hidden flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <QrCode className="h-8 w-8 text-primary-500" />
                <span className="text-xl font-bold text-gray-900 dark:text-white">Qliky</span>
              </Link>
            </div>

            {/* Desktop and Centered Navigation */}
            <div className="hidden md:flex flex-1 justify-center items-center">
              <div className="flex items-center space-x-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                      isActive(link.path)
                        ? 'bg-primary-600 text-white shadow-md'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-700/50'
                    }`}
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Theme Toggle - Desktop & Mobile */}
            <div className="flex items-center space-x-3">
              <div className="hidden md:block">
                <ThemeToggle />
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <ThemeToggle />
                <button
                  className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-700/50 ml-3"
                  onClick={toggleMobileMenu}
                >
                  {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full mt-2">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 animate-fade-in py-3">
            <div className="px-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center space-x-3 px-3 py-3 rounded-xl text-base font-medium ${
                    isActive(link.path)
                      ? 'bg-primary-50 text-primary-600 dark:bg-primary-900 dark:text-primary-400'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;