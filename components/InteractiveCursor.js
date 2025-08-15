import React, { useEffect, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const InteractiveCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClient, setIsClient] = useState(false);
  
  // Use motion values for better performance - no React re-renders
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring values
  const springX = useSpring(mouseX, { damping: 25, stiffness: 200, mass: 0.5 });
  const springY = useSpring(mouseY, { damping: 25, stiffness: 200, mass: 0.5 });

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Optimized mouse update function
  const updateMousePosition = useCallback((e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  }, [mouseX, mouseY]);

  useEffect(() => {
    if (!isClient) return;

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners to interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, .btn, .nav-link, .skill-card, .project-card, input, textarea, .navbar-brand'
    );
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter, { passive: true });
      el.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    });

    // Use passive listener for better performance
    document.addEventListener('mousemove', updateMousePosition, { passive: true });

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [isClient, updateMousePosition]);

  if (!isClient) {
    return null;
  }

  return (
    <>
      {/* Outer spread layer */}
      <motion.div
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          position: 'fixed',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(102, 126, 234, 0.08) 0%, rgba(102, 126, 234, 0.04) 30%, rgba(102, 126, 234, 0.02) 60%, transparent 85%)',
          pointerEvents: 'none',
          zIndex: 1,
          mixBlendMode: 'screen',
          willChange: 'transform'
        }}
        animate={{
          scale: isHovering ? 1.3 : 1,
        }}
        transition={{
          scale: { type: "spring", damping: 25, stiffness: 250, mass: 0.9 }
        }}
      />

      {/* Main spotlight effect - bigger and brighter */}
      <motion.div
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          position: 'fixed',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(102, 126, 234, 0.18) 0%, rgba(102, 126, 234, 0.12) 40%, rgba(102, 126, 234, 0.06) 70%, transparent 90%)',
          pointerEvents: 'none',
          zIndex: 2,
          mixBlendMode: 'screen',
          willChange: 'transform'
        }}
        animate={{
          scale: isHovering ? 1.4 : 1,
        }}
        transition={{
          scale: { type: "spring", damping: 20, stiffness: 300, mass: 0.8 }
        }}
      />

      {/* Inner glow - brighter */}
      <motion.div
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          position: 'fixed',
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(102, 126, 234, 0.35) 0%, rgba(102, 126, 234, 0.18) 50%, rgba(102, 126, 234, 0.08) 80%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 3,
          willChange: 'transform'
        }}
        animate={{
          scale: isHovering ? 1.6 : 1,
        }}
        transition={{
          scale: { type: "spring", damping: 15, stiffness: 400, mass: 0.6 }
        }}
      />
    </>
  );
};

export default InteractiveCursor;
