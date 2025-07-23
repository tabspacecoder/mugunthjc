import { Heart, Target, Zap, Award, Code2, User } from 'lucide-react';
import { motion } from 'framer-motion';
import SpotlightCard from '../components/SpotlightCard';
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

  return (
    <div className="min-h-screen section-spacing">
      <div className="page-container">
        {/* Header */}
        <motion.div 
          className="content-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-0.5 bg-white"></div>
            <Code2 className="text-white" size={18} />
            <div className="w-12 h-0.5 bg-white"></div>
          </div>
          <p className="text-lg text-gray-400">Get to know who I am and what drives me</p>
        </motion.div>

        {/* Main Content */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Card */}
          <motion.div 
            className="flex justify-center"
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
          
          {/* About Content */}
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
              With expertise in modern technologies and a commitment 
              to continuous learning, I deliver solutions that make a real impact.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-6">
              <SpotlightCard className="p-4">
                <div className="flex items-center space-x-3">
                  <Award className="text-white" size={18} />
                  <div>
                    <div className="text-white font-semibold">3+ Years</div>
                    <div className="text-gray-400 text-sm">Experience</div>
                  </div>
                </div>
              </SpotlightCard>
              
              <SpotlightCard className="p-4">
                <div className="flex items-center space-x-3">
                  <Code2 className="text-white" size={18} />
                  <div>
                    <div className="text-white font-semibold">15+ Projects</div>
                    <div className="text-gray-400 text-sm">Completed</div>
                  </div>
                </div>
              </SpotlightCard>
            </div>
          </motion.div>
        </motion.div>

        {/* Values Section */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <SpotlightCard className="text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={20} className="text-black" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">My Passion</h4>
              <p className="text-gray-300 text-sm">
                Driven by the pursuit of technological excellence and creating 
                solutions that make a meaningful impact.
              </p>
            </SpotlightCard>
          </motion.div>

          <motion.div variants={itemVariants}>
            <SpotlightCard className="text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap size={20} className="text-black" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">What Drives Me</h4>
              <p className="text-gray-300 text-sm">
                The challenge of turning complex problems into elegant solutions 
                with performance and user experience at the core.
              </p>
            </SpotlightCard>
          </motion.div>

          <motion.div variants={itemVariants}>
            <SpotlightCard className="text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Target size={20} className="text-black" />
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