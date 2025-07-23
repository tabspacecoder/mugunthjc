import { Heart, Target, Zap, Award, Code2, User, Sparkles } from 'lucide-react';
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

  const services = [
    {
      title: "Service 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: <Code2 size={24} />
    },
    {
      title: "Service 2", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: <Target size={24} />
    },
    {
      title: "Service 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: <Zap size={24} />
    }
  ];

  return (
    <div className="min-h-screen section-spacing relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-16 h-16 rounded-full bg-purple-500/10"
          animate={{ y: [-10, 10, -10], rotate: [0, 180, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-12 h-12 rounded-full bg-purple-400/10"
          animate={{ y: [10, -10, 10], rotate: [360, 180, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="page-container relative z-10">
        {/* Header */}
        <motion.div 
          className="content-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About</h2>
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-16 h-0.5 bg-purple-500"></div>
            <User className="text-purple-500" size={20} />
            <div className="w-16 h-0.5 bg-purple-500"></div>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Get to know who I am and what drives my passion for technology
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-16 items-center mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Card */}
          <motion.div 
            className="flex justify-center"
            variants={itemVariants}
          >
            <div className="relative">
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
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles size={16} className="text-white" />
              </motion.div>
            </div>
          </motion.div>
          
          {/* About Content */}
          <motion.div 
            className="space-y-8"
            variants={itemVariants}
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                I'm Jon Dawson, Product Designer
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                  quis nostrud exercitation ullamco laboris.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <motion.div 
                className="modern-card hover-lift"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                    <Award className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-white font-bold text-xl">3+</div>
                    <div className="text-gray-400 text-sm">Years Experience</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="modern-card hover-lift"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                    <Code2 className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-white font-bold text-xl">15+</div>
                    <div className="text-gray-400 text-sm">Projects Done</div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.button 
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              MY EXPERTISE
            </h3>
            <h4 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Innovative Solutions
            </h4>
            <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <div className="service-card group">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                      {service.icon}
                    </div>
                    <motion.div
                      className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
                      whileHover={{ rotate: 45 }}
                    >
                      <Zap size={16} />
                    </motion.div>
                  </div>
                  <h5 className="text-xl font-bold mb-4">{service.title}</h5>
                  <p className="text-white/80 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;