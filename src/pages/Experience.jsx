import { Calendar, MapPin, Building, Trophy, Zap, Briefcase, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(0);

  const experiences = [
    {
      company: 'Bounteous',
      position: 'Software Analyst',
      duration: 'Jun 2023 - Present',
      location: 'Chennai, India',
      type: 'Full-time',
      description: [
        'Led development of AI-powered applications serving 50,000+ users',
        'Architected scalable cloud solutions using AWS services',
        'Mentored junior developers and established coding standards',
        'Improved system performance by 40% through optimization'
      ],
      technologies: ['React', 'Node.js', 'Python', 'AWS', 'DynamoDB'],
      achievements: ['Performance Leader Q3 2023', 'Innovation Award 2024'],
      color: 'from-red-500 to-red-600'
    },
    {
      company: 'Innovation Labs',
      position: 'Full Stack Developer',
      duration: 'Jun 2021 - Dec 2021',
      location: 'Remote',
      type: 'Full-time',
      description: [
        'Developed computer vision applications using OpenCV and Python',
        'Built responsive web applications with React and Node.js',
        'Implemented real-time data processing systems',
        'Collaborated with cross-functional teams in agile environment'
      ],
      technologies: ['Python', 'OpenCV', 'React', 'Node.js', 'MySQL'],
      achievements: ['Best Project Award', 'Team Player Recognition'],
      color: 'from-orange-500 to-red-500'
    },
    {
      company: 'SLB',
      position: 'Software Developer Intern',
      duration: 'Jan 2021 - May 2021',
      location: 'Coimbatore, India',
      type: 'Internship',
      description: [
        'Contributed to IoT dashboard development using Raspberry Pi',
        'Implemented edge computing solutions for real-time monitoring',
        'Participated in code reviews and testing procedures',
        'Learned modern development practices and frameworks'
      ],
      technologies: ['Raspberry Pi', 'Python', 'JavaScript', 'IoT'],
      achievements: ['Outstanding Intern Award', 'Full-time Offer'],
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut"
      }
    }
  };

  const experienceVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        {Array.from({ length: 30 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-red-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl font-bold text-white mb-4"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Professional Experience
          </motion.h2>
          <motion.div 
            className="flex items-center justify-center space-x-3 mb-4"
            initial={{ width: 0 }}
            animate={{ width: 'auto' }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-red-600"></div>
            <Trophy className="text-red-600" size={18} />
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-red-600"></div>
          </motion.div>
          <motion.p 
            className="text-lg text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            My journey in the tech industry
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Animated timeline */}
          <motion.div 
            className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-red-600 via-red-700 to-red-600 origin-top"
            variants={timelineVariants}
            initial="hidden"
            animate="visible"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {experiences.map((exp, index) => (
              <motion.div 
                key={index} 
                className="relative mb-12"
                variants={experienceVariants}
                onHoverStart={() => setActiveExperience(index)}
              >
                {/* Timeline dot */}
                <motion.div 
                  className="absolute left-5 w-4 h-4 bg-gradient-to-r from-red-600 to-red-700 rounded-full border-4 border-black shadow-lg z-10"
                  whileHover={{ scale: 1.5 }}
                  animate={{
                    boxShadow: activeExperience === index 
                      ? '0 0 20px rgba(220, 20, 60, 0.8)' 
                      : '0 0 0px rgba(220, 20, 60, 0)'
                  }}
                />
                
                <div className="ml-16">
                  <motion.div 
                    className="ferrari-card rounded-xl p-6 relative overflow-hidden group"
                    whileHover={{ 
                      scale: 1.02,
                      rotateY: 1,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {/* Animated background gradient */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />
                    
                    {/* Floating particles on hover */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {Array.from({ length: 5 }, (_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-red-500 rounded-full"
                          style={{
                            left: `${20 + i * 15}%`,
                            top: `${20 + i * 10}%`,
                          }}
                          animate={{
                            y: [0, -10, 0],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </motion.div>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 relative z-10">
                      <div>
                        <motion.h3 
                          className="text-xl font-bold text-white"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          {exp.position}
                        </motion.h3>
                        <div className="flex items-center space-x-2 text-red-600 mt-1">
                          <Building size={16} />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                      </div>
                      <div className="mt-2 sm:mt-0">
                        <motion.span 
                          className={`px-4 py-2 rounded-full text-sm font-semibold ${
                            exp.type === 'Internship' 
                              ? 'bg-blue-600 text-white' 
                              : 'bg-green-600 text-white'
                          }`}
                          whileHover={{ scale: 1.05 }}
                        >
                          {exp.type}
                        </motion.span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-300 mb-4 relative z-10">
                      <motion.div 
                        className="flex items-center space-x-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <Calendar size={16} />
                        <span>{exp.duration}</span>
                      </motion.div>
                      <motion.div 
                        className="flex items-center space-x-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </motion.div>
                    </div>

                    <motion.ul 
                      className="space-y-3 mb-6 relative z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      {exp.description.map((item, itemIndex) => (
                        <motion.li 
                          key={itemIndex} 
                          className="text-gray-300 flex items-start space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + itemIndex * 0.1 }}
                        >
                          <Zap size={16} className="text-red-600 mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </motion.li>
                      ))}
                    </motion.ul>

                    {/* Achievements */}
                    <motion.div 
                      className="mb-4 relative z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7 }}
                    >
                      <h5 className="text-white font-semibold mb-2 flex items-center space-x-2">
                        <TrendingUp size={16} className="text-red-600" />
                        <span>Achievements</span>
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.span
                            key={achIndex}
                            className="px-3 py-1 bg-yellow-600/20 text-yellow-400 rounded-full text-sm font-medium border border-yellow-600/30"
                            whileHover={{ 
                              scale: 1.05,
                              backgroundColor: 'rgba(234, 179, 8, 0.3)'
                            }}
                          >
                            🏆 {achievement}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div 
                      className="flex flex-wrap gap-2 relative z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-red-600/20 hover:text-red-400 transition-colors cursor-pointer"
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="ferrari-card rounded-xl p-8 relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-red-500/20 to-red-600/10"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.h3 
              className="text-2xl font-bold text-white mb-4 relative z-10"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              Ready for New Challenges
            </motion.h3>
            <motion.p 
              className="text-gray-300 mb-6 leading-relaxed relative z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Always excited to work on innovative projects and collaborate with talented teams.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <motion.button 
                className="ferrari-button px-6 py-3 rounded-lg font-medium transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
              <motion.button 
                className="ferrari-button-outline px-6 py-3 rounded-lg font-medium transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;