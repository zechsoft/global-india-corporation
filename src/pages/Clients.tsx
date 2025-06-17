import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, Award, Users, Globe, TrendingUp, Shield, Clock, Zap, Target, CheckCircle, ArrowRight } from 'lucide-react';

export default function Clients() {
  const clients = [
    { 
      name: 'Tata Group', 
      sector: 'Conglomerate', 
      projects: 25,
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=120&fit=crop&crop=center',
      revenue: '$128B',
      established: '1868'
    },
    { 
      name: 'Reliance Industries', 
      sector: 'Oil & Gas', 
      projects: 18,
      logo: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=200&h=120&fit=crop&crop=center',
      revenue: '$104B',
      established: '1973'
    },
    { 
      name: 'Larsen & Toubro', 
      sector: 'Engineering & Construction', 
      projects: 32,
      logo: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=200&h=120&fit=crop&crop=center',
      revenue: '$23B',
      established: '1938'
    },
    { 
      name: 'Mahindra Group', 
      sector: 'Automotive & Aerospace', 
      projects: 15,
      logo: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=200&h=120&fit=crop&crop=center',
      revenue: '$20B',
      established: '1945'
    },
    { 
      name: 'Adani Group', 
      sector: 'Infrastructure & Energy', 
      projects: 22,
      logo: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=200&h=120&fit=crop&crop=center',
      revenue: '$15B',
      established: '1988'
    },
    { 
      name: 'Bajaj Group', 
      sector: 'Financial Services', 
      projects: 12,
      logo: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=200&h=120&fit=crop&crop=center',
      revenue: '$12B',
      established: '1926'
    },
    { 
      name: 'Godrej Group', 
      sector: 'Consumer & Industrial', 
      projects: 16,
      logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=120&fit=crop&crop=center',
      revenue: '$8B',
      established: '1897'
    },
    { 
      name: 'Birla Group', 
      sector: 'Diversified Conglomerate', 
      projects: 20,
      logo: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=200&h=120&fit=crop&crop=center',
      revenue: '$65B',
      established: '1857'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Mehta',
      position: 'Executive Director - Projects',
      company: 'Tata Steel',
      quote: 'GIC delivered our automation project ahead of schedule with exceptional quality. Their technical expertise and project management skills are outstanding. The ROI exceeded our expectations by 40%.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face',
      projectValue: '$15M',
      completionTime: '8 months'
    },
    {
      name: 'Priya Sharma',
      position: 'General Manager - Infrastructure',
      company: 'Reliance Industries',
      quote: 'Working with Global India Corporation has been a game-changer for our infrastructure development. They consistently exceed expectations and deliver world-class solutions.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b72bfa76?w=120&h=120&fit=crop&crop=face',
      projectValue: '$25M',
      completionTime: '12 months'
    },
    {
      name: 'Amit Kumar',
      position: 'Chief Operations Officer',
      company: 'Larsen & Toubro',
      quote: 'The level of professionalism and technical competence demonstrated by GIC is remarkable. They are our trusted engineering partner for critical infrastructure projects.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face',
      projectValue: '$35M',
      completionTime: '14 months'
    }
  ];

  const stats = [
    { icon: Users, number: '100+', label: 'Fortune 500 Clients', color: 'from-blue-500 to-blue-700', bgColor: 'bg-blue-50' },
    { icon: Award, number: '500+', label: 'Projects Delivered', color: 'from-emerald-500 to-emerald-700', bgColor: 'bg-emerald-50' },
    { icon: Globe, number: '25+', label: 'Countries Served', color: 'from-purple-500 to-purple-700', bgColor: 'bg-purple-50' },
    { icon: TrendingUp, number: '98.5%', label: 'Client Satisfaction', color: 'from-orange-500 to-orange-700', bgColor: 'bg-orange-50' }
  ];

  const achievements = [
    {
      title: 'Industry Recognition',
      description: 'Winner of "Engineering Excellence Award 2024" by CII',
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
      description: 'Patent holder for 15+ engineering innovations',
      icon: Zap,
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      title: 'Delivery Excellence',
      description: '95% projects delivered ahead of schedule',
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
              Our Esteemed Clients
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90 leading-relaxed"
            >
              Partnering with India's most prestigious corporations to deliver engineering excellence and drive innovation across industries
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
                ₹2500+ Cr Projects Delivered
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
              Numbers That Speak Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our track record demonstrates consistent delivery and client satisfaction across diverse industry verticals
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
              Trusted by Industry Titans
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From century-old conglomerates to modern industrial leaders, we've earned the trust of India's most respected corporations through consistent delivery of engineering excellence
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
                      <div className="text-xs text-gray-500">Active Projects</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-gray-900">{client.revenue}</div>
                      <div className="text-xs text-gray-500">Annual Revenue</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-xs text-green-600 bg-green-50 px-3 py-2 rounded-lg">
                    <CheckCircle className="h-3 w-3 mr-2" />
                    Active Partnership
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
              Industry Recognition & Achievements
            </h2>
            <p className="text-xl text-gray-600">
              Our commitment to excellence has been recognized by leading industry bodies
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
              Voices of Success
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Hear directly from our partners about their experience working with Global India Corporation
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
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
            Ready to Join Our Success Story?
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Partner with us to transform your engineering challenges into competitive advantages. Let's build the future together.
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
              <div className="text-blue-100">Annual Turnover</div>
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