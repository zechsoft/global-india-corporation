import { motion } from 'framer-motion';
import { ArrowRight, Award, Globe, Users, CheckCircle, Settings, Building, Cog, Zap, Shield, Play, Calendar, MapPin, Phone, Mail, Target, Lightbulb, Cpu, Rocket, BarChart3, Clock, Star, TrendingUp, Eye, HeartHandshake, Leaf, ChevronDown, Menu, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Home() {
  const [playingVideo, setPlayingVideo] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    { 
      title: 'Electrical Services', 
      icon: Zap, 
      desc: 'Reliable, safe, and efficient electrical contracting services for industrial and commercial projects',
      features: ['HT/LT Cable Laying & Termination', 'Transformer Installation', 'High Mast & Street Lighting', 'Panel Installation & Wiring', 'Electrical Equipment Testing & Maintenance', 'Overhead Line Erection'],
      image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&h=400&fit=crop',
      projects: '120+',
      growth: '+35%'
    },
    { 
      title: 'Mechanical & HVAC', 
      icon: Cog, 
      desc: 'Expert mechanical services with strong specialization in HVAC systems',
      features: ['Equipment & Machinery Installation', 'Sheet Metal Fabrication', 'Industrial Piping Support', 'Chiller Systems & Ductless Units', 'Dust Collection & Exhaust Systems', 'Refrigeration Piping'],
      image: 'https://images.unsplash.com/photo-1601134467661-3d775b999c8b?w=600&h=400&fit=crop',
      projects: '90+',
      growth: '+40%'
    },
    { 
      title: 'Civil & Demolition', 
      icon: Building, 
      desc: 'Targeted civil construction support and controlled demolition solutions',
      features: ['Flooring & Masonry', 'Foundation Work', 'Safe Dismantling', 'Concrete Breaking', 'Trenches & Drains', 'Controlled Industrial Demolition'],
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=400&fit=crop',
      projects: '75+',
      growth: '+30%'
    },
    { 
      title: 'IT & Networking', 
      icon: Globe, 
      desc: 'Secure, scalable, and high-performance IT infrastructure solutions',
      features: ['Structured Network Cabling', 'Server Installation', 'Smart Surveillance', 'City Fiber Solutions', 'Power & Cooling Management', 'On-site Technical Support'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
      projects: '60+',
      growth: '+50%'
    },
    { 
      title: 'Manpower Supply', 
      icon: Users, 
      desc: 'Skilled and semi-skilled manpower across all engineering disciplines',
      features: ['Engineers & Supervisors', 'Electricians & Fitters', 'Welders & Riggers', 'HVAC Technicians', 'Painters & Helpers', 'Network Operators'],
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop',
      projects: '200+',
      growth: '+25%'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 3 >= services.length ? 0 : prevIndex + 3
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, services.length - 3) : Math.max(0, prevIndex - 3)
    );
  };

  const visibleServices = services.slice(currentIndex, currentIndex + 3);

  const stats = [
    { number: '8+', label: 'Years Excellence', icon: Award, desc: 'Since 2016' },
    { number: '300+', label: 'Projects Delivered', icon: Building, desc: 'Across India' },
    { number: '50+', label: 'Enterprise Clients', icon: Users, desc: 'Including Fortune 500' },
    { number: '1000+', label: 'Skilled Workers', icon: Users, desc: 'Trained Professionals' }
  ];

  const innovations = [
    { 
      title: 'Multi-Disciplinary Expertise', 
      icon: Globe, 
      desc: 'From electrical systems to mechanical works, HVAC setups to IT networking, civil infrastructure to safe demolition — we offer end-to-end contracting support across key engineering domains.',
      impact: 'Integrated services under one team',
      category: 'Expertise'
    },
    { 
      title: 'Skilled Workforce', 
      icon: Users, 
      desc: 'We deploy qualified engineers, supervisors, electricians, riggers, fitters, welders, and other specialized technicians — all trained to handle real-time industrial challenges.',
      impact: 'Domain knowledge & safety',
      category: 'Workforce'
    },
    { 
      title: 'Precision Through Process', 
      icon: Settings, 
      desc: 'We follow structured planning, quality checks, and compliance protocols at every stage of execution. Ensures projects are completed with efficiency, accuracy, and accountability.',
      impact: 'Consistent quality',
      category: 'Methodology'
    },
    { 
      title: 'Adaptive Solutions', 
      icon: Cpu, 
      desc: 'We tailor our services to fit each client\'s technical needs, timeline, and operational goals — offering flexible manpower and scalable engineering support as needed.',
      impact: 'Customized approach',
      category: 'Flexibility'
    }
  ];

  const values = [
    { title: 'Quality', icon: Target, desc: 'ISO certified quality systems', color: 'text-blue-600' },
    { title: 'Safety', icon: Shield, desc: 'Zero accident policy', color: 'text-green-600' },
    { title: 'Innovation', icon: Lightbulb, desc: 'Continuous process improvement', color: 'text-yellow-600' },
    { title: 'Integrity', icon: HeartHandshake, desc: 'Transparent business practices', color: 'text-purple-600' },
    { title: 'Reliability', icon: CheckCircle, desc: 'On-time project delivery', color: 'text-emerald-600' },
    { title: 'Client Focus', icon: Users, desc: 'Tailored solutions', color: 'text-red-600' }
  ];

  const clients = [
    { name: 'Samsung India', logo: '/samsung-logo.png', sector: 'Electronics' },
    { name: 'Kia Motors', logo: '/kia-logo.png', sector: 'Automotive' },
    { name: 'FLSmidth', logo: '/flsmidth-logo.png', sector: 'Engineering' },
    { name: 'HAEWON Engineering', logo: '/haewon-logo.png', sector: 'Construction' },
    { name: 'JUNGDO Engineering', logo: '/jungdo-logo.png', sector: 'Engineering' },
    { name: 'SAMHO Construction', logo: '/samho-logo.png', sector: 'Construction' }
  ];

  const featuredProjects = [
    {
      title: 'Samsung Display Center – Noida',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop',
      category: 'Electrical & Mechanical',
      value: '₹5.2 Cr',
      duration: '8 Months',
      status: 'Completed',
      description: 'Electrical and mechanical works including HT cable laying, transformer setup, and lighting systems for advanced display manufacturing infrastructure.',
      technologies: ['HT Cable Laying', 'Transformer Setup', 'Lighting Systems', 'Panel Installation']
    },
    {
      title: 'Kia Motors India – Penukonda',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=500&fit=crop',
      category: 'Industrial Electrical',
      value: '₹3.8 Cr',
      duration: '6 Months',
      status: 'Completed',
      description: 'Industrial electrical works, HVAC installation, and manpower support for Korean vendor operations at the Kia Motors manufacturing facility.',
      technologies: ['HVAC Installation', 'Electrical Works', 'Manpower Supply', 'Equipment Setup']
    },
    {
      title: 'FLSmidth Plant Support',
      image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&h=500&fit=crop',
      category: 'Mechanical',
      value: '₹2.5 Cr',
      duration: '4 Months',
      status: 'Completed',
      description: 'On-site manpower deployment and mechanical service support for plant systems and industrial assembly at FLSmidth facility.',
      technologies: ['Mechanical Support', 'Manpower Deployment', 'Plant Systems', 'Equipment Maintenance']
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      position: 'Project Manager',
      company: 'Samsung India Electronics',
      quote: 'GIC has consistently delivered high-quality electrical and mechanical support for our operations. Their team is responsive, technically sound, and always meets deadlines with precision.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Min-ho Lee',
      position: 'Operations Head',
      company: 'HAEWON Engineering',
      quote: 'We\'ve partnered with GIC across multiple sites for HVAC and civil work. Their professionalism, safety standards, and trained workforce have made them a reliable extension of our project team.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Thomas Müller',
      position: 'Site Manager',
      company: 'FLSmidth',
      quote: 'From manpower supply to IT infrastructure setup, GIC has proven to be a dependable partner. Their flexibility and ability to scale based on our site needs is impressive.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Arun Patel',
      position: 'Construction Manager',
      company: 'Industrial Client',
      quote: 'The demolition project was handled with care, compliance, and zero disruption to ongoing site activities. GIC\'s execution was smooth, timely, and cost-effective.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Priya Sharma',
      position: 'Engineering Director',
      company: 'Kia Motors',
      quote: 'We trust GIC for their all-in-one approach — skilled manpower, technical execution, and commitment to safety. They bring valuable support to every phase of our projects.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face'
    }
  ];

  const newsUpdates = [
    {
      date: '2025-06-10',
      title: 'GIC Wins New Contract with Automotive Major',
      category: 'Project Win',
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=250&fit=crop'
    },
    {
      date: '2025-06-05',
      title: 'Expansion of Manpower Supply Services',
      category: 'Growth',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop'
    },
    {
      date: '2025-05-28',
      title: 'Safety Excellence Award Received',
      category: 'Awards',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop'
    }
  ];

  // Testimonials carousel state
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const testimonialsPerView = 2;
  const totalTestimonialSlides = Math.ceil(testimonials.length / testimonialsPerView);

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) => 
      prevIndex + 1 >= totalTestimonialSlides ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) => 
      prevIndex - 1 < 0 ? totalTestimonialSlides - 1 : prevIndex - 1
    );
  };

  const currentTestimonials = testimonials.slice(
    currentTestimonialIndex * testimonialsPerView,
    (currentTestimonialIndex + 1) * testimonialsPerView
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Auto-Rotating Carousel */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Image Carousel */}
        <div className="absolute inset-0 z-0">
          {[
            {
              url: 'https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
              title: 'Electrical Services',
              desc: 'HT/LT Cable Laying • Transformer Installation • Panel Wiring'
            },
            {
              url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
              title: 'Mechanical & HVAC',
              desc: 'Chiller Systems • Sheet Metal Fabrication • Equipment Installation'
            },
            {
              url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
              title: 'Civil & Demolition',
              desc: 'Foundation Work • Safe Dismantling • Concrete Breaking'
            },
            {
              url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
              title: 'IT & Networking',
              desc: 'Structured Cabling • Server Installation • Fiber Solutions'
            },
            {
              url: 'https://images.unsplash.com/photo-1581093057305-5e0d6fab2c14?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
              title: 'Manpower Supply',
              desc: 'Skilled Engineers • Technicians • Supervisors • Helpers'
            }
          ].map((slide, index) => (
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 1, 0],
                scale: [1, 1.02, 1.02, 1]
              }}
              transition={{
                duration: 25, // Total duration for all slides (5 slides × 5s each)
                times: [0, 0.05, 0.95, 1], // Fade in/out timing
                ease: "linear",
                repeat: Infinity,
                repeatDelay: 0,
                delay: index * 5 // Each slide stays for 5 seconds
              }}
            >
              <img
                src={slide.url}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-transparent">
                <div className="absolute bottom-10 left-10 max-w-md text-left">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: [0, 1, 1, 0],
                      y: [20, 0, 0, -20]
                    }}
                    transition={{
                      duration: 25,
                      times: [0, 0.1, 0.9, 1],
                      delay: index * 5
                    }}
                    className="text-white"
                  >
                    <span className="inline-block px-3 py-1 bg-yellow-400 text-blue-900 rounded-full text-sm font-semibold mb-3">
                      {slide.title}
                    </span>
                    <p className="text-xl font-medium mt-2">{slide.desc}</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Hero Content (centered) */}
        <motion.div
          className="relative z-10 text-center max-w-6xl mx-auto px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Global India
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Corporation
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-12 text-gray-200 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Multi-disciplinary engineering solutions with technical expertise, safety-first approach, and world-class execution.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/services"
              className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-3 text-white shadow-2xl"
            >
              Explore Services 
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="group bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 text-white flex items-center gap-3"
            >
              <Phone className="h-5 w-5" />
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Innovation Marquee */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-4 overflow-hidden border-y border-blue-700">
        <motion.div 
          animate={{ x: [-1000, 1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="whitespace-nowrap"
        >
          <span className="text-lg font-medium mx-8">⚡ Electrical Contracting Services</span>
          <span className="text-lg font-medium mx-8">🔧 Mechanical & HVAC Solutions</span>
          <span className="text-lg font-medium mx-8">🏗️ Civil & Demolition Works</span>
          <span className="text-lg font-medium mx-8">🌐 IT & Networking Infrastructure</span>
          <span className="text-lg font-medium mx-8">👷‍♂️ Skilled Manpower Supply</span>
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
                About Global India
                <span className="block text-blue-600">Corporation</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Established in 2016, GIC is a leading multi-disciplinary engineering contracting and manpower supply company specializing in Electrical, Mechanical (HVAC), Civil, Demolition, and IT Networking services.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                We blend Indian and Korean-style work methodologies to deliver reliable solutions to industrial and commercial clients across various sectors with a strong focus on quality, safety, and timely execution.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">300+</div>
                  <div className="text-gray-600">Projects Completed</div>
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
                  alt="Engineering Team"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                  <div className="flex items-center gap-3">
                    <Award className="h-8 w-8 text-yellow-500" />
                    <div>
                      <div className="font-bold text-gray-900">Our Mission</div>
                      <div className="text-sm text-gray-600">To empower industries with dependable engineering solutions</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose GIC Section */}
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
              Why Choose GIC
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Where Engineering Meets Precision — Because Everything is Possible
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
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive engineering solutions across multiple disciplines
            </p>
          </motion.div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            
            <button
              onClick={nextSlide}
              disabled={currentIndex + 3 >= services.length}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>

            {/* Services Grid */}
            <div className="grid lg:grid-cols-3 gap-8 px-12">
              {visibleServices.map((service, index) => (
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
                    <Link 
                      to="/services"
                      className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300 text-center"
                    >
                      Learn More
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.ceil(services.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * 3)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    Math.floor(currentIndex / 3) === index 
                      ? 'bg-blue-600' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
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
              The fundamental principles that guide our approach to business
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
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-blue-200">
              Quantifying our commitment to excellence
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
              Our Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transformative projects that showcase our capabilities
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

      {/* Client Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Esteemed Clients
            </h2>
            <p className="text-xl text-gray-600">
              Partnering with industry leaders across sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-blue-200 flex items-center justify-center"
              >
                <div className="w-full h-16 flex items-center justify-center">
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </div>
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
              Client Testimonials
            </h2>
            <p className="text-xl text-gray-600">
              What our clients say about working with us
            </p>
          </motion.div>

          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600 group-hover:text-blue-600" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <ChevronRight className="h-6 w-6 text-gray-600 group-hover:text-blue-600" />
            </button>

            {/* Testimonials Container */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonialIndex * 100}%)` }}
              >
                {Array.from({ length: totalTestimonialSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid lg:grid-cols-2 gap-8">
                      {testimonials
                        .slice(slideIndex * testimonialsPerView, (slideIndex + 1) * testimonialsPerView)
                        .map((testimonial, index) => (
                          <motion.div
                            key={`${slideIndex}-${index}`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full"
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
                ))}
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-12 space-x-2">
              {Array.from({ length: totalTestimonialSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonialIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonialIndex
                      ? 'bg-blue-600 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News & Updates */}
      <section className="py-20 bg-white">
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
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100"
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
            alt="Engineering Team"
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
            Ready to Start
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Your Project?
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Partner with India's trusted multi-disciplinary engineering corporation. Let's build the future together with technical expertise and unmatched execution.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-gray-900 px-10 py-4 rounded-xl text-lg font-bold transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3 shadow-2xl hover:shadow-yellow-500/25"
            >
              Contact Us Today
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
              <span>globalindiacorps@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+91-9047642156</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>3B/1A, Kovalavedu Main Road, Walajabad, Kancheepuram, Tamil Nadu 631604</span>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}