import { Calendar, MapPin, Building, Trophy, Zap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'TechCorp Solutions',
      position: 'Senior Software Engineer',
      duration: 'Jan 2022 - Present',
      location: 'Dublin, Ireland',
      type: 'Full-time',
      description: [
        'Led development of AI-powered applications serving 50,000+ users',
        'Architected scalable cloud solutions using AWS services',
        'Mentored junior developers and established coding standards',
        'Improved system performance by 40% through optimization'
      ],
      technologies: ['React', 'Node.js', 'Python', 'AWS', 'DynamoDB', 'Docker'],
      achievements: ['Team Lead', 'Performance Award 2023']
    },
    {
      company: 'Innovation Labs',
      position: 'Full Stack Developer',
      duration: 'Jun 2021 - Dec 2021',
      location: 'Remote',
      type: 'Full-time',
      description: [
        'Developed computer vision applications using OpenCV and Python',
        'Built responsive web applications with React and Node.js',
        'Implemented real-time data processing systems',
        'Collaborated with cross-functional teams in agile environment'
      ],
      technologies: ['Python', 'OpenCV', 'React', 'Node.js', 'MySQL'],
      achievements: ['Innovation Award', 'Best Project 2021']
    },
    {
      company: 'StartupXYZ',
      position: 'Software Developer Intern',
      duration: 'Jan 2021 - May 2021',
      location: 'Bangalore, India',
      type: 'Internship',
      description: [
        'Contributed to IoT dashboard development using Raspberry Pi',
        'Implemented edge computing solutions for real-time monitoring',
        'Participated in code reviews and testing procedures',
        'Learned modern development practices and frameworks'
      ],
      technologies: ['Raspberry Pi', 'Python', 'JavaScript', 'IoT'],
      achievements: ['Outstanding Intern', 'Full-time Offer']
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Professional Experience</h2>
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-orange-500"></div>
            <Trophy className="text-orange-500" size={20} />
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-orange-500"></div>
          </div>
          <p className="text-xl text-gray-400">My journey in the tech industry</p>
        </div>

        <div className="relative">
          {/* Racing Timeline */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 via-orange-600 to-orange-500"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12">
              {/* Racing Flag Marker */}
              <div className="absolute left-6 w-6 h-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full border-4 border-black shadow-lg"></div>
              
              <div className="ml-20">
                <div className="premium-card rounded-xl p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                      <div className="flex items-center space-x-2 text-orange-500 mt-1">
                        <Building size={16} />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                    </div>
                    <div className="mt-2 sm:mt-0">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        exp.type === 'Internship' 
                          ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white' 
                          : 'bg-gradient-to-r from-green-500 to-green-600 text-white'
                      }`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-300 mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-300 flex items-start space-x-2">
                        <Zap size={16} className="text-orange-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.achievements && (
                    <div className="mb-4">
                      <h5 className="text-white font-semibold mb-2">Key Achievements:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <span
                            key={achIndex}
                            className="px-2 py-1 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded text-sm font-semibold"
                          >
                            🏆 {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-sm hover:bg-orange-500/20 hover:text-orange-400 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="premium-card rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Ready for New Challenges</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Always excited to work on innovative projects and collaborate with talented teams. 
              Let's discuss how I can contribute to your organization's success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="mclaren-button px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Get In Touch
              </button>
              <button className="mclaren-button-outline px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;