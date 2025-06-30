import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom'; // Add this import
import { 
  Building,
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Youtube,
  ArrowUp,
  Heart,
  Zap,
  Settings,
  HardHat,
  Wifi,
  Users
} from 'lucide-react';
import { useEffect } from 'react'; // Add this import

export default function Footer() {
  const navigate = useNavigate(); // Add this hook
  const location = useLocation(); // Add this hook

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Updated footer links to match navbar structure - Fixed duplicate About Us
  const footerLinks = {
    company: [
      { name: 'Home', href: '/' },
      { name: 'About Us', href: '/about' },
      { name: 'Why GIC', href: '/careers' },
      { name: 'Contact', href: '/contact' }
    ],
    services: [
      { name: 'Electrical Services', href: '/services/electrical', icon: Zap },
      { name: 'Mechanical & HVAC', href: '/services/mechanical', icon: Settings },
      { name: 'Civil & Demolition', href: '/services/civil', icon: HardHat },
      { name: 'IT & Networking', href: '/services/it', icon: Wifi },
      { name: 'Manpower Supply', href: '/services/manpower', icon: Users }
    ],
    projects: [
      { name: 'Samsung Display Center', href: '/projects#samsung' },
      { name: 'Kia Motors India', href: '/projects#kia' },
      { name: 'FLSmidth Plant', href: '/projects#flsmidth' },
      { name: 'HAEWON Engineering', href: '/projects#haewon' }
    ],
    legal: [
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Safety Policy', href: '/safety' },
      { name: 'Quality Standards', href: '/quality' },
      { name: 'Our Clients', href: '/#clients', isSection: true }
    ]
  };

  const socialLinks = [
    // { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    // { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-700' }
    // { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-600' },
    // { name: 'YouTube', icon: Youtube, href: '#', color: 'hover:text-red-600' }
  ];

  // Enhanced function to handle navigation with React Router
  const handleNavigation = (href: string, isSection = false) => {
    if (isSection) {
      // Handle client section navigation
      if (location.pathname !== '/') {
        // Navigate to home page first, then scroll to clients section
        navigate('/');
        // Use sessionStorage to remember we need to scroll to clients section
        sessionStorage.setItem('scrollToClients', 'true');
      } else {
        // Already on home page, scroll to clients section
        const clientsSection = document.getElementById('clients');
        if (clientsSection) {
          clientsSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    } else {
      // Handle hash links (like #samsung, #kia, etc.)
      if (href.includes('#')) {
        const [path, hash] = href.split('#');
        if (location.pathname === path) {
          // Same page, just scroll to the section
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }
        } else {
          // Different page, navigate and store hash for later scrolling
          sessionStorage.setItem('scrollToHash', hash);
          navigate(path);
        }
      } else {
        // Regular page navigation
        if (location.pathname === href) {
          // Same page, just scroll to top
          scrollToTop();
        } else {
          // Different page, navigate with React Router
          navigate(href);
          // Scroll to top after navigation
          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }, 100);
        }
      }
    }
  };

  // Effect to handle scrolling after navigation
  useEffect(() => {
    // Check if we need to scroll to clients section
    if (sessionStorage.getItem('scrollToClients') === 'true') {
      sessionStorage.removeItem('scrollToClients');
      setTimeout(() => {
        const clientsSection = document.getElementById('clients');
        if (clientsSection) {
          clientsSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
    
    // Check if we need to scroll to a hash section
    const hashToScroll = sessionStorage.getItem('scrollToHash');
    if (hashToScroll) {
      sessionStorage.removeItem('scrollToHash');
      setTimeout(() => {
        const element = document.getElementById(hashToScroll);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  }, [location.pathname]); // Run when pathname changes

  // Function to handle quote request via Gmail
  const handleQuoteRequest = () => {
    const subject = encodeURIComponent('Request for Project Quote - Global India Corporation');
    const body = encodeURIComponent(`Dear Global India Corporation Team,

I hope this email finds you well. I am writing to request a detailed quote for an upcoming project.

Project Details:
- Project Type: [Please specify - Electrical/Mechanical/Civil/IT/Manpower]
- Project Location: [Your Location]
- Project Timeline: [Expected Start/End Date]
- Project Scope: [Brief description of your requirements]
- Budget Range: [Your approximate budget]

Additional Requirements:
[Please describe any specific requirements, technical specifications, or special considerations]

I would appreciate if you could provide:
1. Detailed project proposal
2. Cost breakdown
3. Project timeline
4. Terms and conditions
5. Your company profile and past project references

Please let me know if you need any additional information from my end to prepare an accurate quote.

I look forward to hearing from you soon.

Best regards,
[Your Name]
[Your Company/Organization]
[Your Contact Number]
[Your Email Address]`);

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=globalindiacorps@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
            
            {/* Company Info */}
            <motion.div className="lg:col-span-2" variants={itemVariants}>
              <div className="flex items-center space-x-3 mb-6">
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Global India Corporation
                  </h3>
                  <p className="text-gray-400 text-sm">Everything is Possible</p>
                </div>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>globalindiacorps@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span>+91-9047642156</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span>Kancheepuram, Tamil Nadu, India</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links - Updated to match navbar */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <button 
                      onClick={() => handleNavigation(link.href)}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm flex items-center gap-2 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <button 
                      onClick={() => handleNavigation(link.href)}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm flex items-center gap-2 text-left"
                    >
                      <link.icon className="w-4 h-4" />
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Projects & Legal */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-6 text-white">Projects</h4>
              <ul className="space-y-3 mb-8">
                {footerLinks.projects.map((link) => (
                  <li key={link.name}>
                    <button 
                      onClick={() => handleNavigation(link.href)}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Newsletter Subscription */}
          <motion.div 
            className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl p-8 mb-12 border border-gray-700/50"
            variants={itemVariants}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              <div>
                <h4 className="text-xl font-semibold mb-2 text-white">Get Project Consultation</h4>
                <p className="text-gray-300">
                  Contact us for engineering solutions tailored to your requirements.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleQuoteRequest}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-700 hover:to-purple-700 text-center"
                >
                  Request a Quote
                </button>
                <button
                  onClick={() => handleNavigation('/contact')}
                  className="bg-gray-800 border border-gray-700 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-700 text-center"
                >
                  Contact Our Team
                </button>
              </div>
            </div>
          </motion.div>

          {/* Social Links & Bottom */}
          <motion.div 
            className="flex flex-col lg:flex-row justify-between items-center pt-8 border-t border-gray-700"
            variants={itemVariants}
          >
            {/* Left side - Make in India with logo */}
            <div className="flex items-center space-x-4 mb-4 lg:mb-0">
              {/* Make in India Logo */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-8 bg-gradient-to-r from-orange-500 to-green-500 rounded flex items-center justify-center p-1">
                  <img 
                    src="/assets/make-in-india-seeklogo.png" 
                    alt="Make in India" 
                    className="w-full h-full object-contain filter brightness-0 invert"
                  />
                </div>
                <div className="flex items-center space-x-1 text-gray-300 text-sm">
                  <span>Make in</span>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <Heart className="w-4 h-4 text-red-500 fill-current" />
                  </motion.div>
                  <span>India</span>
                </div>
              </div>
            </div>

            {/* Right side - Social icons and scroll to top */}
            <div className="flex items-center space-x-6">
              {/* Social Media Icons */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className={`text-gray-400 ${social.color} transition-colors duration-200`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
              
              {/* Scroll to top button */}
              <motion.button
                onClick={scrollToTop}
                className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div 
            className="text-center pt-8"
            variants={itemVariants}
          >
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Global India Corporation. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}