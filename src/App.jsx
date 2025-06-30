import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import useThemeStore from './store/useThemeStore';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const initTheme = useThemeStore((state) => state.initTheme);
  
  useEffect(() => {
    initTheme();
  }, [initTheme]);
  
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
