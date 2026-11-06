import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero({ onShopNowClick }) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[640px] lg:min-h-[720px] items-center gap-8 lg:gap-16 py-8 md:py-16">
          
          {/* Left Column: Text & CTA */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center max-w-xl order-2 md:order-1"
          >
            {/* Small label: NEW COLLECTION */}
            <div className="inline-flex items-center space-x-2 w-fit mb-5 px-3.5 py-1.5 bg-[#F9F9F9] border border-gray-200/80 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C59A45] animate-pulse"></span>
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#111111]">
                NEW COLLECTION
              </span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#111111] leading-[1.08] mb-6 font-['Montserrat']">
              Elevate Your Everyday Style.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal mb-8 max-w-lg">
              Discover premium menswear and womenswear designed for the modern aesthetic. Timeless silhouettes engineered with sustainable fabrics and artisanal precision.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={onShopNowClick}
                className="group inline-flex items-center justify-center px-8 py-4 bg-[#111111] text-white text-xs font-semibold tracking-[0.18em] uppercase hover:bg-black transition-all duration-300 shadow-md hover:shadow-xl active:scale-[0.99]"
              >
                <span>Shop Now</span>
                <ArrowRight size={16} className="ml-2.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <a
                href="#collections-section"
                className="inline-flex items-center justify-center px-7 py-4 border border-gray-200 text-xs font-semibold tracking-[0.18em] uppercase text-[#111111] hover:border-[#111111] hover:bg-[#F9F9F9] transition-all duration-200"
              >
                Explore Lookbook
              </a>
            </div>

            {/* Micro proof badges */}
            <div className="mt-12 pt-8 border-t border-gray-100 grid grid-cols-3 gap-4 text-left">
              <div>
                <p className="text-lg font-bold text-[#111111]">100%</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">Natural Fibers</p>
              </div>
              <div>
                <p className="text-lg font-bold text-[#111111]">24h</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">Nairobi Dispatch</p>
              </div>
              <div>
                <p className="text-lg font-bold text-[#111111]">4.9 / 5</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">Client Rating</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: High-Quality Editorial Fashion Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-1 md:order-2"
          >
            <div className="relative mx-auto aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5] max-w-md md:max-w-none overflow-hidden rounded-none shadow-2xl bg-[#F9F9F9] border border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85"
                alt="KINETICS Editorial Fashion - Elevate Your Everyday Style"
                className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
                loading="eager"
              />
              
              {/* Subtle aesthetic gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>

              {/* Floating editorial caption pill */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-md border border-white/40 flex items-center justify-between">
                <div>
                  <span className="block text-[10px] uppercase font-bold tracking-[0.2em] text-[#C59A45]">
                    Autumn / Harmattan Edition
                  </span>
                  <p className="text-sm font-semibold text-[#111111]">
                    The Minimalist Capsule 04
                  </p>
                </div>
                <span className="text-xs font-mono font-medium text-gray-700">
                  Nairobi • KE
                </span>
              </div>
            </div>

            {/* Subtle decorative geometric background element */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-64 h-64 bg-[#F9F9F9] border border-gray-200 hidden lg:block" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
