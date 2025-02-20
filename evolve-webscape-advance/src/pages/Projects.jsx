import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Users, Code } from 'lucide-react';
import campus from "/src/assets/IMG_2509.jpg";
import b from "/src/assets/IMG_2511.jpg";
import ai from "/src/assets/IMG_2515.jpg";

// Reusable CustomCursor component
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

// Typewriter animation component
const TypewriterText = () => {
  const [text, setText] = useState('');
  const fullText = '< Projects >';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1)); // Directly slicing from fullText
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

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

// Sample projects data
const initialProjects = [
  {
    id: 1,
    title: "AI-Powered Study Assistant",
    description: "An intelligent study companion that uses machine learning to adapt to individual learning styles and provide personalized study recommendations.",
    longDescription: "Our AI Study Assistant leverages cutting-edge machine learning algorithms to create a truly personalized learning experience. It analyzes study patterns, identifies knowledge gaps, and suggests optimal study schedules and materials.",
    image: ai,
    tech: ["Python", "TensorFlow", "React", "Node.js"],
    team: ["Alex Kim", "Sarah Chen", "Mike Rodriguez"],
    github: "https://github.com/csi-club/study-assistant",
    demo: "https://study-assistant.demo.com"
  },
  {
    id: 2,
    title: "Smart Campus Navigator",
    description: "A real-time campus navigation system with crowd monitoring and smart routing to help students find the quickest paths to their classes.",
    longDescription: "The Smart Campus Navigator combines IoT sensors, mobile technology, and real-time data processing to revolutionize campus navigation. Features include crowd density monitoring, optimal route suggestions, and integration with class schedules.",
    image: campus,
    tech: ["React Native", "Firebase", "Node.js", "MongoDB"],
    team: ["David Park", "Emma Wilson"],
    github: "https://github.com/csi-club/campus-nav",
    demo: "https://campus-nav.demo.com"
  },
  {
    id: 3,
    title: "Blockchain Certificate System",
    description: "A decentralized academic certificate verification system built on blockchain technology to ensure credential authenticity.",
    longDescription: "Our blockchain-based certificate system provides a secure, transparent, and immutable way to issue and verify academic credentials. It eliminates certificate fraud and simplifies the verification process for employers.",
    image: b,
    tech: ["Solidity", "Web3.js", "React", "Node.js"],
    team: ["Chris Wong", "Lisa Chen"],
    github: "https://github.com/csi-club/cert-chain",
    demo: "https://cert-chain.demo.com"
  }
];

const ProjectsPage = () => {
  const [projects, setProjects] = useState(initialProjects);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const loadMoreProjects = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      const newProjects = [...projects, ...initialProjects.map(p => ({
        ...p,
        id: p.id + projects.length
      }))];
      setProjects(newProjects);
      setPage(page + 1);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <CustomCursor />

      {/* Header Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-gray-900 to-gray-800" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <TypewriterText />
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Explore our innovative projects pushing the boundaries of technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            animate="animate"
            variants={{
              initial: {},
              animate: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="bg-gray-800 rounded-xl overflow-hidden group cursor-pointer"
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 }
                }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)'
                }}
                onClick={() => {
                  setSelectedProject(project);
                  setIsModalOpen(true);
                }}
              >
                <div className="relative h-48">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-gray-700 rounded-full text-xs text-blue-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Load More Button */}
          <div className="mt-12 text-center">
            <motion.button
              onClick={loadMoreProjects}
              className="px-8 py-3 bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center">
                  Loading...
                  <motion.div
                    className="ml-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                </span>
              ) : (
                'Load More Projects'
              )}
            </motion.button>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-800 rounded-xl max-w-2xl w-full p-6 relative"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>

              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />

              <h2 className="text-2xl font-bold mb-4 text-blue-400">
                {selectedProject.title}
              </h2>

              <p className="text-gray-300 mb-6">
                {selectedProject.longDescription}
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Code size={20} className="mr-3 text-blue-400" />
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center">
                  <Users size={20} className="mr-3 text-blue-400" />
                  <span>Team: {selectedProject.team.join(', ')}</span>
                </div>

                <div className="flex space-x-4 mt-6">
                  <motion.a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={20} className="mr-2" />
                    View Code
                  </motion.a>

                  <motion.a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectsPage;