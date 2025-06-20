import { motion, useScroll, useTransform } from 'framer-motion';
import { Award, Users, Globe, Shield, Target, Zap, Building2, Cog, TrendingUp, Eye, Heart, Star, CheckCircle, ArrowRight, Play } from 'lucide-react';
import { useState, useRef } from 'react';

export default function About() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const milestones = [
    { year: '2016', event: 'Founded with vision to transform infrastructure', icon: Target, details: 'Started with a mission to revolutionize industrial infrastructure services' },
    { year: '2017', event: 'First major industrial project completion', icon: Building2, details: 'Successfully delivered electrical works for Samsung Display Center' },
    { year: '2018', event: 'Expanded to mechanical and HVAC services', icon: Zap, details: 'Pioneered industrial HVAC solutions for manufacturing plants' },
    { year: '2019', event: 'Established Korean vendor partnerships', icon: Cog, details: 'Became trusted contractor for multiple Korean engineering firms' },
    { year: '2020', event: 'Launched IT & Networking division', icon: Globe, details: 'Expanded services to include structured network cabling solutions' },
    { year: '2021', event: 'Achieved major client milestones', icon: Award, details: 'Recognized for excellence in service by Samsung and Kia Motors' },
    { year: '2022', event: 'Expanded manpower services', icon: TrendingUp, details: 'Increased skilled workforce deployment across industries' },
    { year: '2023', event: 'Enhanced safety protocols', icon: Shield, details: 'Implemented advanced safety measures across all projects' },
    { year: '2024', event: 'Serving 20+ industrial clients', icon: Users, details: 'Expanded operations with 500+ skilled professionals' }
  ];

  const leaders = [
    {
      name: 'Rajesh Kumar',
      position: 'Founder & CEO',
      experience: '15+ years in industrial contracting',
      education: 'Engineering Graduate, Project Management Certified',
      achievement: 'Led 200+ industrial projects',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
    },
    {
      name: 'Priya Sharma',
      position: 'Operations Director',
      experience: '12+ years in industrial services',
      education: 'Mechanical Engineering, MBA',
      achievement: 'Expert in Korean work methodologies',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b72bfa76?w=400&h=400&fit=crop'
    },
    {
      name: 'Amit Patel',
      position: 'Electrical Services Head',
      experience: '10+ years in industrial electrical',
      education: 'Electrical Engineering',
      achievement: 'Certified in high-voltage systems',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop'
    },
    {
      name: 'Sunita Reddy',
      position: 'HR & Manpower Director',
      experience: '8+ years in skilled workforce',
      education: 'Human Resources Management',
      achievement: 'Trained 1000+ technicians',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop'
    }
  ];

  const innovations = [
    {
      title: 'Industrial Electrical Solutions',
      description: 'HT/LT cable laying, transformer installation, and high mast lighting systems for industrial plants',
      icon: Cog,
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop'
    },
    {
      title: 'HVAC Systems',
      description: 'Dust collection, exhaust systems, chiller units, and environmental control solutions',
      icon: Shield,
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop'
    },
    {
      title: 'Industrial Networking',
      description: 'Structured network cabling, server installation, and smart surveillance systems',
      icon: Globe,
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop'
    }
  ];

  const achievements = [
    { number: '200+', label: 'Projects Completed', icon: CheckCircle },
    { number: '500+', label: 'Team Members', icon: Users },
    { number: '20+', label: 'Industrial Clients', icon: Globe },
    { number: '₹50Cr+', label: 'Project Value', icon: TrendingUp }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Safety & Quality',
      description: 'Zero-compromise approach to safety with world-class quality standards in every project we undertake.'
    },
    {
      icon: Users,
      title: 'Skilled Workforce',
      description: 'Our team of engineers, electricians, and technicians are trained to handle industrial challenges.'
    },
    {
      icon: Zap,
      title: 'Precision',
      description: 'Structured planning and quality checks ensure projects are completed with accuracy and efficiency.'
    },
    {
      icon: Globe,
      title: 'Korean Methodology',
      description: 'Blending Indian and Korean work practices for superior project execution.'
    },
    {
      icon: Eye,
      title: 'Flexibility',
      description: 'Tailored services to fit each client\'s technical needs, timeline, and operational goals.'
    },
    {
      icon: Heart,
      title: 'Everything is Possible',
      description: 'Our mindset that drives every service we offer, from electrical systems to plant engineering.'
    }
  ];

  return (
    <div className="min-h-screen" ref={containerRef}>
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90 z-10"></div>
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop" 
            alt="Industrial infrastructure"
            className="w-full h-full object-cover"
          />
        </div>
        
        <motion.div 
          className="relative z-20 text-center text-white px-4 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Industrial Excellence
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Engineering contracting and manpower solutions that power industries with precision, safety, and innovation.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 hover:scale-105">
              Our Services
            </button>
            <button 
              onClick={() => setIsVideoPlaying(true)}
              className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300"
            >
              <Play className="h-5 w-5" />
              Watch Our Story
            </button>
          </motion.div>
        </motion.div>

        {/* Floating elements */}
        <div className="absolute inset-0 z-10">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.8, 0.2]
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 0.5
              }}
            />
          ))}
        </div>
      </section>

      {/* Achievement Stats */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                  <achievement.icon className="h-12 w-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-4xl font-bold text-gray-900 mb-2">{achievement.number}</div>
                  <div className="text-gray-600 font-medium">{achievement.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                  Our Heritage
                </div>
                <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                  Powering Industrial Growth Since 2016
                </h2>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Global India Corporation (GIC) is a leading multi-disciplinary engineering contracting and manpower supply company, established in 2016. We specialize in Electrical, Mechanical (HVAC), Civil, Demolition, and IT Networking services.
                  </p>
                  <p>
                    With a strong focus on quality, safety, and timely execution, GIC has earned a reputation for supporting complex engineering requirements with efficiency and professionalism. Our approach blends Indian and Korean-style work methodologies.
                  </p>
                  <p>
                    We believe that "Everything is Possible" — a mindset that drives every service we offer, from high-voltage electrical systems to structured network infrastructure and plant engineering support.
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-2 border-white"></div>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">500+ professionals driving industrial excellence</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop"
                  alt="Our industrial team"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
                
                {/* Floating cards */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <div className="flex items-center gap-2">
                    <Award className="h-6 w-6 text-yellow-500" />
                    <div>
                      <div className="text-sm font-bold">Trusted Partner</div>
                      <div className="text-xs text-gray-500">Samsung, Kia Motors</div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-4 shadow-xl"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                >
                  <div className="text-2xl font-bold">200+</div>
                  <div className="text-sm opacity-90">Industrial Projects</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Our Services
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Comprehensive Industrial Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide a complete range of engineering and technical contracting services tailored for industrial needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {innovations.map((innovation, index) => (
              <motion.div
                key={innovation.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={innovation.image}
                    alt={innovation.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <innovation.icon className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{innovation.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{innovation.description}</p>
                  <button className="mt-4 flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all duration-300">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6">Our Industrial Journey</h2>
            <p className="text-xl opacity-80 max-w-3xl mx-auto">
              Every milestone represents our commitment to industrial excellence and client satisfaction.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
            
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className="flex-1">
                    <div className={`bg-gradient-to-r from-gray-800 to-gray-700 p-8 rounded-2xl shadow-2xl border border-gray-600 ${index % 2 === 0 ? 'mr-8 text-right' : 'ml-8 text-left'}`}>
                      <div className="text-3xl font-bold text-blue-400 mb-3">{milestone.year}</div>
                      <h3 className="text-xl font-bold mb-2">{milestone.event}</h3>
                      <p className="text-gray-300">{milestone.details}</p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                      <milestone.icon className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-ping opacity-20"></div>
                  </div>
                  
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-block bg-blue-100 text-blue-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Leadership Excellence
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the professionals driving our industrial contracting services and client success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                  <div className="relative mb-8">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover ring-4 ring-blue-100 group-hover:ring-blue-300 transition-all duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-600/20 to-transparent group-hover:from-blue-600/30 transition-all duration-300"></div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{leader.position}</p>
                  <p className="text-gray-600 text-sm mb-2">{leader.education}</p>
                  <p className="text-gray-500 text-sm mb-4">{leader.experience}</p>
                  
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <div className="flex items-center justify-center gap-2 text-yellow-600">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-xs font-medium">{leader.achievement}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
         <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%239C92AC%22%20fill-opacity=%220.05%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6">Our Core Values</h2>
            <p className="text-xl opacity-80 max-w-3xl mx-auto">
              The principles that guide every decision and action in our industrial services.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 group-hover:-translate-y-2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="opacity-80 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Power Your Industrial Projects?</h2>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              Partner with us for engineering contracting and manpower solutions that deliver results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                Get a Quote
              </button>
              <button className="border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Contact Our Team
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}