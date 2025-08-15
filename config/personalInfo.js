// Personal Configuration - Updated with Ajin George Binu's information
export const personalInfo = {
  name: "Ajin George Binu",
  title: "MCA Student | Android & Frontend Developer | AI Enthusiast | Cybersecurity Enthusiast | Drone Tech Explorer",
  bio: `Hi, I'm Ajin George Binu! I'm a dedicated MCA student with a passion for mobile development, 
        frontend development, cybersecurity, and cutting-edge technologies like AI and drone systems. I love creating innovative 
        solutions that bridge the gap between imagination and reality.`,
  longBio: `As an MCA student specializing in software engineering, I have developed a strong foundation in 
           mobile development, frontend design, cybersecurity principles, and emerging technologies. My journey in tech has led me through 
           various exciting projects, from Android applications to modern web interfaces and AI-powered solutions. 
           I'm constantly exploring new ways to leverage technology to solve real-world problems.`,
  
  // Contact Information - UPDATE THESE WITH YOUR REAL INFO
  contact: {
    email: "ajingeorgebinu@gmail.com", // Updated with likely email
    phone: "+91 9876543210", // Replace with your actual phone
    linkedin: "linkedin.com/in/ajin-george-binu", // Replace with your actual LinkedIn
    github: "github.com/ajingeorgebinu", // Replace with your actual GitHub
    location: "Bangalore, India" // Update with your city
  },

  // Images - Place your images in public/images/ directory
  images: {
    profile: "/images/ajin-profile.jpg", // Your professional headshot - REPLACE WITH YOUR PHOTO
    hero: "/images/hero-bg.jpg", // Background image for hero section (optional)
    about: "/images/ajin-about.jpg", // Image for about section (optional, can be different from profile)
  },

  // Skills with updated descriptions based on MCA background
  skills: [
    {
      name: "Android Development",
      icon: "📱",
      description: "Native Android apps with Kotlin, Java, and modern frameworks",
      level: 85,
      technologies: ["Kotlin", "Java", "Android SDK", "Firebase", "Room Database"]
    },
    {
      name: "Frontend & Web Development",
      icon: "🌐",
      description: "Full-stack web development with modern frontend frameworks and responsive design",
      level: 85,
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Framer Motion", "HTML/CSS", "JavaScript"]
    },
    {
      name: "Cybersecurity",
      icon: "🔐",
      description: "Network security, ethical hacking principles, and security best practices",
      level: 75,
      technologies: ["Network Security", "Penetration Testing", "Security Auditing", "Vulnerability Assessment", "Cryptography"]
    },
    {
      name: "Programming Languages",
      icon: "💻",
      description: "Proficient in multiple programming languages and paradigms",
      level: 88,
      technologies: ["Python", "Java", "C++", "JavaScript", "Kotlin", "C#"]
    },
    {
      name: "Database Management",
      icon: "🗃️",
      description: "Database design, optimization, and management",
      level: 80,
      technologies: ["MySQL", "SQLite", "Firebase", "MongoDB"]
    },
    {
      name: "AI & Machine Learning",
      icon: "🤖",
      description: "Machine learning algorithms and AI implementation",
      level: 75,
      technologies: ["Python", "TensorFlow", "Machine Learning", "Data Analysis"]
    }
  ],

  // Projects - Updated with realistic student projects
  projects: [
    {
      title: "Student Management System",
      description: "A comprehensive student management system built with Java and MySQL, featuring student registration, course management, grade tracking, and administrative controls.",
      fullDescription: `This Student Management System was developed as part of my MCA coursework, showcasing 
                       database design principles and Java application development. The system provides a complete 
                       solution for educational institutions to manage student records, course enrollment, and academic performance.`,
      image: "/images/projects/project-placeholder.svg",
      tech: ["Java", "MySQL", "Swing", "JDBC", "MVC Pattern"],
      features: [
        "Student registration and profile management",
        "Course enrollment and scheduling",
        "Grade tracking and report generation",
        "Teacher and staff management",
        "Administrative dashboard",
        "Search and filter functionality",
        "Data backup and restore"
      ],
      demoLink: "https://github.com/ajingeorgebinu/student-management", // Update with your repo
      githubLink: "https://github.com/ajingeorgebinu/student-management", // Update with your repo
      category: "Web Application"
    },
    {
      title: "Mobile Banking App UI",
      description: "A modern mobile banking application interface designed with user experience in mind, featuring intuitive navigation, secure authentication, and comprehensive banking features.",
      fullDescription: `This mobile banking app UI demonstrates modern Android development practices using Kotlin 
                       and Material Design principles. The app focuses on user security and ease of use while 
                       providing all essential banking functionalities in a clean, accessible interface.`,
      image: "/images/projects/project-placeholder.svg",
      tech: ["Android", "Kotlin", "Material Design", "Firebase", "Room Database"],
      features: [
        "Secure biometric authentication",
        "Account balance and transaction history",
        "Money transfer and bill payments",
        "Card management and controls",
        "Transaction notifications",
        "Dark/Light theme support"
      ],
      demoLink: "https://github.com/ajingeorgebinu/banking-app", // Update with your repo
      githubLink: "https://github.com/ajingeorgebinu/banking-app", // Update with your repo
      category: "Mobile App"
    },
    {
      title: "E-Commerce Website",
      description: "A full-stack e-commerce platform built with modern web technologies, featuring product catalog, shopping cart, payment integration, and admin panel.",
      fullDescription: `This e-commerce platform showcases full-stack development skills using React for the frontend 
                       and Node.js for the backend. The project includes user authentication, product management, 
                       order processing, and payment integration, providing a complete online shopping experience.`,
      image: "/images/projects/project-placeholder.svg",
      tech: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
      features: [
        "Product catalog with categories",
        "User authentication and profiles",
        "Shopping cart and checkout",
        "Payment gateway integration",
        "Order tracking and history",
        "Admin panel for management",
        "Responsive design"
      ],
      demoLink: "https://github.com/ajingeorgebinu/ecommerce", // Update with your repo
      githubLink: "https://github.com/ajingeorgebinu/ecommerce", // Update with your repo
      category: "Web Application"
    },
    {
      title: "Personal Portfolio Website",
      description: "A responsive portfolio website showcasing my projects and skills, built with Next.js and featuring modern animations and interactive elements.",
      fullDescription: `This portfolio website demonstrates advanced frontend development skills using Next.js, React, 
                       and modern animation libraries. The site features smooth transitions, interactive elements, 
                       and a responsive design that works seamlessly across all devices.`,
      image: "/images/projects/project-placeholder.svg",
      tech: ["Next.js", "React", "Framer Motion", "Tailwind CSS", "Vercel"],
      features: [
        "Responsive design across all devices",
        "Smooth animations and transitions",
        "Interactive project showcases",
        "Contact form with validation",
        "SEO optimized pages",
        "Fast loading and performance optimized"
      ],
      demoLink: "https://ajingeorgebinu.dev", // Your portfolio URL
      githubLink: "https://github.com/ajingeorgebinu/portfolio", // Update with your repo
      category: "Web Application"
    }
  ],

  // Social Media Links - Update with your actual profiles
  social: {
    linkedin: "https://linkedin.com/in/ajin-george-binu", // Update with your LinkedIn
    github: "https://github.com/ajingeorgebinu", // Update with your GitHub
    twitter: "https://twitter.com/ajingeorgebinu", // Update if you have Twitter
    instagram: "https://instagram.com/ajingeorgebinu", // Update if you have Instagram
  },

  // Resume/CV link
  resume: "/resume.pdf", // Your resume is now available

  // Education - Updated with Ajin's actual education background
  education: [
    {
      degree: "Master of Computer Applications (MCA)", 
      school: "Christ University, Bangalore", 
      year: "2024-2026",
      description: "Specializing in Software Engineering, Database Management, and Advanced Programming Concepts"
    },
    {
      degree: "BSc Computer Science", 
      school: "SREE AYYAPPA COLLEGE, Eramallikkara, Chengannur, Alappuzha District", 
      year: "2021-2024",
      description: "Foundation in Computer Science, Programming Languages, Data Structures, and Software Development"
    }
  ],

  experience: [
    {
      position: "MCA Student & Developer", 
      company: "Christ University, Bangalore",
      duration: "2024 - Present",
      description: "Pursuing Master of Computer Applications while developing proficiency in advanced programming concepts, database management, and software engineering principles. Actively working on academic projects and building a strong foundation in modern development technologies."
    },
    {
      position: "Frontend Development Projects", 
      company: "Personal & Academic Projects",
      duration: "2024 - Present", 
      description: "Developing modern web applications using React, Next.js, and responsive design principles. Building interactive user interfaces with focus on performance optimization and user experience."
    },
    {
      position: "Mobile App Development", 
      company: "Academic Projects",
      duration: "2023 - Present", 
      description: "Creating Android applications using Kotlin and Java, implementing modern UI/UX patterns with Material Design, and integrating backend services for comprehensive mobile solutions."
    },
    {
      position: "Computer Science Student", 
      company: "SREE AYYAPPA COLLEGE",
      duration: "2021 - 2024", 
      description: "Completed Bachelor's degree in Computer Science with strong foundation in programming languages, data structures, algorithms, and software development methodologies. Participated in various coding competitions and technical workshops."
    }
  ],

  // Testimonials (optional)
  testimonials: [
    {
      name: "Professor Name", // Replace with actual professor
      position: "MCA Program Coordinator",
      company: "Christ University",
      text: "Ajin demonstrates exceptional programming skills and a strong understanding of software engineering principles.",
      image: "/images/testimonials/professor.jpg" // Add actual image
    }
  ],
  
  // Additional Info
  availability: "Available for internships and entry-level positions",
  languages: ["English", "Malayalam", "Hindi"],
  interests: ["Technology Innovation", "Mobile Development", "Cybersecurity", "AI/ML", "Open Source Contributing"],
  
  // Meta information for SEO
  meta: {
    title: "Ajin George Binu - MCA Student | Frontend Developer | Cybersecurity Enthusiast",
    description: "MCA student at Christ University specializing in frontend development, mobile apps, and cybersecurity. Passionate about creating innovative solutions with modern technologies.",
    keywords: ["MCA Student", "Frontend Developer", "Android Developer", "Cybersecurity", "React", "Next.js", "Kotlin", "Java"],
    author: "Ajin George Binu",
    siteUrl: "https://ajingeorgebinu.dev" // Update with your actual URL
  }
};
