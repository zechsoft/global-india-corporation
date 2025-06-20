import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    });
    setIsSubmitting(false);
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop"
            alt="Contact background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get in Touch with GIC
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
              Ready to transform your industrial vision into reality? Let's discuss your next engineering project
            </p>
            <div className="mt-8 text-lg">
              <p className="italic">"Everything is Possible" - Your trusted engineering partner since 2016</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interest
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select a service</option>
                      <option value="electrical">Electrical Services</option>
                      <option value="mechanical">Mechanical & HVAC</option>
                      <option value="civil">Civil & Demolition</option>
                      <option value="it-networking">IT & Networking</option>
                      <option value="manpower">Manpower Supply</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Please describe your project requirements, timeline, and any specific needs..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send className="h-5 w-5" />
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-600">+91-9047642156</p>
                      <p className="text-gray-600">+91-9942471687</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">globalindiacorps@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Address</h4>
                      <p className="text-gray-600">
                        3B/1A, Kovalavedu Main Road<br/>
                        Walajabad, Kancheepuram<br/>
                        Tamil Nadu 631604
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Business Hours</h4>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-3">Quick Connect</h4>
                <p className="text-gray-600 mb-4">For immediate assistance, reach out via WhatsApp</p>
                <motion.a
                  href="https://wa.me/+919047642156"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-300 inline-flex items-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Us
                </motion.a>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-100 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-3">Our Specialty</h4>
                <p className="text-gray-600 mb-2 font-medium">Indian-Korean Work Methodology</p>
                <p className="text-sm text-gray-600">
                  Trusted by Samsung, Kia Motors, and leading Korean engineering firms for precision and reliability.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              About Global India Corporation
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Leading multi-disciplinary engineering contracting and manpower supply company since 2016
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Electrical Services</h3>
              <p className="text-gray-600">
                HT/LT cable laying, transformer installation, high mast lighting, and complete electrical solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-green-600 font-bold text-xl">🔧</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mechanical & HVAC</h3>
              <p className="text-gray-600">
                Equipment installation, HVAC systems, dust collection, and industrial piping support.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-orange-600 font-bold text-xl">🏗️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Civil & Demolition</h3>
              <p className="text-gray-600">
                Foundation work, structural construction, controlled demolition, and site preparation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-600 font-bold text-xl">🌐</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">IT & Networking</h3>
              <p className="text-gray-600">
                Network cabling, server installation, surveillance systems, and IT infrastructure setup.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-red-600 font-bold text-xl">👷</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Manpower Supply</h3>
              <p className="text-gray-600">
                Skilled engineers, technicians, electricians, and specialized workforce for industrial projects.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-indigo-600 font-bold text-xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Trusted Partner</h3>
              <p className="text-gray-600">
                Serving Samsung, Kia Motors, and leading Korean engineering firms with excellence since 2016.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Find Us on Map
            </h2>
            <p className="text-xl text-gray-600">
              Visit our office in Walajabad, Kancheepuram
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-indigo-100 h-96 rounded-lg shadow-lg flex items-center justify-center"
          >
            <div className="text-center">
              <MapPin className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Global India Corporation
              </h3>
              <p className="text-gray-600 text-lg">
                3B/1A, Kovalavedu Main Road<br />
                Walajabad, Kancheepuram<br />
                Tamil Nadu 631604
              </p>
              <div className="mt-6 space-x-4">
                <span className="inline-flex items-center gap-2 text-blue-600 font-medium">
                  <Phone className="h-4 w-4" />
                  +91-9047642156
                </span>
                <span className="inline-flex items-center gap-2 text-blue-600 font-medium">
                  <Mail className="h-4 w-4" />
                  globalindiacorps@gmail.com
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}