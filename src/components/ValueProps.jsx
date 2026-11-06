import React from 'react';
import { Truck, ShieldCheck, RotateCcw } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ValueProps() {
  const valueProps = [
    {
      icon: Truck,
      title: 'Free Delivery in Nairobi',
      description: 'Same-day or next-day courier delivery to your doorstep across Nairobi and environs. Countrywide shipping available.',
      highlight: 'Express Dispatch'
    },
    {
      icon: ShieldCheck,
      title: 'Secure M-Pesa Payments',
      description: 'Seamless STK push payment via Safaricom M-Pesa or card checkout. Encrypted, instant, and 100% verified.',
      highlight: 'Lipa Na M-Pesa'
    },
    {
      icon: RotateCcw,
      title: 'Easy Returns within 14 Days',
      description: 'Hassle-free exchanges and returns on unworn items. Schedule a quick courier pickup or drop off at our hub.',
      highlight: 'Guaranteed Fit'
    }
  ];

  return (
    <section className="bg-[#F9F9F9] py-16 sm:py-20 border-y border-gray-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {valueProps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative p-8 bg-white border border-gray-200/80 shadow-sm hover:shadow-md hover:border-[#C59A45]/40 transition-all duration-300 flex flex-col items-center text-center"
              >
                {/* Accent top line on hover */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-transparent group-hover:bg-[#C59A45] transition-colors duration-300" />

                {/* Lucide Icon above each */}
                <div className="w-14 h-14 rounded-full bg-[#F9F9F9] group-hover:bg-[#111111] flex items-center justify-center text-[#111111] group-hover:text-[#C59A45] transition-all duration-300 mb-6 border border-gray-200">
                  <Icon size={26} strokeWidth={1.75} />
                </div>

                {/* Sub-tag badge */}
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C59A45] mb-2">
                  {item.highlight}
                </span>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-[#111111] mb-2 font-['Montserrat']">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-normal">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
