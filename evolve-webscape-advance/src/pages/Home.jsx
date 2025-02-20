import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

// Custom cursor glow effect
const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <div 
      className="fixed w-8 h-8 pointer-events-none z-50 mix-blend-screen"
      style={{
        left: `${position.x - 16}px`,
        top: `${position.y - 16}px`,
        background: 'radial-gradient(circle, rgba(59,130,246,0.5) 0%, rgba(0,0,0,0) 70%)',
        filter: 'blur(4px)',
      }}
    />
  );
};

const TypewriterText = () => {
  const [text, setText] = useState('');
  const fullText = '< Welcome to CSI! >';
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(current => current + fullText[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText('');
        setIndex(0);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <motion.span
      className="font-mono text-blue-400"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0 }}
    >
      {text}
    </motion.span>
  );
};

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <CustomCursor />
      
     

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-gray-900 to-gray-800" />
        <div className="absolute inset-0">
          <div className="grid grid-cols-12 gap-4 opacity-10">
            {Array.from({ length: 100 }).map((_, i) => (
              <div
                key={i}
                className="h-8 bg-blue-500/20 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <TypewriterText />
          </motion.h1>
          
          <motion.p
            className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
            {...fadeInUp}
          >
            Join the most innovative tech community on campus. We code, create, and collaborate.
          </motion.p>
          
          <motion.button
            className="px-8 py-3 bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Us
          </motion.button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              initial: {},
              animate: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {[
              {
                title: 'Workshops',
                description: 'Learn from industry experts and gain hands-on experience with cutting-edge technologies.',
                icon: '🚀'
              },
              {
                title: 'Networking',
                description: 'Connect with like-minded individuals and build relationships with industry professionals.',
                icon: '🤝'
              },
              {
                title: 'Innovation Challenges',
                description: 'Participate in hackathons and coding competitions to showcase your skills.',
                icon: '💡'
              }
            ].map((feature, index) => (
              <motion.div
  key={index}
  className="p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all group shadow-lg"
  variants={fadeInUp}
  whileHover={{
    scale: 1.05,
    boxShadow: "0px 0px 20px rgba(59, 130, 246, 0.6)",
  }}
>
  <div className="text-4xl mb-4">{feature.icon}</div>
  <h3 className="text-xl font-semibold mb-3 text-blue-400">{feature.title}</h3>
  <p className="text-gray-400">{feature.description}</p>
</motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-blue-400">Contact Us</h4>
              <p className="text-gray-400">Email: contact@csiclub.com</p>
              <p className="text-gray-400">Location: Tech Building, Room 101</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 text-blue-400">Follow Us</h4>
              <div className="flex space-x-4">
                {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;