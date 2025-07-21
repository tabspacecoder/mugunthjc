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

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Hero setActiveSection={setActiveSection} />;
      case 'about':
        return <About setActiveSection={setActiveSection}/>;
      case 'skills':
        return <Skills setActiveSection={setActiveSection}/>;
      case 'projects':
        return <Projects setActiveSection={setActiveSection}/>;
      case 'experience':
        return <Experience setActiveSection={setActiveSection}/>;
      case 'education':
        return <Education setActiveSection={setActiveSection}/>;
      case 'contact':
        return <Contact setActiveSection={setActiveSection}/>;
      default:
        return <Hero setActiveSection={setActiveSection}/>;
    }
  };

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white relative overflow-hidden">
      {/* Minimal grid overlay */}
      <div className="fixed inset-0 grid-overlay opacity-30 pointer-events-none" />
      
      {/* Subtle gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-emerald-500/5 pointer-events-none" />
      
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="relative z-10">
        <div className="fade-in">
          {renderSection()}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;