import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const skills = {
  frontend: [
    { name: 'React', level: 90, color: 'bg-blue-500', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'HTML', level: 95, color: 'bg-orange-500', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'Tailwind CSS', level: 95, color: 'bg-cyan-500', logo: '/src/assets/tailwindcss.png' },
    { name: 'CSS', level: 85, color: 'bg-purple-500', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  ],
  backend: [
    { name: 'Node.js', level: 60, color: 'bg-green-500', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express', level: 70, color: 'bg-emerald-500', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', invert: true },
    { name: 'Redux', level: 85, color: 'bg-purple-600', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
    { name: 'MongoDB', level: 65, color: 'bg-teal-500', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  ]
};

const experiences = [
  {
    date: 'Mar 2023 - Dec 2023',
    title: 'Freelance Frontend Developer',
    description: 'Built responsive and dynamic websites using React and Tailwind CSS. Delivered pixel-perfect UI with clean code.',
    isCurrent: false
  },
  {
    date: 'Jan 2024 - Present',
    title: 'Frontend Developer at Prymera Consulting Pvt Ltd',
    description: 'Creating Money Transfer apps, ChatBots, and more. Focus on modern UI/UX and reusable components.',
    isCurrent: true
  },
];

const RunningArrow = () => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="#84cc16"
    className="w-16 h-16 animate-pulse"
    initial={{ y: 0 }}
    animate={{ y: [0, 5, 0] }}
    transition={{ repeat: Infinity, duration: 0.8 }}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 5v14m0 0l-4-4m4 4l4-4"
    />
  </motion.svg>
);

const ExperienceSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#0c031c] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Skills & Experience</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            My technical expertise and journey through development roles
          </p>
        </div>

        {/* Skills */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-lime-400 mb-4">Frontend Development</h3>
            {skills.frontend.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap">
                  <img src={skill.logo} alt={skill.name} className={`w-6 h-6 object-contain ${skill.invert ? 'invert' : ''}`} />
                  <div className="flex-1 w-full min-w-0">
                    <div className="flex justify-between items-center text-sm sm:text-base">
                      <span className="text-gray-200">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden mt-1">
                      <div
                        className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 200}ms`
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-lime-400 mb-4">Backend Development</h3>
            {skills.backend.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap">
                  <img src={skill.logo} alt={skill.name} className={`w-6 h-6 object-contain ${skill.invert ? 'invert' : ''}`} />
                  <div className="flex-1 w-full min-w-0">
                    <div className="flex justify-between items-center text-sm sm:text-base">
                      <span className="text-gray-200">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden mt-1">
                      <div
                        className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 200}ms`
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center space-y-6 mb-16">
  {experiences.map((exp, index) => (
    <div key={index} className="flex flex-col items-center w-full">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.3 }}
        viewport={{ once: true }}
        className={`relative w-full max-w-3xl bg-[#1a0930] p-6 rounded-2xl shadow-xl border ${
          exp.isCurrent ? 'border-lime-400' : 'border-gray-700'
        }`}
      >
        <span className="text-sm text-gray-400 block mb-1">{exp.date}</span>
        <h4 className="text-xl font-bold text-lime-400">{exp.title}</h4>
        <p className="text-gray-300 mt-2">{exp.description}</p>
      </motion.div>

      {/* Animated Arrow Between Cards */}
      {index !== experiences.length - 1 && (
        <div className="mt-3 mb-3">
          <RunningArrow />
        </div>
      )}
    </div>
  ))}
</div>

        {/* Resume Button */}
        <div className="text-center">
          <button className="px-6 py-3 rounded-full bg-lime-400/20 text-lime-400 hover:bg-lime-400/30 transition-colors">
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
