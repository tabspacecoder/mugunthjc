import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/80 backdrop-blur-sm border-t border-orange-500/30 py-8 racing-stripe">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-gray-300 font-medium">Engineered with</span>
            <Heart size={20} className="text-orange-500" />
            <span className="text-gray-300 font-medium">and</span>
            <Code size={20} className="text-orange-500" />
            <span className="text-gray-300 font-medium">by</span>
            <span className="text-orange-500 font-bold">MUGUNTH</span>
          </div>
          <p className="text-gray-400 text-sm font-medium tracking-wide">
            © 2025 Mugunth Jangamasamudram Chandirasekaran. All rights reserved.
          </p>
          <div className="mt-4 flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <span className="text-xs text-gray-500 uppercase tracking-widest">Racing Performance Portfolio</span>
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;