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
import BackgroundAnimation from './components/BackgroundAnimation.jsx';
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
    <div className="min-h-screen ferrari-gradient ferrari-grid relative">
      <BackgroundAnimation />
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