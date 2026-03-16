import React from 'react';
import { motion } from 'framer-motion';
import { RESUME_LINK } from '../constants';

const Hero: React.FC = () => {
  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl"
      >
        <motion.p variants={itemVariants} className="text-accent text-lg font-mono mb-4">
          Hi, my name is
        </motion.p>
        <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl md:text-7xl font-bold text-gray-900 dark:text-lightest-slate">
          Arjun Kadam.
        </motion.h1>
        <motion.h2 variants={itemVariants} className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-800 dark:text-slate mt-2">
          Full Stack MERN Developer.
        </motion.h2>
        <motion.p variants={itemVariants} className="mt-6 max-w-2xl text-xl text-gray-700 dark:text-slate leading-relaxed">
          Building <span className="text-accent font-semibold">scalable</span>, <span className="text-accent font-semibold">secure</span>, and <span className="text-accent font-semibold">production-ready</span> web applications using the MERN stack.
        </motion.p>
        <motion.div variants={itemVariants} className="mt-12 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="#projects"
            onClick={scrollToProjects}
            className="text-center border border-accent bg-accent text-navy px-8 py-4 rounded-md hover:bg-opacity-80 transition-colors duration-300 font-mono text-lg font-bold"
          >
            View Projects
          </a>
           <a
            href={RESUME_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center border border-accent text-accent px-8 py-4 rounded-md hover:bg-accent/10 transition-colors duration-300 font-mono text-lg"
          >
            Download Resume
          </a>
          <button
            onClick={scrollToContact}
            className="text-gray-700 dark:text-light-slate hover:text-accent transition-colors duration-300 font-mono text-lg px-8 py-4"
          >
            Contact Me &rarr;
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;