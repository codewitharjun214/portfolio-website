import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-off-white dark:bg-navy text-gray-700 dark:text-light-slate font-sans transition-colors duration-500 min-h-screen relative bg-mesh">
      <Header />
      <main className="px-6 sm:px-12 md:px-24 lg:px-36 xl:px-48 mx-auto relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;