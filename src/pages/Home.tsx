import { motion } from 'framer-motion';
import { ArrowRight, Award, Globe, Users, CheckCircle, Settings, Building, Cog, Zap, Shield, Play, Calendar, MapPin, Phone, Mail, Target, Lightbulb, Cpu, Rocket, BarChart3, Clock, Star, TrendingUp, Eye, HeartHandshake, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Home() {
  const [playingVideo, setPlayingVideo] = useState(false);

  const services = [
    { 
      title: 'Infrastructure Development', 
      icon: Building, 
      desc: 'Smart cities, transportation networks, and sustainable urban development solutions',
      features: ['Smart Cities & IoT Integration', 'Metro & Highway Systems', 'Water Management & Treatment', 'Green Building Technologies'],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
      projects: '150+',
      growth: '+45%'
    },
    { 
      title: 'Industrial Automation', 
      icon: Cog, 
      desc: 'AI-driven automation, robotics, and Industry 4.0 transformation solutions',
      features: ['Robotic Process Automation', 'AI-Powered Quality Control', 'Predictive Maintenance', 'Digital Twin Technology'],
      image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=600&h=400&fit=crop',
      projects: '200+',
      growth: '+60%'
    },
    { 
      title: 'Technology Innovation', 
      icon: Zap, 
      desc: 'Cutting-edge digital solutions, IoT, and sustainable technology integration',
      features: ['IoT & Edge Computing', 'Blockchain Integration', 'Renewable Energy Systems', 'Data Analytics & ML'],
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop',
      projects: '120+',
      growth: '+80%'
    }
  ];

  const stats = [
    { number: '8+', label: 'Years Excellence', icon: Award, desc: 'Industry Leadership' },
    { number: '500+', label: 'Projects Delivered', icon: Building, desc: 'On Time & Budget' },
    { number: '100+', label: 'Enterprise Clients', icon: Users, desc: 'Fortune 500 Partners' },
    { number: '25+', label: 'Global Locations', icon: Globe, desc: 'Worldwide Presence' }
  ];

  const innovations = [
    { 
      title: 'AI-Driven Project Management', 
      icon: Cpu, 
      desc: 'Revolutionary AI algorithms reducing project timelines by 40%',
      impact: '40% faster delivery',
      category: 'Technology'
    },
    { 
      title: 'Sustainable Engineering', 
      icon: Leaf, 
      desc: 'Carbon-neutral construction methods and green technology integration',
      impact: '50% carbon reduction',
      category: 'Environment'
    },
    { 
      title: 'Digital Twin Technology', 
      icon: Eye, 
      desc: 'Real-time simulation and monitoring for optimal performance',
      impact: '30% efficiency gain',
      category: 'Innovation'
    },
    { 
      title: 'Smart City Integration', 
      icon: Rocket, 
      desc: 'IoT-enabled infrastructure for next-generation urban living',
      impact: '60% cost savings',
      category: 'Smart Tech'
    }
  ];

  const values = [
    { title: 'Excellence', icon: Target, desc: 'ISO 9001:2015 certified quality systems', color: 'text-blue-600' },
    { title: 'Safety', icon: Shield, desc: 'Zero accident policy with 99.9% safety record', color: 'text-green-600' },
    { title: 'Innovation', icon: Lightbulb, desc: 'R&D investment of 15% annual revenue', color: 'text-yellow-600' },
    { title: 'Integrity', icon: HeartHandshake, desc: 'Transparent governance and ethical practices', color: 'text-purple-600' },
    { title: 'Sustainability', icon: Leaf, desc: 'Carbon-neutral operations by 2030', color: 'text-emerald-600' },
    { title: 'Leadership', icon: TrendingUp, desc: 'Industry-leading expertise and innovation', color: 'text-red-600' }
  ];

  const clients = [
    { name: 'Tata Group', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop', sector: 'Conglomerate' },
    { name: 'Reliance Industries', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop', sector: 'Energy' },
    { name: 'Larsen & Toubro', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop', sector: 'Engineering' },
    { name: 'Mahindra Group', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop', sector: 'Automotive' },
    { name: 'Adani Group', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop', sector: 'Infrastructure' },
    { name: 'Bajaj Group', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop', sector: 'Finance' },
    { name: 'Godrej Group', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop', sector: 'Consumer Goods' },
    { name: 'Birla Group', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop', sector: 'Materials' }
  ];

  const featuredProjects = [
    {
      title: 'Mumbai Metro Line 3 - Underground Automation',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop',
      category: 'Infrastructure',
      value: '₹23,000 Cr',
      duration: '4 Years',
      status: 'Completed',
      description: 'Complete automation and signaling systems for 33.5km underground metro line',
      technologies: ['IoT Sensors', 'AI Control Systems', 'Predictive Maintenance']
    },
    {
      title: 'Tata Steel - Industry 4.0 Transformation',
      image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=800&h=500&fit=crop',
      category: 'Automation',
      value: '₹1,200 Cr',
      duration: '2 Years',
      status: 'Ongoing',
      description: 'Complete digital transformation with AI-powered automation systems',
      technologies: ['Robotics', 'Digital Twin', 'Machine Learning']
    },
    {
      title: 'GIFT City - Smart Infrastructure',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=500&fit=crop',
      category: 'Smart City',
      value: '₹5,000 Cr',
      duration: '3 Years',
      status: 'Phase 2',
      description: 'Integrated smart city solutions with sustainable technology',
      technologies: ['Smart Grid', 'IoT Integration', 'Renewable Energy']
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      position: 'Project Director, Tata Projects',
      company: 'Tata Group',
      quote: 'GIC delivered exceptional results on our Mumbai metro project. Their innovative approach and technical expertise exceeded our expectations.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Priya Sharma',
      position: 'Head of Operations, Reliance Infrastructure',
      company: 'Reliance Industries',
      quote: 'The automation solutions provided by GIC transformed our manufacturing efficiency by 45%. Truly world-class engineering.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
    }
  ];

  const newsUpdates = [
    {
      date: '2025-06-10',
      title: 'GIC Wins ₹3,500 Cr Smart City Project in Hyderabad',
      category: 'Project Win',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop'
    },
    {
      date: '2025-06-05',
      title: 'Innovation in Sustainable Engineering Recognized Globally',
      category: 'Awards',
      image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=250&fit=crop'
    },
    {
      date: '2025-05-28',
      title: 'Partnership with IIT Bombay for AI Research Initiative',
      category: 'Partnership',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {!playingVideo ? (
            <>
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop"
                alt="Engineering Excellence"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-transparent"></div>
            </>
          ) : (
            <div className="w-full h-full bg-black">
              <iframe
                className="w-full h-full"
                src="https://player.vimeo.com/video/placeholder?autoplay=1&muted=1"
                frameBorder="0"
                allow="autoplay; fullscreen"
              />
            </div>
          )}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 text-center max-w-6xl mx-auto px-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-yellow-400 text-blue-900 rounded-full text-sm font-semibold mb-4">
              Engineering Excellence Since 2017
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-8xl font-bold mb-8 text-white leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Building
            <motion.span 
              className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              Tomorrow's
            </motion.span>
            <motion.span 
              className="block text-blue-200"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 1 }}
            >
              Infrastructure
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-12 text-gray-200 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
          >
            Global India Corporation pioneers next-generation engineering solutions, combining AI innovation, sustainable practices, and world-class execution to transform India's infrastructure landscape.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.8 }}
          >
            <Link
              to="/projects"
              className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-3 text-white shadow-2xl hover:shadow-blue-500/25"
            >
              Explore Our Innovation 
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button
              onClick={() => setPlayingVideo(!playingVideo)}
              className="group bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 text-white flex items-center gap-3"
            >
              <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
              Watch Our Story
            </button>
          </motion.div>
        </motion.div>

        {/* Floating Stats */}
        
      </section>

      {/* Innovation Marquee */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-4 overflow-hidden border-y border-blue-700">
        <motion.div 
          animate={{ x: [-1000, 1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="whitespace-nowrap"
        >
          <span className="text-lg font-medium mx-8">🚀 AI-Powered Engineering Solutions</span>
          <span className="text-lg font-medium mx-8">🌱 Sustainable Infrastructure Development</span>
          <span className="text-lg font-medium mx-8">🔬 Industry 4.0 Transformation</span>
          <span className="text-lg font-medium mx-8">⚡ Smart City Integration</span>
          <span className="text-lg font-medium mx-8">🏗️ Next-Gen Construction Technology</span>
        </motion.div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                Pioneering India's 
                <span className="block text-blue-600">Engineering Future</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Since 2017, Global India Corporation has been at the forefront of engineering innovation, delivering transformative infrastructure and industrial solutions that shape India's growth story.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                Our expertise spans across smart cities, industrial automation, and cutting-edge technology integration, with a proven track record of ₹50,000+ crores in project value delivered successfully.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">₹50,000Cr+</div>
                  <div className="text-gray-600">Project Value</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
                  <div className="text-gray-600">Safety Record</div>
                </div>
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Learn More <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=700&fit=crop"
                  alt="Engineering Excellence"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                  <div className="flex items-center gap-3">
                    <Award className="h-8 w-8 text-yellow-500" />
                    <div>
                      <div className="font-bold text-gray-900">ISO Certified</div>
                      <div className="text-sm text-gray-600">Quality Excellence</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

 {/* Innovation Showcase */}
<section className="py-24 bg-gradient-to-br from-gray-900 to-blue-900 text-white relative overflow-hidden">
  <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22><g fill=%22none%22 fill-rule=%22evenodd%22><g fill=%22%23ffffff%22 fill-opacity=%220.05%22><circle cx=%2230%22 cy=%2230%22 r=%221%22/></g></g></svg>')]"></div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-20"
    >
      <h2 className="text-5xl md:text-6xl font-bold mb-6">
        Innovation at Scale
      </h2>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        Breakthrough technologies driving the future of engineering and infrastructure
      </p>
    </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {innovations.map((innovation, index) => (
        <motion.div
          key={innovation.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.6 }}
          whileHover={{ y: -10, scale: 1.02 }}
          className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300"
        >
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <innovation.icon className="h-12 w-12 text-yellow-400" />
          </motion.div>
          <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium mb-4">
            {innovation.category}
          </span>
          <h3 className="text-xl font-bold mb-4">{innovation.title}</h3>
          <p className="text-gray-300 mb-4 leading-relaxed">{innovation.desc}</p>
          <div className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm font-semibold">
            {innovation.impact}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
      {/* Enhanced Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Engineering Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions across infrastructure, automation, and technology innovation
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ y: -15 }}
                className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-lg p-2">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex gap-4">
                      <div>
                        <div className="text-2xl font-bold">{service.projects}</div>
                        <div className="text-xs opacity-80">Projects</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-400">{service.growth}</div>
                        <div className="text-xs opacity-80">Growth</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.desc}</p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values & Culture */}
   <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Our Core Values
      </h2>
      <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        The fundamental principles that guide our approach to business and drive our commitment to excellence
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {values.map((value, index) => (
        <motion.div
          key={value.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15, duration: 0.5 }}
          className="group bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-blue-200"
        >
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 p-4 bg-gray-50 rounded-full group-hover:bg-blue-50 transition-colors duration-300">
              <value.icon className={`h-10 w-10 ${value.color} group-hover:scale-110 transition-transform duration-300`} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {value.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              {value.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
      {/* Enhanced Stats Section */}
      <section className="py-24 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white relative overflow-hidden">
        <div className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M20 20c0-11.046-8.954-20-20-20v20h20z\"/%3E%3C/g%3E%3C/svg%3E')]`}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Delivering Impact at Scale
            </h2>
            <p className="text-xl text-blue-200">
              Numbers that reflect our commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.05 }}
                className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="mb-4"
                >
                  <stat.icon className="h-10 w-10 mx-auto text-yellow-400" />
                </motion.div>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-blue-200 opacity-80">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Showcase */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Landmark Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transformative infrastructure projects that shape India's future
            </p>
          </motion.div>

          <div className="space-y-16">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="relative group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-96 object-cover rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-6 left-6 text-white">
                        <span className="inline-block px-3 py-1 bg-blue-600 rounded-full text-sm font-medium mb-2">
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
                    {project.category}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">{project.value}</div>
                      <div className="text-sm text-gray-600">Project Value</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">{project.duration}</div>
                      <div className="text-sm text-gray-600">Timeline</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">{project.status}</div>
                      <div className="text-sm text-gray-600">Status</div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center gap-2">
                    View Case Study <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore All Projects <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Trusted partnerships driving mutual success
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.position}</div>
                    <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Partners */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600">
              Partnering with Fortune 500 companies and government agencies
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-blue-200"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Building className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{client.name}</h3>
                <p className="text-sm text-gray-600">{client.sector}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Updates */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Latest Updates
            </h2>
            <p className="text-xl text-gray-600">
              Stay informed about our latest achievements and innovations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {newsUpdates.map((news, index) => (
              <motion.div
                key={news.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {news.category}
                    </span>
                    <div className="flex items-center gap-1 text-gray-500 text-sm">
                      <Calendar className="h-4 w-4" />
                      {new Date(news.date).toLocaleDateString()}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                    {news.title}
                  </h3>
                  <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-1">
                    Read More <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&h=1080&fit=crop"
            alt="Engineering Excellence"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/90"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="mb-8"
          >
            <Rocket className="h-16 w-16 text-yellow-400 mx-auto" />
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Ready to Transform
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Your Vision?
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Partner with India's most innovative engineering corporation. Let's build the future together with cutting-edge technology and unmatched expertise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-gray-900 px-10 py-4 rounded-xl text-lg font-bold transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3 shadow-2xl hover:shadow-yellow-500/25"
            >
              Start Your Project
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/consultation"
              className="group bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 text-white flex items-center gap-3"
            >
              <Phone className="h-5 w-5" />
              Free Consultation
            </Link>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-12 flex flex-col sm:flex-row gap-8 justify-center items-center text-sm text-gray-300"
          >
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>info@globalindiacorp.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Mumbai | Delhi | Bangalore</span>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}