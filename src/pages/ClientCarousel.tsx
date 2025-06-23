import React from 'react';
import { motion } from 'framer-motion';

const clients = [
  { name: 'Samsung India', logo: 'https://via.placeholder.com/150x60/0066CC/FFFFFF?text=Samsung', sector: 'Electronics' },
  { name: 'Kia Motors', logo: 'https://via.placeholder.com/150x60/FF0000/FFFFFF?text=KIA', sector: 'Automotive' },
  { name: 'FLSmidth', logo: 'https://via.placeholder.com/150x60/007ACC/FFFFFF?text=FLSmidth', sector: 'Engineering' },
  { name: 'HAEWON Engineering', logo: 'https://via.placeholder.com/150x60/333333/FFFFFF?text=HAEWON', sector: 'Construction' },
  { name: 'JUNGDO Engineering', logo: 'https://via.placeholder.com/150x60/006600/FFFFFF?text=JUNGDO', sector: 'Engineering' },
  { name: 'SAMHO Construction', logo: 'https://via.placeholder.com/150x60/FF6600/FFFFFF?text=SAMHO', sector: 'Construction' },
  { name: 'DAEMYOUNG Engineering', logo: 'https://via.placeholder.com/150x60/9900CC/FFFFFF?text=DAEMYOUNG', sector: 'Engineering' },
  { name: 'HYOJIN Engineering', logo: 'https://via.placeholder.com/150x60/CC3300/FFFFFF?text=HYOJIN', sector: 'Engineering' },
  { name: 'NEW VISION Fire Safety', logo: 'https://via.placeholder.com/150x60/FF9900/FFFFFF?text=NEW+VISION', sector: 'Safety' }
];

export default function ClientCarousel() {
  // Create duplicated array for seamless loop
  const duplicatedClients = [...clients, ...clients];
  const itemWidth = 200; // Width of each item including gap
  const totalWidth = clients.length * itemWidth;

  return (
    <section className="py-20 bg-white overflow-hidden">
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

        {/* Continuous rotating carousel */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{
              x: [-totalWidth, 0]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40, // Increased from 20 to 40 for slower speed
                ease: "linear"
              }
            }}
            style={{ width: `${duplicatedClients.length * itemWidth}px` }}
          >
            {duplicatedClients.map((client, index) => (
              <motion.div
                key={`${client.name}-${index}`}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-blue-200 flex items-center justify-center flex-shrink-0"
                style={{ width: '180px', height: '96px' }}
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
          </motion.div>
        </div>


      </div>
    </section>
  );
}