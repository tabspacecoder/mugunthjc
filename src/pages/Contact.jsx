import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import Stepper, { Step } from '../components/Stepper.jsx';
import emailjs from 'emailjs-com';
import { RingLoader } from 'react-spinners';

const Contact = () => {
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
      'email_sending_service',        // your Email Service ID
      'email_sending_template',     // your Template ID
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      'uRx4ypKgSm7_enI5f'     // your Public Key (User ID)
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
      setFormData({ name: '', email: '', subject: '', message: '' });});
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
      title: 'Email',
      value: 'jc.mugunth@gmail.com',
      link: 'mailto:jc.mugunth@gmail.com'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Dublin, Ireland',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: 'GitHub',
      url: 'https://github.com',
      color: 'hover:text-gray-400'
    },
    {
      icon: <Linkedin size={24} />,
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      color: 'hover:text-blue-400'
    },
    {
      icon: <Twitter size={24} />,
      name: 'Twitter',
      url: 'https://twitter.com',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-400">Let's discuss your next project or opportunity</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center space-x-4 p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl hover:bg-slate-800/70 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{info.title}</h4>
                    <p className="text-gray-300">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mb-8">
              <h4 className="text-white font-medium mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-slate-800/50 backdrop-blur-sm rounded-full text-white transition-all duration-300 hover:bg-slate-800/70 ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-white font-medium mb-4">Availability</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">Available for freelance projects</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">Open to full-time opportunities</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-300">Usually responds within 24 hours</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Send Message</h3>  
            {!loading ? 
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
              <label htmlFor="name" className="block text-white font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your Name"
                  />
            </Step>
            <Step>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="email@email.com"
                  />
            </Step>
            <Step>
                <label htmlFor="subject" className="block text-white font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  placeholder="Let's work together"
                />
            </Step>
            <Step isFinal>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
            </Step>

            </Stepper>
            :<RingLoader loading color='purple-800'/>}
          </div>
  
        </div>
      </div>
    </div>
  );
};

export default Contact;