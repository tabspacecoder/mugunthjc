import { GraduationCap, Award, Calendar, Trophy, Zap } from 'lucide-react';

const Education = () => {
  const education = [
    {
      institution: 'University College Dublin',
      degree: 'Master of Science in Computer Science',
      duration: '2020 - 2022',
      gpa: '3.9/4.0',
      location: 'Dublin, Ireland',
      description: 'Specialized in Artificial Intelligence and Machine Learning. Thesis on "Advanced Computer Vision for 3D Object Reconstruction".',
      coursework: ['Machine Learning', 'Computer Vision', 'Advanced Algorithms', 'Cloud Computing'],
      achievements: ['Dean\'s List', 'Research Excellence Award']
    },
    {
      institution: 'Anna University',
      degree: 'Bachelor of Engineering in Computer Science',
      duration: '2016 - 2020',
      gpa: '3.8/4.0',
      location: 'Chennai, India',
      description: 'Strong foundation in computer science fundamentals. Active member of coding club.',
      coursework: ['Data Structures', 'Operating Systems', 'Database Systems', 'Web Development'],
      achievements: ['First Class Honours', 'Best Project Award']
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      level: 'Professional'
    },
    {
      name: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: '2022',
      level: 'Professional'
    },
    {
      name: 'Microsoft Azure AI Engineer',
      issuer: 'Microsoft',
      date: '2022',
      level: 'Associate'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Education & Certifications</h2>
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-red-600"></div>
            <GraduationCap className="text-red-600" size={18} />
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-red-600"></div>
          </div>
          <p className="text-lg text-gray-400">My academic journey and professional development</p>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-white mb-8 flex items-center space-x-2">
            <GraduationCap size={20} className="text-red-600" />
            <span>Education</span>
          </h3>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="ferrari-card rounded-xl p-6 hover:scale-105 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                    <p className="text-red-600 font-semibold">{edu.institution}</p>
                    <p className="text-gray-300 text-sm">{edu.location}</p>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:text-right">
                    <div className="flex items-center space-x-2 text-gray-300 mb-2 text-sm">
                      <Calendar size={14} />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">
                      GPA: {edu.gpa}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{edu.description}</p>
                
                {edu.achievements && (
                  <div className="mb-4">
                    <h5 className="text-white font-semibold mb-2 text-sm">Achievements:</h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, achIndex) => (
                        <span
                          key={achIndex}
                          className="px-2 py-1 bg-yellow-600 text-white rounded text-xs font-semibold"
                        >
                          🏆 {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <div>
                  <h5 className="text-white font-semibold mb-2 text-sm">Key Coursework:</h5>
                  <div className="flex flex-wrap gap-1">
                    {edu.coursework.map((course, courseIndex) => (
                      <span
                        key={courseIndex}
                        className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs hover:bg-red-600/20 hover:text-red-400 transition-colors"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-white mb-8 flex items-center space-x-2">
            <Award size={20} className="text-red-600" />
            <span>Professional Certifications</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="ferrari-card rounded-xl p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-md font-bold text-white flex-1">{cert.name}</h4>
                  <div className="bg-purple-600 text-white px-2 py-1 rounded text-xs font-semibold">
                    {cert.level}
                  </div>
                </div>
                <p className="text-red-600 font-semibold mb-2 text-sm">{cert.issuer}</p>
                <span className="text-gray-300 text-sm">{cert.date}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="ferrari-card rounded-xl p-8">
            <h3 className="text-xl font-bold text-white mb-4">Continuous Learning</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Committed to lifelong learning and staying updated with the latest technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="ferrari-button px-6 py-3 rounded-lg font-medium transition-all duration-300">
                View Resume
              </button>
              <button className="ferrari-button-outline px-6 py-3 rounded-lg font-medium transition-all duration-300">
                Academic Transcripts
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;