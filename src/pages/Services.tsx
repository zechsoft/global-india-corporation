import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building, Cog, Zap, ChevronRight, CheckCircle, Wrench, Truck, Factory, Globe, Shield, Lightbulb } from 'lucide-react';

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      title: 'Infrastructure Development',
      icon: Building,
      description: 'Comprehensive infrastructure solutions for modern India',
      features: [
        'Smart City Development',
        'Transportation Networks',
        'Water Management Systems',
        'Urban Planning & Design',
        'Sustainable Construction',
        'Project Management',
        'Metro Rail Systems',
        'Highways & Expressways',
        'Airports & Ports',
        'Power Transmission',
        'Water Treatment Plants',
        'Waste Management Systems'
      ],
      projects: ['Delhi Metro Phase 4', 'Mumbai Coastal Road', 'Navi Mumbai Airport', 'Chennai Metro Extension', 'Hyderabad Metro', 'Pune Metro'],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
      stats: { projects: '500+', cities: '100+', experience: '25 Years' }
    },
    {
      title: 'Industrial Automation',
      icon: Cog,
      description: 'Advanced automation solutions for manufacturing excellence',
      features: [
        'Process Automation',
        'Quality Control Systems',
        'Robotics Integration',
        'IoT Implementation',
        'Predictive Maintenance',
        'Efficiency Optimization',
        'SCADA Systems',
        'PLC Programming',
        'HMI Development',
        'Industrial IoT',
        'Digital Twin Technology',
        'AI-Powered Analytics'
      ],
      projects: ['Tata Motors Automation', 'Reliance Petrochemicals', 'Mahindra Manufacturing', 'Bajaj Auto Plant', 'Hero MotoCorp', 'Maruti Suzuki'],
      image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=600&h=400&fit=crop',
      stats: { efficiency: '40% Increase', downtime: '60% Reduction', clients: '200+' }
    },
    {
      title: 'Technology Services',
      icon: Zap,
      description: 'Digital transformation and IT consulting solutions',
      features: [
        'System Integration',
        'Data Analytics',
        'Cloud Solutions',
        'Cybersecurity',
        'Digital Transformation',
        'Technical Support',
        'Enterprise Software',
        'Mobile Applications',
        'Artificial Intelligence',
        'Machine Learning',
        'Blockchain Solutions',
        'DevOps Services'
      ],
      projects: ['HDFC Bank Digital Platform', 'ICICI Tech Upgrade', 'SBI Core Banking', 'Infosys Collaboration', 'TCS Partnership', 'Wipro Alliance'],
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop',
      stats: { deployments: '1000+', uptime: '99.9%', support: '24/7' }
    },
    {
      title: 'Heavy Engineering',
      icon: Wrench,
      description: 'Manufacturing and assembly of heavy machinery and equipment',
      features: [
        'Equipment Manufacturing',
        'Structural Fabrication',
        'Heavy Machinery',
        'Pressure Vessels',
        'Industrial Boilers',
        'Custom Engineering',
        'Turbine Manufacturing',
        'Generator Assembly',
        'Conveyor Systems',
        'Material Handling',
        'Plant Erection',
        'Commissioning Services'
      ],
      projects: ['NTPC Power Plant', 'BHEL Turbines', 'Adani Power Equipment', 'JSW Steel Plant', 'Tata Steel Machinery', 'SAIL Equipment'],
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop',
      stats: { capacity: '50,000 MT', precision: '±0.1mm', delivery: '100% On-time' }
    },
    {
      title: 'Defense & Aerospace',
      icon: Shield,
      description: 'Strategic defense and aerospace engineering solutions',
      features: [
        'Defense Systems',
        'Aerospace Components',
        'Missile Technology',
        'Radar Systems',
        'Naval Engineering',
        'Military Vehicles',
        'Avionics Systems',
        'Satellite Technology',
        'Communication Systems',
        'Surveillance Equipment',
        'Maintenance Services',
        'Training Solutions'
      ],
      projects: ['HAL Collaboration', 'DRDO Partnership', 'BEL Systems', 'Indian Navy Projects', 'IAF Modernization', 'ISRO Support'],
      image: 'https://images.unsplash.com/photo-1614728894747-a83421916094?w=600&h=400&fit=crop',
      stats: { contracts: '100+', security: 'Top Secret', certification: 'IS 9001' }
    },
    {
      title: 'Energy & Power',
      icon: Lightbulb,
      description: 'Renewable energy and power generation solutions',
      features: [
        'Solar Power Plants',
        'Wind Energy Systems',
        'Hydroelectric Projects',
        'Thermal Power Plants',
        'Nuclear Engineering',
        'Grid Integration',
        'Energy Storage',
        'Smart Grid Solutions',
        'Power Distribution',
        'Transmission Lines',
        'Substations',
        'Energy Efficiency'
      ],
      projects: ['Adani Solar Park', 'Tata Power Wind', 'NTPC Thermal', 'NHPC Hydro', 'Nuclear Power Corp', 'Suzlon Wind Farms'],
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&h=400&fit=crop',
      stats: { capacity: '10,000 MW', renewable: '70%', efficiency: '95%' }
    },
    {
      title: 'Transportation',
      icon: Truck,
      description: 'Comprehensive transportation and logistics solutions',
      features: [
        'Railway Systems',
        'Metro Projects',
        'Highway Construction',
        'Port Development',
        'Airport Infrastructure',
        'Logistics Solutions',
        'Traffic Management',
        'Intelligent Transport',
        'Rolling Stock',
        'Signaling Systems',
        'Maintenance Facilities',
        'Operations Management'
      ],
      projects: ['Indian Railways', 'Delhi Airport T3', 'JNPT Port', 'Bangalore Metro', 'Kochi Metro', 'Lucknow Metro'],
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop',
      stats: { routes: '5000+ km', passengers: '10M Daily', connectivity: '500+ Cities' }
    },
    {
      title: 'Process Industries',
      icon: Factory,
      description: 'Specialized solutions for process and chemical industries',
      features: [
        'Chemical Processing',
        'Pharmaceutical Plants',
        'Food Processing',
        'Oil & Gas Refineries',
        'Petrochemicals',
        'Fertilizer Plants',
        'Process Optimization',
        'Safety Systems',
        'Environmental Solutions',
        'Quality Control',
        'Maintenance Services',
        'Regulatory Compliance'
      ],
      projects: ['Reliance Jamnagar', 'ONGC Refineries', 'IOC Facilities', 'GAIL Pipelines', 'Coromandel Fertilizers', 'UPL Chemicals'],
      image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=600&h=400&fit=crop',
      stats: { plants: '200+', safety: 'Zero Incidents', compliance: '100%' }
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section with Background Image */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop"
            alt="Engineering Excellence"
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
              Engineering Excellence
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Comprehensive engineering solutions designed to build the future of India through innovation, technology, and sustainable development
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-8 text-sm md:text-base"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-yellow-400">25+</div>
                <div className="opacity-90">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-yellow-400">1000+</div>
                <div className="opacity-90">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-yellow-400">50+</div>
                <div className="opacity-90">Cities Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-yellow-400">100+</div>
                <div className="opacity-90">Countries Presence</div>
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
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Capabilities</h3>
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
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Major Projects</h3>
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

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how our engineering expertise can bring your vision to life
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
          >
            Get Free Consultation
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}