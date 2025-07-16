import React from 'react';
import { motion } from 'framer-motion';

const clients = [
  { name: 'Samsung India', logo: '/assets/Images/Client/63dccd92f171bbfa08adf4d5_Logo Jungdo 2021 Scan.png', sector: 'Electronics' },
  { name: 'Kia Motors', logo: '/assets/Images/Client/Blue_Star_primary_logo.png', sector: 'Automotive' },
  { name: 'FLSmidth', logo: '/assets/Images/Client/ChatGPT Image Jun 19, 2025, 01_09_51 PM.png', sector: 'Engineering' },
  { name: 'HAEWON Engineering', logo: '/assets/Images/Client/Client logo1.jpg', sector: 'Construction' },
  { name: 'JUNGDO Engineering', logo: '/assets/Images/Client/Client logo2.png', sector: 'Engineering' },
  { name: 'SAMHO Construction', logo: '/assets/Images/Client/Client logo3.png', sector: 'Construction' },
  { name: 'DAEMYOUNG Engineering', logo: '/assets/Images/Client/Client logo4.png', sector: 'Engineering' },
  { name: 'HYOJIN Engineering', logo: '/assets/Images/Client/Client logo5.png', sector: 'Engineering' },
  { name: 'NEW VISION Fire Safety', logo: '/assets/Images/Client/FLSmidth.png', sector: 'Safety' },
  { name: 'NEW VISION Fire Safety', logo: '/assets/Images/Client/Thermax_logo.svg.png', sector: 'Safety' },
  { name: 'HAEWON ENGINEERING INDIA PVT LTD', logo: '/assets/Images/Client/Client log1.png', sector: 'Engineering' },
  { name: 'NEW VISION FIRE SAFETY LLP', logo: '/assets/Images/Client/Client log2.png', sector: 'Engineering' },
  { name: 'HYOJIN ENGINEERING', logo: '/assets/Images/Client/log3.png', sector: 'Safety' },
  { name: 'SUNGWON ENGINEERING INDIA LLP', logo: '/assets/Images/Client/log4.svg.png', sector: 'Safety' }
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