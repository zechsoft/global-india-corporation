import  { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <a
          href="https://wa.me/+919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg floating-cta flex items-center justify-center group"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="absolute right-full mr-3 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Chat on WhatsApp
          </span>
        </a>
      </motion.div>
      
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2.2, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link
          to="/contact"
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg floating-cta flex items-center justify-center group"
        >
          <Phone className="h-6 w-6" />
          <span className="absolute right-full mr-3 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Contact Us
          </span>
        </Link>
      </motion.div>
    </div>
  );
}
 