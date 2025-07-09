import { Code, Database, Globe, Server, Smartphone, Cpu, Shield, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={20} />,
      title: 'Frontend',
      skills: ['React', 'JavaScript', 'TypeScript', 'Next.js', 'Tailwind CSS'],
      level: 95
    },
    {
      icon: <Server size={20} />,
      title: 'Backend',
      skills: ['Node.js', 'Python', 'Java Spring Boot', 'REST APIs'],
      level: 90
    },
    {
      icon: <Database size={20} />,
      title: 'Database & Cloud',
      skills: ['MySQL', 'DynamoDB', 'AWS', 'Docker'],
      level: 85
    },
    {
      icon: <Cpu size={20} />,
      title: 'AI & ML',
      skills: ['Python', 'OpenCV', 'Computer Vision', 'Machine Learning'],
      level: 88
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Skills & Technologies</h2>
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-red-600"></div>
            <Zap className="text-red-600" size={18} />
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-red-600"></div>
          </div>
          <p className="text-lg text-gray-400">Technologies I work with</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="ferrari-card rounded-xl p-6 hover:scale-105 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-lg flex items-center justify-center mb-4 text-white">
                {category.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{category.title}</h3>
              
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">Proficiency</span>
                  <span className="text-red-600 font-semibold text-sm">{category.level}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-1.5 ferrari-progress">
                  <div
                    className="bg-gradient-to-r from-red-600 to-red-700 h-1.5 rounded-full transition-all duration-1000"
                    style={{ width: `${category.level}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-1">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs hover:bg-red-600/20 hover:text-red-400 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="ferrari-card rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">Ready to Build</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Let's create something exceptional with cutting-edge technology and clean, efficient code.
            </p>
            <button className="ferrari-button px-6 py-3 rounded-lg font-medium transition-all duration-300">
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;