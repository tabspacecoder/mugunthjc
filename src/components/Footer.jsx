import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900/50 backdrop-blur-sm border-t border-slate-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-gray-300">Made with</span>
            <Heart size={20} className="text-red-400" />
            <span className="text-gray-300">and</span>
            <Code size={20} className="text-purple-400" />
            <span className="text-gray-300">by John Doe</span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 John Doe. All rights reserved. Built with React and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;