import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const TechBackground = () => {
  const canvasRef = useRef(null);
  const [isClient, setIsClient] = useState(false);
  const animationId = useRef();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Reduced number of shapes for better performance
    const shapes = [];
    for (let i = 0; i < 12; i++) {
      shapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        size: Math.random() * 25 + 10,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.03,
        type: Math.floor(Math.random() * 2), // Only circles and squares for performance
        opacity: Math.random() * 0.3 + 0.2,
        pulse: Math.random() * Math.PI * 2,
        colorHue: Math.random() * 40 + 220 // Narrower color range
      });
    }

    // Reduced code elements
    const codeElements = [];
    const codeBits = ['{ }', '< />', '()', '[]', '=>', 'fn'];
    for (let i = 0; i < 6; i++) {
      codeElements.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        text: codeBits[Math.floor(Math.random() * codeBits.length)],
        size: Math.random() * 8 + 14,
        opacity: Math.random() * 0.4 + 0.2,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 0.8
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw and update shapes - simplified for performance
      shapes.forEach(shape => {
        // Update position and rotation
        shape.x += shape.vx;
        shape.y += shape.vy;
        shape.rotation += shape.rotationSpeed;
        shape.pulse += 0.02; // Slower pulse for performance

        // Simple bounce off walls
        if (shape.x <= 0 || shape.x >= canvas.width) shape.vx *= -1;
        if (shape.y <= 0 || shape.y >= canvas.height) shape.vy *= -1;

        // Draw shape without expensive glow effects
        ctx.save();
        ctx.translate(shape.x, shape.y);
        ctx.rotate(shape.rotation);
        
        const currentOpacity = shape.opacity + Math.sin(shape.pulse) * 0.1;
        const currentSize = shape.size + Math.sin(shape.pulse) * 2; // Reduced pulse effect
        
        ctx.globalAlpha = currentOpacity;
        ctx.fillStyle = `hsl(${shape.colorHue}, 60%, 50%)`;

        if (shape.type === 0) {
          // Circle
          ctx.beginPath();
          ctx.arc(0, 0, currentSize / 2, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Square only
          ctx.fillRect(-currentSize / 2, -currentSize / 2, currentSize, currentSize);
        }
        
        ctx.restore();
      });

      // Simplified code elements
      codeElements.forEach(element => {
        element.x += element.vx;
        element.y += element.vy;
        element.rotation += element.rotationSpeed;

        // Wrap around screen
        if (element.x > canvas.width + 50) element.x = -50;
        if (element.x < -50) element.x = canvas.width + 50;
        if (element.y > canvas.height + 30) element.y = -30;
        if (element.y < -30) element.y = canvas.height + 30;

        // Simple text drawing
        ctx.save();
        ctx.translate(element.x, element.y);
        ctx.globalAlpha = element.opacity;
        ctx.fillStyle = '#667eea';
        ctx.font = `${element.size}px monospace`;
        ctx.textAlign = 'center';
        ctx.fillText(element.text, 0, 0);
        ctx.restore();
      });

      animationId.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationId.current) {
        cancelAnimationFrame(animationId.current);
      }
    };
  }, [isClient]);

  if (!isClient) {
    return null;
  }

  return (
    <div 
      className="tech-background-container"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -10,
        overflow: 'hidden',
        pointerEvents: 'none',
        cursor: 'default'
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          cursor: 'default'
        }}
      />
      
      {/* Simplified tech icons - reduced number for performance */}
      <div className="floating-icons">
        {['⚡', '', '💻', '🌐'].map((icon, i) => (
          <motion.div
            key={i}
            className="floating-icon"
            style={{
              position: 'absolute',
              fontSize: '25px',
              left: '-30px',
              top: `${Math.random() * 100}%`,
              color: 'rgba(102, 126, 234, 0.4)',
            }}
            animate={{
              x: [0, window.innerWidth + 60],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
              delay: i * 3
            }}
          >
            {icon}
          </motion.div>
        ))}
      </div>

      {/* Simplified grid pattern */}
      <div
        className="grid-overlay"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(102, 126, 234, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          opacity: 0.3
        }}
      />

      {/* Reduced data stream lines */}
      <div className="data-streams">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              left: `${30 + i * 20}%`,
              top: '-10px',
              width: '1px',
              height: '60px',
              background: `linear-gradient(to bottom, 
                rgba(102, 126, 234, 0),
                rgba(102, 126, 234, 0.6),
                rgba(102, 126, 234, 0)
              )`,
            }}
            animate={{
              y: [0, window.innerHeight + 60],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default TechBackground;
