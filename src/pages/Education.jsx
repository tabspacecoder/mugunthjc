import { GraduationCap, Award, Calendar, Trophy, Zap, BookOpen, Star, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Education = () => {
  const [activeEducation, setActiveEducation] = useState(0);

  const education = [
    {
      institution: 'Dublin City University',
      degree: 'Master of Science in Computing (Artificial Intelligence)',
      duration: 'Upcoming',
      gpa: 'TBD',
      location: 'Dublin, Ireland',
      description: 'September 2025 Intake student focusing on advanced AI and machine learning techniques.',
      coursework: ['Advanced Machine Learning', 'Deep Learning', 'Computer Vision', 'Natural Language Processing', 'AI Ethics', 'Research Methods'],
      achievements: ['Scholarship of 5900 Eur', 'International Merit Award'],
      color: 'from-blue-500 to-purple-600',
      status: 'upcoming'
    },
    {
      institution: 'Amrita Vishwa Vidyapeetham',
      degree: 'Bachelor of Technology in Computer Science',
      duration: '2019 - 2023',
      gpa: '8.18/10.0',
      location: 'Coimbatore, India',
      description: 'Strong foundation in computer science fundamentals with active participation in ASCII club and various technical projects.',
      coursework: ['Machine Learning', 'Neural Networks and Deep Learning', 'Computer Vision', 'Software Engineering', 'Mining of Massive Datasets', 'Fundamentals of Data Science', 'Computer Networks', 'Database Management Systems'],
      achievements: ['Amrita Vidyanti Scholarship - 75%', 'Dean\'s List 2022', 'Best Project Award'],
      color: 'from-green-500 to-blue-500',
      status: 'completed'
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      level: 'Professional',
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: '2022',
      level: 'Professional',
      color: 'from-blue-500 to-green-500'
    },
    {
      name: 'Microsoft Azure AI Engineer',
      issuer: 'Microsoft',
      date: '2022',
      level: 'Associate',
      color: 'from-purple-500 to-blue-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const educationVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const certVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Floating academic elements */}
      <div className="absolute inset-0 opacity-5">
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            {i % 3 === 0 ? (
              <GraduationCap size={16} className="text-red-500" />
            ) : i % 3 === 1 ? (
              <BookOpen size={14} className="text-red-400" />
            ) : (
              <Star size={12} className="text-red-600" />
            )}
          </motion.div>
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
            Education & Certifications
          </motion.h2>
          <motion.div 
            className="flex items-center justify-center space-x-3 mb-4"
            initial={{ width: 0 }}
            animate={{ width: 'auto' }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-red-600"></div>
            <GraduationCap className="text-red-600" size={18} />
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-red-600"></div>
          </motion.div>
          <motion.p 
            className="text-lg text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            My academic journey and professional development
          </motion.p>
        </motion.div>

        {/* Education */}
        <div className="mb-16">
          <motion.h3 
            className="text-2xl font-bold text-white mb-8 flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <GraduationCap size={24} className="text-red-600" />
            <span>Education</span>
          </motion.h3>
          
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {education.map((edu, index) => (
              <motion.div 
                key={index} 
                className="ferrari-card rounded-xl p-6 relative overflow-hidden group"
                variants={educationVariants}
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 2,
                  transition: { duration: 0.3 }
                }}
                onHoverStart={() => setActiveEducation(index)}
              >
                {/* Animated background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${edu.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                
                {/* Status indicator */}
                <motion.div
                  className="absolute top-4 right-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    edu.status === 'upcoming' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-green-600 text-white'
                  }`}>
                    {edu.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                  </div>
                </motion.div>

                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 relative z-10">
                  <div className="flex-1">
                    <motion.h4 
                      className="text-xl font-bold text-white mb-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {edu.degree}
                    </motion.h4>
                    <motion.p 
                      className="text-red-600 font-semibold text-lg"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {edu.institution}
                    </motion.p>
                    <motion.p 
                      className="text-gray-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      {edu.location}
                    </motion.p>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:text-right">
                    <motion.div 
                      className="flex items-center space-x-2 text-gray-300 mb-2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <Calendar size={16} />
                      <span>{edu.duration}</span>
                    </motion.div>
                    <motion.div 
                      className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold"
                      whileHover={{ scale: 1.05 }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      GPA: {edu.gpa}
                    </motion.div>
                  </div>
                </div>
                
                <motion.p 
                  className="text-gray-300 mb-4 leading-relaxed relative z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  {edu.description}
                </motion.p>
                
                {edu.achievements && (
                  <motion.div 
                    className="mb-4 relative z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <h5 className="text-white font-semibold mb-2 flex items-center space-x-2">
                      <Trophy size={16} className="text-yellow-500" />
                      <span>Achievements</span>
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, achIndex) => (
                        <motion.span
                          key={achIndex}
                          className="px-3 py-1 bg-yellow-600/20 text-yellow-400 rounded-full text-sm font-medium border border-yellow-600/30"
                          whileHover={{ 
                            scale: 1.05,
                            backgroundColor: 'rgba(234, 179, 8, 0.3)'
                          }}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.9 + achIndex * 0.1 }}
                        >
                          🏆 {achievement}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                )}
                
                <motion.div 
                  className="relative z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <h5 className="text-white font-semibold mb-2 flex items-center space-x-2">
                    <BookOpen size={16} className="text-red-600" />
                    <span>Key Coursework</span>
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, courseIndex) => (
                      <motion.span
                        key={courseIndex}
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-red-600/20 hover:text-red-400 transition-colors cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1 + courseIndex * 0.05 }}
                      >
                        {course}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <motion.h3 
            className="text-2xl font-bold text-white mb-8 flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Award size={24} className="text-red-600" />
            <span>Professional Certifications</span>
          </motion.h3>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {certifications.map((cert, index) => (
              <motion.div 
                key={index} 
                className="ferrari-card rounded-xl p-6 relative overflow-hidden group"
                variants={certVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />
                
                <div className="flex items-start justify-between mb-3 relative z-10">
                  <motion.h4 
                    className="text-lg font-bold text-white flex-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {cert.name}
                  </motion.h4>
                  <motion.div 
                    className="bg-purple-600 text-white px-2 py-1 rounded text-xs font-semibold"
                    whileHover={{ scale: 1.05 }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {cert.level}
                  </motion.div>
                </div>
                <motion.p 
                  className="text-red-600 font-semibold mb-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {cert.issuer}
                </motion.p>
                <motion.span 
                  className="text-gray-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {cert.date}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          className="text-center"
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
                duration: 4,
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
              Continuous Learning
            </motion.h3>
            <motion.p 
              className="text-gray-300 mb-6 leading-relaxed relative z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Committed to lifelong learning and staying updated with the latest technologies and industry trends.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <motion.button 
                className="ferrari-button px-6 py-3 rounded-lg font-medium transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Resume
              </motion.button>
              <motion.button 
                className="ferrari-button-outline px-6 py-3 rounded-lg font-medium transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Academic Transcripts
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;