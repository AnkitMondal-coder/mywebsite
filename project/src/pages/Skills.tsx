import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      color: 'blue',
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 90 },
        { name: 'JavaScript', level: 80 },
        { name: 'React', level: 70 },
        { name: 'Tailwind CSS', level: 60 },
        { name: 'TypeScript', level: 70 }
      ]
    },
    {
      title: 'Backend',
      color: 'green',
      skills: [
        { name: 'Node.js', level: 50 },
        { name: 'Express.js', level: 40 },
        // { name: 'MongoDB', level: 60 },
        // { name: 'PostgreSQL', level: 55 },
        // { name: 'REST APIs', level: 75 },
        { name: 'Python', level: 80 },
        { name: 'Java', level: 85 },
        { name: 'Php', level: 80 }
      ]
    },
    {
      title: 'Cloud & Tools',
      color: 'purple',
      skills: [
        { name: 'Git', level: 70 },
        { name: 'GitHub', level: 85 },
        { name: 'AWS', level: 60 },
        { name: 'Vercel', level: 70 },
        { name: 'Netlify', level: 65 },
        // { name: 'Docker Basics', level: 35 }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: { bg: 'bg-blue-600', light: 'bg-blue-100', text: 'text-blue-800' },
      green: { bg: 'bg-green-600', light: 'bg-green-100', text: 'text-green-800' },
      purple: { bg: 'bg-purple-600', light: 'bg-purple-100', text: 'text-purple-800' }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <p className="text-xl text-gray-600"><b>My technical expertise across various domains</b></p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const colorClasses = getColorClasses(category.color);
            
            return (
              <motion.div
                key={category.title}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 + categoryIndex * 0.2, duration: 0.6 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`${colorClasses.light} rounded-lg p-4 mb-6`}>
                  <h3 className={`text-2xl font-bold ${colorClasses.text} text-center`}>
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.6 + categoryIndex * 0.2 + skillIndex * 0.1, duration: 0.4 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-900">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ delay: 0.8 + categoryIndex * 0.2 + skillIndex * 0.1, duration: 0.8 }}
                          className={`h-2 rounded-full ${colorClasses.bg}`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Always Learning</h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              I'm constantly expanding my skill set and staying up-to-date with the latest technologies. 
              Currently focusing on advanced React patterns and cloud technologies.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;