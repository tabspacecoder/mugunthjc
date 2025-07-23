import { GraduationCap, Award, Calendar, Trophy, BookOpen, Star, MapPin, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import SpotlightCard from '../components/SpotlightCard';

const Education = ({ setActiveSection }) => {
  const education = [
    {
      institution: 'Dublin City University',
      degree: 'Master of Science in Computing (Artificial Intelligence)',
      duration: 'Sep 2025 - Jun 2027',
      gpa: 'Upcoming',
      location: 'Dublin, Ireland',
      status: 'upcoming',
      description: 'Advanced studies in AI and machine learning with focus on cutting-edge research and practical applications.',
      coursework: ['Advanced Machine Learning', 'Deep Learning', 'Natural Language Processing', 'Computer Vision', 'AI Ethics'],
      achievements: ['€5,900 Merit Scholarship'],
      image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      institution: 'Amrita Vishwa Vidyapeetham',
      degree: 'Bachelor of Technology in Computer Science And Engineering',
      duration: '2019 - 2023',
      gpa: '8.18/10.0',
      location: 'Coimbatore, India',
      status: 'completed',
      description: 'Comprehensive computer science education with strong foundation in programming, algorithms, and software engineering.',
      coursework: ['Machine Learning', 'Neural Networks', 'Computer Vision', 'Software Engineering', 'Data Science', 'Database Systems'],
      achievements: ['Amrita Vidyanti Scholarship - 75%', 'ASCII Club Active Member'],
      image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      level: 'Professional',
      icon: '☁️'
    },
    {
      name: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: '2022',
      level: 'Professional',
      icon: '🔧'
    },
    {
      name: 'Microsoft Azure AI Engineer',
      issuer: 'Microsoft',
      date: '2022',
      level: 'Associate',
      icon: '🤖'
    },
    {
      name: 'Machine Learning Specialization',
      issuer: 'Stanford University',
      date: '2021',
      level: 'Certificate',
      icon: '🧠'
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

  const itemVariants = {
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

  const getStatusColor = (status) => {
    switch (status) {
      case 'upcoming': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'completed': return 'bg-green-500/20 text-green-400 border-green-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen section-spacing relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 rounded-full bg-purple-500/5"
          animate={{ y: [-20, 20, -20], rotate: [0, 360], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-purple-400/5"
          animate={{ y: [20, -20, 20], rotate: [360, 0], scale: [1.1, 1, 1.1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-purple-600/5"
          animate={{ y: [-10, 10, -10], x: [-10, 10, -10] }}
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">MY EXPERIENCE</h2>
          <h3 className="text-5xl md:text-6xl font-bold text-white mb-8">Education</h3>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            My academic journey and continuous learning path that has shaped my expertise 
            in computer science, artificial intelligence, and software development.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid gap-12 max-w-6xl mx-auto">
            {education.map((edu, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Image */}
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative overflow-hidden rounded-3xl">
                      <img
                        src={edu.image}
                        alt={edu.institution}
                        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Status Badge */}
                      <div className="absolute top-6 left-6">
                        <motion.div 
                          className={`px-4 py-2 rounded-full text-sm font-semibold border ${getStatusColor(edu.status)}`}
                          whileHover={{ scale: 1.05 }}
                        >
                          {edu.status === 'upcoming' ? '2024' : '2023'}
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <SpotlightCard>
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex-1">
                          <h4 className="text-2xl font-bold text-white mb-2">{edu.degree}</h4>
                          <div className="flex items-center space-x-2 text-purple-400 font-semibold mb-2">
                            <GraduationCap size={18} />
                            <span>{edu.institution}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-400">
                            <MapPin size={16} />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-2 text-gray-400 mb-2">
                            <Calendar size={16} />
                            <span>{edu.duration}</span>
                          </div>
                          <div className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-semibold border border-purple-500/30">
                            GPA: {edu.gpa}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed">{edu.description}</p>
                      
                      {/* Achievements */}
                      <div className="mb-6">
                        <h5 className="text-white font-semibold mb-3 flex items-center space-x-2">
                          <Trophy size={16} className="text-yellow-500" />
                          <span>Achievements</span>
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {edu.achievements.map((achievement, achIndex) => (
                            <motion.span
                              key={achIndex}
                              className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium border border-yellow-500/30"
                              whileHover={{ scale: 1.05 }}
                            >
                              🏆 {achievement}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Coursework */}
                      <div>
                        <h5 className="text-white font-semibold mb-3 flex items-center space-x-2">
                          <BookOpen size={16} className="text-purple-400" />
                          <span>Key Coursework</span>
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course, courseIndex) => (
                            <motion.span
                              key={courseIndex}
                              className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm font-medium border border-gray-700"
                              whileHover={{ scale: 1.05, backgroundColor: '#374151' }}
                            >
                              {course}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </SpotlightCard>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="text-center mb-16">
            <h4 className="text-3xl md:text-4xl font-bold text-white mb-4">Professional Certifications</h4>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Continuous learning through industry-recognized certifications and specialized training programs.
            </p>
          </div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {certifications.map((cert, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <SpotlightCard className="text-center h-full">
                  <div className="text-4xl mb-4">{cert.icon}</div>
                  <div className="flex items-center justify-between mb-3">
                    <h5 className="text-lg font-bold text-white flex-1 text-left">{cert.name}</h5>
                    <div className={`px-2 py-1 rounded text-xs font-semibold ${
                      cert.level === 'Professional' ? 'bg-purple-500/20 text-purple-400' :
                      cert.level === 'Associate' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      {cert.level}
                    </div>
                  </div>
                  <p className="text-purple-400 font-semibold mb-2">{cert.issuer}</p>
                  <div className="flex items-center justify-center space-x-1 text-gray-400 text-sm">
                    <Calendar size={14} />
                    <span>{cert.date}</span>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="content-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <SpotlightCard className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Star size={24} className="text-white" />
            </div>
            <h4 className="text-3xl font-bold text-white mb-6">Continuous Learning Journey</h4>
            <p className="text-gray-400 mb-8 leading-relaxed text-lg">
              Committed to lifelong learning and staying at the forefront of technology. 
              Always exploring new domains and expanding my knowledge base.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Academic Transcripts
              </motion.button>
              <motion.button 
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.button>
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;