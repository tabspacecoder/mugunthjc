import { Heart, Target, Zap, Award, Code2, Rocket } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 hexagon-pattern opacity-20"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold racing-text mb-6">ABOUT THE ENGINEER</h2>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-orange-500"></div>
            <Code2 className="text-orange-500" size={24} />
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-orange-500"></div>
          </div>
          <p className="text-xl chrome-text">Precision, Performance, and Innovation</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative">
            <div className="premium-card p-8 rounded-2xl">
              <div className="w-80 h-80 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 rounded-2xl mx-auto flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent"></div>
                <span className="text-8xl font-bold text-black relative z-10">MJ</span>
                <div className="absolute bottom-4 right-4 w-8 h-8 bg-green-400 rounded-full border-4 border-black flex items-center justify-center">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-3xl font-bold racing-text mb-6">MUGUNTH JANGAMASAMUDRAM CHANDIRASEKARAN</h3>
            <p className="text-gray-300 text-lg leading-relaxed font-medium">
              A precision-focused <span className="mclaren-accent">Software Engineer</span> with expertise in 
              building high-performance applications. Like a McLaren F1 car, every line of code is 
              engineered for maximum efficiency and elegance.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed font-medium">
              Specializing in <span className="mclaren-accent">AI/ML solutions</span>, full-stack development, 
              and cloud architecture. I believe in continuous optimization and staying ahead of the 
              technological curve, just like McLaren's racing philosophy.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="premium-card p-4 rounded-xl">
                <div className="flex items-center space-x-3">
                  <Award className="text-orange-500" size={24} />
                  <div>
                    <div className="text-white font-bold">3+ Years</div>
                    <div className="text-gray-400 text-sm">Experience</div>
                  </div>
                </div>
              </div>
              <div className="premium-card p-4 rounded-xl">
                <div className="flex items-center space-x-3">
                  <Rocket className="text-orange-500" size={24} />
                  <div>
                    <div className="text-white font-bold">15+ Projects</div>
                    <div className="text-gray-400 text-sm">Delivered</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              <span className="px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-black rounded-full text-sm font-bold">INNOVATIVE</span>
              <span className="px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-black rounded-full text-sm font-bold">PRECISION-DRIVEN</span>
              <span className="px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-black rounded-full text-sm font-bold">PERFORMANCE-FOCUSED</span>
              <span className="px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-black rounded-full text-sm font-bold">TEAM LEADER</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="premium-card rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300">
            <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
              <Heart size={32} className="text-black" />
            </div>
            <h4 className="text-2xl font-bold racing-text mb-4">PASSION</h4>
            <p className="text-gray-300 leading-relaxed">
              Driven by the pursuit of technological excellence. Every project is an opportunity 
              to push boundaries and create solutions that make a real impact.
            </p>
          </div>

          <div className="premium-card rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300">
            <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
              <Zap size={32} className="text-black" />
            </div>
            <h4 className="text-2xl font-bold racing-text mb-4">PERFORMANCE</h4>
            <p className="text-gray-300 leading-relaxed">
              Optimizing every algorithm, every query, every user interaction. Performance 
              isn't just a feature—it's the foundation of exceptional software.
            </p>
          </div>

          <div className="premium-card rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300">
            <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
              <Target size={32} className="text-black" />
            </div>
            <h4 className="text-2xl font-bold racing-text mb-4">PRECISION</h4>
            <p className="text-gray-300 leading-relaxed">
              Every line of code serves a purpose. Clean architecture, scalable solutions, 
              and attention to detail that rivals McLaren's engineering standards.
            </p>
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="premium-card rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold racing-text mb-6">ENGINEERING PHILOSOPHY</h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              "Like McLaren's approach to Formula 1, I believe in the perfect balance of 
              innovation, precision, and performance. Every solution is crafted with 
              meticulous attention to detail and optimized for peak efficiency."
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="chrome-text font-bold uppercase tracking-widest">MUGUNTH J C</span>
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;