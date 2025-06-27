import { motion } from 'framer-motion';
import { ArrowRight, Award, Globe, Users, CheckCircle, Settings, Building, Building2, Cog, Zap, Shield, Play, Calendar, MapPin, Phone, Mail, Target, Lightbulb, Cpu, Rocket, BarChart3, Clock, Star, TrendingUp, Eye, HeartHandshake, Leaf, ChevronDown, Menu, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ClientCarousel from './ClientCarousel';

import TestimonialsSection from './TestimonialsSection';
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
      image: '/assets/Images/Main Page Section Images/Services Section/Electrical Services N.png',
      projects: '120+',
      growth: '+35%'
    },
    { 
      title: 'Mechanical & HVAC', 
      icon: Cog, 
      desc: 'Expert mechanical services with strong specialization in HVAC systems',
      features: ['Equipment & Machinery Installation', 'Sheet Metal Fabrication', 'Industrial Piping Support', 'Chiller Systems & Ductless Units', 'Dust Collection & Exhaust Systems', 'Refrigeration Piping'],
      image: '/assets/Images/Main Page Section Images/Services Section/Mechanical & HVAC N.png',
      projects: '90+',
      growth: '+40%'
    },
    { 
      title: 'Civil & Demolition', 
      icon: Building, 
      desc: 'Targeted civil construction support and controlled demolition solutions',
      features: ['Flooring & Masonry', 'Foundation Work', 'Safe Dismantling', 'Concrete Breaking', 'Trenches & Drains', 'Controlled Industrial Demolition'],
      image: '/assets/Images/Main Page Section Images/Services Section/Civil & Demolition N.png',
      projects: '75+',
      growth: '+30%'
    },
    { 
      title: 'IT & Networking', 
      icon: Globe, 
      desc: 'Secure, scalable, and high-performance IT infrastructure solutions',
      features: ['Structured Network Cabling', 'Server Installation', 'Smart Surveillance', 'City Fiber Solutions', 'Power & Cooling Management', 'On-site Technical Support'],
      image: '/assets/Images/Main Page Section Images/Services Section/IT Networking n.png',
      projects: '60+',
      growth: '+50%'
    },
    { 
      title: 'Manpower Supply', 
      icon: Users, 
      desc: 'Skilled and semi-skilled manpower across all engineering disciplines',
      features: ['Engineers & Supervisors', 'Electricians & Fitters', 'Welders & Riggers', 'HVAC Technicians', 'Painters & Helpers', 'Network Operators'],
      image: '/assets/Images/Main Page Section Images/Services Section/Manpower Supply N.png',
      projects: '200+',
      growth: '+25%'
    }
  ];
const featuredProjects = [
    {
      title: "Samsung Display Center – Noida",
      id: "samsung-display-noida"
    },
    {
      title: "Vendor Projects for Samsung India Electronics Pvt Ltd",
      id: "samsung-vendor-projects"
    },
    {
      title: "Vendor projects for Kia Motors India",
      id: "kia-motors-vendor"
    },
    {
      title: "FLSmidth (German Engineering Firm)",
      id: "flsmidth-german"
    }
  ];
  const handleProjectClick = (projectId) => {
    // This would typically navigate to the project page
    console.log(`Navigating to project: ${projectId}`);
    // In a real application, you might use:
    // navigate(`/projects/${projectId}`) or window.location.href = `/projects/${projectId}`
  };

const nextSlide = () => {
  setCurrentIndex((prevIndex) => 
    prevIndex + 5 >= services.length ? 0 : prevIndex + 5
  );
};

const prevSlide = () => {
  setCurrentIndex((prevIndex) => 
    prevIndex === 0 ? Math.max(0, services.length - 5) : Math.max(0, prevIndex - 5)
  );
};

const visibleServices = services.slice(currentIndex, currentIndex + 5);

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
      desc: 'From electrical systems to mechanical works, HVAC setups to IT networking, civil infrastructure to safe demolition — we offer end-to-end contracting support across key engineering domains. Our clients benefit from integrated services under one professional team.',
      impact: 'Integrated services under one team',
      category: 'Expertise'
    },
    { 
      title: 'Skilled Workforce', 
      icon: Users, 
      desc: 'We deploy qualified engineers, supervisors, electricians, riggers, fitters, welders, and other specialized technicians — all trained to handle real-time industrial challenges. Every team member is selected for their domain knowledge, discipline, and commitment to safety.',
      impact: 'Domain knowledge & safety',
      category: 'Workforce'
    },
    { 
      title: 'Precision Through Process', 
      icon: Settings, 
      desc: 'We follow structured planning, quality checks, and compliance protocols at every stage of execution. Whether it’s a shutdown service or a plant expansion, our process ensures projects are completed with efficiency, accuracy, and accountability.',
      impact: 'Consistent quality',
      category: 'Methodology'
    },
    { 
      title: 'Adaptive Solutions', 
      icon: Cpu, 
      desc: 'No two projects are the same. That’s why we tailor our services to fit each client is technical needs, timeline, and operational goals — offering flexible manpower and scalable engineering support as needed.',
      impact: 'Customized approach',
      category: 'Flexibility'
    },
    { 
      title: 'Indian-Korean Work Methodology', 
      icon: HeartHandshake, 
      desc: 'Our unique blend of Indian and Korean methods allows us to exceed expectations in performance, safety, and project management. This cultural synergy reflects in our high client satisfaction and long-standing industry relationships.',
      impact: 'Best of both worlds',
      category: 'Innovation'
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
  
  const handleLearnMore = () => {
    // Navigate to another GIC page
    window.location.href = '/careers'; // Replace with your actual route
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
    url: '/assets/Images/Home Page Images/1.png',
    title: 'Electrical Services',
    desc: 'HT/LT Cable Laying • Transformer Installation • Panel Wiring'
  },
  {
    url: '/assets/Images/Home Page Images/2.png',
    title: 'Mechanical & HVAC',
    desc: 'Chiller Systems • Sheet Metal Fabrication • Equipment Installation'
  },
  {
    url: '/assets/Images/Home Page Images/3.png',
    title: 'Civil & Demolition',
    desc: 'Foundation Work • Safe Dismantling • Concrete Breaking'
  },
  {
    url: '/assets/Images/Home Page Images/4.png',
    title: 'IT & Networking',
    desc: 'Structured Cabling • Server Installation • Fiber Solutions'
  },
  {
    url: '/assets/Images/Home Page Images/5.png',
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
                {/* Removed the bottom left text section */}
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
            className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Global India Corporation
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-12 text-gray-200 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
           Everything is Possible
          </motion.p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/services/electrical"
              className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-3 text-white shadow-2xl"
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
                About Us
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
               Global India Corporation (GIC) is a leading multi-disciplinary engineering contracting and manpower supply company, established in 2016. We specialize in Electrical, Mechanical (HVAC), Civil, Demolition, and IT Networking services, delivering reliable solutions to industrial and commercial clients across various sectors.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                With a strong focus on quality, safety, and timely execution, GIC has earned a reputation for supporting complex engineering requirements with efficiency and professionalism. Our approach blends Indian and Korean-style work methodologies, enabling us to meet technical challenges while maintaining high standards of compliance and performance.
At GIC, we believe that “Everything is Possible” — a mindset that drives every service we offer, from high-voltage electrical systems to structured network infrastructure and plant engineering support.

              </p>
{/*               
              <div className="grid grid-cols-1 gap-6 mb-10">
                <div className="p-6 bg-white rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-blue-600 mb-4">Our Mission</h3>
                  <p className="text-gray-600">
                    To empower industries with dependable engineering solutions by combining skilled manpower, technical precision, and a culture of "everything is possible." We aim to be the partner of choice for clients seeking safe, scalable, and custom-built infrastructure support.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-blue-600 mb-4">Our Vision</h3>
                  <p className="text-gray-600">
                    To become a globally recognized engineering solutions provider known for our innovative approach, exceptional quality, and commitment to client success. We strive to set industry benchmarks in safety, efficiency, and sustainable practices while fostering long-term partnerships.
                  </p>
                </div>
              </div> */}

              <Link
                to="/about" // Changed to link to Why GIC section
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
                  src="\assets\Images\Main Page Section Images\About US 3.png"
                  alt="Engineering Team"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                  <div className="flex items-center gap-3">
                    <Award className="h-8 w-8 text-yellow-500" />
                    <div>
                      <div className="font-bold text-gray-900">8+ Years</div>
                      <div className="text-sm text-gray-600">Industry Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose GIC Section */}
      <section id="why-gic" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.05)_50%,transparent_75%)] bg-[length:60px_60px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent">
              Why Choose GIC
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-8">
              Where Engineering Meets Precision — Because Everything is Possible
            </h3>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              When industrial clients look for a partner, they seek more than just a contractor — they seek dependability, skill, and integrity. At <strong className="text-blue-700">Global India Corporation (GIC)</strong>, we deliver all three.
            </p>
          </motion.div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {innovations.map((innovation, index) => (
            <motion.div
              key={innovation.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-200 hover:border-blue-300 transition-all duration-500 shadow-lg hover:shadow-2xl relative overflow-hidden"
            >
              {/* Subtle hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Icon and Category */}
                <div className="flex items-center justify-between mb-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg"
                  >
                    <innovation.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold border">
                    {innovation.category}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-800 transition-colors duration-300">
                  {innovation.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed text-base">
                  {innovation.desc}
                </p>

                {/* Impact Badge */}

              </div>
            </motion.div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Experience the GIC Difference?
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Discover how our integrated approach and proven methodology can transform your next industrial project.
            </p>
            <Link to='/careers'>
            <motion.button
              
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center px-8 py-4 bg-white text-blue-700 font-bold rounded-2xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              Learn More Why GIC
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
            </Link>
          </div>
        </motion.div>
        
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
                      Explore More
                    </Link>
                  </div>
                </motion.div>
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
       <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f1f5f9' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-green-100 to-blue-100 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <CheckCircle className="h-4 w-4" />
            Proven Track Record
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent mb-6">
            Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            Proven Execution. Trusted by Industry Leaders.
          </p>
        </div>



        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Company Info */}
          <div className="space-y-6">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Building2 className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
                  Projects
                </h3>
              </div>
              
              <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
                <p className="text-xl italic font-semibold">
                  Proven Execution. Trusted by Industry Leaders.
                </p>
              </div>
              
              <div className="prose prose-lg text-gray-700 leading-relaxed space-y-6">
                <div className="relative">
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
                  <div className="pl-6">
                    <p className="mb-6 text-gray-700 leading-relaxed">
                      At <span className="font-bold text-gray-900 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Global India Corporation (GIC)</span>, we take pride in delivering high-quality engineering and contracting services to some of the most respected names in the industrial sector. Since our inception in 2016, we have successfully executed a wide range of projects across <span className="font-semibold text-blue-600">electrical</span>, <span className="font-semibold text-green-600">mechanical (HVAC)</span>, <span className="font-semibold text-purple-600">civil</span>, <span className="font-semibold text-orange-600">demolition</span>, and <span className="font-semibold text-indigo-600">IT networking domains</span>, with precision, safety, and client satisfaction at the core.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Each project reflects our ability to adapt, mobilize skilled manpower, and meet technical requirements within committed timelines — making us a dependable partner in critical industrial operations.
                    </p>
                  </div>
                </div>
                
                {/* CTA Button */}
                <div className="mt-8 text-center">
                  <Link to='/services/Electrical Services'>
                  <button className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 hover:from-blue-700 hover:via-blue-800 hover:to-purple-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-blue-500/20">
                    <span className="relative z-10">Explore All Projects</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                    
                    {/* Button glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-lg"></div>
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Project Details */}
          <div className="space-y-6">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
                  Our Featured Projects
                </h3>
              </div>
              <Link to={'./projects'} className="block">
              <div className="space-y-4">
                {featuredProjects.map((project, index) => (
                  <div
                    key={index}
                    className="group relative"
                  >
                    <div 
                      className="relative flex items-center justify-between p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/30 hover:border-blue-300/50 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden group-hover:scale-[1.02] transform"
                      onClick={() => handleProjectClick(project.id)}
                    >
                      {/* Animated background gradient */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 via-blue-50/30 to-purple-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="flex items-center gap-4 relative z-10">
                        <div className="relative">
                          <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex-shrink-0 shadow-lg"></div>
                          <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-20"></div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {project.title}
                          </h4>
                        </div>
                      </div>
                      <div className="relative z-10">
                        <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Client Showcase */}
      <section id="clients">
<ClientCarousel />
      </section>
      {/* Client Testimonials */}
      <section className="py-24 bg-gray-50"> <TestimonialsSection /></section>

      {/* News & Updates */}
      

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src='/assets/Images/Main Page Section Images/About US 3.png'
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
