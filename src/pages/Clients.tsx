import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, Award, Users, Globe, TrendingUp, Shield, Clock, Zap, Target, CheckCircle, ArrowRight } from 'lucide-react';

export default function Clients() {
  const clients = [
    { 
      name: 'Samsung India', 
      sector: 'Electronics Manufacturing', 
      projects: 18,
      logo: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=200&h=120&fit=crop&crop=center',
      revenue: '$72B',
      established: '1995'
    },
    { 
      name: 'Kia Motors India', 
      sector: 'Automotive Manufacturing', 
      projects: 12,
      logo: 'https://images.unsplash.com/photo-1605559421013-3b2e3b5d7b3d?w=200&h=120&fit=crop&crop=center',
      revenue: '$58B',
      established: '2017'
    },
    { 
      name: 'FLSmidth', 
      sector: 'Engineering & Manufacturing', 
      projects: 8,
      logo: 'https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?w=200&h=120&fit=crop&crop=center',
      revenue: '$2.5B',
      established: '1882'
    },
    { 
      name: 'HAEWON Engineering', 
      sector: 'Industrial Engineering', 
      projects: 6,
      logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=120&fit=crop&crop=center',
      revenue: '$850M',
      established: '1992'
    },
    { 
      name: 'JUNGDO Engineering', 
      sector: 'Construction & Engineering', 
      projects: 5,
      logo: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=200&h=120&fit=crop&crop=center',
      revenue: '$1.2B',
      established: '1985'
    },
    { 
      name: 'SAMHO Construction', 
      sector: 'Industrial Construction', 
      projects: 4,
      logo: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a7a4?w=200&h=120&fit=crop&crop=center',
      revenue: '$950M',
      established: '1990'
    },
    { 
      name: 'DAEMYOUNG Engineering', 
      sector: 'Mechanical Engineering', 
      projects: 7,
      logo: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&h=120&fit=crop&crop=center',
      revenue: '$780M',
      established: '1988'
    },
    { 
      name: 'HYOJIN Engineering', 
      sector: 'Industrial Services', 
      projects: 5,
      logo: 'https://images.unsplash.com/photo-1581093057305-3ecb60a6a5d2?w=200&h=120&fit=crop&crop=center',
      revenue: '$650M',
      established: '1995'
    }
  ];

  const testimonials = [
    {
      name: 'Rajiv Sharma',
      position: 'Plant Manager',
      company: 'Samsung Display Center',
      quote: 'GIC has consistently delivered high-quality electrical and mechanical support for our operations. Their team is responsive, technically sound, and always meets deadlines with precision.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=120&h=120&fit=crop&crop=face',
      projectValue: '$18M',
      completionTime: '10 months'
    },
    {
      name: 'Arjun Patel',
      position: 'Operations Head',
      company: 'Kia Motors India',
      quote: 'We trust GIC for their all-in-one approach — skilled manpower, technical execution, and commitment to safety. They bring valuable support to every phase of our projects.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=120&h=120&fit=crop&crop=face',
      projectValue: '$12M',
      completionTime: '8 months'
    },
    {
      name: 'Michael Schneider',
      position: 'Project Director',
      company: 'FLSmidth',
      quote: 'The demolition project was handled with care, compliance, and zero disruption to ongoing site activities. GIC\'s execution was smooth, timely, and cost-effective.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face',
      projectValue: '$8M',
      completionTime: '6 months'
    },
    {
      name: 'Kim Jae-Hoon',
      position: 'Site Manager',
      company: 'HAEWON Engineering',
      quote: 'We\'ve partnered with GIC across multiple sites for HVAC and civil work. Their professionalism, safety standards, and trained workforce have made them a reliable extension of our project team.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&h=120&fit=crop&crop=face',
      projectValue: '$6M',
      completionTime: '5 months'
    },
    {
      name: 'Priya Nair',
      position: 'IT Infrastructure Lead',
      company: 'NEW VISION Fire Safety',
      quote: 'From manpower supply to IT infrastructure setup, GIC has proven to be a dependable partner. Their flexibility and ability to scale based on our site needs is impressive.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face',
      projectValue: '$4M',
      completionTime: '4 months'
    }
  ];

  const stats = [
    { icon: Users, number: '50+', label: 'Industrial Clients', color: 'from-blue-500 to-blue-700', bgColor: 'bg-blue-50' },
    { icon: Award, number: '120+', label: 'Projects Delivered', color: 'from-emerald-500 to-emerald-700', bgColor: 'bg-emerald-50' },
    { icon: Globe, number: '15+', label: 'Cities Served', color: 'from-purple-500 to-purple-700', bgColor: 'bg-purple-50' },
    { icon: TrendingUp, number: '98%', label: 'Client Satisfaction', color: 'from-orange-500 to-orange-700', bgColor: 'bg-orange-50' }
  ];

  const achievements = [
    {
      title: 'Industry Recognition',
      description: 'Winner of "Engineering Excellence Award" by CII',
      icon: Award,
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'Quality Certification',
      description: 'ISO 9001:2015, ISO 14001:2015, OHSAS 18001 Certified',
      icon: Shield,
      gradient: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Innovation Leader',
      description: 'Patent holder for engineering innovations',
      icon: Zap,
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      title: 'Delivery Excellence',
      description: '90% projects delivered ahead of schedule',
      icon: Clock,
      gradient: 'from-green-400 to-teal-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-blue-900/90"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
            >
              Our Trusted Clients
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90 leading-relaxed"
            >
              Partnering with leading industrial corporations and global engineering firms to deliver multi-disciplinary engineering solutions
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex justify-center gap-4"
            >
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
                Trusted Since 2016
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
                ₹500+ Cr Projects Delivered
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering consistent results across diverse industrial engineering domains
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`${stat.bgColor} p-8 rounded-2xl shadow-lg border border-gray-100 text-center group cursor-pointer`}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} text-white mb-6 shadow-lg`}
                >
                  <stat.icon className="h-8 w-8" />
                </motion.div>
                <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.number}
                </div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Portfolio */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Our Valued Clients
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Trusted by leading industrial corporations and global engineering firms for multi-disciplinary engineering solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02, y: -8 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden group cursor-pointer border border-gray-100"
              >
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={client.logo}
                    alt={`${client.name} projects`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-3 left-3">
                    <span className="text-white text-sm font-medium bg-black/30 backdrop-blur-sm px-2 py-1 rounded">
                      Est. {client.established}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {client.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{client.sector}</p>
                  
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">{client.projects}</div>
                      <div className="text-xs text-gray-500">Completed Projects</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-gray-900">{client.revenue}</div>
                      <div className="text-xs text-gray-500">Annual Revenue</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-xs text-green-600 bg-green-50 px-3 py-2 rounded-lg">
                    <CheckCircle className="h-3 w-3 mr-2" />
                    Ongoing Partnership
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Credentials
            </h2>
            <p className="text-xl text-gray-600">
              Recognized for excellence in industrial engineering and contracting services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 shadow-lg group"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${achievement.gradient} text-white mb-4 shadow-lg`}
                >
                  <achievement.icon className="h-8 w-8" />
                </motion.div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">
              Client Testimonials
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Hear directly from our partners about their experience working with Global India Corporation
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 shadow-2xl relative group"
              >
                <div className="absolute top-4 right-4">
                  <Quote className="h-8 w-8 text-blue-300 opacity-50" />
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-white leading-relaxed text-lg">
                    "{testimonial.quote}"
                  </p>
                </div>

                <div className="border-t border-white/20 pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-white/30"
                    />
                    <div>
                      <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                      <p className="text-blue-200 text-sm">{testimonial.position}</p>
                      <p className="text-yellow-300 font-medium text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-lg p-3 text-center">
                      <div className="text-xl font-bold text-white">{testimonial.projectValue}</div>
                      <div className="text-xs text-blue-200">Project Value</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3 text-center">
                      <div className="text-xl font-bold text-white">{testimonial.completionTime}</div>
                      <div className="text-xs text-blue-200">Completion Time</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional testimonials in a row */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {testimonials.slice(3).map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white/30"
                  />
                  <div>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-white/90 text-sm leading-relaxed mb-3">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <h4 className="font-bold text-white text-sm">{testimonial.name}</h4>
                      <p className="text-blue-200 text-xs">{testimonial.position}, {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-5xl font-bold mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Join our growing list of satisfied clients and experience the GIC difference in engineering excellence and manpower solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-10 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transition-colors duration-300 shadow-lg flex items-center gap-3"
            >
              Start Your Partnership
              <ArrowRight className="h-5 w-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              Download Portfolio
            </motion.button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Support Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">₹500Cr+</div>
              <div className="text-blue-100">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">8+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}