import { useState } from 'react';
import { Cog, Users, Shield, RefreshCw, Globe, Award, Clock, CheckCircle, Star, ArrowRight, Building2, Target, TrendingUp } from 'lucide-react';

export default function WhyGIC() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const mainFeatures = [
    {
      icon: Cog,
      title: 'Multi-Disciplinary Expertise',
      description: 'From electrical systems to mechanical works, HVAC setups to IT networking, civil infrastructure to safe demolition — we offer end-to-end contracting support across key engineering domains. Our clients benefit from integrated services under one professional team.',
      color: 'from-slate-600 to-slate-700'
    },
    {
      icon: Users,
      title: 'Skilled & Dedicated Workforce',
      description: 'We deploy qualified engineers, supervisors, electricians, riggers, fitters, welders, and other specialized technicians — all trained to handle real-time industrial challenges. Every team member is selected for their domain knowledge, discipline, and commitment to safety.',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: Shield,
      title: 'Precision Through Process',
      description: 'We follow structured planning, quality checks, and compliance protocols at every stage of execution. Whether it\'s a shutdown service or a plant expansion, our process ensures projects are completed with efficiency, accuracy, and accountability.',
      color: 'from-emerald-600 to-emerald-700'
    },
    {
      icon: RefreshCw,
      title: 'Adaptive & Customized Solutions',
      description: 'No two projects are the same. That\'s why we tailor our services to fit each client\'s technical needs, timeline, and operational goals — offering flexible manpower and scalable engineering support as needed.',
      color: 'from-amber-600 to-amber-700'
    },
    {
      icon: Globe,
      title: 'Indian-Korean Work Methodology',
      description: 'Our unique blend of Indian and Korean methods allows us to exceed expectations in performance, safety, and project management. This cultural synergy reflects in our high client satisfaction and long-standing industry relationships.',
      color: 'from-indigo-600 to-indigo-700'
    }
  ];

  const strengths = [
    {
      icon: Building2,
      title: 'Large-Scale Project Capability',
      description: 'Proven ability to handle both minor and large-scale industrial projects with consistent quality delivery'
    },
    {
      icon: Target,
      title: 'Flexible Service Models',
      description: 'Tailored solutions designed to meet specific client requirements and operational constraints'
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'Consistent project delivery within agreed timelines, even under the most challenging schedules'
    },
    {
      icon: Award,
      title: 'Proven Methodology',
      description: 'Unique Indian-Korean hybrid work methodology ensuring superior project outcomes'
    },
    {
      icon: Star,
      title: 'Trusted Partnership',
      description: 'Preferred vendor for globally recognized clients across diverse industrial sectors'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Innovation',
      description: 'Committed to adopting latest technologies and methodologies for optimal project execution'
    }
  ];

  const stats = [
    { number: '2016', label: 'Year Established', sublabel: 'Years of Excellence' },
    { number: '100+', label: 'Projects Completed', sublabel: 'Successful Deliveries' },
    { number: '50+', label: 'Skilled Engineers', sublabel: 'Expert Team Members' },
    { number: '24/7', label: 'Support Available', sublabel: 'Round-the-Clock Service' }
  ];

  const keyPoints = [
    'Technical Excellence & Innovation',
    'Safety-First Approach',
    'Reliable Project Execution',
    'Global Quality Standards',
    'Comprehensive Service Portfolio'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
     <section className="relative py-28 min-h-[10vh] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img 
      src="/assets/Images/Why choose GIc (1).png" 
      alt="Global India Corporation Engineering Excellence"
      className="w-full h-full object-cover object-bottom opacity-80"
    />
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/80"></div>
  </div>
  
  {/* Gradient Overlays */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent"></div>
  <div className="absolute inset-0">
    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
  </div>
           
  <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
    <div className="text-center max-w-4xl mx-auto">
      <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 border border-blue-400/30 rounded-full mb-8">
        <span className="text-blue-300 text-sm font-medium">Engineering Excellence Since 2016</span>
      </div>
                   
      <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
        Why Choose
        <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mt-2">
          Global India Corporation?
        </span>
      </h1>
                   
      <p className="text-xl lg:text-2xl text-slate-300 mb-8 leading-relaxed font-light">
        Where Engineering Meets Precision — Because Everything is Possible
      </p>
                   
      <div className="max-w-3xl mx-auto">
        <p className="text-lg text-slate-400 leading-relaxed">
          When industrial clients seek a partner, they require more than just a contractor — they need dependability, skill, and unwavering integrity in every project delivery.
        </p>
      </div>
    </div>
  </div>
</section>
      {/* Stats Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center group"
              >
                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 group-hover:shadow-md transition-shadow duration-300">
                  <div className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-slate-600 font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm text-slate-500">{stat.sublabel}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
              <span className="text-blue-700 text-sm font-medium">Our Core Advantages</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Engineering Excellence
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Since 2016, GIC has been at the forefront of multi-disciplinary engineering services, earning the trust of leading Indian and global companies.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {mainFeatures.map((feature, index) => (
              <div
                key={feature.title}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
                className="group relative bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500"
              >
                {/* Card Header */}
                <div className={`h-2 bg-gradient-to-r ${feature.color}`}></div>
                
                <div className="p-8">
                  {/* Icon and Title */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">
                        {feature.title}
                      </h3>
                      <div className={`w-12 h-1 bg-gradient-to-r ${feature.color} rounded-full`}></div>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                    {feature.description}
                  </p>
                  
                  {/* Bottom accent */}
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-500">Professional Service</span>
                      <ArrowRight className={`h-4 w-4 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1 transition-all duration-300`} />
                    </div>
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
          
          {/* Additional Info Section */}
          <div className="mt-20 bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Quality Assured</h4>
                <p className="text-sm text-slate-600">ISO certified processes and global quality standards</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-emerald-600" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Safety First</h4>
                <p className="text-sm text-slate-600">Zero-accident policy with comprehensive safety protocols</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-amber-600" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">On Schedule</h4>
                <p className="text-sm text-slate-600">Consistent delivery within agreed project timelines</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Mission Statement */}
      {/* <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 border border-blue-400/30 rounded-full mb-8">
                <span className="text-blue-300 text-sm font-medium">Our Mission</span>
              </div>
              <h2 className="text-4xl font-bold mb-8">Empowering Industrial Excellence</h2>
              <p className="text-lg leading-relaxed mb-8 text-slate-300">
                To empower industries with dependable engineering solutions by combining skilled manpower, 
                technical precision, and a culture of "everything is possible." We aim to be the partner 
                of choice for clients seeking safe, scalable, and custom-built infrastructure support.
              </p>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-emerald-400" />
                <span className="text-lg font-semibold text-white">Everything is Possible</span>
              </div>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold mb-8 text-center">Why Industry Leaders Choose GIC</h3>
              <div className="space-y-4">
                {keyPoints.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-200"
                  >
                    <ArrowRight className="h-5 w-5 text-blue-400 flex-shrink-0" />
                    <span className="text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      
    </div>
  );
}