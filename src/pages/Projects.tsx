import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Filter, MapPin, Calendar, Award, TrendingUp, Building, Target, Clock } from 'lucide-react';

// Counter animation hook
const useCounter = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start);
  
  useEffect(() => {
    let startTime;
    let animationFrame;
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / duration;
      
      if (progress < 1) {
        setCount(Math.floor(start + (end - start) * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);
  
  return count;
};

// Animated counter component
const AnimatedCounter = ({ end, suffix = "", prefix = "", duration = 2000 }) => {
  const count = useCounter(end, duration);
  return <span>{prefix}{count}{suffix}</span>;
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Electrical', 'Mechanical & HVAC', 'Civil & Demolition', 'IT & Networking'];

  const projects = [
    {
      title: 'Samsung Display Center - Noida',
      category: 'Electrical',
      location: 'Noida, Uttar Pradesh',
      year: '2020',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop',
      description: 'Electrical and mechanical works including HT cable laying, transformer setup, and lighting systems for advanced display manufacturing infrastructure.',
      value: '₹15 Crores'
    },
    {
      title: 'Samsung India Electronics Projects',
      category: 'Electrical',
      location: 'Noida & Chennai',
      year: '2019-2022',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
      description: 'Electrical and IT networking support, manpower supply, and on-site engineering assistance for multiple projects.',
      value: '₹25 Crores'
    },
    {
      title: 'Kia Motors India - Penukonda',
      category: 'Mechanical & HVAC',
      location: 'Penukonda, Andhra Pradesh',
      year: '2021',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop',
      description: 'Industrial electrical works, HVAC installation, and manpower support for Korean vendor operations.',
      value: '₹18 Crores'
    },
    {
      title: 'FLSmidth Plant Systems',
      category: 'Mechanical & HVAC',
      location: 'Multiple Locations',
      year: '2022',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1581093057305-409e0ff73cee?w=600&h=400&fit=crop',
      description: 'On-site manpower deployment and mechanical service support for plant systems and industrial assembly.',
      value: '₹12 Crores'
    },
    {
      title: 'Korean Vendor Projects',
      category: 'Civil & Demolition',
      location: 'Multiple Locations',
      year: '2021-2023',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop',
      description: 'Full-service contracting support for HAEWON, JUNGDO, SAMHO, DAEMYOUNG, HYOJIN, and NEW VISION Fire Safety.',
      value: '₹30 Crores'
    },
    {
      title: 'Industrial IT Infrastructure',
      category: 'IT & Networking',
      location: 'Chennai, Tamil Nadu',
      year: '2023',
      status: 'Ongoing',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
      description: 'Structured network cabling, server installation, and smart surveillance systems for industrial facility.',
      value: '₹8 Crores'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const stats = [
    {
      icon: Building,
      number: 50,
      suffix: "+",
      label: "Projects Completed",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: TrendingUp,
      number: 100,
      suffix: "+ Cr",
      prefix: "₹",
      label: "Total Project Value",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Target,
      number: 10,
      suffix: "+",
      label: "Cities Covered",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Clock,
      number: 98,
      suffix: "%",
      label: "On-time Delivery",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const clients = [
    { name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" },
    { name: "Kia Motors", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Kia_logo_%282021%29.svg" },
    { name: "FLSmidth", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/FLSmidth_logo.svg" },
    { name: "HAEWON Engineering", logo: "https://via.placeholder.com/150x80?text=HAEWON" },
    { name: "JUNGDO Engineering", logo: "https://via.placeholder.com/150x80?text=JUNGDO" },
    { name: "SAMHO Construction", logo: "https://via.placeholder.com/150x80?text=SAMHO" },
    { name: "DAEMYOUNG Engineering", logo: "https://via.placeholder.com/150x80?text=DAEMYOUNG" },
    { name: "HYOJIN Engineering", logo: "https://via.placeholder.com/150x80?text=HYOJIN" },
    { name: "NEW VISION Fire Safety", logo: "https://via.placeholder.com/150x80?text=NEW+VISION" }
  ];

  const testimonials = [
    {
      quote: "GIC has consistently delivered high-quality electrical and mechanical support for our operations. Their team is responsive, technically sound, and always meets deadlines with precision.",
      author: "Samsung India Electronics"
    },
    {
      quote: "We've partnered with GIC across multiple sites for HVAC and civil work. Their professionalism, safety standards, and trained workforce have made them a reliable extension of our project team.",
      author: "Kia Motors India"
    },
    {
      quote: "From manpower supply to IT infrastructure setup, GIC has proven to be a dependable partner. Their flexibility and ability to scale based on our site needs is impressive.",
      author: "FLSmidth India"
    },
    {
      quote: "The demolition project was handled with care, compliance, and zero disruption to ongoing site activities. GIC's execution was smooth, timely, and cost-effective.",
      author: "HAEWON Engineering"
    },
    {
      quote: "We trust GIC for their all-in-one approach — skilled manpower, technical execution, and commitment to safety. They bring valuable support to every phase of our projects.",
      author: "JUNGDO Engineering"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section with Background Image */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop"
            alt="Engineering projects background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-blue-700/70"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Our Projects
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90 leading-relaxed">
              Proven Execution. Trusted by Industry Leaders. Showcasing our excellence across electrical, mechanical, civil, and IT domains.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Project Stats */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Track Record
            </h2>
            <p className="text-lg text-gray-600">
              Numbers that speak for our excellence since 2016
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} mb-4`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    <AnimatedCounter end={stat.number} prefix={stat.prefix} suffix={stat.suffix} />
                  </div>
                  
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-600" />
              <span className="text-gray-700 font-medium">Filter by Category:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <motion.button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {filter}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'Completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{project.year}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4" />
                      <span className="font-semibold text-blue-600">{project.value}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Esteemed Clients
            </h2>
            <p className="text-lg text-gray-600">
              Trusted by industry leaders across multiple sectors
            </p>
          </motion.div>

          <div className="relative overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...clients, ...clients].map((client, index) => (
                <motion.div
                  key={`${client.name}-${index}`}
                  className="inline-flex items-center justify-center mx-8"
                  whileHover={{ scale: 1.1 }}
                >
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600">
              Testimonials from our valued partners
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-500 inline"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <p className="font-medium text-gray-900">
                  — {testimonial.author}
                </p>
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
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how GIC can bring your engineering vision to reality with our expertise and "Everything is Possible" approach.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
          >
            Contact Us Today
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}