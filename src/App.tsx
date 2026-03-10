import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import Divider from './components/Divider';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <div className={`${loading ? 'hidden' : 'block'}`}>
        <CustomCursor />
        <Navbar />
        <main>
          <HeroSection />
          <Divider />
          <AboutSection />
          <Divider />
          <SkillsSection />
          <Divider />
          <ExperienceSection />
          <Divider />
          <EducationSection />
          <Divider />
          <PortfolioSection />
          <Divider />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;