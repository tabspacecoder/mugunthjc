import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, MessageSquare, Send } from 'lucide-react';
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
      icon: <Mail size={20} />,
      title: 'Email',
      value: 'jc.mugunth@gmail.com',
      link: 'mailto:jc.mugunth@gmail.com'
    },
    {
      icon: <Phone size={20} />,
      title: 'Phone',
      value: '+353 (0) 123-4567',
      link: 'tel:+353123456789'
    },
    {
      icon: <MapPin size={20} />,
      title: 'Location',
      value: 'Dublin, Ireland',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      name: 'GitHub',
      url: 'https://github.com/mugunthjc'
    },
    {
      icon: <Linkedin size={20} />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/mugunthjc'
    },
    {
      icon: <Twitter size={20} />,
      name: 'Twitter',
      url: 'https://twitter.com/mugunthjc'
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
    <div className="min-h-screen section-spacing">
      <div className="page-container">
        {/* Header */}
        <motion.div 
          className="content-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-0.5 bg-white"></div>
            <MessageSquare className="text-white" size={18} />
            <div className="w-12 h-0.5 bg-white"></div>
          </div>
          <p className="text-lg text-gray-400">Let's discuss your next project</p>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold text-white mb-8">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                >
                  <SpotlightCard className="flex items-center space-x-4 p-4">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-black">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{info.title}</h4>
                      <p className="text-gray-300 text-sm">{info.value}</p>
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="mb-8"
              variants={itemVariants}
            >
              <h4 className="text-white font-semibold mb-4 flex items-center space-x-2">
                <Send className="text-white" size={18} />
                <span>Connect With Me</span>
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white text-black rounded-lg hover-lift transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <SpotlightCard>
                <h4 className="text-white font-semibold mb-4">Availability Status</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <motion.div 
                      className="w-2 h-2 bg-green-400 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-gray-300 text-sm">Available for projects</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <motion.div 
                      className="w-2 h-2 bg-green-400 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    />
                    <span className="text-gray-300 text-sm">Open to opportunities</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">Responds within 24 hours</span>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold text-white mb-8">Send Message</h3>  
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
                  <div className="space-y-4">
                    <label htmlFor="name" className="block text-white font-medium text-sm">
                      Your Name
                    </label>
                    <div className='pb-2'>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>
                </Step>
                
                <Step>
                  <div className="space-y-4">
                    <label htmlFor="email" className="block text-white font-medium text-sm">
                      Your Email
                    </label>
                    <div className='pb-2'>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 pb-3 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                </Step>
                
                <Step>
                  <div className="space-y-4">
                    <label htmlFor="subject" className="block text-white font-medium text-sm">
                      Subject
                    </label>
                    <div className='pb-2'>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 pb-3 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300"
                        placeholder="Project collaboration, Job opportunity, etc."
                      />
                    </div>
                  </div>
                </Step>
                
                <Step isFinal>
                  <div className="space-y-4">
                    <label htmlFor="message" className="block text-white font-medium text-sm">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full pb-3 px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                </Step>
              </Stepper>
            ) : (
              <div className="flex items-center justify-center py-20">
                <div className="text-center">
                  <RingLoader loading color="#FFFFFF" size={60} />
                  <p className="text-white mt-4">Sending your message...</p>
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