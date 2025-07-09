import { ExternalLink, Github, Star, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: '3D Object Reconstruction System',
      description: 'Advanced computer vision system that generates precise 3D models from 2D images using machine learning techniques.',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'OpenCV', 'Computer Vision', 'Machine Learning'],
      github: 'https://github.com/mugunthjc',
      live: '#',
      featured: true,
      category: 'AI/ML'
    },
    {
      title: 'Video Streaming Application',
      description: 'High-performance peer-to-peer video streaming platform with real-time communication protocols.',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Java', 'Socket Programming', 'Real-time Systems'],
      github: 'https://github.com/mugunthjc',
      live: '#',
      featured: true,
      category: 'Systems'
    },
    {
      title: 'IoT Smart Shopping Dashboard',
      description: 'Edge-computing IoT solution for real-time retail monitoring with Raspberry Pi integration.',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Raspberry Pi', 'Python', 'Edge Computing', 'IoT'],
      github: 'https://github.com/mugunthjc',
      live: '#',
      featured: false,
      category: 'IoT'
    },
    {
      title: 'Indian Sign Language Learning App',
      description: 'Educational application using computer vision to teach Indian Sign Language with gesture recognition.',
      image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'OpenCV', 'Machine Learning', 'Education Tech'],
      github: 'https://github.com/mugunthjc',
      live: '#',
      featured: false,
      category: 'Education'
    },
    {
      title: 'AWS Cloud Architecture Solution',
      description: 'Scalable cloud infrastructure using AWS services for enterprise-level applications.',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['AWS', 'DynamoDB', 'AWS Batch', 'Cloud Architecture'],
      github: 'https://github.com/mugunthjc',
      live: '#',
      featured: false,
      category: 'Cloud'
    },
    {
      title: 'Full-Stack Web Application',
      description: 'Modern web application with React frontend, Node.js backend, and MySQL database.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'MySQL', 'JavaScript'],
      github: 'https://github.com/mugunthjc',
      live: '#',
      featured: false,
      category: 'Web'
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const getCategoryColor = (category) => {
    const colors = {
      'AI/ML': 'from-purple-500 to-purple-600',
      'Systems': 'from-blue-500 to-blue-600',
      'IoT': 'from-green-500 to-green-600',
      'Education': 'from-pink-500 to-pink-600',
      'Cloud': 'from-teal-500 to-teal-600',
      'Web': 'from-orange-500 to-orange-600'
    };
    return colors[category] || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-orange-500"></div>
            <Zap className="text-orange-500" size={20} />
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-orange-500"></div>
          </div>
          <p className="text-xl text-gray-400">Some of my recent work and innovations</p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="premium-card rounded-xl overflow-hidden hover:scale-105 transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  <div className="absolute top-4 right-4">
                    <div className="bg-yellow-500 text-black px-2 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Star size={14} />
                      <span>Featured</span>
                    </div>
                  </div>
                  
                  <div className="absolute top-4 left-4">
                    <div className={`bg-gradient-to-r ${getCategoryColor(project.category)} text-white px-2 py-1 rounded-full text-sm font-semibold`}>
                      {project.category}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-orange-500 text-black rounded text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-300 hover:text-orange-500 transition-colors"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center space-x-2 text-orange-500 hover:text-orange-400 transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">More Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="premium-card rounded-xl overflow-hidden hover:scale-105 transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  <div className="absolute top-3 left-3">
                    <div className={`bg-gradient-to-r ${getCategoryColor(project.category)} text-white px-2 py-1 rounded text-xs font-semibold`}>
                      {project.category}
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-white mb-2">{project.title}</h4>
                  <p className="text-gray-300 text-sm mb-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
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
                      className="flex items-center space-x-1 text-gray-300 hover:text-orange-500 transition-colors text-sm"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center space-x-1 text-orange-500 hover:text-orange-400 transition-colors text-sm"
                    >
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="premium-card rounded-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Explore More</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Visit my GitHub for the complete portfolio of projects and contributions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/mugunthjc"
                target="_blank"
                rel="noopener noreferrer"
                className="mclaren-button px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center space-x-2"
              >
                <Github size={18} />
                <span>View All Projects</span>
              </a>
              <button className="mclaren-button-outline px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;