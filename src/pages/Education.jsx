import { GraduationCap, Award, Calendar, Trophy, BookOpen, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Education = ({ setActiveSection }) => {
  const education = [
    {
      institution: 'Dublin City University',
      degree: 'Master of Science in Computing (Artificial Intelligence)',
      duration: 'Upcoming',
      gpa: 'TBD',
      location: 'Dublin, Ireland',
      description: 'September 2025 Intake student focusing on advanced AI and machine learning techniques.',
      coursework: ['TBD'],
      achievements: ['Scholarship of 5900 Eur'],
    },
    {
      institution: 'Amrita Vishwa Vidyapeetham',
      degree: 'Bachelor of Technology in Computer Science And Engineering',
      duration: '2019 - 2023',
      gpa: '8.18/10.0',
      location: 'Coimbatore, India',
      description: 'Strong foundation in computer science fundamentals with active participation in ASCII club and various technical projects.',
      coursework: ['Machine Learning', 'Neural Networks and Deep Learning', 'Computer Vision', 'Software Engineering', 'Mining of Massive Datasets', 'Fundamentals of Data Science', 'Computer Networks', 'Database Management Systems'],
      achievements: ['Amrita Vidyanti Scholarship - 75%'],
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      level: 'Professional'
    },
    {
      name: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: '2022',
      level: 'Professional'
    },
    {
      name: 'Microsoft Azure AI Engineer',
      issuer: 'Microsoft',
      date: '2022',
      level: 'Associate'
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
      {/* Minimal floating academic elements */}
      <div className="absolute inset-0 opacity-5">
        {Array.from({ length: 8 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 180, 360],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            {i % 3 === 0 ? (
              <GraduationCap size={10} className="text-blue-500" />
            ) : i % 3 === 1 ? (
              <BookOpen size={8} className="text-blue-400" />
            ) : (
              <Star size={6} className="text-blue-600" />
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
          <h2 className="text-3xl font-bold text-white mb-4">Education & Certifications</h2>
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-blue-600"></div>
            <GraduationCap className="text-blue-600" size={18} />
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-blue-600"></div>
          </div>
          <p className="text-lg text-gray-400">My academic journey and professional development</p>
        </motion.div>

        {/* Education */}
        <div className="mb-16">
          <motion.h3 
            className="text-2xl font-bold text-white mb-8 flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <GraduationCap size={24} className="text-blue-600" />
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
                variants={educationVariants}
                className="relative"
              >
                <div className="tech-card">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                      <p className="text-blue-600 font-semibold text-lg">{edu.institution}</p>
                      <p className="text-gray-300">{edu.location}</p>
                    </div>
                    <div className="mt-4 lg:mt-0 lg:text-right">
                      <div className="flex items-center space-x-2 text-gray-300 mb-2">
                        <Calendar size={16} />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        GPA: {edu.gpa}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">{edu.description}</p>
                  
                  {edu.achievements && (
                    <div className="mb-4">
                      <h5 className="text-white font-semibold mb-2 flex items-center space-x-2">
                        <Trophy size={16} className="text-yellow-500" />
                        <span>Achievements</span>
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map((achievement, achIndex) => (
                          <span
                            key={achIndex}
                            className="px-3 py-1 bg-yellow-600/20 text-yellow-400 rounded-full text-sm font-medium border border-yellow-600/30"
                          >
                            🏆 {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div>
                    <h5 className="text-white font-semibold mb-2 flex items-center space-x-2">
                      <BookOpen size={16} className="text-blue-600" />
                      <span>Key Coursework</span>
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, courseIndex) => (
                        <span
                          key={courseIndex}
                          className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
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
            <Award size={24} className="text-blue-600" />
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
                variants={certVariants}
                className="relative"
              >
                <div className="tech-card">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-bold text-white flex-1">{cert.name}</h4>
                    <div className="bg-purple-600 text-white px-2 py-1 rounded text-xs font-semibold">
                      {cert.level}
                    </div>
                  </div>
                  <p className="text-blue-600 font-semibold mb-2">{cert.issuer}</p>
                  <span className="text-gray-300">{cert.date}</span>
                </div>
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
          <div className="tech-card">
            <h3 className="text-2xl font-bold text-white mb-4">Continuous Learning</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Committed to lifelong learning and staying updated with the latest technologies and industry trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary px-6 py-3 rounded-lg font-medium transition-all duration-300">
                View Resume
              </button>
              <button className="btn-secondary px-6 py-3 rounded-lg font-medium transition-all duration-300">
                Academic Transcripts
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;