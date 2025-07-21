import { Heart, Target, Zap, Award, Code2, User, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import ProfileCard from '../components/ProfileCard';
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
        {Array.from({ length: 8 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {i % 3 === 0 ? (
              <User size={8} className="text-blue-500" />
            ) : i % 3 === 1 ? (
              <Code2 size={6} className="text-blue-400" />
            ) : (
              <div className="w-1 h-1 bg-blue-500 rounded-full" />
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
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-blue-600"></div>
            <Code2 className="text-blue-600" size={18} />
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-blue-600"></div>
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
              With expertise in <span className="text-blue-600">modern technologies</span> and a commitment 
              to continuous learning, I deliver solutions that make a real impact.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="tech-card p-4">
                <div className="flex items-center space-x-3">
                  <Award className="text-blue-600" size={18} />
                  <div>
                    <div className="text-white font-semibold">3+ Years</div>
                    <div className="text-gray-400 text-sm">Experience</div>
                  </div>
                </div>
              </div>
              
              <div className="tech-card p-4">
                <div className="flex items-center space-x-3">
                  <Code2 className="text-blue-600" size={18} />
                  <div>
                    <div className="text-white font-semibold">15+ Projects</div>
                    <div className="text-gray-400 text-sm">Completed</div>
                  </div>
                </div>
              </div>
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
            <div className="tech-card text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={20} className="text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">My Passion</h4>
              <p className="text-gray-300 text-sm">
                Driven by the pursuit of technological excellence and creating 
                solutions that make a meaningful impact.
              </p>
            </div>
          </motion.div>

          <motion.div variants={cardVariants}>
            <div className="tech-card text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap size={20} className="text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">What Drives Me</h4>
              <p className="text-gray-300 text-sm">
                The challenge of turning complex problems into elegant solutions 
                with performance and user experience at the core.
              </p>
            </div>
          </motion.div>

          <motion.div variants={cardVariants}>
            <div className="tech-card text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target size={20} className="text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">Future Goals</h4>
              <p className="text-gray-300 text-sm">
                To lead innovative projects and contribute to the next generation 
                of technology solutions.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;