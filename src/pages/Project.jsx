import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProA1 from '../assets/pro-a-1.png';
import ProA2 from '../assets/pro-a-2.png';
import ProA3 from '../assets/pro-a-3.png';
import ProA4 from '../assets/pro-a-4.png';
import ProA5 from '../assets/pro-a-5.png';
import ProA6 from '../assets/pro-a-6.png';
import ProB1 from '../assets/pro-b-1.png';
import ProB2 from '../assets/pro-b-2.png';
import ProB3 from '../assets/pro-b-3.png';
import ProB4 from '../assets/pro-b-4.png';
import ProB5 from '../assets/pro-b-5.png';
import ProB6 from '../assets/pro-b-6.png';

const Project = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Pharmacy Chatbot",
      tag: "WEB APP",
      description:
        "A comprehensive healthcare solution that provides real-time assistance for pharmacy-related queries...",
      features: [
        "Natural Language Processing for understanding user queries",
        "Real-time chat functionality using WebSocket",
        "Secure user authentication with JWT",
        "Responsive design for all devices",
        "Admin dashboard for managing the system",
        "Medicine database with detailed information"
      ],
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Node.js", "MongoDB"],
      images: [ProA1, ProA2, ProA3, ProA4, ProA5, ProA6],
      githubLink: "https://github.com/yourusername/pharmacy-chatbot",
      liveLink: "https://pharmacy-chatbot-demo.com"
    },
    {
      id: 2,
      title: "E-commerce Platform",
      tag: "WEB APP",
      description:
        "A full-featured e-commerce platform with product management, shopping cart, and payment integration.",
      features: [
        "Product search and filtering",
        "Shopping cart management",
        "Secure payment processing",
        "Order tracking system",
        "User authentication",
        "Admin dashboard"
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      images: [ProB1, ProB2, ProB3, ProB4, ProB5, ProB6],
      githubLink: "https://github.com/yourusername/ecommerce-platform",
      liveLink: "https://ecommerce-demo.com"
    }
  ];

  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-[#0c031c] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">My Projects</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Detailed showcase of my work and the technologies used
          </p>
        </motion.div>

        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="mb-20"
          >
            <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Images */}
                <div className="md:w-1/2">
                  <div className="relative h-[400px] rounded-xl overflow-hidden mb-4">
                    <img src={project.images[0]} alt="Preview" className="w-full h-full object-cover" />
                  </div>

                  <div
                    className="flex gap-4 overflow-x-auto"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                  >
                    {project.images.slice(1).map((image, idx) => (
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        key={idx}
                        className="min-w-[150px] h-[150px] rounded-xl overflow-hidden cursor-pointer flex-shrink-0"
                        onClick={() => openImageModal(image)}
                      >
                        <img src={image} alt={`Preview ${idx}`} className="w-full h-full object-cover" />
                      </motion.div>
                    ))}
                  </div>
                  {/* Hide scrollbar (Chrome, Safari) */}
                  <style>
                    {`
                      div::-webkit-scrollbar {
                        display: none;
                      }
                    `}
                  </style>
                </div>

                {/* Details */}
                <div className="md:w-1/2">
                  <div className="flex items-center gap-4 mb-6">
                    <h2 className="text-3xl font-bold text-white">{project.title}</h2>
                    <span className="px-3 py-1 bg-lime-400/20 text-lime-400 rounded-full text-sm">{project.tag}</span>
                  </div>

                  <p className="text-gray-300 mb-6">{project.description}</p>

                  <div className="space-y-6">
                    {/* Features */}
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">Features</h3>
                      <ul className="space-y-2">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-300">
                            <span className="w-2 h-2 bg-lime-400 rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-white/5 rounded-full text-gray-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 bg-white/5 text-white rounded-lg hover:bg-white/10 transition-colors"
                      >
                        View Code
                      </a>
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 bg-lime-400/20 text-lime-400 rounded-lg hover:bg-lime-400/30 transition-colors"
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
            <div className="relative">
              <img src={selectedImage} alt="Zoomed" className="max-w-full max-h-[90vh] rounded-xl" />
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center"
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
