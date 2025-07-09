import { useState } from 'react';
import Navigation from './components/Navigation.jsx';
import Hero from './pages/Hero.jsx';
import About from './pages/About.jsx';
import Skills from './pages/Skills.jsx';
import Projects from './pages/Projects.jsx';
import Experience from './pages/Experience.jsx';
import Education from './pages/Education.jsx';
import Contact from './pages/Contact.jsx';
import Footer from './components/Footer.jsx';
import ClickSpark from './animations/ClickSpark.jsx';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Hero />;
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <Projects />;
      case 'experience':
        return <Experience />;
      case 'education':
        return <Education />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-red-950 via-black to-gray-900">
    {/* F1 Racing Background Elements */}
    <div className="absolute inset-0 opacity-10">
      {/* Racing stripes */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-white to-red-500"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-white to-red-500"></div>
      
      {/* Checkered flag pattern */}
      <div className="absolute top-10 right-10 w-32 h-20 opacity-20">
        <div className="grid grid-cols-8 grid-rows-4 w-full h-full">
          {Array.from({ length: 32 }, (_, i) => (
            <div
              key={i}
              className={`${
                (Math.floor(i / 8) + (i % 8)) % 2 === 0 ? 'bg-white' : 'bg-black'
              }`}
            ></div>
          ))}
        </div>
      </div>
      
      {/* Speed lines */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-red-400 to-transparent animate-pulse"
            style={{
              top: `${10 + i * 4}%`,
              left: `${-20 + (i % 3) * 10}%`,
              width: `${60 + (i % 4) * 20}%`,
              animationDelay: `${i * 0.1}s`,
              opacity: 0.3 - (i * 0.01)
            }}
          ></div>
        ))}
      </div>
      
      {/* Circuit track curves */}
      <svg className="absolute bottom-0 left-0 w-full h-64 opacity-20" viewBox="0 0 1200 300">
        <path
          d="M0,150 Q300,50 600,150 T1200,150"
          stroke="url(#trackGradient)"
          strokeWidth="4"
          fill="none"
        />
        <defs>
          <linearGradient id="trackGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#ef4444" />
          </linearGradient>
        </defs>
      </svg>
    </div>
    
    {/* Dynamic racing particles */}
    <div className="absolute inset-0 pointer-events-none">
      {Array.from({ length: 15 }, (_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-red-400 rounded-full animate-ping"
          style={{
            top: `${20 + (i * 5)}%`,
            left: `${5 + (i % 5) * 20}%`,
            animationDelay: `${i * 0.3}s`,
            animationDuration: '2s'
          }}
        ></div>
      ))}
    </div>
    
    {/* Gradient overlay for depth */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
    <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="relative z-10">
        <ClickSpark
          sparkColor='#DC143C'
          sparkSize={8}
          sparkRadius={15}
          sparkCount={5}
          duration={400}
        >
          <div className="page-enter page-enter-active">
            {renderSection()}
          </div>
        </ClickSpark>
      </main>
      <Footer />
    </div>
  );
}

export default App;