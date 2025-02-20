import Home from "./pages/Home";
import Events from "./pages/Events";
import Projects from "./pages/Projects";
import { BrowserRouter, Route, Routes, Link } from "react-router";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import logo from "./image.png";


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="App flex flex-col min-h-screen">
        {/* Navigation Bar */}
        <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
          <div className="container mx-auto px-6 flex justify-between items-center h-16">
            
            {/* Logo and Club Name */}
            <motion.div 
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <img src={logo} alt="CSI Logo" className="h-10 w-10 rounded-full" />

              <span className="text-xl font-bold text-blue-400">CSI Club</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["Home", "Events", "Projects"].map((item) => (
                <motion.div key={item} whileHover={{ scale: 1.05 }}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-white hover:text-blue-400 transition-colors relative group"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-400 hover:text-white"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              className="md:hidden bg-gray-900 border-t border-gray-800 p-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
            >
              <div className="space-y-2">
                {["Home", "Events", "Projects"].map((item) => (
                  <Link
                    key={item}
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="block py-2 px-4 text-white hover:text-gray-400 hover:bg-gray-800 rounded"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </nav>

        {/* Main Content */}
        <main className="min-h-screen w-full bg-gray-900 text-gray-100 pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} CSI MIT-WPU. All rights reserved.
          </p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
