import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { personalInfo } from "../config/personalInfo";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 200
    }
  }
};

const profileImageVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 300,
      delay: 0.2
    }
  }
};

const floatingVariants = {
  float: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const [showStats, setShowStats] = useState(false);
  const fullText = personalInfo.title;

  // Typing animation effect
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => setShowStats(true), 500);
      }
    }, 80);

    return () => clearInterval(timer);
  }, [fullText]);

  return (
    <>
      <Head>
        <title>{personalInfo.name} - Portfolio</title>
        <meta name="description" content={personalInfo.title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <motion.div 
        className="hero-section"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-8">
              <motion.div 
                className="hero-content text-lg-start"
                variants={itemVariants}
              >
                <motion.h1 
                  className="hero-title"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {personalInfo.name}
                </motion.h1>
                
                <motion.p 
                  className="hero-subtitle mb-4"
                  variants={itemVariants}
                >
                  {typedText}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  >
                    |
                  </motion.span>
                </motion.p>

                <motion.p 
                  className="mb-4" 
                  style={{ fontSize: '1.1rem', opacity: 0.9 }}
                  variants={itemVariants}
                >
                  {personalInfo.bio}
                </motion.p>

                <motion.div 
                  className="d-flex justify-content-lg-start justify-content-center gap-3 flex-wrap"
                  variants={itemVariants}
                >
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href="/projects" className="btn-custom">
                      <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        View My Work →
                      </motion.span>
                    </Link>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05, rotate: -1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href="/contact" className="btn-custom">
                      Get In Touch
                    </Link>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a href={personalInfo.resume} className="btn-custom" target="_blank" rel="noopener noreferrer">
                      <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        ← Download Resume
                      </motion.span>
                    </a>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>

            <div className="col-lg-4">
              <motion.div
                className="text-center mt-5 mt-lg-0"
                variants={profileImageVariants}
              >
                <motion.div 
                  className="position-relative d-inline-block"
                  variants={floatingVariants}
                  animate="float"
                >
                  <motion.div
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      filter: "brightness(1.1)"
                    }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <Image
                      src={personalInfo.images.profile}
                      alt={personalInfo.name}
                      width={300}
                      height={300}
                      className="rounded-circle shadow-lg"
                      style={{ objectFit: 'cover' }}
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Qcm9maWxlIEltYWdlPC90ZXh0Pjwvc3ZnPg==';
                      }}
                    />
                  </motion.div>

                  <motion.div 
                    className="position-absolute bottom-0 end-0 bg-success rounded-circle p-2"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="bg-white rounded-circle" style={{ width: '12px', height: '12px' }}></div>
                  </motion.div>

                  {/* Floating elements around profile */}
                  <motion.div
                    className="position-absolute"
                    style={{ top: '10%', right: '10%' }}
                    animate={{ 
                      rotate: 360,
                      scale: [1, 1.2, 1] 
                    }}
                    transition={{ 
                      rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity }
                    }}
                  >
                    <div 
                      style={{
                        width: '40px',
                        height: '40px',
                        background: 'linear-gradient(45deg, #ff6b6b, #ff8e8e)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '20px'
                      }}
                    >
                      🚀
                    </div>
                  </motion.div>

                  <motion.div
                    className="position-absolute"
                    style={{ bottom: '20%', left: '5%' }}
                    animate={{ 
                      y: [0, -20, 0],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div 
                      style={{
                        width: '35px',
                        height: '35px',
                        background: 'linear-gradient(45deg, #4ecdc4, #44a08d)',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '18px'
                      }}
                    >
                      💻
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
          
          {/* Enhanced Quick Stats */}
          {showStats && (
            <motion.div
              className="row mt-5 text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              variants={containerVariants}
            >
              <motion.div className="col-md-3 col-6 mb-3" variants={itemVariants}>
                <motion.div
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.h3 
                    className="fw-bold text-gradient"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 200,
                      delay: 0.8
                    }}
                  >
                    {personalInfo.projects.length}+
                  </motion.h3>
                  <p>Projects Completed</p>
                </motion.div>
              </motion.div>

              <motion.div className="col-md-3 col-6 mb-3" variants={itemVariants}>
                <motion.div
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.h3 
                    className="fw-bold text-gradient"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 200,
                      delay: 0.9
                    }}
                  >
                    {personalInfo.skills.length}
                  </motion.h3>
                  <p>Technical Skills</p>
                </motion.div>
              </motion.div>

              <motion.div className="col-md-3 col-6 mb-3" variants={itemVariants}>
                <motion.div
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.h3 
                    className="fw-bold text-gradient"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 200,
                      delay: 1.0
                    }}
                  >
                    MCA
                  </motion.h3>
                  <p>Current Degree</p>
                </motion.div>
              </motion.div>

              <motion.div className="col-md-3 col-6 mb-3" variants={itemVariants}>
                <motion.div
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.h3 
                    className="fw-bold text-gradient"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 200,
                      delay: 1.1
                    }}
                  >
                    2025
                  </motion.h3>
                  <p>Expected Graduation</p>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* Animated background elements */}
        <motion.div
          className="position-absolute"
          style={{
            top: '20%',
            left: '10%',
            width: '100px',
            height: '100px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '50%',
            zIndex: 0
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.1, 0.3]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="position-absolute"
          style={{
            bottom: '30%',
            right: '15%',
            width: '150px',
            height: '150px',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '50%',
            zIndex: 0
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.05, 0.2],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>
    </>
  );
};

export default Home;
