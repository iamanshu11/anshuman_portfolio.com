import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ExperienceSection from '../components/ExperienceSection';
import ContactForm from '../components/ContactForm';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0c031c]">
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Home;
