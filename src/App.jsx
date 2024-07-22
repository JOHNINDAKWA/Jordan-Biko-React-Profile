import React, { useState, useEffect } from 'react';
import Navbar from './sections/Navbar/Navbar';
import Header from './sections/Header/Header';
import Services from './sections/Services/Services';
import About from './sections/About/About';
import Portfolio from './sections/Portfolio/Portfolio';
import FAQs from './sections/FAQs/FAQs';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import FloatingNav from './sections/FloatingNav/FloatingNav';
import ThemeModal from './components/ThemeModal/ThemeModal';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [theme, setTheme] = useState({
    primaryColor: '270',
    backgroundColor: 'light'
  });

  useEffect(() => {
    const savedPrimaryColor = localStorage.getItem('primaryColor') || '270';
    const savedBackgroundColor = localStorage.getItem('backgroundColor') || 'light';
    setTheme({ primaryColor: savedPrimaryColor, backgroundColor: savedBackgroundColor });

    document.documentElement.style.setProperty('--primary-hue', savedPrimaryColor);
    document.documentElement.style.setProperty('--light-lightness', savedBackgroundColor === 'light' ? '94%' : '15%');
    document.documentElement.style.setProperty('--color-font', savedBackgroundColor === 'light' ? 'hsl(0, 0%, 0%)' : 'hsl(0, 0%, 100%)');
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty('--primary-hue', theme.primaryColor);
    document.documentElement.style.setProperty('--light-lightness', theme.backgroundColor === 'light' ? '94%' : '15%');
    document.documentElement.style.setProperty('--color-font', theme.backgroundColor === 'light' ? 'hsl(0, 0%, 0%)' : 'hsl(0, 0%, 100%)');
  }, [theme]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main>
      <Navbar onThemeIconClick={handleOpenModal} />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <FAQs />
      <Contact />
      <Footer />
      <FloatingNav />
      <ThemeModal isOpen={isModalOpen} onClose={handleCloseModal} setTheme={setTheme} />
    </main>
  );
};

export default App;