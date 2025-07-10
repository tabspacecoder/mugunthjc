import { Heart, Target, Zap, Award, Code2 } from 'lucide-react';
import ProfileCard from '../components/ProfileCard';
import mugunthjc from '../assets/mugunthjc.PNG';
import mugunth from '../assets/mugunth.jpg'; // Ensure this path is correct

const About = () => {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-red-600"></div>
            <Code2 className="text-red-600" size={18} />
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-red-600"></div>
          </div>
          <p className="text-lg text-gray-400">Get to know who I am and what drives me</p>
        </div>
{/* 
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="ferrari-card p-6 rounded-xl">
              <div className="w-72 h-72 bg-gradient-to-br from-red-600 to-red-700 rounded-xl mx-auto flex items-center justify-center relative">
                <span className="text-5xl font-bold text-white">MJ</span>
                <div className="absolute bottom-4 right-4 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
            </div>
          </div> */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className='relative'>
          <ProfileCard
              name="Mugunth"
              title="Developer"
              handle="tabspacecoder"
              status="Online"
              contactText="Contact Me"
              avatarUrl={mugunthjc}
              miniAvatarUrl={mugunth}
              innerGradient="from-red-600 to-red-700"
              outerGradient="from-red-600/20 to-red-700/20"
              enableTilt={true}
              onContactClick={() => console.log('Contact clicked')}
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4">Mugunth Jangamasamudram Chandirasekaran</h3>
            <p className="text-gray-300 leading-relaxed">
              Passionate software engineer specializing in AI/ML solutions and full-stack development. 
              I focus on creating elegant, high-performance applications with clean architecture.
            </p>
            <p className="text-gray-300 leading-relaxed">
              With expertise in <span className="text-red-600">modern technologies</span> and a commitment 
              to continuous learning, I deliver solutions that make a real impact.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="ferrari-card p-4 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Award className="text-red-600" size={18} />
                  <div>
                    <div className="text-white font-semibold">3+ Years</div>
                    <div className="text-gray-400 text-sm">Experience</div>
                  </div>
                </div>
              </div>
              <div className="ferrari-card p-4 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Code2 className="text-red-600" size={18} />
                  <div>
                    <div className="text-white font-semibold">15+ Projects</div>
                    <div className="text-gray-400 text-sm">Completed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="ferrari-card rounded-xl p-6 text-center hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart size={20} className="text-white" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-3">My Passion</h4>
            <p className="text-gray-300 text-sm">
              Driven by the pursuit of technological excellence and creating 
              solutions that make a meaningful impact.
            </p>
          </div>

          <div className="ferrari-card rounded-xl p-6 text-center hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap size={20} className="text-white" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-3">What Drives Me</h4>
            <p className="text-gray-300 text-sm">
              The challenge of turning complex problems into elegant solutions 
              with performance and user experience at the core.
            </p>
          </div>

          <div className="ferrari-card rounded-xl p-6 text-center hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target size={20} className="text-white" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-3">Future Goals</h4>
            <p className="text-gray-300 text-sm">
              To lead innovative projects and contribute to the next generation 
              of technology solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;