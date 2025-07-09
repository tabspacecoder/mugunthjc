import { ChevronDown, Github, Linkedin, Mail, Code } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Avatar */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          <div className="w-full h-full bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-4xl font-bold text-black shadow-lg">
            MJ
          </div>
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full blur opacity-20"></div>
          <div className="absolute top-1 right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-black"></div>
        </div>
        
        {/* Main Content */}
        <div className="space-y-6 mb-12">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">
            Mugunth J C
          </h1>
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-orange-500"></div>
            <Code className="text-orange-500" size={20} />
            <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-orange-500"></div>
          </div>
          <p className="text-xl sm:text-2xl text-gray-300 mb-6">
            Software Engineer & AI Specialist
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Crafting innovative solutions in software development and artificial intelligence. 
            Passionate about building scalable applications with clean, efficient code.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 mb-12">
          <a
            href="https://github.com/mugunthjc"
            target="_blank"
            rel="noopener noreferrer"
            className="premium-card p-3 rounded-lg transition-all duration-300 hover:scale-110"
          >
            <Github size={24} className="text-white hover:text-orange-500 transition-colors" />
          </a>
          <a
            href="https://linkedin.com/in/mugunthjc"
            target="_blank"
            rel="noopener noreferrer"
            className="premium-card p-3 rounded-lg transition-all duration-300 hover:scale-110"
          >
            <Linkedin size={24} className="text-white hover:text-orange-500 transition-colors" />
          </a>
          <a
            href="mailto:jc.mugunth@gmail.com"
            className="premium-card p-3 rounded-lg transition-all duration-300 hover:scale-110"
          >
            <Mail size={24} className="text-white hover:text-orange-500 transition-colors" />
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="mclaren-button px-8 py-3 rounded-lg font-semibold transition-all duration-300">
            View Projects
          </button>
          <button className="mclaren-button-outline px-8 py-3 rounded-lg font-semibold transition-all duration-300">
            Download Resume
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto mb-16">
          <div className="premium-card p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-orange-500 mb-1">3+</div>
            <div className="text-gray-400 text-sm">Years</div>
          </div>
          <div className="premium-card p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-orange-500 mb-1">15+</div>
            <div className="text-gray-400 text-sm">Projects</div>
          </div>
          <div className="premium-card p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-orange-500 mb-1">100%</div>
            <div className="text-gray-400 text-sm">Quality</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <button
            type="button"
            aria-label="Scroll to explore"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            className="focus:outline-none"
          >
            <div className="flex flex-col items-center space-y-2">
              <span className="text-gray-400 text-sm">Explore</span>
              <ChevronDown size={24} className="text-orange-500" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;