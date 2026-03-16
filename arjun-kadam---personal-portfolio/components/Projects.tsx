import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="projects" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-lightest-slate mb-12 flex items-center">
          Things I've Built
          <span className="flex-grow h-px bg-gray-300 dark:bg-lightest-navy ml-4"></span>
        </h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {PROJECTS.map((project) => (
            <motion.article
              key={project.title}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -8 }}
              className="bg-gray-50 dark:bg-light-navy rounded-lg shadow-lg flex flex-col transition-transform duration-300 group overflow-hidden relative"
            >
              {/* Animated Border Spans */}
              <span className="absolute top-0 left-0 w-0 h-0.5 bg-accent transition-all duration-200 ease-out group-hover:w-full"></span>
              <span className="absolute top-0 right-0 w-0.5 h-0 bg-accent transition-all duration-200 ease-out delay-200 group-hover:h-full"></span>
              <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-accent transition-all duration-200 ease-out delay-400 group-hover:w-full"></span>
              <span className="absolute bottom-0 left-0 w-0.5 h-0 bg-accent transition-all duration-200 ease-out delay-[600ms] group-hover:h-full"></span>

              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <header className="flex justify-end items-center mb-4">
                  <div className="flex items-center space-x-4">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub`} className="text-gray-600 dark:text-light-slate hover:text-accent transition-colors duration-300">
                      <FiGithub size={22} />
                    </a>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} Live Demo`} className="text-gray-600 dark:text-light-slate hover:text-accent transition-colors duration-300">
                      <FiExternalLink size={22} />
                    </a>
                  </div>
                </header>
                <h3 className="text-xl font-bold text-gray-900 dark:text-lightest-slate group-hover:text-accent transition-colors duration-300 mt-2 mb-3">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                </h3>
                <p className="text-gray-700 dark:text-slate text-sm mb-4 font-mono">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-x-3 gap-y-1 mt-auto font-mono text-xs text-gray-700 dark:text-slate">
                  {project.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;