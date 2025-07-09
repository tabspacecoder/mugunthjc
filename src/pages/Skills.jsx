import { Code, Database, Globe, Palette, Server, Smartphone, Cpu, Shield, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={28} />,
      title: 'Frontend Engineering',
      skills: ['React', 'JavaScript', 'TypeScript', 'Next.js', 'Vue.js', 'HTML5', 'CSS3', 'Tailwind CSS'],
      color: 'from-blue-400 to-blue-600',
      level: 95
    },
    {
      icon: <Server size={28} />,
      title: 'Backend Systems',
      skills: ['Node.js', 'Python', 'Java Spring Boot', 'Kotlin', 'Express.js', 'REST APIs', 'GraphQL'],
      color: 'from-green-400 to-green-600',
      level: 90
    },
    {
      icon: <Database size={28} />,
      title: 'Database & Cloud',
      skills: ['MySQL', 'DynamoDB', 'AWS Batch', 'Parameter Store', 'Redis', 'Docker', 'Kubernetes'],
      color: 'from-orange-400 to-orange-600',
      level: 85
    },
    {
      icon: <Cpu size={28} />,
      title: 'AI & Machine Learning',
      skills: ['Python', 'OpenCV', 'Computer Vision', '3D Reconstruction', 'Deep Learning', 'TensorFlow'],
      color: 'from-purple-400 to-purple-600',
      level: 88
    },
    {
      icon: <Smartphone size={28} />,
      title: 'Mobile & IoT',
      skills: ['React Native', 'Raspberry Pi', 'Edge Computing', 'IoT Solutions', 'Real-time Systems'],
      color: 'from-pink-400 to-pink-600',
      level: 80
    },
    {
      icon: <Shield size={28} />,
      title: 'DevOps & Tools',
      skills: ['Git', 'GitHub', 'Postman', 'Docker', 'CI/CD', 'AWS Services', 'Figma'],
      color: 'from-teal-400 to-teal-600',
      level: 82
    }
  ];

  const coreCompetencies = [
    { skill: 'Full-Stack Development', level: 95, category: 'Engineering' },
    { skill: 'AI/ML Implementation', level: 88, category: 'Intelligence' },
    { skill: 'Cloud Architecture', level: 85, category: 'Infrastructure' },
    { skill: 'System Optimization', level: 92, category: 'Performance' },
    { skill: 'Team Leadership', level: 87, category: 'Management' },
    { skill: 'Problem Solving', level: 96, category: 'Analysis' }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 hexagon-pattern opacity-20"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold racing-text mb-6">TECHNICAL ARSENAL</h2>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-orange-500"></div>
            <Zap className="text-orange-500" size={24} />
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-orange-500"></div>
          </div>
          <p className="text-xl chrome-text">High-Performance Technologies & Frameworks</p>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="premium-card rounded-2xl p-8 hover:scale-105 transition-all duration-300 group"
            >
              <div className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-6 text-white group-hover:rotate-12 transition-transform duration-300`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold racing-text mb-4">{category.title}</h3>
              
              {/* Performance indicator */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm chrome-text font-medium">PROFICIENCY</span>
                  <span className="text-orange-500 font-bold">{category.level}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full transition-all duration-1000 performance-indicator"
                    style={{ width: `${category.level}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-black/50 text-gray-300 rounded-full text-sm hover:bg-orange-500/20 hover:text-orange-400 transition-all duration-300 border border-gray-700 hover:border-orange-500/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Core Competencies */}
        <div className="premium-card rounded-2xl p-10 mb-16">
          <h3 className="text-3xl font-bold racing-text mb-8 text-center">CORE COMPETENCIES</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {coreCompetencies.map((item, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-white font-bold text-lg">{item.skill}</span>
                    <div className="text-orange-500 text-sm font-medium uppercase tracking-wider">{item.category}</div>
                  </div>
                  <span className="text-orange-500 font-bold text-xl">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 h-3 rounded-full transition-all duration-1000 performance-indicator"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="premium-card rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
              <Code size={24} className="text-black" />
            </div>
            <h4 className="text-xl font-bold racing-text mb-3">FRONTEND MASTERY</h4>
            <p className="text-gray-300 mb-4">React, TypeScript, Next.js</p>
            <div className="text-orange-500 font-bold text-2xl">95%</div>
          </div>

          <div className="premium-card rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
              <Server size={24} className="text-black" />
            </div>
            <h4 className="text-xl font-bold racing-text mb-3">BACKEND POWER</h4>
            <p className="text-gray-300 mb-4">Node.js, Python, Java Spring</p>
            <div className="text-orange-500 font-bold text-2xl">90%</div>
          </div>

          <div className="premium-card rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
              <Cpu size={24} className="text-black" />
            </div>
            <h4 className="text-xl font-bold racing-text mb-3">AI INNOVATION</h4>
            <p className="text-gray-300 mb-4">Machine Learning, Computer Vision</p>
            <div className="text-orange-500 font-bold text-2xl">88%</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="premium-card rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold racing-text mb-6">READY TO ACCELERATE</h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Let's build something extraordinary together. Every project is an opportunity 
              to push the boundaries of what's possible.
            </p>
            <button className="mclaren-button px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300">
              START A PROJECT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;