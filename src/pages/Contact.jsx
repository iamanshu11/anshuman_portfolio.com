import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import whatsappQR from '../assets/whatsapp-qr.png'; // adjust path if needed

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_rbp7urm',
      'template_up4a8p7',
      formData,
      '4l770XI1N2bzeRKLj'
    )
      .then(() => {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        });
        setShowPopup(true); // Show popup on success
      }, (error) => {
        console.error(error.text);
        alert('Oops! Something went wrong.');
      });
  };

  return (
    <section className="min-h-screen bg-[#0c031c] text-white py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full h-[400px]">
              <motion.div
                className="absolute inset-0 bg-lime-400/20 rounded-2xl"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="w-64 h-64 text-lime-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-lime-400"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-lime-400"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-lime-400"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-lime-400"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-lime-400"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-lime-400/20 text-lime-400 rounded-lg hover:bg-[#738353] transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* ✅ Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white text-black p-6 rounded-xl max-w-md w-full shadow-2xl"
          >
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
              onClick={() => setShowPopup(false)}
            >
              &times;
            </button>

            <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
            <p className="mb-4 text-sm text-gray-700">
              We’ve received your message and will reach out shortly.
            </p>
            <p className="text-sm text-gray-700 mb-4">Meanwhile, connect with us on WhatsApp:</p>
            <div className="flex justify-center">
              <img
                src={whatsappQR}
                alt="WhatsApp QR"
                className="w-40 h-40 object-cover rounded"
              />
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Contact;

