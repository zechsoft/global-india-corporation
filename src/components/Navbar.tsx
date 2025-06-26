import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Zap, Settings, Hammer, Wifi, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Fixed: Correct way to reference public folder assets
const Globallog = "/assets/apple-icon.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Why GIC', href: '/careers' },
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'Projects', href: '/projects' },
    { name: 'Clients', href: '#clients', isSection: true },
    { name: 'Contact', href: '/contact' },
  ];

  // Updated services array with proper routing
  const services = [
    {
      name: 'Electrical Services',
      icon: Zap,
      href: '/services/electrical',
      slug: 'electrical'
    },
    {
      name: 'Mechanical & HVAC',
      icon: Settings,
      href: '/services/mechanical',
      slug: 'mechanical'
    },
    {
      name: 'Civil & Demolition',
      icon: Hammer,
      href: '/services/civil',
      slug: 'civil'
    },
    {
      name: 'IT & Networking',
      icon: Wifi,
      href: '/services/it',
      slug: 'it'
    },
    {
      name: 'Manpower Supply',
      icon: Users,
      href: '/services/manpower',
      slug: 'manpower'
    }
  ];

  // Function to handle client section navigation
  const handleClientClick = (e) => {
    e.preventDefault();
    
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll to clients section
      setTimeout(() => {
        scrollToClients();
      }, 100);
    } else {
      // If we're already on home page, just scroll to clients section
      scrollToClients();
    }
    
    // Close mobile menu if open
    setIsOpen(false);
  };

  const scrollToClients = () => {
    const clientsSection = document.getElementById('clients');
    if (clientsSection) {
      clientsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setIsServicesOpen(false);
  }, [location.pathname]);

  // Close services dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navbarVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    visible: { 
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.3 }
    })
  };

  const dropdownVariants = {
    hidden: { 
      opacity: 0, 
      y: -10, 
      scale: 0.95,
      transition: { duration: 0.2 }
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.2, ease: "easeOut" }
    }
  };

  const serviceItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05, duration: 0.2 }
    })
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200/20' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          
          {/* Logo Section */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative">
              <motion.div
                className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg overflow-hidden"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <img 
                  src={Globallog} 
                  alt="Global India Corporation Logo" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </motion.div>
              <motion.div
                className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Global India Corporation
              </h1>
              <p className="text-xs text-gray-500 hidden sm:block">Everything is Possible</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item, index) => {
              const isActive = location.pathname === item.href || 
                (item.name === 'Services' && location.pathname.startsWith('/services')) ||
                (item.name === 'Clients' && location.pathname === '/');
              
              if (item.hasDropdown) {
                return (
                  <div key={item.name} className="relative" ref={servicesRef}>
                    <motion.button
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className={`flex items-center px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                        isActive
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                      <motion.div
                        animate={{ rotate: isServicesOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-4 h-4 ml-1" />
                      </motion.div>
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"
                          initial={false}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </motion.button>

                    {/* Services Dropdown */}
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          variants={dropdownVariants}
                          className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-200/20 py-2"
                        >
                          {services.map((service, idx) => {
                            const ServiceIcon = service.icon;
                            return (
                              <motion.div
                                key={service.name}
                                custom={idx}
                                initial="hidden"
                                animate="visible"
                                variants={serviceItemVariants}
                              >
                                <Link
                                  to={service.href}
                                  className="flex items-center px-4 py-3 hover:bg-gray-50 transition-colors duration-200 group"
                                  onClick={() => setIsServicesOpen(false)}
                                >
                                  <ServiceIcon className="w-5 h-5 text-gray-400 group-hover:text-blue-600 mr-3 transition-colors duration-200" />
                                  <div>
                                    <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                                      {service.name}
                                    </h3>
                                  </div>
                                </Link>
                              </motion.div>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              // Handle Clients navigation specially
              if (item.isSection) {
                return (
                  <motion.div
                    key={item.name}
                    className="relative"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <button
                      onClick={handleClientClick}
                      className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                        isActive
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"
                          initial={false}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </button>
                  </motion.div>
                );
              }

              return (
                <motion.div
                  key={item.name}
                  className="relative"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={item.href}
                    className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                      isActive
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200/20"
          >
            <div className="px-4 py-6 space-y-2">
              {navigation.map((item, index) => {
                const isActive = location.pathname === item.href ||
                  (item.name === 'Services' && location.pathname.startsWith('/services')) ||
                  (item.name === 'Clients' && location.pathname === '/');
                
                if (item.hasDropdown) {
                  return (
                    <motion.div
                      key={item.name}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      variants={linkVariants}
                    >
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className={`flex items-center justify-between w-full px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                          isActive
                            ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-600'
                            : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                        }`}
                      >
                        <span>{item.name}</span>
                        <motion.div
                          animate={{ rotate: isServicesOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </motion.div>
                      </button>
                      
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-4 mt-2 space-y-1"
                          >
                            {services.map((service, idx) => {
                              const ServiceIcon = service.icon;
                              return (
                                <Link
                                  key={service.name}
                                  to={service.href}
                                  className="flex items-center px-4 py-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
                                  onClick={() => {
                                    setIsOpen(false);
                                    setIsServicesOpen(false);
                                  }}
                                >
                                  <ServiceIcon className="w-4 h-4 mr-2" />
                                  <span className="text-sm">{service.name}</span>
                                </Link>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }

                // Handle Clients navigation in mobile menu
                if (item.isSection) {
                  return (
                    <motion.div
                      key={item.name}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      variants={linkVariants}
                    >
                      <button
                        onClick={handleClientClick}
                        className={`flex items-center w-full px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                          isActive
                            ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-600'
                            : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                        }`}
                      >
                        <span>{item.name}</span>
                        {isActive && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="ml-auto w-2 h-2 bg-blue-600 rounded-full"
                          />
                        )}
                      </button>
                    </motion.div>
                  );
                }

                return (
                  <motion.div
                    key={item.name}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={linkVariants}
                  >
                    <Link
                      to={item.href}
                      className={`flex items-center px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                        isActive
                          ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-600'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                    >
                      <span>{item.name}</span>
                      {isActive && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="ml-auto w-2 h-2 bg-blue-600 rounded-full"
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}