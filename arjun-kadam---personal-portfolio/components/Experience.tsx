import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
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
    <section id="experience" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-lightest-slate mb-12 flex items-center">
          Experience
          <span className="flex-grow h-px bg-gray-300 dark:bg-lightest-navy ml-4"></span>
        </h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-8 max-w-4xl mx-auto"
        >
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gray-50 dark:bg-light-navy p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 dark:hover:shadow-accent/10 relative group overflow-hidden"
            >
              {/* Animated Border Spans */}
              <span className="absolute top-0 left-0 w-0 h-0.5 bg-accent transition-all duration-200 ease-out group-hover:w-full"></span>
              <span className="absolute top-0 right-0 w-0.5 h-0 bg-accent transition-all duration-200 ease-out delay-200 group-hover:h-full"></span>
              <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-accent transition-all duration-200 ease-out delay-400 group-hover:w-full"></span>
              <span className="absolute bottom-0 left-0 w-0.5 h-0 bg-accent transition-all duration-200 ease-out delay-[600ms] group-hover:h-full"></span>

              <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-2">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-lightest-slate group-hover:text-accent transition-colors duration-300">
                    {exp.role} @ <a href={exp.companyLink} target="_blank" rel="noopener noreferrer" aria-label={`Visit the ${exp.company} website`} className="text-accent inline-block relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bottom-0 after:left-0 after:bg-accent after:origin-center after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">{exp.company}</a>
                  </h3>
              </div>
              <ul className="mt-4 space-y-2 text-gray-700 dark:text-slate text-base">
                {exp.description.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-accent mr-3 mt-1">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;