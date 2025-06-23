import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialsSection = () => {
  // Sample testimonials data
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

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const testimonialsPerView = 2;
  const totalTestimonials = testimonials.length;
  
  // Auto-rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) => {
        // Move one testimonial at a time
        const nextIndex = (prevIndex + 1) % totalTestimonials;
        return nextIndex;
      });
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [totalTestimonials]);

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % totalTestimonials);
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) => 
      prevIndex === 0 ? totalTestimonials - 1 : prevIndex - 1
    );
  };

  // Get current visible testimonials (2 at a time)
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < testimonialsPerView; i++) {
      const index = (currentTestimonialIndex + i) % totalTestimonials;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600">
            What our clients say about working with us
          </p>
        </div>

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
            <div className="grid lg:grid-cols-2 gap-8">
              {getVisibleTestimonials().map((testimonial, index) => (
                <div
                  key={`${currentTestimonialIndex}-${index}`}
                  className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 h-full transform"
                  style={{
                    animation: `fadeInSlide 0.8s ease-out ${index * 0.2}s both`
                  }}
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
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-12 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonialIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonialIndex
                    ? 'bg-blue-600 w-8'
                    : index === (currentTestimonialIndex + 1) % totalTestimonials
                    ? 'bg-blue-400 w-6'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Auto-rotation indicator */}
          <div className="flex justify-center mt-4">
            <div className="text-sm text-gray-500 flex items-center gap-2">
             
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInSlide {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;