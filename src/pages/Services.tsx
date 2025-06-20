import { useState } from 'react';
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
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      title: 'Electrical Services',
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
      image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&h=400&fit=crop',
      stats: { projects: '120+', clients: '25+', safety: 'Zero Incidents' }
    },
    {
      title: 'Mechanical & HVAC',
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
      image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&h=400&fit=crop',
      stats: { systems: '80+', efficiency: '40% Improved', clients: '18+' }
    },
    {
      title: 'Civil & Demolition',
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
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop',
      stats: { projects: '65+', safety: '100%', clients: '15+' }
    },
    {
      title: 'IT & Networking',
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
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
      stats: { installations: '90+', uptime: '99.9%', clients: '20+' }
    },
    {
      title: 'Manpower Supply',
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
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
      stats: { personnel: '500+', clients: '30+', retention: '95%' }
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section with Background Image */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop"
            alt="GIC Engineering Services"
            className="w-full h-full object-cover"
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
      <section className="py-20 bg-white">
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
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                      <div className="absolute bottom-6 left-6 text-white">
                        <h2 className="text-3xl font-bold mb-2">{services[activeTab].title}</h2>
                        <p className="text-lg opacity-90">{services[activeTab].description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 bg-gray-50 p-6 rounded-lg">
                    {Object.entries(services[activeTab].stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{value}</div>
                        <div className="text-sm text-gray-600 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

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
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Completed Projects</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {services[activeTab].projects.map((project, index) => (
                        <motion.div
                          key={project}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-gradient-to-br from-blue-50 to-indigo-100 p-4 rounded-lg text-center hover:shadow-lg transition-shadow"
                        >
                          <h4 className="font-semibold text-gray-800">{project}</h4>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Esteemed Clients</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trusted by leading organizations across multiple industries
            </p>
          </motion.div>

          {/* Client Logos - Replace with actual client logos */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {['Samsung', 'Kia Motors', 'FLSmidth', 'HAEWON', 'JUNGDO', 'DAEMYOUNG'].map((client, index) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-32"
              >
                <span className="text-2xl font-bold text-gray-700">{client}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              What our clients say about working with GIC
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "GIC has consistently delivered high-quality electrical and mechanical support for our operations. Their team is responsive, technically sound, and always meets deadlines with precision.",
              "We've partnered with GIC across multiple sites for HVAC and civil work. Their professionalism, safety standards, and trained workforce have made them a reliable extension of our project team.",
              "From manpower supply to IT infrastructure setup, GIC has proven to be a dependable partner. Their flexibility and ability to scale based on our site needs is impressive."
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-blue-700 p-8 rounded-lg"
              >
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="mb-6 italic">"{testimonial}"</p>
                <div className="font-semibold">— Major Client</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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