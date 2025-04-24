import React, { useState, useRef, useEffect } from 'react';
import pcImage from '../assets/pc-image.png'; // You'll need to add this image to your assets folder

const AboutSection = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const lastMousePosition = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    if (!isInView) return;
    setIsDragging(true);
    lastMousePosition.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !isInView) return;

    const deltaX = e.clientX - lastMousePosition.current.x;
    const deltaY = e.clientY - lastMousePosition.current.y;

    setRotation(prev => ({
      x: Math.max(-30, Math.min(30, prev.x + deltaY * 0.5)),
      y: Math.max(-30, Math.min(30, prev.y + deltaX * 0.5))
    }));

    lastMousePosition.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        setIsInView(isVisible);
        
        // Reset rotation when section is out of view
        if (!isVisible) {
          setRotation({ x: 0, y: 0 });
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isDragging]);

  return (
    <section ref={sectionRef} className="bg-[#0c031c] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Text Content */}
          <div className="flex-1">
            <h2 className="text-4xl font-semibold mb-6">About Me</h2>
            <p className="text-lg text-gray-400 mb-6">
              I'm a passionate Frontend Developer with expertise in creating modern web applications. 
              My journey in web development has been driven by a constant desire to learn and implement 
              the latest technologies to build efficient and user-friendly interfaces.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-lime-400/20 flex items-center justify-center">
                  <span className="text-lime-400 text-xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium">Technical Skills</h3>
                  <p className="text-gray-400">React, JavaScript, HTML5, CSS3, Tailwind CSS, Git</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-lime-400/20 flex items-center justify-center">
                  <span className="text-lime-400 text-xl">💡</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium">Problem Solving</h3>
                  <p className="text-gray-400">Strong analytical skills and a systematic approach to debugging</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-lime-400/20 flex items-center justify-center">
                  <span className="text-lime-400 text-xl">🚀</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium">Continuous Learning</h3>
                  <p className="text-gray-400">Always exploring new technologies and best practices</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-lime-400 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div 
                ref={containerRef}
                className={`rotate-container relative rounded-2xl overflow-hidden ${isInView ? 'cursor-grab active:cursor-grabbing' : 'cursor-default'}`}
                onMouseDown={handleMouseDown}
                style={{
                  transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                  transition: isInView ? 'none' : 'transform 0.5s ease-out'
                }}
              >
                <img 
                  src={pcImage} 
                  alt="Development Setup" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 