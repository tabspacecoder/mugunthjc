import { ChevronDown, Github, Linkedin, Mail, Code } from 'lucide-react';
import SplitText from '../components/SplitText';
import mugunth from '../assets/mugunth.jpg';

const Hero = ({ setActiveSection }) => {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center section-spacing">
      <div className="page-container">
        <div className="content-center max-w-4xl mx-auto">
          {/* Minimal Avatar */}
          <div className="relative w-24 h-24 mx-auto mb-8">
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden shadow-lg">
              <img
                src={mugunth}
                alt="Mugunth Jangamasamudram Chandirasekaran"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-black"></div>
          </div>
          
          {/* Main Content */}
          <div className="space-y-6 mb-12">
            <SplitText
              text="Mugunth Jangamasamudram Chandirasekaran"
              className="text-3xl md:text-4xl font-bold text-center"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />
            
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-8 h-0.5 bg-white"></div>
              <Code className="text-white" size={18} />
              <div className="w-8 h-0.5 bg-white"></div>
            </div>
            
            <p className="text-xl text-gray-300 mb-6">
              Software Engineer & AI Specialist
            </p>
            
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Building innovative solutions with precision and performance. 
              Passionate about clean code and cutting-edge technology.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/mugunthjc"
              target="_blank"
              rel="noopener noreferrer"
              className="tech-card p-3 rounded-lg hover-lift"
            >
              <Github size={20} className="text-gray-300" />
            </a>
            <a
              href="https://linkedin.com/in/mugunthjc"
              target="_blank"
              rel="noopener noreferrer"
              className="tech-card p-3 rounded-lg hover-lift"
            >
              <Linkedin size={20} className="text-gray-300" />
            </a>
            <a
              href="mailto:jc.mugunth@gmail.com"
              className="tech-card p-3 rounded-lg hover-lift"
            >
              <Mail size={20} className="text-gray-300" />
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={() => setActiveSection('projects')}
              className="btn-primary"
            >
              View Work
            </button>
            <button className="btn-secondary">
              Get Resume
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-md mx-auto mb-16">
            <div className="tech-card text-center">
              <div className="text-xl font-bold text-white mb-1">3+</div>
              <div className="text-gray-400 text-sm">Years</div>
            </div>
            <div className="tech-card text-center">
              <div className="text-xl font-bold text-white mb-1">15+</div>
              <div className="text-gray-400 text-sm">Projects</div>
            </div>
            <div className="tech-card text-center">
              <div className="text-xl font-bold text-white mb-1">100%</div>
              <div className="text-gray-400 text-sm">Quality</div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <div className="flex flex-col items-center space-y-2 cursor-pointer"
              onClick={() => {
                window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
              }}
            >
              <span className="text-gray-500 text-sm">Explore</span>
              <ChevronDown size={20} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;