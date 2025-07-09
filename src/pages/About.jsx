import { Heart, Target, Zap, Award, Code2 } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-orange-500"></div>
            <Code2 className="text-orange-500" size={20} />
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-orange-500"></div>
          </div>
          <p className="text-xl text-gray-400">Get to know who I am and what drives me</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="premium-card p-6 rounded-2xl">
              <div className="w-80 h-80 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl mx-auto flex items-center justify-center relative">
                <span className="text-6xl font-bold text-black">MJ</span>
                <div className="absolute bottom-4 right-4 w-6 h-6 bg-green-400 rounded-full border-2 border-black"></div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4">Mugunth Jangamasamudram Chandirasekaran</h3>
            <p className="text-gray-300 leading-relaxed">
              I'm a passionate software engineer with expertise in building high-performance applications. 
              My focus is on creating elegant solutions that combine technical excellence with user-centered design.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Specializing in <span className="text-orange-500">AI/ML solutions</span>, full-stack development, 
              and cloud architecture. I believe in continuous learning and staying at the forefront of technology.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="premium-card p-4 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Award className="text-orange-500" size={20} />
                  <div>
                    <div className="text-white font-semibold">3+ Years</div>
                    <div className="text-gray-400 text-sm">Experience</div>
                  </div>
                </div>
              </div>
              <div className="premium-card p-4 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Code2 className="text-orange-500" size={20} />
                  <div>
                    <div className="text-white font-semibold">15+ Projects</div>
                    <div className="text-gray-400 text-sm">Completed</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              <span className="px-3 py-1 bg-orange-500 text-black rounded-full text-sm font-medium">Innovative</span>
              <span className="px-3 py-1 bg-orange-500 text-black rounded-full text-sm font-medium">Detail-Oriented</span>
              <span className="px-3 py-1 bg-orange-500 text-black rounded-full text-sm font-medium">Team Player</span>
              <span className="px-3 py-1 bg-orange-500 text-black rounded-full text-sm font-medium">Problem Solver</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="premium-card rounded-xl p-6 text-center hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart size={24} className="text-black" />
            </div>
            <h4 className="text-xl font-semibold text-white mb-3">My Passion</h4>
            <p className="text-gray-300">
              Driven by the pursuit of technological excellence. Every project is an opportunity 
              to create solutions that make a meaningful impact.
            </p>
          </div>

          <div className="premium-card rounded-xl p-6 text-center hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap size={24} className="text-black" />
            </div>
            <h4 className="text-xl font-semibold text-white mb-3">What Drives Me</h4>
            <p className="text-gray-300">
              The challenge of turning complex problems into elegant solutions. 
              Performance and user experience are at the heart of everything I build.
            </p>
          </div>

          <div className="premium-card rounded-xl p-6 text-center hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target size={24} className="text-black" />
            </div>
            <h4 className="text-xl font-semibold text-white mb-3">Future Goals</h4>
            <p className="text-gray-300">
              To lead innovative projects, contribute to open-source communities, 
              and mentor the next generation of developers.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="premium-card rounded-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Philosophy</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              "Great software is built on the foundation of clean code, thoughtful design, 
              and a deep understanding of user needs. Every line of code should serve a purpose."
            </p>
            <div className="flex items-center justify-center space-x-2 mt-6">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="text-gray-400 font-medium">Mugunth J C</span>
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;