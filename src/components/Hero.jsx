import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-8 flex items-center justify-center text-4xl font-bold text-white">
            JD
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">
            John Doe
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8">
            Full Stack Developer & UI/UX Designer
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            Passionate about creating beautiful, functional digital experiences that solve real-world problems through clean code and innovative design.
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="#"
            className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors"
          >
            <Github size={24} className="text-white" />
          </a>
          <a
            href="#"
            className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors"
          >
            <Linkedin size={24} className="text-white" />
          </a>
          <a
            href="#"
            className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors"
          >
            <Mail size={24} className="text-white" />
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
          <ChevronDown size={32} className="text-gray-400 mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Hero;