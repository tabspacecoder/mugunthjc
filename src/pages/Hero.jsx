import { ChevronDown, Github, Linkedin, Mail, Code } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Minimal Avatar */}
        <div className="relative w-24 h-24 mx-auto mb-8">
          <div className="w-full h-full bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg">
            MJ
          </div>
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-700 rounded-full blur opacity-20"></div>
          <div className="absolute top-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-black"></div>
        </div>
        
        {/* Main Content */}
        <div className="space-y-6 mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 ferrari-text-glow">
            Mugunth J C
          </h1>
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-red-600"></div>
            <Code className="text-red-600" size={18} />
            <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-red-600"></div>
          </div>
          <p className="text-xl text-gray-300 mb-6">
            Software Engineer & AI Specialist
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Building innovative solutions with precision and performance. 
            Passionate about clean code and cutting-edge technology.
          </p>
        </div>

        {/* Minimal Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com/mugunthjc"
            target="_blank"
            rel="noopener noreferrer"
            className="ferrari-card p-3 rounded-lg transition-all duration-300 hover:scale-110"
          >
            <Github size={20} className="text-gray-300 ferrari-hover" />
          </a>
          <a
            href="https://linkedin.com/in/mugunthjc"
            target="_blank"
            rel="noopener noreferrer"
            className="ferrari-card p-3 rounded-lg transition-all duration-300 hover:scale-110"
          >
            <Linkedin size={20} className="text-gray-300 ferrari-hover" />
          </a>
          <a
            href="mailto:jc.mugunth@gmail.com"
            className="ferrari-card p-3 rounded-lg transition-all duration-300 hover:scale-110"
          >
            <Mail size={20} className="text-gray-300 ferrari-hover" />
          </a>
        </div>

        {/* Minimal Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="ferrari-button px-6 py-3 rounded-lg font-medium transition-all duration-300">
            View Work
          </button>
          <button className="ferrari-button-outline px-6 py-3 rounded-lg font-medium transition-all duration-300">
            Get Resume
          </button>
        </div>

        {/* Minimal Stats */}
        <div className="grid grid-cols-3 gap-6 max-w-md mx-auto mb-16">
          <div className="ferrari-card p-4 rounded-lg text-center">
            <div className="text-xl font-bold text-red-600 mb-1">3+</div>
            <div className="text-gray-400 text-sm">Years</div>
          </div>
          <div className="ferrari-card p-4 rounded-lg text-center">
            <div className="text-xl font-bold text-red-600 mb-1">15+</div>
            <div className="text-gray-400 text-sm">Projects</div>
          </div>
          <div className="ferrari-card p-4 rounded-lg text-center">
            <div className="text-xl font-bold text-red-600 mb-1">100%</div>
            <div className="text-gray-400 text-sm">Quality</div>
          </div>
        </div>

        {/* Minimal Scroll Indicator */}
        <div className="animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-gray-500 text-sm">Explore</span>
            <ChevronDown size={20} className="text-red-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;