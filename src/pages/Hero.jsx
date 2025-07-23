import { ChevronDown, Github, Linkedin, Mail, Code, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import SplitText from '../components/SplitText';
import mugunth from '../assets/mugunth.jpg';

const Hero = ({ setActiveSection }) => {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center section-spacing relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 rounded-full bg-purple-500/10"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 rounded-full bg-purple-400/10"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-12 h-12 rounded-full bg-purple-600/10"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
      </div>

      <div className="page-container relative z-10">
        <motion.div 
          className="content-center max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Image with Modern Design */}
          <motion.div 
            className="relative mb-8"
            variants={itemVariants}
          >
            <div className="relative w-32 h-32 mx-auto">
              <div className="w-full h-32 bg-gradient-to-br from-purple-500 to-purple-700 rounded-3xl flex items-center justify-center overflow-hidden shadow-2xl">
                <img
                  src={mugunth}
                  alt="Mugunth Jangamasamudram Chandirasekaran"
                  className="w-28 h-28 object-cover rounded-2xl"
                />
              </div>
              <motion.div 
                className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-black flex items-center justify-center"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles size={12} className="text-black" />
              </motion.div>
            </div>
          </motion.div>
          
          {/* Main Content */}
          <motion.div className="space-y-8 mb-12" variants={itemVariants}>
            <div className="space-y-4">
              <SplitText
                text="I'm Mugunth J C, Product Designer"
                className="text-4xl md:text-6xl font-bold text-center leading-tight"
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
              
              <motion.div 
                className="flex items-center justify-center space-x-3 mb-6"
                variants={itemVariants}
              >
                <div className="w-12 h-0.5 bg-purple-500"></div>
                <Code className="text-purple-500" size={20} />
                <div className="w-12 h-0.5 bg-purple-500"></div>
              </motion.div>
            </div>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </motion.p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            variants={itemVariants}
          >
            <motion.button 
              onClick={() => setActiveSection('projects')}
              className="btn-primary inline-flex items-center space-x-2 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Download CV</span>
              <ArrowRight size={20} />
            </motion.button>
            <motion.button 
              className="btn-secondary inline-flex items-center space-x-2 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View Work</span>
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex justify-center space-x-6 mb-16"
            variants={itemVariants}
          >
            {[
              { icon: Github, href: "https://github.com/mugunthjc", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/mugunthjc", label: "LinkedIn" },
              { icon: Mail, href: "mailto:jc.mugunth@gmail.com", label: "Email" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:bg-purple-500 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-16"
            variants={containerVariants}
          >
            {[
              { number: "3+", label: "Years Experience" },
              { number: "15+", label: "Projects Completed" },
              { number: "100%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="modern-card text-center hover-lift"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold text-purple-500 mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            className="animate-bounce"
            variants={itemVariants}
          >
            <div className="flex flex-col items-center space-y-2 cursor-pointer"
              onClick={() => {
                window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
              }}
            >
              <span className="text-gray-500 text-sm">Explore More</span>
              <ChevronDown size={24} className="text-purple-500" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;