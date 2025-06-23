import React from 'react';
import { ArrowRight, Award, Users, Target, Eye, Zap, Shield, Globe } from 'lucide-react';

const AboutUs = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-slate-50 to-blue-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-indigo-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-20 left-1/2 w-80 h-80 bg-slate-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-slate-100 border border-slate-200 text-slate-700 px-4 py-2.5 rounded-full text-sm font-semibold shadow-sm">
                <Globe className="h-4 w-4" />
                Global India Corporation
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-slate-700 to-blue-800 bg-clip-text text-transparent leading-tight tracking-tight">
                About Us
              </h2>
            </div>

            {/* Main Description */}
            <div className="space-y-6 bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/30 ring-1 ring-slate-900/5">
              <p className="text-xl text-gray-800 leading-relaxed font-medium">
                Global India Corporation (GIC) is a leading multi-disciplinary engineering contracting and manpower supply company, established in 2016. We specialize in Electrical, Mechanical (HVAC), Civil, Demolition, and IT Networking services, delivering reliable solutions to industrial and commercial clients across various sectors.
              </p>
              
              <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                With a strong focus on quality, safety, and timely execution, GIC has earned a reputation for supporting complex engineering requirements with efficiency and professionalism. Our approach blends Indian and Korean-style work methodologies, enabling us to meet technical challenges while maintaining high standards of compliance and performance.
                At GIC, we believe that "Everything is Possible" — a mindset that drives every service we offer, from high-voltage electrical systems to structured network infrastructure and plant engineering support.
              </p>
            </div>

            {/* Our Vision Card - Moved to Left Side */}
            <div className="group bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/40 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ring-1 ring-slate-900/5">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-3 rounded-xl group-hover:from-indigo-100 group-hover:to-indigo-200 transition-all duration-300 border border-indigo-200/50">
                  <Eye className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-indigo-700 mb-4 tracking-tight">Our Vision</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To become a globally recognized engineering solutions provider known for our innovative approach, exceptional quality, and commitment to client success. We strive to set industry benchmarks in safety, efficiency, and sustainable practices while fostering long-term partnerships.
                  </p>
                </div>
              </div>
            </div>


          </div>

          {/* Right Column - Visual */}
          <div className="relative lg:sticky lg:top-8">
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl ring-1 ring-slate-900/10">
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=700&fit=crop"
                  alt="Engineering Team"
                  className="w-full h-[600px] object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>

              {/* Mission Card - Only Mission remains on right side */}
              <div className="mt-8 space-y-8">
                <div className="group bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/40 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ring-1 ring-slate-900/5">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-3 rounded-xl group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300 border border-blue-200/50">
                      <Target className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-blue-700 mb-4 tracking-tight">Our Mission</h3>
                      <p className="text-gray-700 leading-relaxed">
                        To empower industries with dependable engineering solutions by combining skilled manpower, technical precision, and a culture of "everything is possible." We aim to be the partner of choice for clients seeking safe, scalable, and custom-built infrastructure support.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA Button - Moved to right side */}
                <div className="flex justify-center">
                  <a
                    href="#why-gic"
                    className="group inline-flex items-center gap-3 bg-gradient-to-r from-slate-800 to-blue-800 hover:from-slate-900 hover:to-blue-900 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg ring-1 ring-slate-900/10"
                  >
                    Learn More 
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;