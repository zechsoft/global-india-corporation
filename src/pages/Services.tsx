import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  HardHat, 
  Cpu, 
  Users, 
  Wrench, 
  Hammer, 
  ChevronRight, 
  CheckCircle,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function Services() {
  const { serviceType } = useParams(); // Get service type from URL
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      title: 'Electrical Services',
      slug: 'electrical',
      icon: Zap,
      description: 'Reliable electrical contracting for industrial and commercial projects',
      features: [
        'HT/LT Cable Laying & Termination',
        'Transformer Installation',
        'High Mast & Street Lighting',
        'Overhead Line Erection',
        'Panel Installation & Wiring',
        'Electrical Equipment Testing & Maintenance',
        'Switchgear Installation',
        'Earthing Systems',
        'Cable Tray Installation',
        'Lighting Control Systems',
        'Power Distribution',
        'Preventive Maintenance'
      ],
      projects: [
        'Samsung Display Center - Noida', 
        'Kia Motors India - Penukonda',
        'HAEWON Engineering Projects',
        'JUNGDO Engineering Sites',
        'FLSmidth Plant Electrical',
        'Samsung India Electronics'
      ],
      image: '/assets/Images/Main Page Section Images/Services Section/Electrical Services N.png',
      stats: { projects: '120+', clients: '25+', safety: 'Zero Incidents' }
    },
    {
      title: 'Mechanical & HVAC',
      slug: 'mechanical',
      icon: Wrench,
      description: 'Expert mechanical services with HVAC specialization',
      features: [
        'Equipment & Machinery Installation',
        'Sheet Metal Fabrication',
        'Industrial Piping Support',
        'Structural Metal Work',
        'Dust Collection & Exhaust Systems',
        'Chiller Systems & Ductless Units',
        'Rooftop & Split AC Systems',
        'Environmental Chambers',
        'Refrigeration Piping',
        'HVAC Control Systems',
        'Ventilation Systems',
        'Preventive Maintenance'
      ],
      projects: [
        'Kia Motors HVAC Installation',
        'SAMHO Construction Projects',
        'DAEMYOUNG Engineering Sites',
        'HYOJIN Engineering Works',
        'NEW VISION Fire Safety',
        'Industrial Plant HVAC'
      ],
      image: '/assets/Images/Main Page Section Images/Services Section/Mechanical & HVAC N.png',
      stats: { systems: '80+', efficiency: '40% Improved', clients: '18+' }
    },
    {
      title: 'Civil & Demolition',
      slug: 'civil',
      icon: Hammer,
      description: 'Civil construction and controlled demolition solutions',
      features: [
        'Flooring, Brickwork & Masonry',
        'Foundation Work & Site Preparation',
        'Trenches, Drains & Repair Structures',
        'Safe Dismantling of Structures',
        'Concrete Breaking & Debris Removal',
        'Controlled Industrial Demolition',
        'Structural Repairs',
        'Industrial Flooring',
        'Wall Construction',
        'Site Clearance',
        'Waste Management',
        'Safety Compliance'
      ],
      projects: [
        'Industrial Plant Demolition',
        'Factory Civil Works',
        'HAEWON Engineering Civil',
        'JUNGDO Construction Sites',
        'Plant Infrastructure Upgrades',
        'Commercial Space Preparation'
      ],
      image: '/assets/Images/Main Page Section Images/Services Section/Civil & Demolition N.png',
      stats: { projects: '65+', safety: '100%', clients: '15+' }
    },
    {
      title: 'IT & Networking',
      slug: 'it',
      icon: Cpu,
      description: 'Secure and scalable IT infrastructure solutions',
      features: [
        'Structured Network Cabling',
        'Server & Network Rack Installation',
        'Power & Cooling Management',
        'Smart Surveillance Systems',
        'City Fiber & Data Solutions',
        'On-site Technical Support',
        'Data Center Setup',
        'Wireless Networks',
        'CCTV Installation',
        'Access Control Systems',
        'Network Security',
        'System Integration'
      ],
      projects: [
        'Samsung IT Infrastructure',
        'Corporate Network Installations',
        'Data Center Cabling',
        'Industrial Network Solutions',
        'Smart Building Systems',
        'Commercial IT Setup'
      ],
      image: '/assets/Images/Main Page Section Images/Services Section/IT Networking n.png', // Fixed: Added leading slash
      stats: { installations: '90+', uptime: '99.9%', clients: '20+' }
    },
    {
      title: 'Manpower Supply',
      slug: 'manpower',
      icon: Users,
      description: 'Skilled manpower across engineering disciplines',
      features: [
        'Engineers & Supervisors',
        'Electricians & Fitters',
        'Welders & Riggers',
        'Painters & Helpers',
        'HVAC Technicians',
        'Network Operators',
        'Civil Workers',
        'Demolition Experts',
        'Mechanical Technicians',
        'IT Support Staff',
        'Safety Officers',
        'Project Managers'
      ],
      projects: [
        'Samsung Vendor Support',
        'Kia Motors Manpower',
        'FLSmidth Deployment',
        'HAEWON Engineering Staff',
        'JUNGDO Engineering Team',
        'Industrial Plant Workforce'
      ],
      image: '/assets/Images/Main Page Section Images/Services Section/Manpower Supply N.png', // Fixed: Added leading slash
      stats: { personnel: '500+', clients: '30+', retention: '95%' }
    }
  ];

  // Set active tab based on URL parameter
  useEffect(() => {
    if (serviceType) {
      const serviceIndex = services.findIndex(service => service.slug === serviceType);
      if (serviceIndex !== -1) {
        setActiveTab(serviceIndex);
      }
    }
  }, [serviceType]);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section with Background Image */}
// Add this import at the top of your component file
// import ServicesImage from '/assets/Images/Services.PNG';

<section className="relative py-32 overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="/assets/Images/Services.PNG"
      alt="GIC Engineering Services"
      className="w-full h-full object-cover"
      onError={(e) => {
        console.error('Image failed to load:', e.target.src);
        e.target.style.backgroundColor = '#1e40af';
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-indigo-900/90"></div>
  </div>
  
  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center text-white"
    >
      <motion.h1
        className="text-5xl md:text-7xl font-bold mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        GIC Engineering Services
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90 mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Multi-disciplinary engineering contracting and manpower solutions since 2016, delivering quality, safety, and innovation
      </motion.p>
      <motion.div
        className="flex flex-wrap justify-center gap-8 text-sm md:text-base"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold text-yellow-400">2016</div>
          <div className="opacity-90">Established</div>
        </div>
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold text-yellow-400">500+</div>
          <div className="opacity-90">Skilled Personnel</div>
        </div>
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold text-yellow-400">30+</div>
          <div className="opacity-90">Clients Served</div>
        </div>
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold text-yellow-400">100%</div>
          <div className="opacity-90">Safety Record</div>
        </div>
      </motion.div>
    </motion.div>
  </div>
</section>

      {/* Services Navigation */}
      <section className="py-20 bg-white" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:w-1/3">
              <div className="sticky top-24 space-y-4">
                {services.map((service, index) => (
                  <motion.button
                    key={service.title}
                    onClick={() => setActiveTab(index)}
                    className={`w-full text-left p-6 rounded-lg transition-all duration-300 ${
                      activeTab === index
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-4">
                      <service.icon className="h-8 w-8" />
                      <div>
                        <h3 className="text-lg font-bold">{service.title}</h3>
                        <p className={`text-sm ${activeTab === index ? 'text-blue-100' : 'text-gray-500'}`}>
                          {service.description}
                        </p>
                      </div>
                      <ChevronRight className={`h-5 w-5 transition-transform ${activeTab === index ? 'rotate-90' : ''}`} />
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:w-2/3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  {/* Service Image */}
                  <div className="relative overflow-hidden rounded-lg shadow-2xl">
                    <img
                      src={services[activeTab].image}
                      alt={services[activeTab].title}
                      className="w-full h-64 object-cover"
                      onError={(e) => {
                        // Fallback image if the original fails to load
                        e.target.src = "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                      <div className="absolute bottom-6 left-6 text-white">
                        <h2 className="text-3xl font-bold mb-2">{services[activeTab].title}</h2>
                        <p className="text-lg opacity-90">{services[activeTab].description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  

                  {/* Features Grid */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Services</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {services[activeTab].features.map((feature, index) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                        >
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-gray-700">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Example Projects */}
                  
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
     
      {/* Testimonials Section */}
      

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-4xl font-bold mb-6">
            Ready to Discuss Your Project?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact GIC for reliable engineering solutions and skilled manpower support
          </p>
          <div className="space-y-4 max-w-md mx-auto">
            <div className="flex items-center justify-center gap-3">
              <Phone className="h-6 w-6" />
              <span>+91-9047642156, +91-9942471687</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Mail className="h-6 w-6" />
              <span>globalindiacorps@gmail.com</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MapPin className="h-6 w-6" />
              <span>3B/1A, Kovalavedu Main Road, Walajabad, Kancheepuram, Tamil Nadu 631604</span>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 mt-8"
          >
            Get Free Consultation
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}