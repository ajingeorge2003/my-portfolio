import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { personalInfo } from "../config/personalInfo";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', ...new Set(personalInfo.projects.map(project => project.category))];
  
  const filteredProjects = selectedCategory === 'All' 
    ? personalInfo.projects 
    : personalInfo.projects.filter(project => project.category === selectedCategory);

  return (
    <>
      <Head>
        <title>{`Projects - ${personalInfo.name}`}</title>
        <meta name="description" content={`Explore the recent projects by ${personalInfo.name} including mobile apps, AI solutions, and drone technology`} />
      </Head>
      
      <div className="section-container" style={{ paddingTop: '120px' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="section-title">My Projects</h1>
            <p className="text-center text-muted mb-5" style={{ fontSize: '1.2rem' }}>
              Here are some of my recent works showcasing my skills in mobile development, 
              AI, and emerging technologies.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="btn-group" role="group" aria-label="Project categories">
              {categories.map(category => (
                <button
                  key={category}
                  type="button"
                  className={`btn ${selectedCategory === category ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                className="project-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
              >
                {/* Project Image */}
                <div className="position-relative" style={{ height: '200px', overflow: 'hidden' }}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="project-image"
                    onError={(e) => {
                      e.target.src = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Qcm9qZWN0IEltYWdlPC90ZXh0Pjwvc3ZnPg==`;
                    }}
                  />
                  <div className="position-absolute top-0 end-0 m-2">
                    <span className="badge bg-primary">{project.category}</span>
                  </div>
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="mb-3">
                    <h6 className="fw-bold text-muted mb-2">Key Features:</h6>
                    <ul className="list-unstyled">
                      {project.features.slice(0, 4).map((feature, i) => (
                        <li key={i} className="mb-1 small">• {feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="project-tech mb-3">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="d-flex gap-2 flex-wrap">
                    {project.demoLink && (
                      <a href={project.demoLink} className="btn btn-outline-primary btn-sm" target="_blank" rel="noopener noreferrer">
                        🔗 Demo
                      </a>
                    )}
                    {project.githubLink && (
                      <a href={project.githubLink} className="btn btn-outline-dark btn-sm" target="_blank" rel="noopener noreferrer">
                        🔗 GitHub
                      </a>
                    )}
                    {project.playStoreLink && (
                      <a href={project.playStoreLink} className="btn btn-outline-success btn-sm" target="_blank" rel="noopener noreferrer">
                        📱 Play Store
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 className="mb-3">Interested in Working Together?</h3>
            <p className="text-muted mb-4">I'm always open to discussing new projects and opportunities.</p>
            <a href="/contact" className="btn-custom">
              Let's Talk
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Projects;
