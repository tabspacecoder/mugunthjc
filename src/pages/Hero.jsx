import { ChevronDown, Github, Linkedin, Mail, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background racing elements */}
      <div className="absolute inset-0 hexagon-pattern opacity-30"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-orange-500/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="mb-12">
          {/* Premium avatar with McLaren styling */}
          <div className="relative w-40 h-40 mx-auto mb-8">
            <div className="w-full h-full bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 rounded-full flex items-center justify-center text-5xl font-bold text-black shadow-2xl">
              <span className="racing-text text-black">MJ</span>
            </div>
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full blur opacity-30 animate-pulse"></div>
            <div className="absolute top-2 right-2 w-6 h-6 bg-green-400 rounded-full border-2 border-black flex items-center justify-center">
              <div className="w-2 h-2 bg-black rounded-full"></div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-7xl font-bold racing-text mb-4">
              MUGUNTH J C
            </h1>
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-orange-500"></div>
              <Zap className="text-orange-500" size={24} />
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-orange-500"></div>
            </div>
            <p className="text-xl sm:text-3xl chrome-text mb-8 font-medium">
              SOFTWARE ENGINEER & AI SPECIALIST
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
              Precision-engineered solutions in <span className="mclaren-accent">Software Development</span> and 
              <span className="mclaren-accent"> Artificial Intelligence</span>. 
              Building high-performance applications with racing-inspired excellence.
            </p>
          </div>
        </div>

        {/* Premium social links */}
        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com/mugunthjc"
            target="_blank"
            rel="noopener noreferrer"
            className="premium-card p-4 rounded-xl transition-all duration-300 hover:scale-110 group"
          >
            <Github size={28} className="text-white group-hover:text-orange-500 transition-colors" />
          </a>
          <a
            href="https://linkedin.com/in/mugunthjc"
            target="_blank"
            rel="noopener noreferrer"
            className="premium-card p-4 rounded-xl transition-all duration-300 hover:scale-110 group"
          >
            <Linkedin size={28} className="text-white group-hover:text-orange-500 transition-colors" />
          </a>
          <a
            href="mailto:jc.mugunth@gmail.com"
            className="premium-card p-4 rounded-xl transition-all duration-300 hover:scale-110 group"
          >
            <Mail size={28} className="text-white group-hover:text-orange-500 transition-colors" />
          </a>
        </div>

        {/* Premium action buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <button className="mclaren-button px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300">
            VIEW PROJECTS
          </button>
          <button className="mclaren-button-outline px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300">
            DOWNLOAD CV
          </button>
        </div>

        {/* Performance stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-16">
          <div className="premium-card p-6 rounded-xl text-center performance-indicator">
            <div className="text-3xl font-bold mclaren-accent mb-2">3+</div>
            <div className="text-gray-300 font-medium uppercase tracking-wider text-sm">Years Experience</div>
          </div>
          <div className="premium-card p-6 rounded-xl text-center performance-indicator">
            <div className="text-3xl font-bold mclaren-accent mb-2">15+</div>
            <div className="text-gray-300 font-medium uppercase tracking-wider text-sm">Projects Completed</div>
          </div>
          <div className="premium-card p-6 rounded-xl text-center performance-indicator">
            <div className="text-3xl font-bold mclaren-accent mb-2">100%</div>
            <div className="text-gray-300 font-medium uppercase tracking-wider text-sm">Client Satisfaction</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce">
          <button
            type="button"
            aria-label="Scroll to explore"
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
            className="focus:outline-none group"
          >
            <div className="flex flex-col items-center space-y-2">
              <span className="text-gray-400 text-sm uppercase tracking-widest font-medium">Explore</span>
              <ChevronDown size={32} className="text-orange-500 group-hover:text-orange-400 transition-colors" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;