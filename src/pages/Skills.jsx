import { Code, Database, Globe, Server, Smartphone, Cpu, Shield, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={24} />,
      title: 'Frontend Development',
      skills: ['React', 'JavaScript', 'TypeScript', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS'],
      color: 'from-blue-500 to-blue-600',
      level: 95
    },
    {
      icon: <Server size={24} />,
      title: 'Backend Development',
      skills: ['Node.js', 'Python', 'Java Spring Boot', 'Kotlin', 'Express.js', 'REST APIs'],
      color: 'from-green-500 to-green-600',
      level: 90
    },
    {
      icon: <Database size={24} />,
      title: 'Database & Cloud',
      skills: ['MySQL', 'DynamoDB', 'AWS Batch', 'Parameter Store', 'Docker', 'AWS'],
      color: 'from-orange-500 to-orange-600',
      level: 85
    },
    {
      icon: <Cpu size={24} />,
      title: 'AI & Machine Learning',
      skills: ['Python', 'OpenCV', 'Computer Vision', '3D Reconstruction', 'Machine Learning'],
      color: 'from-purple-500 to-purple-600',
      level: 88
    },
    {
      icon: <Smartphone size={24} />,
      title: 'Mobile & IoT',
      skills: ['React Native', 'Raspberry Pi', 'Edge Computing', 'IoT Solutions'],
      color: 'from-pink-500 to-pink-600',
      level: 80
    },
    {
      icon: <Shield size={24} />,
      title: 'Tools & DevOps',
      skills: ['Git', 'GitHub', 'Postman', 'Docker', 'CI/CD', 'Figma'],
      color: 'from-teal-500 to-teal-600',
      level: 82
    }
  ];

  const coreCompetencies = [
    { skill: 'Full-Stack Development', level: 95 },
    { skill: 'AI/ML Implementation', level: 88 },
    { skill: 'Cloud Architecture', level: 85 },
    { skill: 'System Design', level: 90 },
    { skill: 'Problem Solving', level: 96 },
    { skill: 'Team Collaboration', level: 92 }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-orange-500"></div>
            <Zap className="text-orange-500" size={20} />
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-orange-500"></div>
          </div>
          <p className="text-xl text-gray-400">Technologies and tools I work with</p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="premium-card rounded-xl p-6 hover:scale-105 transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4 text-white`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{category.title}</h3>
              
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">Proficiency</span>
                  <span className="text-orange-500 font-semibold">{category.level}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2 performance-bar">
                  <div
                    className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${category.level}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-sm hover:bg-orange-500/20 hover:text-orange-400 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Core Competencies */}
        <div className="premium-card rounded-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Core Competencies</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {coreCompetencies.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">{item.skill}</span>
                  <span className="text-orange-500 font-semibold">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2 performance-bar">
                  <div
                    className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="premium-card rounded-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Let's Build Something Great</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Ready to bring your ideas to life with cutting-edge technology and clean, efficient code.
            </p>
            <button className="mclaren-button px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;