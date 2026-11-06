import React, { useState } from 'react';
import { ArrowRight, Check, Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer({ onOpenContact, onOpenPolicy }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-white border-t border-gray-200 text-[#111111] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 pb-14 border-b border-gray-100">
          
          {/* Brand info */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-extrabold text-2xl tracking-[0.25em] text-[#111111] uppercase font-['Montserrat'] block mb-4">
                KINETICS
              </span>
              <p className="text-sm text-gray-500 max-w-sm leading-relaxed mb-6 font-normal">
                Modern luxury essentials crafted for conscious wardrobes. Combining artisanal tailoring, mindful textiles, and urban sophistication.
              </p>
              <p className="text-xs text-gray-400 font-mono tracking-wide">
                Westlands Commercial Hub, Nairobi, Kenya
              </p>
            </div>

            {/* Social handles */}
            <div className="flex items-center space-x-5 mt-6 text-gray-600">
              <a href="#instagram" aria-label="Kinetics Instagram" className="hover:text-[#C59A45] transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#twitter" aria-label="Kinetics X/Twitter" className="hover:text-[#C59A45] transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#facebook" aria-label="Kinetics Facebook" className="hover:text-[#C59A45] transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links Column 1: Customer Care */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#111111] mb-5">
              Customer Care
            </h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <button 
                  onClick={() => onOpenPolicy?.('Shipping Policy')}
                  className="hover:text-[#111111] transition-colors"
                >
                  Shipping Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenPolicy?.('Returns & Exchanges')}
                  className="hover:text-[#111111] transition-colors"
                >
                  Returns
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenContact?.()}
                  className="hover:text-[#111111] transition-colors"
                >
                  Contact
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenPolicy?.('Size Guide')}
                  className="hover:text-[#111111] transition-colors"
                >
                  Size Guide
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#111111] mb-2">
              The Kinetics Journal
            </h4>
            <p className="text-xs text-gray-500 mb-4 leading-relaxed">
              Subscribe for private invitations to seasonal drops and 10% off your first purchase.
            </p>

            {subscribed ? (
              <div className="p-3.5 bg-[#F9F9F9] border border-gray-200 text-xs font-medium text-[#111111] flex items-center space-x-2">
                <Check size={16} className="text-[#C59A45]" />
                <span>Thank you. You are on the private client list.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-3 bg-[#F9F9F9] border border-gray-200 text-xs text-[#111111] placeholder-gray-400 focus:outline-none focus:border-[#111111] flex-1 rounded-none"
                />
                <button
                  type="submit"
                  className="px-5 py-3 bg-[#111111] hover:bg-black text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center shrink-0"
                >
                  <span>Join</span>
                  <ArrowRight size={14} className="ml-1.5" />
                </button>
              </form>
            )}
            
            {/* Accepted Payments Bar */}
            <div className="mt-6 flex items-center space-x-3 text-[11px] text-gray-400 uppercase tracking-widest font-mono">
              <span className="px-2 py-1 bg-[#F9F9F9] border border-gray-200 font-bold text-green-700">M-PESA</span>
              <span className="px-2 py-1 bg-[#F9F9F9] border border-gray-200 font-bold text-blue-700">VISA</span>
              <span className="px-2 py-1 bg-[#F9F9F9] border border-gray-200 font-bold text-orange-600">MASTERCARD</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 space-y-4 sm:space-y-0">
          <p className="tracking-wide">
            © 2024 KINETICS. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-[11px] uppercase tracking-wider">
            <a href="#privacy" className="hover:text-gray-600 transition-colors">Privacy</a>
            <span>•</span>
            <a href="#terms" className="hover:text-gray-600 transition-colors">Terms of Service</a>
            <span>•</span>
            <span className="text-gray-500 font-medium">Nairobi, KE</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
