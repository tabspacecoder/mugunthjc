import { Calendar, MapPin, Building, Trophy, Zap, TrendingUp, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import SpotlightCard from '../components/SpotlightCard';

const Experience = ({ setActiveSection }) => {
  const experiences = [
    {
      company: 'Bounteous',
      position: 'Software Analyst',
      duration: 'Jun 2023 – Present',
      location: 'Chennai, India',
      type: 'Full-time',
      description: [
        'Collaborated with cross-functional teams to maintain full-stack applications built with ExtJS, ReactJS, Java, and Kotlin Spring Boot.',
        'Maintained Kotlin Spring Boot applications integrated with AWS services including AWS Batch, DynamoDB, and Parameter Store.',
        'Worked with large PostgreSQL databases, writing complex SQL scripts for efficient data retrieval and optimization.',
        'Utilized Jenkins to streamline release processes and ensure smooth software delivery across teams.',
        'Built robust data ingestion systems in Java and Kotlin for LMS platforms including Blackboard, Canvas, D2L, and Moodle.'
      ],
      technologies: ['ExtJS', 'ReactJS', 'Java', 'Kotlin', 'Spring Boot', 'AWS', 'PostgreSQL', 'Jenkins'],
      achievements: ['Team Awesome Award 2024']
    },
    {
      company: 'Bounteous',
      position: 'Software Development Intern',
      duration: 'Feb 2023 – May 2023',
      location: 'Chennai, India',
      type: 'Internship',
      description: [
        'Gained hands-on experience with ReactJS and NodeJS for full-stack development.',
        'Developed proficiency in Java and Kotlin with Spring Boot for backend services.',
        'Created proof of concept applications showcasing seamless integration of technologies.',
        'Participated in code reviews and agile development processes.'
      ],
      technologies: ['ReactJS', 'NodeJS', 'Java', 'Kotlin', 'Spring Boot'],
      achievements: ['Pre-placement offer for full-time role']
    },
    {
      company: 'Cameron Manufacturing India (P) Ltd',
      position: 'Summer Intern',
      duration: 'Jun 2022 – Aug 2022',
      location: 'Coimbatore, India',
      type: 'Internship',
      description: [
        'Developed analytical abilities and insights into ERP system operations.',
        'Focused on data extraction and analysis to improve process efficiencies.',
        'Collaborated with cross-functional teams to understand business processes.',
        'Contributed to process improvement initiatives through data-driven insights.'
      ],
      technologies: ['ERP Systems', 'Data Analysis', 'Process Optimization'],
      achievements: ['Outstanding intern recognition']
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
    <div className="min-h-screen section-spacing relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-32 right-16 w-24 h-24 rounded-full bg-purple-500/5"
          animate={{ y: [-15, 15, -15], rotate: [0, 180, 360] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-20 h-20 rounded-full bg-purple-400/5"
          animate={{ y: [15, -15, 15], rotate: [360, 180, 0] }}
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
            My professional journey through various roles and the valuable experiences 
            that have shaped my expertise in software development and technology.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative max-w-5xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {experiences.map((exp, index) => (
              <motion.div 
                key={index} 
                className="relative mb-16 last:mb-0"
                variants={experienceVariants}
              >
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <SpotlightCard className="ml-8">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <div className="w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center">
                              <Briefcase size={20} className="text-white" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-white">{exp.position}</h3>
                              <div className="flex items-center space-x-2 text-purple-400 font-semibold">
                                <Building size={16} />
                                <span>{exp.company}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 lg:mt-0">
                          <motion.span 
                            className={`px-4 py-2 rounded-full text-sm font-semibold ${
                              exp.type === 'Internship' 
                                ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                                : 'bg-green-500/20 text-green-400 border border-green-500/30'
                            }`}
                            whileHover={{ scale: 1.05 }}
                          >
                            {exp.type}
                          </motion.span>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-400 mb-6">
                        <div className="flex items-center space-x-2">
                          <Calendar size={16} className="text-purple-400" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin size={16} className="text-purple-400" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <div className="space-y-3 mb-6">
                        {exp.description.map((item, itemIndex) => (
                          <motion.div
                            key={itemIndex}
                            className="flex items-start space-x-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: itemIndex * 0.1 }}
                          >
                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300 leading-relaxed">{item}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h5 className="text-white font-semibold mb-3 flex items-center space-x-2">
                          <Trophy size={16} className="text-yellow-500" />
                          <span>Key Achievements</span>
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.achievements.map((achievement, achIndex) => (
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

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm font-medium border border-gray-700"
                            whileHover={{ scale: 1.05, backgroundColor: '#374151' }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </SpotlightCard>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="content-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <SpotlightCard className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <TrendingUp size={24} className="text-white" />
            </div>
            <h4 className="text-3xl font-bold text-white mb-6">Ready for New Challenges</h4>
            <p className="text-gray-400 mb-8 leading-relaxed text-lg">
              Always excited to work on innovative projects and collaborate with talented teams 
              to create impactful solutions that drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveSection('contact')}
              >
                Get In Touch
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

export default Experience;