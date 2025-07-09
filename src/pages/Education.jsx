import { GraduationCap, Award, BookOpen, Calendar, Trophy, Zap } from 'lucide-react';

const Education = () => {
  const education = [
    {
      institution: 'University College Dublin',
      degree: 'Master of Science in Computer Science',
      duration: '2020 - 2022',
      gpa: '3.9/4.0',
      location: 'Dublin, Ireland',
      description: 'Specialized in Artificial Intelligence and Machine Learning. Thesis on "Advanced Computer Vision for 3D Object Reconstruction".',
      coursework: ['Machine Learning', 'Computer Vision', 'Advanced Algorithms', 'Cloud Computing', 'Software Engineering'],
      achievements: ['Dean\'s List', 'Research Excellence Award']
    },
    {
      institution: 'Anna University',
      degree: 'Bachelor of Engineering in Computer Science',
      duration: '2016 - 2020',
      gpa: '3.8/4.0',
      location: 'Chennai, India',
      description: 'Strong foundation in computer science fundamentals. Active member of coding club and tech societies.',
      coursework: ['Data Structures', 'Operating Systems', 'Database Systems', 'Web Development', 'Mobile Computing'],
      achievements: ['First Class Honours', 'Best Project Award', 'Coding Competition Winner']
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      credentialId: 'AWS-SAA-2023-001',
      level: 'Professional'
    },
    {
      name: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: '2022',
      credentialId: 'GCP-PD-2022-002',
      level: 'Professional'
    },
    {
      name: 'Microsoft Azure AI Engineer',
      issuer: 'Microsoft',
      date: '2022',
      credentialId: 'AZ-AI-2022-003',
      level: 'Associate'
    },
    {
      name: 'Oracle Java SE 11 Developer',
      issuer: 'Oracle',
      date: '2021',
      credentialId: 'OCP-JAVA-2021-004',
      level: 'Professional'
    }
  ];

  const achievements = [
    'Dean\'s List for 6 consecutive semesters',
    'Winner of International AI/ML Competition 2022',
    'Published research paper on "3D Object Reconstruction Techniques"',
    'Teaching Assistant for Machine Learning course',
    'Google Summer of Code participant 2021',
    'Best Final Year Project Award',
    'University Coding Championship Winner'
  ];

  const getCertificationColor = (level) => {
    const colors = {
      'Professional': 'from-purple-500 to-purple-600',
      'Associate': 'from-blue-500 to-blue-600',
      'Expert': 'from-red-500 to-red-600'
    };
    return colors[level] || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Education & Certifications</h2>
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-orange-500"></div>
            <GraduationCap className="text-orange-500" size={20} />
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-orange-500"></div>
          </div>
          <p className="text-xl text-gray-400">My academic journey and professional development</p>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center space-x-2">
            <GraduationCap size={24} className="text-orange-500" />
            <span>Education</span>
          </h3>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="premium-card rounded-xl p-6 hover:scale-105 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                    <p className="text-orange-500 font-semibold text-lg">{edu.institution}</p>
                    <p className="text-gray-300">{edu.location}</p>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:text-right">
                    <div className="flex items-center space-x-2 text-gray-300 mb-2">
                      <Calendar size={16} />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      GPA: {edu.gpa}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">{edu.description}</p>
                
                {edu.achievements && (
                  <div className="mb-4">
                    <h5 className="text-white font-semibold mb-2">Achievements:</h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, achIndex) => (
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
                
                <div>
                  <h5 className="text-white font-semibold mb-2">Key Coursework:</h5>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, courseIndex) => (
                      <span
                        key={courseIndex}
                        className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-sm hover:bg-orange-500/20 hover:text-orange-400 transition-colors"
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
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center space-x-2">
            <Award size={24} className="text-orange-500" />
            <span>Professional Certifications</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="premium-card rounded-xl p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg font-bold text-white flex-1">{cert.name}</h4>
                  <div className={`bg-gradient-to-r ${getCertificationColor(cert.level)} text-white px-2 py-1 rounded text-xs font-semibold`}>
                    {cert.level}
                  </div>
                </div>
                <p className="text-orange-500 font-semibold mb-2">{cert.issuer}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">{cert.date}</span>
                  <span className="text-xs text-gray-400">ID: {cert.credentialId}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Achievements */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center space-x-2">
            <Trophy size={24} className="text-orange-500" />
            <span>Academic Achievements</span>
          </h3>
          
          <div className="premium-card rounded-xl p-6">
            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-gray-300 flex items-start space-x-3">
                  <Zap size={16} className="text-orange-500 mt-1 flex-shrink-0" />
                  <span>{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="premium-card rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Continuous Learning</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I believe in lifelong learning and staying updated with the latest technologies. 
              Currently pursuing advanced AI/ML certifications and exploring emerging tech trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="mclaren-button px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                View Full Resume
              </button>
              <button className="mclaren-button-outline px-8 py-3 rounded-lg font-semibold transition-all duration-300">
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