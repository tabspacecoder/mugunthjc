import { useState } from 'react';
import { Menu, X, User } from 'lucide-react';
import { motion } from 'framer-motion';

const Navigation = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Portfolio' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
      <div className="page-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center">
              <User className="text-white" size={20} />
            </div>
            <div>
              <span className="text-xl font-bold text-white">JD</span>
              <div className="text-xs text-gray-400">Portfolio</div>
            </div>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1 bg-gray-900/50 rounded-2xl p-2">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-purple-500 text-white shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Contact Button */}
          <div className="hidden lg:block">
            <motion.button
              onClick={() => setActiveSection('contact')}
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          className="lg:hidden bg-black/95 backdrop-blur-sm border-t border-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <div className="page-container py-6">
            <div className="space-y-2">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full px-6 py-4 text-left font-semibold rounded-2xl transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-purple-500 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                  whileHover={{ x: 8 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-gray-800">
              <motion.button
                onClick={() => {
                  setActiveSection('contact');
                  setIsMenuOpen(false);
                }}
                className="btn-primary w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Us
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navigation;