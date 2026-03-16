import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub } from 'react-icons/fi';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_1woslov';
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_yhl0igu';
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '4ssf8cenOA5wpwaio';

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!serviceID || !templateID || !publicKey || !form.current) {
        console.error('EmailJS configuration is missing');
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
        return;
    }
    
    setStatus('loading');

    const formData = new FormData(form.current);
    const data = {
      from_name: formData.get('from_name'),
      from_email: formData.get('from_email'),
      message: formData.get('message'),
    };
    
    try {
      // Save to localStorage for demo/local view
      const existingMessages = JSON.parse(localStorage.getItem('contact_messages') || '[]');
      const newMessage = {
        id: Date.now(),
        ...data,
        timestamp: new Date().toISOString(),
      };
      localStorage.setItem('contact_messages', JSON.stringify([...existingMessages, newMessage]));

      // Send via EmailJS
      await emailjs.sendForm(serviceID, templateID, form.current, publicKey);

      // Play notification sound
      const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
      audio.play().catch(err => console.log('Audio play failed:', err));

      console.log('Message saved locally and email sent!');
      setStatus('success');
      form.current?.reset();
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Failed to send message:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: <FiMail className="text-accent" size={24} />,
      label: 'Email',
      value: SOCIAL_LINKS.email,
      href: `mailto:${SOCIAL_LINKS.email}`,
    },
    {
      icon: <FiPhone className="text-accent" size={24} />,
      label: 'Phone',
      value: SOCIAL_LINKS.phone,
      href: `tel:${SOCIAL_LINKS.phone}`,
    },
    {
      icon: <FiMapPin className="text-accent" size={24} />,
      label: 'Location',
      value: 'Maharashtra, India',
      href: 'https://www.google.com/maps/search/Maharashtra,+India',
    },
  ];

  return (
    <section id="contact" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <h2 className="font-mono text-accent mb-2">What's Next?</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-lightest-slate mb-4">Get In Touch</h3>
          <p className="text-gray-700 dark:text-slate max-w-2xl mx-auto">
            I'm open to internship and full-time opportunities. Feel free to reach out if you'd like to collaborate or discuss opportunities!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Details Column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              {contactInfo.map((info, idx) => (
                <motion.a
                  key={idx}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center p-4 bg-gray-50 dark:bg-light-navy rounded-lg border border-transparent hover:border-accent/30 transition-all duration-300 group"
                >
                  <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    {info.icon}
                  </div>
                  <div className="ml-4">
                    <p className="text-xs font-mono text-accent uppercase tracking-wider">{info.label}</p>
                    <p className="text-gray-900 dark:text-lightest-slate font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="pt-8 border-t border-gray-200 dark:border-lightest-navy">
              <h4 className="text-gray-900 dark:text-lightest-slate font-bold mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-light-navy text-gray-700 dark:text-slate hover:text-accent hover:bg-accent/10 rounded-full transition-all duration-300">
                  <FiLinkedin size={20} />
                </a>
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-light-navy text-gray-700 dark:text-slate hover:text-accent hover:bg-accent/10 rounded-full transition-all duration-300">
                  <FiGithub size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-3">
            <form ref={form} onSubmit={sendEmail} className="space-y-6 bg-gray-50 dark:bg-light-navy p-8 rounded-xl border border-gray-200 dark:border-lightest-navy shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-mono text-gray-600 dark:text-slate ml-1">Full Name</label>
                  <input type="text" name="from_name" placeholder="John Doe" required className="w-full bg-white dark:bg-navy p-3 rounded-md border border-gray-300 dark:border-lightest-navy focus:outline-none focus:border-accent text-gray-900 dark:text-lightest-slate transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-mono text-gray-600 dark:text-slate ml-1">Email Address</label>
                  <input type="email" name="from_email" placeholder="john@example.com" required className="w-full bg-white dark:bg-navy p-3 rounded-md border border-gray-300 dark:border-lightest-navy focus:outline-none focus:border-accent text-gray-900 dark:text-lightest-slate transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-mono text-gray-600 dark:text-slate ml-1">Message</label>
                <textarea name="message" placeholder="How can I help you?" required rows={5} className="w-full bg-white dark:bg-navy p-3 rounded-md border border-gray-300 dark:border-lightest-navy focus:outline-none focus:border-accent text-gray-900 dark:text-lightest-slate transition-colors"></textarea>
              </div>
              
              <div className="pt-2">
                 <button type="submit" disabled={status === 'loading'} className="w-full bg-accent text-white py-4 rounded-md hover:bg-accent/90 transition-all duration-300 font-bold tracking-wide shadow-lg shadow-accent/20 disabled:opacity-50 disabled:cursor-not-allowed">
                  {status === 'loading' ? 'Sending Message...' : 'Send Message'}
                </button>
              </div>

              {status === 'success' && <p className="text-center text-green-500 font-medium">Message sent successfully! I'll get back to you soon.</p>}
              {status === 'error' && <p className="text-center text-red-500 font-medium">Failed to send message. Please try again or email me directly.</p>}
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;