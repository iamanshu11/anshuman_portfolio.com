import React from 'react';
import profileImage from '../assets/profile.png'; // update the path if needed

const Hero = () => {
  return (
    <section className="bg-[#080312] text-white py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Left Image */}
        <div className="rounded-3xl overflow-hidden shadow-lg w-[320px] h-[400px]">
          <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
        </div>

        {/* Right Text */}
        <div className="flex-1">
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
            I am a Frontend Developer<br /> crafting engaging and<br /> interactive web experiences
          </h1>
          <p className="text-lg text-gray-400 mt-6">
            Hi, I'm Anshuman. I specialize in building modern, responsive web applications using React, JavaScript, and cutting-edge frontend technologies. With a keen eye for design and a passion for creating seamless user experiences.
          </p>
          <button className="mt-8 bg-lime-400 hover:bg-lime-300 text-black px-6 py-3 rounded-full font-medium flex items-center gap-2">
            Download CV <span className="text-lg">⬇️</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
