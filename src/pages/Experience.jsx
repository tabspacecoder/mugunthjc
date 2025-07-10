import { Calendar, MapPin, Building, Trophy, Zap, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import SpotlightCard from '../components/SpotlightCard';

const Experience = ({ setActiveSection }) => {
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
      achievements: ['Performance Leader Q3 2023', 'Innovation Award 2024']
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
      achievements: ['Best Project Award', 'Team Player Recognition']
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
      achievements: ['Outstanding Intern Award', 'Full-time Offer']
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
      {/* Minimal background particles */}
      <div className="absolute inset-0 opacity-5">
        {Array.from({ length: 15 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-500 rounded-full"
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
          <h2 className="text-3xl font-bold text-white mb-4">Professional Experience</h2>
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-red-600"></div>
            <Trophy className="text-red-600" size={18} />
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-red-600"></div>
          </div>
          <p className="text-lg text-gray-400">My journey in the tech industry</p>
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
              >
                {/* Timeline dot */}
                <div className="absolute left-5 w-4 h-4 bg-gradient-to-r from-red-600 to-red-700 rounded-full border-4 border-black shadow-lg z-10" />
                
                <div className="ml-16">
                  <SpotlightCard 
                    className="border-red-600/20 bg-black/40"
                    spotlightColor="rgba(220, 20, 60, 0.15)"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                        <div className="flex items-center space-x-2 text-red-600 mt-1">
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
                          <Zap size={16} className="text-red-600 mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h5 className="text-white font-semibold mb-2 flex items-center space-x-2">
                        <TrendingUp size={16} className="text-red-600" />
                        <span>Achievements</span>
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <span
                            key={achIndex}
                            className="px-3 py-1 bg-yellow-600/20 text-yellow-400 rounded-full text-sm font-medium border border-yellow-600/30"
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

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <SpotlightCard 
            className="border-red-600/20 bg-black/40"
            spotlightColor="rgba(220, 20, 60, 0.15)"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Ready for New Challenges</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Always excited to work on innovative projects and collaborate with talented teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="ferrari-button px-6 py-3 rounded-lg font-medium transition-all duration-300">
                Get In Touch
              </button>
              <button className="ferrari-button-outline px-6 py-3 rounded-lg font-medium transition-all duration-300">
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