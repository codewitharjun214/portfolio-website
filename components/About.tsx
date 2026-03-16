import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
  };

  const textItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-gray-900 dark:text-lightest-slate mb-12 flex items-center"
      >
        About Me
        <span className="flex-grow h-px bg-gray-200 dark:bg-lightest-navy ml-4"></span>
      </motion.h2>
      
      <div className="grid md:grid-cols-5 gap-12 items-start max-w-6xl mx-auto">
        {/* Text Content */}
        <motion.div
          className="md:col-span-3 text-gray-700 dark:text-slate space-y-4 text-lg"
          variants={textContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p variants={textItemVariants}>
            I am a <span className="text-accent font-medium">Full Stack MERN Developer</span> with hands-on experience in developing, testing, and deploying modern web applications. I enjoy solving real-world problems using clean and scalable code.
          </motion.p>
          <motion.p variants={textItemVariants}>
            I have worked on multiple full-stack projects involving React, Node.js, Express, and MongoDB, where I implemented <span className="text-accent">REST APIs</span>, <span className="text-accent">JWT-based authentication</span>, role-based access control, and full frontend-backend integration.
          </motion.p>
          <motion.p variants={textItemVariants}>
            I am passionate about continuous learning and currently looking for internship or entry-level opportunities where I can contribute as well as grow as a software developer.
          </motion.p>
          <motion.p variants={textItemVariants} className="pt-4 font-mono text-sm text-accent">
            Technologies I use:
          </motion.p>
          <motion.ul variants={textItemVariants} className="grid grid-cols-2 gap-2 font-mono text-sm">
            <li className="flex items-center"><span className="text-accent mr-2">▹</span>React.js</li>
            <li className="flex items-center"><span className="text-accent mr-2">▹</span>JavaScript (ES6+)</li>
            <li className="flex items-center"><span className="text-accent mr-2">▹</span>Node.js & Express</li>
            <li className="flex items-center"><span className="text-accent mr-2">▹</span>MongoDB & MySQL</li>
            <li className="flex items-center"><span className="text-accent mr-2">▹</span>JWT & Security</li>
            <li className="flex items-center"><span className="text-accent mr-2">▹</span>Git & GitHub</li>
          </motion.ul>
        </motion.div>

        {/* Image - Fully Static */}
        <div className="md:col-span-2 relative">
          <div className="relative rounded-lg overflow-hidden shadow-xl border border-gray-200 dark:border-lightest-navy">
            <img
              src="https://i.postimg.cc/MKdm6PsD/Whats-App-Image-2025-09-23-at-21-30-54-15394d08.jpg"
              alt="Arjun Kadam - Profile Picture"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;