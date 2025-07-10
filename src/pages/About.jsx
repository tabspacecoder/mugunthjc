import { Heart, Target, Zap, Award, Code2, User, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import ProfileCard from '../components/ProfileCard';
import SpotlightCard from '../components/SpotlightCard';
import mugunthjc from '../assets/mugunthjc.PNG';
import mugunth from '../assets/mugunth.jpg';

const About = ({ setActiveSection }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Minimal floating elements */}
      <div className="absolute inset-0 opacity-5">
        {Array.from({ length: 12 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              x: [0, 10, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {i % 4 === 0 ? (
              <User size={10} className="text-red-500" />
            ) : i % 4 === 1 ? (
              <Code2 size={8} className="text-red-400" />
            ) : i % 4 === 2 ? (
              <Briefcase size={12} className="text-red-600" />
            ) : (
              <div className="w-1 h-1 bg-red-500 rounded-full" />
            )}
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-red-600"></div>
            <Code2 className="text-red-600" size={18} />
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-red-600"></div>
          </div>
          <p className="text-lg text-gray-400">Get to know who I am and what drives me</p>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="relative"
            variants={itemVariants}
          >
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
              onContactClick={() => setActiveSection('contact')}
            />
          </motion.div>
          
          <motion.div 
            className="space-y-6"
            variants={itemVariants}
          >
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
              <SpotlightCard 
                className="p-4 border-red-600/20 bg-black/40"
                spotlightColor="rgba(220, 20, 60, 0.15)"
              >
                <div className="flex items-center space-x-3">
                  <Award className="text-red-600" size={18} />
                  <div>
                    <div className="text-white font-semibold">3+ Years</div>
                    <div className="text-gray-400 text-sm">Experience</div>
                  </div>
                </div>
              </SpotlightCard>
              
              <SpotlightCard 
                className="p-4 border-red-600/20 bg-black/40"
                spotlightColor="rgba(220, 20, 60, 0.15)"
              >
                <div className="flex items-center space-x-3">
                  <Code2 className="text-red-600" size={18} />
                  <div>
                    <div className="text-white font-semibold">15+ Projects</div>
                    <div className="text-gray-400 text-sm">Completed</div>
                  </div>
                </div>
              </SpotlightCard>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={cardVariants}>
            <SpotlightCard 
              className="text-center border-red-600/20 bg-black/40"
              spotlightColor="rgba(220, 20, 60, 0.15)"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={20} className="text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">My Passion</h4>
              <p className="text-gray-300 text-sm">
                Driven by the pursuit of technological excellence and creating 
                solutions that make a meaningful impact.
              </p>
            </SpotlightCard>
          </motion.div>

          <motion.div variants={cardVariants}>
            <SpotlightCard 
              className="text-center border-red-600/20 bg-black/40"
              spotlightColor="rgba(220, 20, 60, 0.15)"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap size={20} className="text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">What Drives Me</h4>
              <p className="text-gray-300 text-sm">
                The challenge of turning complex problems into elegant solutions 
                with performance and user experience at the core.
              </p>
            </SpotlightCard>
          </motion.div>

          <motion.div variants={cardVariants}>
            <SpotlightCard 
              className="text-center border-red-600/20 bg-black/40"
              spotlightColor="rgba(220, 20, 60, 0.15)"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target size={20} className="text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">Future Goals</h4>
              <p className="text-gray-300 text-sm">
                To lead innovative projects and contribute to the next generation 
                of technology solutions.
              </p>
            </SpotlightCard>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;