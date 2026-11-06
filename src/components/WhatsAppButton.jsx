import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const phoneNumber = '254700000000'; // Standard Nairobi Kenyan phone format demo
  const message = encodeURIComponent('Hello KINETICS, I would like to inquire about your collections.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center">
      {/* Quick greeting pill preview */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            className="hidden sm:flex items-center mr-3 bg-white border border-gray-200 py-2.5 px-4 rounded-full shadow-lg text-xs font-medium text-[#111111]"
          >
            <span>Questions on sizing or delivery? We are online!</span>
            <button
              onClick={() => setShowTooltip(false)}
              className="ml-2 text-gray-400 hover:text-black"
            >
              <X size={12} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="flex items-center space-x-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-3.5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group"
        aria-label="Need help? Chat with us on WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
      >
        {/* WhatsApp SVG / Lucide Icon */}
        <svg 
          className="w-5 h-5 fill-current shrink-0" 
          viewBox="0 0 24 24"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.766-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.288.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.144.39-.086s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.825zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.435 5.178L2 22l4.957-1.399C8.423 21.499 10.154 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
        </svg>

        {/* User Required Text: 'Need help? Chat with us' */}
        <span className="text-xs font-semibold tracking-wide whitespace-nowrap">
          Need help? Chat with us
        </span>
      </motion.a>
    </div>
  );
}
