import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  BookOpen,
  LayoutDashboard,
  Settings,
  Menu,
  X,
  Trophy,
  Flame
} from 'lucide-react';
import { useUser } from '../../contexts/UserContext';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { profile, streak } = useUser();

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Study', href: '/categories', icon: BookOpen },
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container-app">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src={`${import.meta.env.BASE_URL}images/logo.webp`}
                alt="Clovis South High School"
                className="h-10 w-auto"
              />
              <div className="hidden sm:block">
                <span className="font-display font-bold text-lg text-navy-900">
                  Clovis South
                </span>
                <span className="font-display font-medium text-lg text-rust-500 ml-1">
                  Part-107
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    active
                      ? 'bg-navy-50 text-navy-800'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Right side - Stats & Settings */}
          <div className="flex items-center gap-3">
            {/* Streak indicator */}
            {streak.currentStreak > 0 && (
              <div className="hidden sm:flex items-center gap-1 px-3 py-1.5 bg-rust-50 text-rust-600 rounded-full">
                <Flame className="w-4 h-4" />
                <span className="text-sm font-medium">{streak.currentStreak}</span>
              </div>
            )}

            {/* XP/Level indicator */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-navy-50 text-navy-700 rounded-full">
              <Trophy className="w-4 h-4" />
              <span className="text-sm font-medium">{profile.xp} XP</span>
            </div>

            {/* Settings link */}
            <Link
              to="/settings"
              className={`p-2 rounded-xl transition-colors ${
                isActive('/settings')
                  ? 'bg-navy-50 text-navy-800'
                  : 'text-gray-400 hover:bg-gray-50 hover:text-gray-600'
              }`}
            >
              <Settings className="w-5 h-5" />
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-gray-400 hover:bg-gray-50 hover:text-gray-600"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-100"
          >
            <div className="container-app py-3 space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      active
                        ? 'bg-navy-50 text-navy-800'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {item.name}
                  </Link>
                );
              })}

              {/* Mobile stats */}
              <div className="flex gap-2 px-4 pt-3">
                {streak.currentStreak > 0 && (
                  <div className="flex items-center gap-1 px-3 py-1.5 bg-rust-50 text-rust-600 rounded-full">
                    <Flame className="w-4 h-4" />
                    <span className="text-sm font-medium">{streak.currentStreak} day streak</span>
                  </div>
                )}
                <div className="flex items-center gap-1 px-3 py-1.5 bg-navy-50 text-navy-700 rounded-full">
                  <Trophy className="w-4 h-4" />
                  <span className="text-sm font-medium">{profile.xp} XP</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
