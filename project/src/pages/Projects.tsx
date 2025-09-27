import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Calendar } from 'lucide-react';
import { image } from 'framer-motion/client';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Tic-tac-toe',
      description: 'This project is a modern implementation of the classic Tic-Tac-Toe game with an interactive and user-friendly interface. It offers both two-player mode and AI-powered single-player mode providing flexibility for users to enjoy the game alone or with friends.',
      image: '/t1.webp',
      technologies: ['React', 'TypeScript'],
      githubUrl: 'https://github.com/AnkitMondal-coder/tic-tac-toe',
      liveUrl: 'https://tic-tac-toe-ashy-xi-96.vercel.app/',
      date: 'Oct 2025'
    },
    {
      title: 'HopeConnect',
      description: 'A Collaborative Tech Platform to Combat Poverty, Hunger and Education Gaps.',
      image: '/tech.jpg',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
      githubUrl: 'https://github.com/AnkitMondal-coder/Tech-Platform',
      liveUrl: 'https://hopeconnect-platform.vercel.app/',
      date: 'Aug 2025'
    },
    {
      title: 'Weather Dashboard',
      description: 'A beautiful weather application with location-based forecasts.',
      //image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
      image: '/web.jpg',
      technologies: ['JavaScript', 'Weather API', 'CSS3'],
      githubUrl: 'https://github.com/AnkitMondal-coder/Website_WeatherApp',
      liveUrl: 'https://ankitmondal-coder.github.io/Website_WeatherApp/',
      date: 'Oct 2024'
    },
    {
      title: 'HealthMind AI',
      description: 'The HealthMind 🧑‍⚕️ is an intelligent healthcare assistant that provides instant medical insights and personalized guidance. It allows users to book doctor appointments and connect via secure video calls for real-time consultations.',
      image: '/h3.jpg',
      technologies: ['TypeScript', 'React', 'Tailwind CSS'],
      githubUrl: 'https://github.com/AnkitMondal-coder/healthmindai',
      liveUrl: 'https://healthmindai.vercel.app/',
      date: 'Sept 2025'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white py-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <p className="text-xl text-gray-600">A showcase of my recent work and contributions</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100 transition-all duration-200"
                  >
                    <Github size={20} className="text-gray-700" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100 transition-all duration-200"
                  >
                    <ExternalLink size={20} className="text-gray-700" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Calendar size={14} />
                    <span>{project.date}</span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">More Projects Coming Soon</h3>
            <p className="text-gray-700">
              I'm always working on new projects and exploring innovative ideas. 
              Check back regularly to see my latest work!
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;