import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'AWS Cloud Engineer Intern',
      company: 'ARDENT COMPUTECH PVT LTD.',
      location: 'Remote',
      duration: 'Jun 2025 - Aug 2025',
      description: 'Assisted in designing, deploying, and managing scalable AWS cloud infrastructure while optimizing costs and ensuring security best practices. Gained hands-on experience with services such as EC2, S3, IAM to support real-world cloud operations.',
      skills: ['AWS S3', 'AWS IAM', 'AWS CLI', 'AWS VPC']
    },
    {
      title: 'Python Programmer Intern',
      company: 'CodSoft',
      location: 'Remote',
      duration: 'Nov 2024 - Dec 2024',
      description: 'Written efficient and clean python code to develop solutions for various tasks.',
      skills: ['Python', 'Problem Solving']
    },
    {
      title: 'BCA Student',
      company: 'The Heritage Academy',
      location: 'Kolkata, India',
      duration: '2023 - Present',
      description: 'Pursuing Bachelor of Computer Applications with focus on software development, data structures, and modern web technologies.',
      skills: ['Programming', 'Data Structures and Algorithms', 'Web Development', 'DBMS']
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <p className="text-xl text-gray-600">My professional journey and learning path</p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-blue-600 mt-1">
                    <Building size={16} />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 mt-2 md:mt-0 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">{exp.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;