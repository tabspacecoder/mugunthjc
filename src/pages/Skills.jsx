import { Code, Database, Globe, Server, Smartphone, Cpu, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Skills = () => {
  const [animatedLevels, setAnimatedLevels] = useState({});

  const skillCategories = [
    {
      icon: <Code size={20} />,
      title: 'Frontend',
      skills: ['React', 'JavaScript', 'TypeScript', 'Next.js', 'Tailwind CSS'],
      level: 95,
      color: 'from-red-500 to-red-600'
    },
    {
      icon: <Server size={20} />,
      title: 'Backend',
      skills: ['Node.js', 'Python', 'Java Spring Boot', 'REST APIs'],
      level: 90,
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <Database size={20} />,
      title: 'Database & Cloud',
      skills: ['PostgreSQL', 'DynamoDB', 'AWS', 'Docker'],
      level: 85,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Cpu size={20} />,
      title: 'AI & ML',
      skills: ['Python', 'OpenCV', 'Computer Vision', 'Machine Learning', 'Deep Learning', 'NLP'],
      level: 88,
      color: 'from-green-500 to-yellow-500'
    },
    {
      icon: <Cpu size={20} />,
      title: 'Programming Languages',
      skills: ['Java', 'Kotlin', 'Python', 'C++', 'Dart', 'JavaScript'],
      level: 88,
      color: 'from-blue-500 to-green-500'
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

  const skillVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        {Array.from({ length: 50 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl font-bold text-white mb-4"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Skills & Technologies
          </motion.h2>
          <motion.div 
            className="flex items-center justify-center space-x-3 mb-4"
            initial={{ width: 0 }}
            animate={{ width: 'auto' }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-red-600"></div>
            <Zap className="text-red-600" size={18} />
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-red-600"></div>
          </motion.div>
          <motion.p 
            className="text-lg text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Technologies I work with
          </motion.p>
        </motion.div>

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
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="ferrari-card rounded-xl p-6 relative overflow-hidden group"
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, #DC143C, #FF1744)`
                }}
              />
              
              <motion.div 
                className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-lg flex items-center justify-center mb-4 text-white relative z-10"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {category.icon}
              </motion.div>
              
              <h3 className="text-lg font-semibold text-white mb-4 relative z-10">{category.title}</h3>
              
              <div className="mb-6 relative z-10">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">Proficiency</span>
                  <motion.span 
                    className="text-red-600 font-semibold text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    {animatedLevels[index] || 0}%
                  </motion.span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className={`bg-gradient-to-r ${category.color} h-2 rounded-full relative`}
                    initial={{ width: 0 }}
                    animate={{ width: `${animatedLevels[index] || 0}%` }}
                    transition={{ 
                      duration: 1.5, 
                      delay: 0.5 + index * 0.1,
                      ease: "easeOut"
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white opacity-30"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 1 + index * 0.1
                      }}
                    />
                  </motion.div>
                </div>
              </div>
              
              <motion.div 
                className="flex flex-wrap gap-2 relative z-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    variants={skillVariants}
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: 'rgba(220, 20, 60, 0.2)',
                      color: '#ff4d6d'
                    }}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs cursor-pointer transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="ferrari-card rounded-xl p-8 max-w-2xl mx-auto relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-red-700/10"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <h3 className="text-xl font-bold text-white mb-4 relative z-10">Ready to Build</h3>
            <p className="text-gray-300 leading-relaxed mb-6 relative z-10">
              Let's create something exceptional with cutting-edge technology and clean, efficient code.
            </p>
            <motion.button 
              className="ferrari-button px-6 py-3 rounded-lg font-medium transition-all duration-300 relative z-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;