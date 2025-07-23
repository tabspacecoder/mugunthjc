import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, MessageSquare, Send, Clock, CheckCircle, User } from 'lucide-react';
import { motion } from 'framer-motion';
import SpotlightCard from '../components/SpotlightCard';
import Stepper, { Step } from '../components/Stepper.jsx';
import emailjs from 'emailjs-com';
import { RingLoader } from 'react-spinners';

const Contact = ({ setActiveSection }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    setLoading(true);
    emailjs.send(
      'email_sending_service',
      'email_sending_template',
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      'uRx4ypKgSm7_enI5f'
    )
    .then((result) => {
      alert('✅ Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    })
    .catch((error) => {
      console.error(error.text);
      alert('❌ Failed to send message. Please try again.');
    })
    .finally(() => {
      setLoading(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email Address',
      value: 'jc.mugunth@gmail.com',
      link: 'mailto:jc.mugunth@gmail.com',
      description: 'Send me an email anytime!'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone Number',
      value: '+353 (0) 123-4567',
      link: 'tel:+353123456789',
      description: 'Call me for urgent matters'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Dublin, Ireland',
      link: '#',
      description: 'Available for remote work'
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: 'GitHub',
      url: 'https://github.com/mugunthjc',
      color: 'hover:bg-gray-700'
    },
    {
      icon: <Linkedin size={24} />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/mugunthjc',
      color: 'hover:bg-blue-600'
    },
    {
      icon: <Twitter size={24} />,
      name: 'Twitter',
      url: 'https://twitter.com/mugunthjc',
      color: 'hover:bg-blue-500'
    }
  ];

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
    <div className="min-h-screen section-spacing relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-32 right-20 w-28 h-28 rounded-full bg-purple-500/5"
          animate={{ 
            y: [-25, 25, -25], 
            rotate: [0, 360],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-32 left-20 w-20 h-20 rounded-full bg-purple-400/5"
          animate={{ 
            y: [25, -25, 25], 
            rotate: [360, 0],
            scale: [1.3, 1, 1.3]
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full bg-purple-600/5"
          animate={{ 
            y: [-15, 15, -15], 
            x: [-15, 15, -15],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="page-container relative z-10">
        {/* Header */}
        <motion.div 
          className="content-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Lets Connect there</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Ready to start your next project or just want to chat? I'd love to hear from you. 
            Let's create something amazing together.
          </p>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants}>
            <div className="space-y-8 mb-12">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  <SpotlightCard className="group">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-white mb-2">{info.title}</h4>
                        <p className="text-purple-400 font-semibold mb-1">{info.value}</p>
                        <p className="text-gray-400 text-sm">{info.description}</p>
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div 
              className="mb-12"
              variants={itemVariants}
            >
              <h4 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                <User className="text-purple-500" size={24} />
                <span>Follow Me</span>
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center text-gray-300 transition-all duration-300 ${social.color}`}
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability Status */}
            <motion.div variants={itemVariants}>
              <SpotlightCard>
                <h4 className="text-xl font-bold text-white mb-6 flex items-center space-x-3">
                  <Clock className="text-purple-500" size={20} />
                  <span>Availability Status</span>
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <motion.div 
                      className="w-3 h-3 bg-green-400 rounded-full"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-gray-300">Available for new projects</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <motion.div 
                      className="w-3 h-3 bg-green-400 rounded-full"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    />
                    <span className="text-gray-300">Open to collaborations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <span className="text-gray-300">Responds within 24 hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle size={12} className="text-purple-400" />
                    <span className="text-gray-300">Remote work friendly</span>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">Send Message</h3>
              <p className="text-gray-400">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>
            </div>
            
            {!loading ? (
              <Stepper
                initialStep={1}
                onStepChange={(step) => {
                  console.log(step);
                }}
                onFinalStepCompleted={handleSubmit}
                backButtonText="Previous"
                nextButtonText="Next"
              >
                <Step>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-white font-semibold text-lg mb-3">
                        What's your name?
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-gray-900 border border-gray-700 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-lg"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>
                </Step>
                
                <Step>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="email" className="block text-white font-semibold text-lg mb-3">
                        Your email address?
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-gray-900 border border-gray-700 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-lg"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                </Step>
                
                <Step>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="subject" className="block text-white font-semibold text-lg mb-3">
                        What's this about?
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-gray-900 border border-gray-700 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-lg"
                        placeholder="Project collaboration, Job opportunity, etc."
                      />
                    </div>
                  </div>
                </Step>
                
                <Step isFinal>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="message" className="block text-white font-semibold text-lg mb-3">
                        Tell me more about your project
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-6 py-4 bg-gray-900 border border-gray-700 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none text-lg"
                        placeholder="Describe your project, timeline, budget, and any specific requirements..."
                      />
                    </div>
                  </div>
                </Step>
              </Stepper>
            ) : (
              <div className="flex items-center justify-center py-32">
                <div className="text-center">
                  <RingLoader loading color="#8B5CF6" size={80} />
                  <p className="text-white mt-6 text-lg">Sending your message...</p>
                  <p className="text-gray-400 mt-2">This won't take long</p>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;