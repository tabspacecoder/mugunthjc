import { Code, Database, Server, Cpu, Zap, Sparkles, Layers, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import SpotlightCard from '../components/SpotlightCard';

const Skills = ({ setActiveSection }) => {
  const [animatedLevels, setAnimatedLevels] = useState({});

  const skillCategories = [
    {
      icon: <Code size={24} />,
      title: 'Frontend Development',
      skills: ['React', 'JavaScript', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js'],
      level: 95,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Server size={24} />,
      title: 'Backend Development',
      skills: ['Node.js', 'Python', 'Java Spring Boot', 'REST APIs', 'GraphQL'],
      level: 90,
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Database size={24} />,
      title: 'Database & Cloud',
      skills: ['PostgreSQL', 'MongoDB', 'DynamoDB', 'AWS', 'Docker', 'Kubernetes'],
      level: 85,
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Cpu size={24} />,
      title: 'AI & Machine Learning',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'Scikit-learn', 'NLP'],
      level: 88,
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <Globe size={24} />,
      title: 'DevOps & Tools',
      skills: ['Git', 'Jenkins', 'CI/CD', 'Linux', 'Nginx', 'Monitoring'],
      level: 82,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <Layers size={24} />,
      title: 'Mobile Development',
      skills: ['React Native', 'Flutter', 'Dart', 'iOS', 'Android', 'Expo'],
      level: 78,
      color: 'from-teal-500 to-blue-500'
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen section-spacing relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 rounded-full bg-purple-500/5"
          animate={{ 
            y: [-20, 20, -20], 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-20 w-24 h-24 rounded-full bg-purple-400/5"
          animate={{ 
            y: [20, -20, 20], 
            rotate: [360, 0],
            scale: [1.2, 1, 1.2]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-16 h-16 rounded-full bg-purple-600/5"
          animate={{ 
            y: [-10, 10, -10], 
            x: [-10, 10, -10],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="page-container relative z-10">
        {/* Header */}
        <motion.div 
          className="content-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">MY SKILLS</h2>
          <h3 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Beautiful and unique digital experiences
          </h3>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <SpotlightCard className="h-full group">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <motion.div
                    className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles size={14} className="text-purple-400" />
                  </motion.div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-6">{category.title}</h3>
                
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-gray-400 font-medium">Proficiency Level</span>
                    <span className="text-white font-bold text-lg">
                      {animatedLevels[index] || 0}%
                    </span>
                  </div>
                  <div className="progress-bar">
                    <motion.div
                      className="progress-fill"
                      initial={{ width: 0 }}
                      animate={{ width: `${animatedLevels[index] || 0}%` }}
                      transition={{ 
                        duration: 2, 
                        delay: 0.5 + index * 0.1,
                        ease: "easeOut"
                      }}
                      style={{
                        background: `linear-gradient(90deg, rgb(139, 92, 246), rgb(167, 139, 250))`
                      }}
                    />
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm font-medium border border-gray-700 hover:border-purple-500/50 hover:bg-gray-700 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {[
            { number: "50+", label: "Technologies Mastered", icon: <Code size={20} /> },
            { number: "3+", label: "Years Experience", icon: <Zap size={20} /> },
            { number: "15+", label: "Projects Completed", icon: <Layers size={20} /> },
            { number: "100%", label: "Client Satisfaction", icon: <Sparkles size={20} /> }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <SpotlightCard className="text-center">
                <div className="w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="content-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <SpotlightCard className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <Zap size={28} className="text-white" />
            </div>
            <h4 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Build Something Amazing?</h4>
            <p className="text-gray-400 leading-relaxed mb-8 text-lg max-w-2xl mx-auto">
              Let's collaborate and create exceptional digital experiences using cutting-edge 
              technologies and innovative solutions that drive real business impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="btn-primary text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveSection('projects')}
              >
                View My Work
              </motion.button>
              <motion.button 
                className="btn-secondary text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveSection('contact')}
              >
                Start a Project
              </motion.button>
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;