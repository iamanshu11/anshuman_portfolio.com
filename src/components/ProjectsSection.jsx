import React, { useState, useEffect } from 'react';
import project1 from '../assets/pro-a-1.png';
import project2 from '../assets/pro-a-2.png'; 
import project3 from '../assets/pro-b-1.png';
import project4 from '../assets/pro-b-2.png';
import project5 from '../assets/pro-a-3.png';
import project6 from '../assets/pro-a-4.png';
import project7 from '../assets/pro-a-5.png';
import project8 from '../assets/pro-a-6.png';
import project9 from '../assets/pro-b-3.png';
import project10 from '../assets/pro-b-4.png';
import project11 from '../assets/pro-b-5.png';
import project12 from '../assets/pro-b-6.png';

const projects = [
  {
    title: 'Pharmacy Chatbot',
    tag: 'WEB APP',
    image: project1,
    description: 'An intelligent chatbot application for pharmacies, built with modern web technologies. Features real-time chat, medicine information, and appointment scheduling capabilities.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'MongoDB'],
    link: '#',
    slides: [
      { image: project1, title: 'Chat Interface' },
      { image: project2, title: 'Medicine Search' },
      { image: project5, title: 'Medicine Search' },
      { image: project6, title: 'Medicine Search' },
      { image: project7, title: 'Medicine Search' },
      { image: project8, title: 'Medicine Search' },
     
    ]
  },
  {
    title: 'Money Transfer',
    tag: 'WEB APP',
    image: project3,
    description: 'A modern remittance platform enabling seamless international money transfers. Features real-time exchange rates, secure transactions, and multi-currency support.',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    link: '#',
    slides: [
      { image: project3, title: 'Transfer Dashboard' },
      { image: project4, title: 'Transaction History' },
      { image: project9, title: 'Transaction History' },
      { image: project10, title: 'Transaction History' },
      { image: project11, title: 'Transaction History' },
      { image: project12, title: 'Transaction History' },
    ]
  },
];

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [currentSlides, setCurrentSlides] = useState([0, 0]);
  const [isHovered, setIsHovered] = useState([false, false]);

  useEffect(() => {
    const intervals = projects.map((_, index) => {
      if (!isHovered[index] && projects[index].slides) {
        return setInterval(() => {
          setCurrentSlides(prev => {
            const newSlides = [...prev];
            newSlides[index] = (newSlides[index] + 1) % projects[index].slides.length;
            return newSlides;
          });
        }, 3000);
      }
      return null;
    });

    return () => intervals.forEach(interval => interval && clearInterval(interval));
  }, [isHovered]);

  return (
    <section className="bg-[#0c031c] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            Featured Projects
          </h2>
          <div className="flex gap-2">
            <button className="px-4 py-2 rounded-full bg-lime-400/20 text-lime-400 hover:bg-lime-400/30 transition-colors">
              View All
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, projectIndex) => (
            <div
              key={projectIndex}
              className="relative group overflow-hidden rounded-2xl shadow-md cursor-pointer bg-white/5 backdrop-blur-sm"
              onMouseEnter={() => {
                setIsHovered(prev => {
                  const newHovered = [...prev];
                  newHovered[projectIndex] = true;
                  return newHovered;
                });
                setActiveProject(projectIndex);
              }}
              onMouseLeave={() => {
                setIsHovered(prev => {
                  const newHovered = [...prev];
                  newHovered[projectIndex] = false;
                  return newHovered;
                });
                setActiveProject(null);
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Slider Container */}
              <div className="relative h-[400px] overflow-hidden bg-black/20">
                {project.slides.map((slide, slideIndex) => (
                  <div 
                    key={slideIndex}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      slideIndex === currentSlides[projectIndex] ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-center"
                      style={{ imageRendering: 'crisp-edges' }}
                    />
                  </div>
                ))}
              </div>

              {/* Slider Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {project.slides.map((_, slideIndex) => (
                  <button
                    key={slideIndex}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      slideIndex === currentSlides[projectIndex] ? 'bg-lime-400' : 'bg-white/70'
                    }`}
                    onClick={() => {
                      setCurrentSlides(prev => {
                        const newSlides = [...prev];
                        newSlides[projectIndex] = slideIndex;
                        return newSlides;
                      });
                    }}
                  />
                ))}
              </div>
              
              <div className="absolute top-4 right-4">
                <span className="text-xs bg-black/80 text-lime-400 px-3 py-1 rounded-full">
                  {project.tag}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-200 text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs bg-lime-400/20 text-lime-400 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a 
                    href={project.link}
                    className="text-sm font-medium text-lime-400 hover:text-lime-300 flex items-center gap-2"
                  >
                    View Project
                    <svg 
                      className="w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M14 5l7 7m0 0l-7 7m7-7H3" 
                      />
                    </svg>
                  </a>
                  <a 
                    href={project.link}
                    className="text-sm font-medium text-lime-400 hover:text-lime-300 flex items-center gap-2"
                  >
                    Source Code
                    <svg 
                      className="w-4 h-4" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
