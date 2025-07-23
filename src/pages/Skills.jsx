import { Code, Database, Server, Cpu, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import SpotlightCard from '../components/SpotlightCard';

const Skills = ({ setActiveSection }) => {
  const [animatedLevels, setAnimatedLevels] = useState({});

  const skillCategories = [
    {
      icon: <Code size={20} />,
      title: 'Frontend',
      skills: ['React', 'JavaScript', 'TypeScript', 'Next.js', 'Tailwind CSS'],
      level: 95
    },
    {
      icon: <Server size={20} />,
      title: 'Backend',
      skills: ['Node.js', 'Python', 'Java Spring Boot', 'REST APIs'],
      level: 90
    },
    {
      icon: <Database size={20} />,
      title: 'Database & Cloud',
      skills: ['PostgreSQL', 'DynamoDB', 'AWS', 'Docker'],
      level: 85
    },
    {
      icon: <Cpu size={20} />,
      title: 'AI & ML',
      skills: ['Python', 'OpenCV', 'Computer Vision', 'Machine Learning', 'Deep Learning', 'NLP'],
      level: 88
    },
    {
      icon: <Cpu size={20} />,
      title: 'Programming Languages',
      skills: ['Java', 'Kotlin', 'Python', 'C++', 'Dart', 'JavaScript'],
      level: 88
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const levels = {};
      skillCategories.forEach((category, index) => {
        levels[index] = category.level;
      });
      setAnimatedLevels(levels);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen section-spacing">
      <div className="page-container">
        {/* Header */}
        <motion.div 
          className="content-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-0.5 bg-white"></div>
            <Zap className="text-white" size={18} />
            <div className="w-12 h-0.5 bg-white"></div>
          </div>
          <p className="text-lg text-gray-400">Technologies I work with</p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <SpotlightCard>
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 text-black">
                  {category.icon}
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-4">{category.title}</h3>
                
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">Proficiency</span>
                    <span className="text-white font-semibold text-sm">
                      {animatedLevels[index] || 0}%
                    </span>
                  </div>
                  <div className="progress-bar">
                    <motion.div
                      className="progress-fill"
                      initial={{ width: 0 }}
                      animate={{ width: `${animatedLevels[index] || 0}%` }}
                      transition={{ 
                        duration: 1.5, 
                        delay: 0.5 + index * 0.1,
                        ease: "easeOut"
                      }}
                    />
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="content-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <SpotlightCard className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-bold text-white mb-4">Ready to Build</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Let's create something exceptional with cutting-edge technology and clean, efficient code.
            </p>
            <button className="btn-primary">
              Start a Project
            </button>
          </SpotlightCard>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;