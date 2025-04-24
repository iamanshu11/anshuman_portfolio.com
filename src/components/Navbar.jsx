import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/iamanshu11' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/iamanshu13/' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0c031c]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-lime-400">
            Portfolio
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path} 
                className="text-gray-300 hover:text-lime-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-lime-400 transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
          <button 
            className="md:hidden text-gray-300 hover:text-lime-400 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-[#0c031c]/90 backdrop-blur-md">
          <div className="flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="px-6 py-3 text-gray-300 hover:text-lime-400 hover:bg-white/5 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex justify-center gap-6 mt-4 px-6 py-3 border-t border-white/10">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-lime-400 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
