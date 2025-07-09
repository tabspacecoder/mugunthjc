import { Heart, Target, Zap } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-xl text-gray-400">Get to know who I am and what drives me</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl mx-auto mb-8 flex items-center justify-center">
              <span className="text-6xl font-bold text-white">JD</span>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Hello, I'm John Doe</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm a passionate full-stack developer with over 3 years of experience in building 
              web applications that combine beautiful design with robust functionality. I love 
              turning complex problems into simple, elegant solutions.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or mentoring aspiring developers. I believe in continuous 
              learning and staying updated with the latest industry trends.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm">Creative</span>
              <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm">Problem Solver</span>
              <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm">Team Player</span>
              <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm">Lifelong Learner</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart size={24} className="text-white" />
            </div>
            <h4 className="text-xl font-semibold text-white mb-3">My Passion</h4>
            <p className="text-gray-300">
              I'm passionate about creating digital experiences that make a difference. 
              Technology has the power to solve real problems and improve lives.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap size={24} className="text-white" />
            </div>
            <h4 className="text-xl font-semibold text-white mb-3">What Drives Me</h4>
            <p className="text-gray-300">
              The challenge of turning ideas into reality through code. Every project 
              is an opportunity to learn something new and push the boundaries.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target size={24} className="text-white" />
            </div>
            <h4 className="text-xl font-semibold text-white mb-3">Future Goals</h4>
            <p className="text-gray-300">
              To become a tech lead, contribute to open-source projects, and mentor 
              the next generation of developers while building impactful products.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;