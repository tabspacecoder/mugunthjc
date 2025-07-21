import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/90 backdrop-blur-sm border-t border-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-gray-300">Made with</span>
            <Heart size={18} className="text-blue-500" />
            <span className="text-gray-300">and</span>
            <Code size={18} className="text-blue-500" />
            <span className="text-gray-300">by</span>
            <span className="text-blue-500 font-semibold">Mugunth</span>
          </div>
          <p className="text-gray-400 text-sm font-medium tracking-wide">
            © 2025 Mugunth Jangamasamudram Chandirasekaran. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;