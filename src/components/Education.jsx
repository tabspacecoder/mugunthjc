import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      institution: 'Stanford University',
      degree: 'Master of Science in Computer Science',
      duration: '2017 - 2019',
      gpa: '3.8/4.0',
      location: 'Stanford, CA',
      description: 'Specialized in Machine Learning and Software Engineering. Thesis on "Scalable Web Application Architecture".',
      coursework: ['Advanced Algorithms', 'Machine Learning', 'Database Systems', 'Software Engineering', 'Computer Networks']
    },
    {
      institution: 'University of California, Berkeley',
      degree: 'Bachelor of Science in Computer Science',
      duration: '2013 - 2017',
      gpa: '3.7/4.0',
      location: 'Berkeley, CA',
      description: 'Graduated Magna Cum Laude. Active member of ACM and Google Developer Student Club.',
      coursework: ['Data Structures', 'Operating Systems', 'Computer Graphics', 'Web Development', 'Discrete Mathematics']
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      credentialId: 'AWS-SAA-123456'
    },
    {
      name: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: '2022',
      credentialId: 'GCP-PD-789012'
    },
    {
      name: 'Meta React Developer Certificate',
      issuer: 'Meta',
      date: '2021',
      credentialId: 'META-RD-345678'
    }
  ];

  const achievements = [
    'Dean\'s List for 6 consecutive semesters',
    'Winner of University Hackathon 2017',
    'Published research paper on "Efficient Web Scraping Techniques"',
    'Teaching Assistant for Data Structures course',
    'Google Summer of Code participant 2018'
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Education & Certifications</h2>
          <p className="text-xl text-gray-400">My academic journey and professional development</p>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center space-x-2">
            <GraduationCap size={24} className="text-purple-400" />
            <span>Education</span>
          </h3>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
                    <p className="text-purple-400 font-medium">{edu.institution}</p>
                    <p className="text-gray-300 text-sm">{edu.location}</p>
                  </div>
                  <div className="mt-2 sm:mt-0 text-right">
                    <div className="flex items-center space-x-2 text-gray-300">
                      <Calendar size={16} />
                      <span>{edu.duration}</span>
                    </div>
                    <p className="text-green-400 font-medium">GPA: {edu.gpa}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{edu.description}</p>
                
                <div>
                  <h5 className="text-white font-medium mb-2">Key Coursework:</h5>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, courseIndex) => (
                      <span
                        key={courseIndex}
                        className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-sm"
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
            <Award size={24} className="text-purple-400" />
            <span>Certifications</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                <h4 className="text-lg font-semibold text-white mb-2">{cert.name}</h4>
                <p className="text-purple-400 mb-2">{cert.issuer}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">{cert.date}</span>
                  <span className="text-xs text-gray-400">ID: {cert.credentialId}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center space-x-2">
            <BookOpen size={24} className="text-purple-400" />
            <span>Academic Achievements</span>
          </h3>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6">
            <ul className="space-y-3">
              {achievements.map((achievement, index) => (
                <li key={index} className="text-gray-300 flex items-start space-x-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Continuous Learning</h3>
            <p className="text-gray-300 mb-6">
              I believe in lifelong learning and staying updated with the latest technologies. 
              Currently pursuing advanced cloud architecture certifications and exploring AI/ML applications.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              View Full Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;