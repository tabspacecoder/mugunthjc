import { ExternalLink, Github, Star, Zap, Award, Rocket } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: '3D Object Reconstruction System',
      description: 'Advanced computer vision system that generates precise 3D models from 2D images using cutting-edge algorithms and machine learning techniques.',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'OpenCV', 'Computer Vision', 'Machine Learning', '3D Modeling'],
      github: 'https://github.com/mugunthjc',
      live: '#',
      featured: true,
      category: 'AI/ML',
      performance: '95%'
    },
    {
      title: 'Video Streaming Application',
      description: 'High-performance peer-to-peer video streaming platform built with advanced socket programming and real-time communication protocols.',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Java', 'Socket Programming', 'Real-time Systems', 'P2P Networks'],
      github: 'https://github.com/mugunthjc',
      live: '#',
      featured: true,
      category: 'Systems',
      performance: '92%'
    },
    {
      title: 'IoT Smart Shopping Dashboard',
      description: 'Edge-computing IoT solution for real-time retail monitoring with Raspberry Pi integration and advanced analytics.',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Raspberry Pi', 'Python', 'Edge Computing', 'IoT', 'Real-time Analytics'],
      github: 'https://github.com/mugunthjc',
      live: '#',
      featured: false,
      category: 'IoT',
      performance: '88%'
    },
    {
      title: 'Indian Sign Language Learning App',
      description: 'Educational application using computer vision to teach Indian Sign Language with real-time gesture recognition.',
      image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'OpenCV', 'Machine Learning', 'Computer Vision', 'Education Tech'],
      github: 'https://github.com/mugunthjc',
      live: '#',
      featured: false,
      category: 'Education',
      performance: '90%'
    },
    {
      title: 'AWS Cloud Architecture Solution',
      description: 'Scalable cloud infrastructure using AWS Batch, DynamoDB, and Parameter Store for enterprise-level applications.',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['AWS', 'DynamoDB', 'AWS Batch', 'Parameter Store', 'Cloud Architecture'],
      github: 'https://github.com/mugunthjc',
      live: '#',
      featured: false,
      category: 'Cloud',
      performance: '94%'
    },
    {
      title: 'Full-Stack Web Application',
      description: 'Modern web application with React frontend, Node.js backend, and MySQL database with advanced features.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'MySQL', 'JavaScript', 'Full-Stack'],
      github: 'https://github.com/mugunthjc',
      live: '#',
      featured: false,
      category: 'Web',
      performance: '91%'
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
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 hexagon-pattern opacity-20"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold racing-text mb-6">PROJECT SHOWCASE</h2>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-orange-500"></div>
            <Rocket className="text-orange-500" size={24} />
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-orange-500"></div>
          </div>
          <p className="text-xl chrome-text">Engineering Excellence in Every Solution</p>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold racing-text mb-12 text-center flex items-center justify-center space-x-3">
            <Star className="text-orange-500" size={28} />
            <span>FEATURED PROJECTS</span>
            <Star className="text-orange-500" size={28} />
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-10">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="premium-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  {/* Performance badge */}
                  <div className="absolute top-4 right-4 flex items-center space-x-2">
                    <div className="bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
                      <Zap size={16} />
                      <span>{project.performance}</span>
                    </div>
                  </div>
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <div className={`bg-gradient-to-r ${getCategoryColor(project.category)} text-white px-3 py-1 rounded-full text-sm font-bold`}>
                      {project.category}
                    </div>
                  </div>
                  
                  {/* Featured badge */}
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
                      <Award size={16} />
                      <span>FEATURED</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold racing-text mb-4">{project.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-orange-500 to-orange-600 text-black rounded-full text-sm font-bold"
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
                      className="flex items-center space-x-2 text-gray-300 hover:text-orange-500 transition-colors font-medium"
                    >
                      <Github size={20} />
                      <span>SOURCE CODE</span>
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center space-x-2 text-orange-500 hover:text-orange-400 transition-colors font-medium"
                    >
                      <ExternalLink size={20} />
                      <span>LIVE DEMO</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold racing-text mb-12 text-center">MORE PROJECTS</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="premium-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  <div className="absolute top-3 right-3">
                    <div className="bg-orange-500 text-black px-2 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                      <Zap size={12} />
                      <span>{project.performance}</span>
                    </div>
                  </div>
                  
                  <div className="absolute top-3 left-3">
                    <div className={`bg-gradient-to-r ${getCategoryColor(project.category)} text-white px-2 py-1 rounded-full text-xs font-bold`}>
                      {project.category}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-lg font-bold racing-text mb-3">{project.title}</h4>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-black/50 text-gray-300 rounded text-xs border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-orange-500/20 text-orange-400 rounded text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-gray-300 hover:text-orange-500 transition-colors text-sm font-medium"
                    >
                      <Github size={16} />
                      <span>CODE</span>
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center space-x-1 text-orange-500 hover:text-orange-400 transition-colors text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      <span>DEMO</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="premium-card rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold racing-text mb-6">EXPLORE MORE</h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              These projects represent just a fraction of my engineering capabilities. 
              Visit my GitHub for the complete portfolio of innovations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/mugunthjc"
                target="_blank"
                rel="noopener noreferrer"
                className="mclaren-button px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 inline-flex items-center space-x-2"
              >
                <Github size={20} />
                <span>VIEW ALL PROJECTS</span>
              </a>
              <button className="mclaren-button-outline px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300">
                COLLABORATE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;