import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="footer-custom">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          <p className="mb-2">&copy; {new Date().getFullYear()} Ajin George Binu</p>
          <p className="mb-0">Built with Next.js, Bootstrap & Framer Motion</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
