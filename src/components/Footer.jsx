import { Heart, Code, Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/mugunthjc", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/mugunthjc", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/mugunthjc", label: "Twitter" },
    { icon: Mail, href: "mailto:jc.mugunth@gmail.com", label: "Email" }
  ];

  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="page-container">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-sm">JD</span>
              </div>
              <span className="text-xl font-bold text-white">Portfolio</span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              Creating beautiful and functional digital experiences with passion and precision.
            </p>
          </div>

          {/* Made with love */}
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <span className="text-gray-400">Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart size={16} className="text-red-500 fill-current" />
              </motion.div>
              <span className="text-gray-400">and</span>
              <Code size={16} className="text-purple-500" />
            </div>
            <p className="text-gray-500 text-sm">
              © 2025 Mugunth J C. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-2xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-500 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            Designed & Developed with modern technologies • Dublin, Ireland
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;