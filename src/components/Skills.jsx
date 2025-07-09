import { Code, Database, Globe, Palette, Server, Smartphone } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={24} />,
      title: 'Frontend Development',
      skills: ['React', 'JavaScript', 'Next.js', 'Vue.js', 'HTML5', 'CSS3', 'Tailwind CSS'],
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: <Server size={24} />,
      title: 'Backend Development',
      skills: ['Node.js', 'Python', 'Express.js', 'Django', 'REST APIs', 'GraphQL'],
      color: 'from-green-400 to-green-600'
    },
    {
      icon: <Database size={24} />,
      title: 'Database & Cloud',
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'AWS', 'Docker', 'Kubernetes'],
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: <Smartphone size={24} />,
      title: 'Mobile Development',
      skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Cross-platform'],
      color: 'from-pink-400 to-pink-600'
    },
    {
      icon: <Palette size={24} />,
      title: 'Design & Tools',
      skills: ['Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'UI/UX Design'],
      color: 'from-orange-400 to-orange-600'
    },
    {
      icon: <Globe size={24} />,
      title: 'DevOps & Others',
      skills: ['Git', 'GitHub Actions', 'CI/CD', 'Testing', 'Agile', 'Scrum'],
      color: 'from-teal-400 to-teal-600'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
          <p className="text-xl text-gray-400">Tools and technologies I work with</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mb-4 text-white`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-sm hover:bg-slate-600 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-800/50 backdrop-blur-sm rounded-xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Proficiency Levels</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { skill: 'JavaScript/React', level: 95 },
              { skill: 'HTML/CSS/Tailwind', level: 90 },
              { skill: 'Node.js/Express', level: 85 },
              { skill: 'Python/Django', level: 80 },
              { skill: 'UI/UX Design', level: 75 },
              { skill: 'DevOps/Cloud', level: 70 }
            ].map((item, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-white font-medium">{item.skill}</span>
                  <span className="text-purple-400">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;