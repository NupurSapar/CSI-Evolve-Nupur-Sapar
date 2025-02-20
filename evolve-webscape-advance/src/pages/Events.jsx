import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, MapPin, Users } from 'lucide-react';
import w from "/src/assets/IMG_2512.jpg";
import s from "/src/assets/download (5).jpg";
import m from "/src/assets/download (6).jpg";


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
  const fullText = '< Events >';

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


// Sample events data
const eventsData = [
  {
    id: 1,
    title: "Advanced AI Workshop",
    type: "Workshop",
    date: "2025-03-15",
    time: "10:00 AM",
    location: "Tech Hub, Room 101",
    description: "Deep dive into the latest AI technologies and practical applications.",
    capacity: 30,
    image: w
  },
  {
    id: 2,
    title: "Future of Tech Seminar",
    type: "Seminar",
    date: "2025-03-20",
    time: "2:00 PM",
    location: "Virtual Event",
    description: "Industry experts discuss emerging technology trends and their impact.",
    capacity: 100,
    image: s
  },
  {
    id: 3,
    title: "Developer Meetup",
    type: "Meetup",
    date: "2025-03-25",
    time: "6:00 PM",
    location: "Innovation Center",
    description: "Network with fellow developers and share experiences in a casual setting.",
    capacity: 50,
    image: m
  }
];

const EventsPage = () => {
  const [events, setEvents] = useState(eventsData);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filterEvents = (filter) => {
    setSelectedFilter(filter);
    if (filter === "All") {
      setEvents(eventsData);
    } else {
      setEvents(eventsData.filter(event => event.type === filter));
    }
  };

  const filters = ["All", "Workshop", "Seminar", "Meetup"];

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
              Discover upcoming tech events, workshops, and meetups
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {filters.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => filterEvents(filter)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300
                  ${selectedFilter === filter 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Events Grid */}
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
            {events.map((event) => (
              <motion.div
                key={event.id}
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
                  setSelectedEvent(event);
                  setIsModalOpen(true);
                }}
              >
                <div className="relative h-48">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-sm rounded-full">
                      {event.type}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-2 text-gray-400">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && selectedEvent && (
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
                src={selectedEvent.image} 
                alt={selectedEvent.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />

              <h2 className="text-2xl font-bold mb-4 text-blue-400">
                {selectedEvent.title}
              </h2>

              <div className="space-y-4 text-gray-300">
                <div className="flex items-center">
                  <Calendar size={20} className="mr-3 text-blue-400" />
                  <span>{new Date(selectedEvent.date).toLocaleDateString()}</span>
                </div>
                
                <div className="flex items-center">
                  <Clock size={20} className="mr-3 text-blue-400" />
                  <span>{selectedEvent.time}</span>
                </div>

                <div className="flex items-center">
                  <MapPin size={20} className="mr-3 text-blue-400" />
                  <span>{selectedEvent.location}</span>
                </div>

                <div className="flex items-center">
                  <Users size={20} className="mr-3 text-blue-400" />
                  <span>Capacity: {selectedEvent.capacity} attendees</span>
                </div>

                <p className="text-gray-400 mt-4">
                  {selectedEvent.description}
                </p>

                <motion.button
                  className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Register Now
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EventsPage;