import { ExternalLink, Github, Star, Zap, Eye, GitBranch, Users, Calendar, Code2, TrendingUp, Layers, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import SpotlightCard from '../components/SpotlightCard';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'AI/ML', 'Web Development', 'IoT', 'Education'];
  
  const projects = [
    {
      title: '3D Object Reconstruction System',
      description: 'Advanced computer vision system that generates precise 3D models from 2D images using cutting-edge ML algorithms.',
      longDescription: 'This project implements state-of-the-art computer vision techniques to reconstruct 3D objects from multiple 2D images. Uses deep learning models for depth estimation and point cloud generation with real-time processing capabilities.',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'Computer Vision', 'ML', 'NumPy'],
      github: 'https://github.com/mugunthjc',
      live: '#',
      featured: true,
      stats: { 
        stars: 45, 
        forks: 12, 
        views: '2.3k',
        commits: 127,
        contributors: 3,
        lastUpdate: '2 days ago'
      },
      category: 'AI/ML',
      status: 'Active',
      complexity: 'Advanced'
    },
    {
      title: 'Video Streaming Application',
      description: 'High-performance peer-to-peer video streaming platform with real-time protocols and adaptive bitrate streaming.',
      longDescription: 'Built a scalable video streaming solution with WebRTC integration, supporting multiple concurrent streams with automatic quality adjustment based on network conditions and device capabilities.',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Java', 'Socket Programming', 'WebRTC', 'Real-time', 'Spring Boot'],
      github: 'https://github.com/mugunthjc',
      live: '#',
      featured: true,
      stats: { 
        stars: 38, 
        forks: 8, 
        views: '1.8k',
        commits: 89,
        contributors: 2,
        lastUpdate: '1 week ago'
      },
      category: 'Web Development',
      status: 'Completed',
      complexity: 'Intermediate'
    },
    {
      title: 'IoT Smart Dashboard',
      description: 'Edge-computing IoT solution for real-time monitoring with Raspberry Pi and cloud integration.',
      longDescription: 'Comprehensive IoT monitoring system with edge computing capabilities, real-time data visualization, and cloud synchronization for industrial applications with predictive analytics.',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Raspberry Pi', 'Python', 'IoT', 'AWS', 'React', 'MQTT'],
      github: 'https://github.com/mugunthjc',
      live: '#',
      featured: false,
      stats: { 
        stars: 23, 
        forks: 5, 
        views: '1.2k',
        commits: 64,
        contributors: 1,
        lastUpdate: '3 weeks ago'
      },
      category: 'IoT',
      status: 'Maintenance',
      complexity: 'Intermediate'
    },
    {
      title: 'Sign Language Learning App',
      description: 'Educational app using computer vision to teach Indian Sign Language with real-time gesture recognition.',
      longDescription: 'Interactive learning platform that uses computer vision and machine learning to recognize and teach Indian Sign Language gestures in real-time with progress tracking and gamification.',
      image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'Education Tech', 'Flutter'],
      github: 'https://github.com/mugunthjc',
      live: '#',
      featured: false,
      stats: { 
        stars: 31, 
        forks: 7, 
        views: '1.5k',
        commits: 73,
        contributors: 2,
        lastUpdate: '1 month ago'
      },
      category: 'Education',
      status: 'Active',
      complexity: 'Advanced'
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = filteredProjects.filter(project => project.featured);
  const otherProjects = filteredProjects.filter(project => !project.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const projectVariants = {
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

  const getComplexityColor = (complexity) => {
    switch (complexity) {
      case 'Beginner': return 'bg-green-600';
      case 'Intermediate': return 'bg-yellow-600';
      case 'Advanced': return 'bg-red-600';
      default: return 'bg-gray-600';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-green-600';
      case 'Completed': return 'bg-blue-600';
      case 'Maintenance': return 'bg-yellow-600';
      default: return 'bg-gray-600';
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced background animations */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-3/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-400 to-transparent"
          animate={{
            x: ['100%', '-100%'],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Project Portfolio</h2>
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-red-600"></div>
            <Rocket className="text-red-600" size={20} />
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-red-600"></div>
          </div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Showcasing innovative solutions and cutting-edge technology implementations
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-wrap gap-2 p-2 bg-black/40 rounded-2xl border border-red-600/20">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-red-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-red-600/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Project Stats Overview */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={projectVariants}>
            <SpotlightCard 
              className="p-4 border-red-600/20 bg-black/40 text-center"
              spotlightColor="rgba(220, 20, 60, 0.15)"
            >
              <div className="flex items-center justify-center mb-2">
                <Layers size={20} className="text-red-600" />
              </div>
              <div className="text-2xl font-bold text-white">{projects.length}</div>
              <div className="text-gray-400 text-sm">Total Projects</div>
            </SpotlightCard>
          </motion.div>

          <motion.div variants={projectVariants}>
            <SpotlightCard 
              className="p-4 border-red-600/20 bg-black/40 text-center"
              spotlightColor="rgba(220, 20, 60, 0.15)"
            >
              <div className="flex items-center justify-center mb-2">
                <Star size={20} className="text-yellow-500" />
              </div>
              <div className="text-2xl font-bold text-white">137</div>
              <div className="text-gray-400 text-sm">Total Stars</div>
            </SpotlightCard>
          </motion.div>

          <motion.div variants={projectVariants}>
            <SpotlightCard 
              className="p-4 border-red-600/20 bg-black/40 text-center"
              spotlightColor="rgba(220, 20, 60, 0.15)"
            >
              <div className="flex items-center justify-center mb-2">
                <GitBranch size={20} className="text-green-500" />
              </div>
              <div className="text-2xl font-bold text-white">32</div>
              <div className="text-gray-400 text-sm">Total Forks</div>
            </SpotlightCard>
          </motion.div>

          <motion.div variants={projectVariants}>
            <SpotlightCard 
              className="p-4 border-red-600/20 bg-black/40 text-center"
              spotlightColor="rgba(220, 20, 60, 0.15)"
            >
              <div className="flex items-center justify-center mb-2">
                <Code2 size={20} className="text-blue-500" />
              </div>
              <div className="text-2xl font-bold text-white">353</div>
              <div className="text-gray-400 text-sm">Total Commits</div>
            </SpotlightCard>
          </motion.div>
        </motion.div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <motion.div 
            className="mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center space-x-2">
              <Star className="text-red-600" size={24} />
              <span>Featured Projects</span>
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={projectVariants}
                  className="relative group"
                >
                  <SpotlightCard 
                    className="p-0 border-red-600/20 bg-black/40 overflow-hidden"
                    spotlightColor="rgba(220, 20, 60, 0.15)"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                      
                      {/* Project Badges */}
                      <div className="absolute top-4 left-4 flex flex-col space-y-2">
                        <div className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getStatusColor(project.status)}`}>
                          {project.status}
                        </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getComplexityColor(project.complexity)}`}>
                          {project.complexity}
                        </div>
                      </div>

                      {/* GitHub Stats */}
                      <div className="absolute top-4 right-4 flex space-x-2">
                        <div className="bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded text-xs flex items-center space-x-1">
                          <Star size={10} />
                          <span>{project.stats.stars}</span>
                        </div>
                        <div className="bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded text-xs flex items-center space-x-1">
                          <GitBranch size={10} />
                          <span>{project.stats.forks}</span>
                        </div>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute bottom-4 left-4">
                        <div className="bg-red-600/90 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          {project.category}
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.longDescription}</p>
                      
                      {/* Enhanced Project Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-4 p-4 bg-gray-800/30 rounded-xl">
                        <div className="text-center">
                          <div className="text-white font-semibold">{project.stats.commits}</div>
                          <div className="text-gray-400 text-xs">Commits</div>
                        </div>
                        <div className="text-center">
                          <div className="text-white font-semibold">{project.stats.contributors}</div>
                          <div className="text-gray-400 text-xs">Contributors</div>
                        </div>
                        <div className="text-center">
                          <div className="text-white font-semibold">{project.stats.views}</div>
                          <div className="text-gray-400 text-xs">Views</div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-red-600/20 text-red-400 rounded-full text-xs font-medium border border-red-600/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex space-x-4">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-1 text-gray-300 hover:text-red-600 transition-colors text-sm"
                          >
                            <Github size={16} />
                            <span>Code</span>
                          </a>
                          <a
                            href={project.live}
                            className="flex items-center space-x-1 text-red-600 hover:text-red-400 transition-colors text-sm"
                          >
                            <ExternalLink size={16} />
                            <span>Demo</span>
                          </a>
                        </div>
                        <div className="text-xs text-gray-500 flex items-center space-x-1">
                          <Calendar size={12} />
                          <span>{project.stats.lastUpdate}</span>
                        </div>
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <motion.div 
            className="mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center space-x-2">
              <TrendingUp className="text-red-600" size={24} />
              <span>Other Projects</span>
            </h3>
            
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={projectVariants}
                  className="relative group"
                >
                  <SpotlightCard 
                    className="p-0 border-red-600/20 bg-black/40 overflow-hidden"
                    spotlightColor="rgba(220, 20, 60, 0.15)"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                      
                      <div className="absolute top-3 left-3 flex space-x-2">
                        <div className="bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded text-xs flex items-center space-x-1">
                          <Star size={8} />
                          <span>{project.stats.stars}</span>
                        </div>
                        <div className={`px-2 py-1 rounded text-xs font-semibold text-white ${getStatusColor(project.status)}`}>
                          {project.status}
                        </div>
                      </div>

                      <div className="absolute bottom-3 right-3">
                        <div className="bg-red-600/80 text-white px-2 py-1 rounded text-xs">
                          {project.category}
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-5">
                      <h4 className="text-lg font-semibold text-white mb-2">{project.title}</h4>
                      <p className="text-gray-300 text-sm mb-3 leading-relaxed">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies.slice(0, 4).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex space-x-3">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-1 text-gray-300 hover:text-red-600 transition-colors text-sm"
                          >
                            <Github size={14} />
                            <span>Code</span>
                          </a>
                          <a
                            href={project.live}
                            className="flex items-center space-x-1 text-red-600 hover:text-red-400 transition-colors text-sm"
                          >
                            <ExternalLink size={14} />
                            <span>Demo</span>
                          </a>
                        </div>
                        <div className="text-xs text-gray-500 flex items-center space-x-1">
                          <Users size={10} />
                          <span>{project.stats.contributors}</span>
                        </div>
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* GitHub Profile CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <SpotlightCard 
            className="max-w-3xl mx-auto border-red-600/20 bg-black/40"
            spotlightColor="rgba(220, 20, 60, 0.15)"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Explore More on GitHub</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Discover my complete portfolio of projects, contributions, and open-source work on GitHub.
              </p>
              
              {/* Language Stats */}
              <div className="flex justify-center space-x-4 mb-6">
                {['JavaScript', 'Python', 'Java', 'TypeScript'].map((lang, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                    {lang}
                  </span>
                ))}
              </div>
              
              <a
                href="https://github.com/mugunthjc"
                target="_blank"
                rel="noopener noreferrer"
                className="ferrari-button px-8 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center space-x-2"
              >
                <Github size={18} />
                <span>View GitHub Profile</span>
              </a>
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;