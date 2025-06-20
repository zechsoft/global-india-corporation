import  { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, Users, Award, Heart, ChevronDown, ChevronUp } from 'lucide-react';

export default function Careers() {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  const jobs = [
    {
      title: 'Senior Civil Engineer',
      department: 'Infrastructure',
      location: 'Mumbai, Maharashtra',
      type: 'Full-time',
      experience: '5-8 years',
      description: 'Lead infrastructure projects including design, planning, and execution of large-scale construction projects.',
      requirements: [
        'B.Tech/M.Tech in Civil Engineering',
        '5+ years in infrastructure projects',
        'Experience with AutoCAD, Revit',
        'Project management certification preferred'
      ],
      responsibilities: [
        'Project planning and design',
        'Team leadership and coordination',
        'Quality assurance and compliance',
        'Client communication and reporting'
      ]
    },
    {
      title: 'Automation Engineer',
      department: 'Industrial Automation',
      location: 'Bangalore, Karnataka',
      type: 'Full-time',
      experience: '3-6 years',
      description: 'Design and implement automation solutions for manufacturing processes using latest technologies.',
      requirements: [
        'B.Tech in Electronics/Electrical/Mechanical',
        '3+ years in industrial automation',
        'PLC programming experience',
        'Knowledge of SCADA systems'
      ],
      responsibilities: [
        'Automation system design',
        'PLC programming and testing',
        'System integration and commissioning',
        'Technical documentation'
      ]
    },
    {
      title: 'Project Manager',
      department: 'Technology Services',
      location: 'Delhi, NCR',
      type: 'Full-time',
      experience: '7-10 years',
      description: 'Manage large-scale technology implementation projects ensuring timely delivery and quality standards.',
      requirements: [
        'B.Tech/MBA with technical background',
        '7+ years in project management',
        'PMP certification required',
        'Experience with Agile methodologies'
      ],
      responsibilities: [
        'Project planning and execution',
        'Stakeholder management',
        'Risk assessment and mitigation',
        'Budget and resource management'
      ]
    },
    {
      title: 'Quality Assurance Engineer',
      department: 'Quality Control',
      location: 'Chennai, Tamil Nadu',
      type: 'Full-time',
      experience: '2-5 years',
      description: 'Ensure quality standards across all projects through systematic testing and validation processes.',
      requirements: [
        'B.Tech in relevant engineering discipline',
        '2+ years in quality assurance',
        'Knowledge of ISO standards',
        'Testing and validation experience'
      ],
      responsibilities: [
        'Quality system implementation',
        'Process auditing and compliance',
        'Testing and validation protocols',
        'Documentation and reporting'
      ]
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: 'Competitive Salary',
      description: 'Industry-leading compensation packages with performance bonuses'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive medical insurance for you and your family'
    },
    {
      icon: Users,
      title: 'Learning & Development',
      description: 'Continuous learning opportunities and skill development programs'
    },
    {
      icon: Briefcase,
      title: 'Career Growth',
      description: 'Clear career progression paths with leadership opportunities'
    },
    {
      icon: Clock,
      title: 'Work-Life Balance',
      description: 'Flexible working hours and remote work options'
    },
    {
      icon: MapPin,
      title: 'Travel Opportunities',
      description: 'Opportunities to work on projects across different cities'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
              Be part of India's leading engineering corporation and build the future of infrastructure
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Work with GIC?
            </h2>
            <p className="text-xl text-gray-600">
              Join a team that values innovation, excellence, and professional growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-lg text-center cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4"
                >
                  <benefit.icon className="h-8 w-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Current Openings
            </h2>
            <p className="text-xl text-gray-600">
              Explore exciting career opportunities across our departments
            </p>
          </motion.div>

          <div className="space-y-6">
            {jobs.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div
                  className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => setExpandedJob(expandedJob === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-4 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {job.department}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-gray-600">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" />
                          <span>{job.experience}</span>
                        </div>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedJob === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="h-6 w-6 text-gray-400" />
                    </motion.div>
                  </div>
                </div>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: expandedJob === index ? 'auto' : 0,
                    opacity: expandedJob === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <div className="pt-6 space-y-6">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Job Description</h4>
                        <p className="text-gray-600">{job.description}</p>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Requirements</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          {job.requirements.map((req, idx) => (
                            <li key={idx}>{req}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Key Responsibilities</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          {job.responsibilities.map((resp, idx) => (
                            <li key={idx}>{resp}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                        >
                          Apply Now
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Culture</h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  At Global India Corporation, we believe in fostering an environment where innovation thrives, 
                  excellence is celebrated, and every team member has the opportunity to grow.
                </p>
                <p>
                  Our culture is built on collaboration, continuous learning, and the shared vision of 
                  building India's future through engineering excellence.
                </p>
                <div className="flex items-start gap-3 mt-6">
                  <Users className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Team Collaboration</h4>
                    <p className="text-gray-600">Work with diverse, talented teams on challenging projects</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                alt="Team collaboration"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-4xl font-bold mb-6">
            Don't See the Right Role?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            We're always looking for talented individuals to join our team. Send us your resume!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
          >
            Send Your Resume
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
  