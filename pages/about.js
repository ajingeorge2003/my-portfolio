import React from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { personalInfo } from "../config/personalInfo";

const About = () => {
  return (
    <>
      <Head>
        <title>{`About - ${personalInfo.name}`}</title>
        <meta name="description" content={`Learn more about ${personalInfo.name} - ${personalInfo.title}`} />
      </Head>
      
      <div className="section-container" style={{ paddingTop: '120px' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="section-title">About Me</h1>
            
            <div className="row align-items-center mb-5">
              <div className="col-lg-8">
                <div className="about-content text-start">
                  <p className="lead">{personalInfo.bio}</p>
                  <p>{personalInfo.longBio}</p>
                  
                  {personalInfo.education.length > 0 && (
                    <div className="mb-4">
                      <h4 className="mb-3">Education</h4>
                      {personalInfo.education.map((edu, index) => (
                        <div key={index} className="mb-3 p-3 bg-light rounded">
                          <h6 className="fw-bold mb-1">{edu.degree}</h6>
                          <p className="mb-1 text-primary">{edu.school} • {edu.year}</p>
                          <p className="mb-0 small text-muted">{edu.description}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {personalInfo.experience.length > 0 && (
                    <div className="mb-4">
                      <h4 className="mb-3">Experience</h4>
                      {personalInfo.experience.map((exp, index) => (
                        <div key={index} className="mb-3 p-3 bg-light rounded">
                          <h6 className="fw-bold mb-1">{exp.position}</h6>
                          <p className="mb-1 text-primary">{exp.company} • {exp.duration}</p>
                          <p className="mb-0 small text-muted">{exp.description}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-lg-4">
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <Image
                    src={personalInfo.images.about || personalInfo.images.profile}
                    alt={`${personalInfo.name} - About`}
                    width={250}
                    height={300}
                    className="rounded shadow"
                    style={{ objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5BYm91dCBJbWFnZTwvdGV4dD48L3N2Zz4K';
                    }}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-center mb-5">My Skills</h2>
            <div className="skills-grid">
              {personalInfo.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="skill-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="skill-icon">{skill.icon}</div>
                  <h4>{skill.name}</h4>
                  <p className="mb-3">{skill.description}</p>
                  
                  {/* Skill Level Progress Bar */}
                  <div className="mb-3">
                    <div className="d-flex justify-content-between mb-1">
                      <small className="text-muted">Proficiency</small>
                      <small className="text-muted">{skill.level}%</small>
                    </div>
                    <div className="progress" style={{ height: '6px' }}>
                      <div 
                        className="progress-bar bg-primary" 
                        role="progressbar" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="d-flex flex-wrap gap-1">
                    {skill.technologies.slice(0, 4).map((tech, i) => (
                      <span key={i} className="badge bg-light text-dark small">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
