import { ExternalLink, Github, Star, Zap, Eye, GitBranch, Users, Calendar, Code2, Filter, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import SpotlightCard from '../components/SpotlightCard';

const Projects = ({ setActiveSection }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'AI/ML', 'Web Development', 'IoT', 'Education'];
  
  const featuredProjects = [
    {
      title: '3D Object Reconstruction System',
      description: 'Advanced computer vision system that generates precise 3D models from 2D images using cutting-edge ML algorithms and deep learning techniques.',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'Computer Vision'],
      github: 'https://github.com/mugunthjc',
      live: '#',
      category: 'AI/ML',
      complexity: 'Advanced'
    },
    {
      title: 'Video Streaming Application',
      description: 'High-performance peer-to-peer video streaming platform with real-time protocols and adaptive bitrate streaming for optimal user experience.',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Java', 'Socket Programming', 'WebRTC', 'Spring Boot'],
      github: 'https://github.com/mugunthjc',
      live: '#',
      category: 'Web Development',
      complexity: 'Intermediate'
    },
    {
      title: 'IoT Smart Dashboard',
      description: 'Edge-computing IoT solution for real-time monitoring with Raspberry Pi integration and comprehensive cloud analytics platform.',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Raspberry Pi', 'Python', 'IoT', 'AWS'],
      github: 'https://github.com/mugunthjc',
      live: '#',
      category: 'IoT',
      complexity: 'Advanced'
    }
  ];

  const otherProjects = [
    {
      title: 'Sign Language Learning App',
      description: 'Educational app using computer vision to teach Indian Sign Language with real-time gesture recognition.',
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'Flutter'],
      github: 'https://github.com/mugunthjc',
      live: '#',
      category: 'Education',
      complexity: 'Intermediate'
    },
    {
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with modern UI/UX and secure payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/mugunthjc',
      live: '#',
      category: 'Web Development',
      complexity: 'Advanced'
    },
    {
      title: 'Weather Analytics Dashboard',
      description: 'Real-time weather data visualization with predictive analytics and interactive charts.',
      technologies: ['React', 'D3.js', 'Python', 'API Integration'],
      github: 'https://github.com/mugunthjc',
      live: '#',
      category: 'Web Development',
      complexity: 'Beginner'
    }
  ];

  const filteredFeatured = selectedCategory === 'All' 
    ? featuredProjects 
    : featuredProjects.filter(project => project.category === selectedCategory);

  const filteredOther = selectedCategory === 'All' 
    ? otherProjects 
    : otherProjects.filter(project => project.category === selectedCategory);

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

  const getComplexityColor = (complexity) => {
    switch (complexity) {
      case 'Beginner': return 'bg-green-500';
      case 'Intermediate': return 'bg-yellow-500';
      case 'Advanced': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen section-spacing relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-40 left-20 w-20 h-20 rounded-full bg-purple-500/5"
          animate={{ y: [-20, 20, -20], rotate: [0, 360] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-16 h-16 rounded-full bg-purple-400/5"
          animate={{ y: [20, -20, 20], rotate: [360, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="page-container relative z-10">
        {/* Header */}
        <motion.div 
          className="content-center mb-16"
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

        {/* Category Filter */}
        <motion.div 
          className="flex justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-wrap gap-3 p-2 bg-gray-900/50 rounded-2xl border border-gray-800">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-purple-500 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Featured Works */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <h4 className="text-3xl font-bold text-white mb-12 text-center">Featured Works</h4>
          
          <motion.div 
            className="grid lg:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredFeatured.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="work-card">
                  <div className="relative overflow-hidden rounded-t-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Complexity Badge */}
                    <div className="absolute top-4 left-4">
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getComplexityColor(project.complexity)}`}>
                        {project.complexity}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github size={16} />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white hover:bg-purple-600"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ArrowUpRight size={16} />
                      </motion.a>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h5 className="text-xl font-bold text-white mb-3">{project.title}</h5>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Other Projects */}
        {filteredOther.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-16"
          >
            <h4 className="text-3xl font-bold text-white mb-12 text-center">Other Projects</h4>
            
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredOther.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                >
                  <SpotlightCard className="h-full">
                    <div className="flex items-start justify-between mb-4">
                      <h5 className="text-lg font-bold text-white flex-1">{project.title}</h5>
                      <div className={`px-2 py-1 rounded text-xs font-semibold text-white ${getComplexityColor(project.complexity)}`}>
                        {project.complexity}
                      </div>
                    </div>
                    
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        <Github size={14} />
                        <span>Code</span>
                      </a>
                      <a
                        href={project.live}
                        className="flex items-center space-x-1 text-purple-400 hover:text-purple-300 transition-colors text-sm"
                      >
                        <ExternalLink size={14} />
                        <span>Demo</span>
                      </a>
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}

        {/* GitHub CTA */}
        <motion.div 
          className="content-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <SpotlightCard className="max-w-4xl mx-auto text-center">
            <h4 className="text-3xl font-bold text-white mb-6">Explore More on GitHub</h4>
            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
              Discover my complete portfolio of projects, contributions, and open-source work. 
              From experimental prototypes to production-ready applications.
            </p>
            
            <div className="flex justify-center flex-wrap gap-3 mb-8">
              {['JavaScript', 'Python', 'Java', 'TypeScript', 'React', 'Node.js'].map((lang, index) => (
                <span key={index} className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm font-medium">
                  {lang}
                </span>
              ))}
            </div>
            
            <motion.a
              href="https://github.com/mugunthjc"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center space-x-2 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} />
              <span>View GitHub Profile</span>
            </motion.a>
          </SpotlightCard>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;