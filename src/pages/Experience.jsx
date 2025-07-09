import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'TechCorp Solutions',
      position: 'Senior Full Stack Developer',
      duration: 'Jan 2022 - Present',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: [
        'Led a team of 5 developers in building scalable web applications using React and Node.js',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Mentored junior developers and conducted code reviews',
        'Collaborated with product managers and designers to deliver high-quality features'
      ],
      technologies: ['React', 'Node.js', 'JavaScript', 'AWS', 'PostgreSQL', 'Docker']
    },
    {
      company: 'StartupXYZ',
      position: 'Full Stack Developer',
      duration: 'Jun 2020 - Dec 2021',
      location: 'Remote',
      type: 'Full-time',
      description: [
        'Developed MVP for a fintech startup serving 10,000+ users',
        'Built RESTful APIs and integrated third-party payment systems',
        'Optimized database queries improving app performance by 40%',
        'Participated in agile development process and sprint planning'
      ],
      technologies: ['Vue.js', 'Express.js', 'MongoDB', 'Stripe API', 'Redis']
    },
    {
      company: 'Digital Agency Pro',
      position: 'Frontend Developer',
      duration: 'Aug 2019 - May 2020',
      location: 'New York, NY',
      type: 'Full-time',
      description: [
        'Created responsive websites for 20+ clients using modern web technologies',
        'Collaborated with designers to implement pixel-perfect UI/UX designs',
        'Improved website loading speeds by 50% through optimization techniques',
        'Maintained and updated existing client websites'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Sass', 'Webpack']
    },
    {
      company: 'InnovateTech',
      position: 'Frontend Developer Intern',
      duration: 'Jun 2019 - Aug 2019',
      location: 'Boston, MA',
      type: 'Internship',
      description: [
        'Assisted in developing internal tools for project management',
        'Learned modern web development frameworks and best practices',
        'Contributed to code documentation and testing procedures',
        'Participated in daily standups and team meetings'
      ],
      technologies: ['React', 'JavaScript', 'HTML', 'CSS', 'Git']
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-400">My journey in the tech industry</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-purple-600"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12">
              {/* Timeline dot */}
              <div className="absolute left-6 w-4 h-4 bg-purple-600 rounded-full border-4 border-slate-900"></div>
              
              <div className="ml-20">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{exp.position}</h3>
                      <div className="flex items-center space-x-2 text-purple-400 mt-1">
                        <Building size={16} />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>
                    <div className="mt-2 sm:mt-0">
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        exp.type === 'Internship' 
                          ? 'bg-orange-600 text-white' 
                          : 'bg-green-600 text-white'
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
                        <span className="text-purple-400 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-sm"
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
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Ready for New Opportunities</h3>
            <p className="text-gray-300 mb-6">
              I'm always excited to work on challenging projects and collaborate with talented teams. 
              Let's discuss how I can contribute to your organization's success.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;