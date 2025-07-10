import { ExternalLink, Github, Star, Zap, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import SpotlightCard from '../components/SpotlightCard';

const Projects = () => {
  const projects = [
    {
      title: '3D Object Reconstruction System',
      description: 'Advanced computer vision system that generates precise 3D models from 2D images using cutting-edge ML algorithms.',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'OpenCV', 'Computer Vision', 'ML'],
      github: 'https://github.com/mugunthjc',
      live: '#',
      featured: true,
      stats: { stars: 45, forks: 12, views: '2.3k' }
    },
    {
      title: 'Video Streaming Application',
      description: 'High-performance peer-to-peer video streaming platform with real-time protocols and adaptive bitrate streaming.',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Java', 'Socket Programming', 'Real-time', 'WebRTC'],
      github: 'https://github.com/mugunthjc',
      live: '#',
      featured: true,
      stats: { stars: 38, forks: 8, views: '1.8k' }
    },
    {
      title: 'IoT Smart Dashboard',
      description: 'Edge-computing IoT solution for real-time monitoring with Raspberry Pi and cloud integration.',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Raspberry Pi', 'Python', 'IoT', 'AWS'],
      github: 'https://github.com/mugunthjc',
      live: '#',
      featured: false,
      stats: { stars: 23, forks: 5, views: '1.2k' }
    },
    {
      title: 'Sign Language Learning App',
      description: 'Educational app using computer vision to teach Indian Sign Language with real-time gesture recognition.',
      image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'OpenCV', 'Education Tech', 'TensorFlow'],
      github: 'https://github.com/mugunthjc',
      live: '#',
      featured: false,
      stats: { stars: 31, forks: 7, views: '1.5k' }
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Minimal racing line animation */}
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
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-red-600"></div>
            <Zap className="text-red-600" size={18} />
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-red-600"></div>
          </div>
          <p className="text-lg text-gray-400">Recent work and innovations</p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={projectVariants}
              className="relative"
            >
              <SpotlightCard 
                className="p-0 border-red-600/20 bg-black/40"
                spotlightColor="rgba(220, 20, 60, 0.15)"
              >
                <div className="relative overflow-hidden rounded-t-3xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <div className="absolute top-4 left-4 flex space-x-2">
                    <div className="bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded text-xs flex items-center space-x-1">
                      <Star size={10} />
                      <span>{project.stats.stars}</span>
                    </div>
                    <div className="bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded text-xs flex items-center space-x-1">
                      <Eye size={10} />
                      <span>{project.stats.views}</span>
                    </div>
                  </div>

                  <div className="absolute top-4 right-4">
                    <div className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                      <Star size={12} />
                      <span>Featured</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
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
                    <div className="text-xs text-gray-500">
                      {project.stats.forks} forks
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects */}
        <motion.div 
          className="grid md:grid-cols-2 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {otherProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={projectVariants}
              className="relative"
            >
              <SpotlightCard 
                className="p-0 border-red-600/20 bg-black/40"
                spotlightColor="rgba(220, 20, 60, 0.15)"
              >
                <div className="relative overflow-hidden rounded-t-3xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  <div className="absolute top-3 left-3 flex space-x-2">
                    <div className="bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded text-xs flex items-center space-x-1">
                      <Star size={8} />
                      <span>{project.stats.stars}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-5">
                  <h4 className="text-lg font-semibold text-white mb-2">{project.title}</h4>
                  <p className="text-gray-300 text-sm mb-3 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
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
                    <div className="text-xs text-gray-500">
                      {project.stats.views}
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <SpotlightCard 
            className="max-w-2xl mx-auto border-red-600/20 bg-black/40"
            spotlightColor="rgba(220, 20, 60, 0.15)"
          >
            <h3 className="text-xl font-bold text-white mb-4">Explore More</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Visit my GitHub for the complete portfolio of projects and contributions.
            </p>
            <a
              href="https://github.com/mugunthjc"
              target="_blank"
              rel="noopener noreferrer"
              className="ferrari-button px-6 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center space-x-2"
            >
              <Github size={16} />
              <span>View All Projects</span>
            </a>
          </SpotlightCard>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;