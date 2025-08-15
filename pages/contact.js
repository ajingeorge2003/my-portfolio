import React, { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { personalInfo } from "../config/personalInfo";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here - you can integrate with EmailJS or similar service
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    { 
      icon: "📧", 
      label: "Email", 
      value: personalInfo.contact.email, 
      href: `mailto:${personalInfo.contact.email}` 
    },
    { 
      icon: "💼", 
      label: "LinkedIn", 
      value: personalInfo.contact.linkedin, 
      href: `https://${personalInfo.contact.linkedin}` 
    },
    { 
      icon: "🐱", 
      label: "GitHub", 
      value: personalInfo.contact.github, 
      href: `https://${personalInfo.contact.github}` 
    },
    { 
      icon: "📱", 
      label: "Phone", 
      value: personalInfo.contact.phone, 
      href: `tel:${personalInfo.contact.phone.replace(/[^+\d]/g, '')}` 
    },
    { 
      icon: "�", 
      label: "Location", 
      value: personalInfo.contact.location, 
      href: `https://maps.google.com/?q=${encodeURIComponent(personalInfo.contact.location)}` 
    }
  ];

  return (
    <>
      <Head>
        <title>{`Contact - ${personalInfo.name}`}</title>
        <meta name="description" content={`Get in touch with ${personalInfo.name} for collaborations and opportunities`} />
      </Head>
      
      <div className="section-container" style={{ paddingTop: '120px' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="section-title">Let's Connect</h1>
            <p className="text-center text-muted mb-5" style={{ fontSize: '1.2rem' }}>
              I'm always excited to discuss new opportunities, innovative projects, 
              and potential collaborations. Feel free to reach out!
            </p>
          </motion.div>

          <div className="row">
            <div className="col-lg-8">
              <motion.form
                className="contact-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label">Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label">Email *</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="form-group">
                  <label className="form-label">Subject *</label>
                  <select
                    className="form-control"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="project-inquiry">Project Inquiry</option>
                    <option value="job-opportunity">Job Opportunity</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="consultation">Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label className="form-label">Message *</label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project or idea..."
                  ></textarea>
                </div>
                
                <button type="submit" className="btn-custom">
                  Send Message
                </button>
                
                <p className="mt-3 text-muted small">
                  * Required fields. I typically respond within 24 hours.
                </p>
              </motion.form>
            </div>
            
            <div className="col-lg-4">
              <motion.div
                className="mt-5 mt-lg-0"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="bg-white p-4 rounded shadow">
                  <h4 className="mb-4">Get In Touch</h4>
                  {contactInfo.map((info, index) => (
                    <div key={info.label} className="d-flex align-items-start mb-3">
                      <span className="me-3 mt-1" style={{ fontSize: '1.2rem' }}>{info.icon}</span>
                      <div>
                        <strong className="d-block">{info.label}:</strong>
                        <a href={info.href} className="text-decoration-none text-muted" 
                           target={info.label === 'Email' ? '_self' : '_blank'} 
                           rel="noopener noreferrer">
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                  
                  {/* Social Media Links */}
                  <div className="mt-4">
                    <h6 className="mb-3">Follow Me</h6>
                    <div className="d-flex gap-3">
                      {personalInfo.social.linkedin && (
                        <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" 
                           className="text-decoration-none">
                          <span style={{ fontSize: '1.5rem' }}>💼</span>
                        </a>
                      )}
                      {personalInfo.social.github && (
                        <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" 
                           className="text-decoration-none">
                          <span style={{ fontSize: '1.5rem' }}>🐱</span>
                        </a>
                      )}
                      {personalInfo.social.twitter && (
                        <a href={personalInfo.social.twitter} target="_blank" rel="noopener noreferrer" 
                           className="text-decoration-none">
                          <span style={{ fontSize: '1.5rem' }}>🐦</span>
                        </a>
                      )}
                      {personalInfo.social.instagram && (
                        <a href={personalInfo.social.instagram} target="_blank" rel="noopener noreferrer" 
                           className="text-decoration-none">
                          <span style={{ fontSize: '1.5rem' }}>📸</span>
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-light rounded">
                    <h6 className="mb-2">Quick Response</h6>
                    <p className="small mb-0 text-muted">
                      I'm usually online between 9 AM - 6 PM EST. 
                      For urgent matters, feel free to call or text!
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Additional CTA Section */}
          <motion.div
            className="text-center mt-5 py-5 bg-light rounded"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="mb-3">Ready to Start Your Project?</h3>
            <p className="text-muted mb-4">
              Let's discuss how we can bring your ideas to life with cutting-edge technology.
            </p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <a href={`mailto:${personalInfo.contact.email}?subject=Project Inquiry`} className="btn-custom">
                Email Me Directly
              </a>
              <a href={personalInfo.resume} className="btn-custom" target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Contact;
