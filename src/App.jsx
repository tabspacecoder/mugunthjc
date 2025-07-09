import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-40 h-40 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 mx-auto mb-8 flex items-center justify-center text-5xl font-black text-black shadow-2xl relative overflow-hidden" style={{clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)'}}>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent"></div>
            <span className="relative z-10">MJ</span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-black text-white mb-4 tracking-tight">
            MUGUNTH <span className="text-orange-500">JC</span>
          </h1>
          <p className="text-xl sm:text-2xl text-orange-400 mb-8 font-bold uppercase tracking-widest">
            Software Engineer & AI Specialist
          </p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            Engineering high-performance digital solutions with precision and innovation. 
            Specializing in <span className="text-orange-400 font-semibold">AI/ML</span>, 
            <span className="text-orange-400 font-semibold"> Full-Stack Development</span>, and 
            <span className="text-orange-400 font-semibold"> Cloud Architecture</span>.
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="#"
            className="p-4 bg-black/80 hover:bg-orange-500/20 border border-orange-500/30 hover:border-orange-500 transition-all duration-300 group"
            style={{clipPath: 'polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)'}}
          >
            <Github size={24} className="text-white group-hover:text-orange-400 transition-colors" />
          </a>
          <a
            href="#"
            className="p-4 bg-black/80 hover:bg-orange-500/20 border border-orange-500/30 hover:border-orange-500 transition-all duration-300 group"
            style={{clipPath: 'polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)'}}
          >
            <Linkedin size={24} className="text-white group-hover:text-orange-400 transition-colors" />
          </a>
          <a
            href="#"
            className="p-4 bg-black/80 hover:bg-orange-500/20 border border-orange-500/30 hover:border-orange-500 transition-all duration-300 group"
            style={{clipPath: 'polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)'}}
          >
            <Mail size={24} className="text-white group-hover:text-orange-400 transition-colors" />
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            View My Work
          </button>
          <button className="border border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Download Resume
          </button>
        </div>

        <div className="mt-16 animate-bounce">
        <button
            type="button"
            aria-label="Scroll to bottom"
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
            className="focus:outline-none"
          >
            <ChevronDown size={32} className="text-gray-400 mx-auto" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;