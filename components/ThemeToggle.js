import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      className="theme-toggle btn btn-outline-primary d-flex align-items-center gap-2"
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.span
        key={theme}
        initial={{ rotate: -180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{ fontSize: '1.2rem' }}
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </motion.span>
      <span className="d-none d-md-inline">
        {theme === 'light' ? 'Dark' : 'Light'}
      </span>
    </motion.button>
  );
};

export default ThemeToggle;
