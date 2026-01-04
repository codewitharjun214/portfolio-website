
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
            },
        },
    };

    // Fix: Explicitly type itemVariants as Variants to ensure 'type: spring' is treated as a valid AnimationGeneratorType
    const itemVariants: Variants = {
        hidden: { opacity: 0, scale: 0.8, y: 20 },
        visible: { 
            opacity: 1, 
            scale: 1, 
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 260,
                damping: 20
            }
        },
    };

    return (
        <section id="skills" className="py-24">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h2 className="text-3xl font-bold text-gray-900 dark:text-lightest-slate mb-12 flex items-center">
                    My Skills
                    <span className="flex-grow h-px bg-gray-300 dark:bg-lightest-navy ml-4"></span>
                </h2>

                <motion.ul
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
                >
                    {SKILLS.map((skill) => (
                        <motion.li
                            key={skill.name}
                            variants={itemVariants}
                            whileHover={{ 
                                scale: 1.05, 
                                y: -10,
                                transition: { duration: 0.2 }
                            }}
                            className="bg-gray-50 dark:bg-light-navy p-6 rounded-lg flex flex-col items-center justify-center space-y-4 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20 relative group overflow-hidden border border-transparent hover:border-accent/30"
                        >
                             {/* Animated Border Decoration */}
                            <span className="absolute top-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 ease-out group-hover:w-full"></span>
                            <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-accent transition-all duration-300 ease-out group-hover:w-full"></span>

                            <motion.div
                                animate={{ 
                                    y: [0, -5, 0],
                                }}
                                transition={{
                                    duration: 3 + Math.random() * 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <skill.icon className="text-5xl text-accent group-hover:text-accent transition-colors duration-300" />
                            </motion.div>
                            
                            <span className="text-gray-700 dark:text-light-slate font-medium font-mono text-sm tracking-wide">
                                {skill.name}
                            </span>
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>
        </section>
    );
};

export default Skills;
