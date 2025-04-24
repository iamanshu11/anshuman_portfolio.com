import React from 'react';
import profileImage from '../assets/profile.png';

const About = () => {
  return (
    <section className="min-h-screen bg-[#0c031c] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-lime-400/30">
            <img 
              src={profileImage} 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-4">Anshuman Raj</h1>
            <p className="text-gray-300 text-lg mb-6">
              Frontend Developer | Web Enthusiast | Tech Explorer
            </p>
            <p className="text-gray-400">
              Passionate about creating beautiful and functional web applications. 
              I love to solve complex problems and build intuitive user interfaces.
            </p>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-lime-400">Education</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-2">College</h3>
              <p className="text-gray-300 mb-2">Bachelor of Technology</p>
              <p className="text-gray-400">Vel Tech Rangarajan Dr.Sagunthala R&D Institute of Science and Technology</p>
              <p className="text-gray-400">Chennai, Tamil Nadu</p>
              <p className="text-gray-400">2019 - 2023</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-2">School</h3>
              <p className="text-gray-300 mb-2">Higher Secondary Education</p>
              <p className="text-gray-400">Sri Chaitanya Vidya Niketan</p>
              <p className="text-gray-400">Visakhapatnam, Andhra Pradesh</p>
              <p className="text-gray-400">2017 - 2019</p>
            </div>
          </div>
        </div>

        {/* Expertise Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-lime-400">Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• React.js & Redux for state management</li>
                <li>• Modern CSS with Tailwind CSS</li>
                <li>• Responsive and accessible web design</li>
                <li>• Performance optimization</li>
                <li>• UI/UX best practices</li>
              </ul>
            </div>
            <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4">Hobbies & Interests</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Open source contributions</li>
                <li>• Learning new technologies</li>
                <li>• Tech blogging</li>
                <li>• UI/UX design</li>
                <li>• Problem solving</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-8 text-lime-400">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4">Frontend Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Redux', 'HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript', 'TypeScript'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-lime-400/20 text-lime-400 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4">Tools & Others</h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'VS Code', 'Figma', 'Chrome DevTools', 'Postman', 'npm', 'yarn'].map((tool) => (
                  <span 
                    key={tool}
                    className="px-3 py-1 bg-lime-400/20 text-lime-400 rounded-full text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 