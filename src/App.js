import React, { useState, useEffect  } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import TransferSection from './components/TransferSection';
import PaymentSection from './components/PaymentSection';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import './styles.css';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <Header toggleDarkMode={toggleDarkMode} />
      <Hero />
      <Features />
      <HowItWorks />
      <TransferSection />
      <PaymentSection />
      <Testimonials />
      <FAQ />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
