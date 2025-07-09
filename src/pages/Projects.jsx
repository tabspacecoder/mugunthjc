import { ExternalLink, Github, Star, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: '3D Object Reconstruction System',
      description: 'Advanced computer vision system that generates precise 3D models from 2D images.',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'OpenCV', 'Computer Vision', 'ML'],
      github: 'https://github.com/mugunthjc',
      live: '#',
      featured: true
    },
    {
      title: 'Video Streaming Application',
      description: 'High-performance peer-to-peer video streaming platform with real-time protocols.',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Java', 'Socket Programming', 'Real-time'],
      github: 'https://github.com/mugunthjc',
      live: '#',
      featured: true
    },
    {
      title: 'IoT Smart Dashboard',
      description: 'Edge-computing IoT solution for real-time monitoring with Raspberry Pi.',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Raspberry Pi', 'Python', 'IoT'],
      github: 'https://github.com/mugunthjc',
      live: '#',
      featured: false
    },
    {
      title: 'Sign Language Learning App',
      description: 'Educational app using computer vision to teach Indian Sign Language.',
      image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'OpenCV', 'Education Tech'],
      github: 'https://github.com/mugunthjc',
      live: '#',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-red-600"></div>
            <Zap className="text-red-600" size={18} />
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-red-600"></div>
          </div>
          <p className="text-lg text-gray-400">Recent work and innovations</p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="ferrari-card rounded-xl overflow-hidden hover:scale-105 transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                <div className="absolute top-3 right-3">
                  <div className="bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold flex items-center space-x-1">
                    <Star size={12} />
                    <span>Featured</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-red-600 text-white rounded text-xs font-medium"
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
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {otherProjects.map((project, index) => (
            <div
              key={index}
              className="ferrari-card rounded-xl overflow-hidden hover:scale-105 transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-32 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              <div className="p-4">
                <h4 className="text-md font-semibold text-white mb-2">{project.title}</h4>
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
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="ferrari-card rounded-xl p-8 max-w-2xl mx-auto">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;