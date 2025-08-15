import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TechBackground from '../components/TechBackground';
import InteractiveCursor from '../components/InteractiveCursor';
import MatrixRain from '../components/MatrixRain';
import { ThemeProvider } from '../context/ThemeContext';
import { motion } from 'framer-motion';

// Page Animations
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
};

function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    // Import Bootstrap JS on client side
    import('bootstrap/dist/js/bootstrap.bundle.min.js');

    // Hide default cursor
    document.body.style.cursor = 'none';
    
    return () => {
      document.body.style.cursor = 'default';
    };
  }, []);

  return (
    <ThemeProvider>
      {/* Tech Background Components */}
      <TechBackground />
      <MatrixRain />
      <InteractiveCursor />
      
      <Navbar />
      <motion.div
        key={router.route}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        <Component {...pageProps} />
      </motion.div>
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
