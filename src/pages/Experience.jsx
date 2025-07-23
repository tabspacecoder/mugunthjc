import { Calendar, MapPin, Building, Trophy, Zap, TrendingUp } from 'lucide-react';
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
        'Collaborated with a cross-functional team to maintain a full-stack application built with ExtJS, ReactJS, Java, and Kotlin Spring Boot, proactively identifying and resolving issues to ensure smooth usability, optimal performance, and application security.',
        'Maintained Kotlin Spring Boot applications integrated with AWS services—leveraging AWS Batch for efficient task scheduling, DynamoDB for optimized data storage and retrieval, and Parameter Store for secure configuration management—enhancing application performance, security, and scalability.',
        'Worked with a large PostgreSQL database, writing complex SQL scripts to combine multiple tables and implement grouping and aggregation techniques for efficient data retrieval. Optimized query performance by fine-tuning SQL queries to handle large datasets effectively.',
        'Utilized Jenkins to streamline and support the release process, ensuring smooth integration, seamless collaboration, and efficient software delivery across teams.',
        'Built and maintained robust data ingestion systems in Java and Kotlin to extract and process data from LMS platforms such as Blackboard, Canvas, D2L, and Moodle.'
      ],
      technologies: ['ExtJS', 'ReactJS', 'Java', 'Kotlin', 'Spring Boot', 'AWS Batch', 'DynamoDB', 'Parameter Store', 'PostgreSQL', 'Jenkins'],
      achievements: ['Team Awesome award 2024']
    },
    {
      company: 'Bounteous',
      position: 'Software Development Intern',
      duration: 'Feb 2023 – May 2023',
      location: 'Chennai, India',
      type: 'Internship',
      description: [
        'Gained hands-on experience with ReactJS and NodeJS for front-end and back-end development, building dynamic web applications, while also developing proficiency in Java and Kotlin with Spring Boot to create robust, scalable backend services.',
        'Developed proof of concept (PoC) applications using ReactJS, NodeJS, Java, and Kotlin with Spring Boot, showcasing the seamless integration of front-end and back-end technologies to deliver a functional, scalable solution.'
      ],
      technologies: ['ReactJS', 'NodeJS', 'Java', 'Kotlin', 'Spring Boot'],
      achievements: ['Pre placement offer for full-time role']
    },
    {
      company: 'Cameron Manufacturing India (P) Ltd – A Schlumberger Company',
      position: 'Summer Intern',
      duration: 'Jun 2022 – Aug 2022',
      location: 'Coimbatore, India',
      type: 'Internship',
      description: [
        'Developed strong analytical abilities and valuable insights on working of ERP systems, focusing on extracting and analyzing data to improve process efficiencies.'
      ],
      technologies: ['ERP', 'Data Analysis'],
      achievements: ['Pre placement offer for full-time role']
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
    <div className="min-h-screen section-spacing">
      <div className="page-container">
        {/* Header */}
        <motion.div 
          className="content-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Professional Experience</h2>
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-0.5 bg-white"></div>
            <Trophy className="text-white" size={18} />
            <div className="w-12 h-0.5 bg-white"></div>
          </div>
          <p className="text-lg text-gray-400">My journey in the tech industry</p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-800" />

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
              >
                {/* Timeline Dot */}
                <div className="absolute left-5 w-3 h-3 bg-white rounded-full border-4 border-black z-10" />
                
                <div className="ml-16">
                  <SpotlightCard>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                        <div className="flex items-center space-x-2 text-white mt-1">
                          <Building size={16} />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                      </div>
                      <div className="mt-2 sm:mt-0">
                        <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                          exp.type === 'Internship' 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-green-600 text-white'
                        }`}>
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-300 mb-4">
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-300 flex items-start space-x-3">
                          <Zap size={16} className="text-white mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h5 className="text-white font-semibold mb-2 flex items-center space-x-2">
                        <TrendingUp size={16} className="text-white" />
                        <span>Achievements</span>
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <span
                            key={achIndex}
                            className="px-3 py-1 bg-yellow-600 text-white rounded-full text-sm font-medium"
                          >
                            🏆 {achievement}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </SpotlightCard>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="content-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <SpotlightCard className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready for New Challenges</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Always excited to work on innovative projects and collaborate with talented teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Get In Touch
              </button>
              <button className="btn-secondary">
                Download Resume
              </button>
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;