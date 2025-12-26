import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// const Home: React.FC = () => {
//   const handleDownloadCV = () => {
//     // Create a sample CV file download
//     const link = document.createElement('a');
//     link.href = 'data:text/plain;charset=utf-8,Ankit Mondal - Resume\n\nContact: ankitmondal802@gmail.com\nEducation: BCA from The Heritage Academy\n\nSkills:\n- Frontend Development\n- Backend Development\n- Cloud Technologies';
//     link.download = 'Ankit_Mondal_CV.txt';
//     link.click();
//   };

// new resume section 

const Home: React.FC = () => {
  // Just change this link whenever you want to update your resume
  const resumeLink = '/ANKIT_MONDAL.pdf';
  // Place Ankit_Mondal_Resume.pdf inside the public/ folder of your React project

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = resumeLink;
    link.download = 'ANKIT_MONDAL.pdf';
    link.click();
  };

  const handleHireMe = () => {
    window.location.href = 'mailto:ankitmondal802@gmail.com?subject=Hiring Inquiry&body=Hi Ankit, I would like to discuss a potential opportunity with you.';
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Section */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="mb-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="w-48 h-48 mx-auto lg:mx-0 mb-6"
              >
                <img
                  //src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=400"
                  src="/profile_pic.jpg"
                  alt="Ankit Mondal"
                  className="w-full h-full object-cover rounded-full shadow-xl border-4 border-white"
                />
              </motion.div>

              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              >
                Hi, I am{' '}
                <span className="text-blue-600">Ankit Mondal</span>
              </motion.h1>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-lg text-gray-600 mb-2"
              >
                <b>I am pursuing BCA from The Heritage Academy</b>
              </motion.p>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="text-xl text-gray-700 mb-8"
              >
                Backend Developer & Tech Enthusiast
              </motion.p>
            </div>

            {/* Call to Action Buttons */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={handleHireMe}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center gap-2 group shadow-lg hover:shadow-xl"
              >
                <Mail size={20} />
                Hire Me
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              {/* ✅ View Resume Button */}

              <a
                href="/ANKIT_MONDAL.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-all duration-300 flex items-center gap-2 group shadow-lg hover:shadow-xl"
              >
                {/* <Download size={20} /> */}
                 👁️
                View CV
              </a>


              <button
                onClick={handleDownloadCV}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center gap-2 group shadow-lg hover:shadow-xl"
              >
                <Download size={20} />
                Download CV
              </button>
            </motion.div>
          </motion.div>

          {/* Hero Illustration */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="hidden lg:block"
          >
            <div className="bg-white p-8 rounded-2xl shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="text-gray-600">Currently Available for Opportunities</div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600">5+</div>
                    <div className="text-sm text-gray-600">Projects</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-600">2+</div>
                    <div className="text-sm text-gray-600">Years Learning</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-purple-600">10+</div>
                    <div className="text-sm text-gray-600">Technologies</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quick Links */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mt-20"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/skills" className="group">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Skills & Technologies</h3>
                <p className="text-gray-600">Explore my technical expertise </p>
              </div>
            </Link>

            <Link to="/projects" className="group">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">My Projects</h3>
                <p className="text-gray-600">Check out my latest work and contributions</p>
              </div>
            </Link>

            <Link to="/contact" className="group">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Get In Touch</h3>
                <p className="text-gray-600">Let's discuss your next project</p>
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;