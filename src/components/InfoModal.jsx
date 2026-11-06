import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function InfoModal({ isOpen, onClose, type }) {
  const [contactSubmitted, setContactSubmitted] = useState(false);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-gray-200 overflow-y-auto max-h-[90vh]"
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-gray-400 hover:text-black transition-colors"
          >
            <X size={20} />
          </button>

          {type === 'Contact' && (
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C59A45]">Client Relations</span>
              <h3 className="text-xl font-bold uppercase tracking-wider text-[#111111] font-['Montserrat'] mt-1 mb-6">
                Get In Touch
              </h3>

              {contactSubmitted ? (
                <div className="py-8 text-center space-y-3 bg-[#F9F9F9] p-6 border border-gray-200">
                  <div className="w-12 h-12 bg-[#111111] text-white rounded-full flex items-center justify-center mx-auto">
                    <Check size={24} />
                  </div>
                  <h4 className="font-bold text-sm text-[#111111]">Message Received</h4>
                  <p className="text-xs text-gray-500">Our concierge team will respond within 2 business hours.</p>
                </div>
              ) : (
                <form 
                  onSubmit={(e) => { e.preventDefault(); setContactSubmitted(true); }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#111111] mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 bg-[#F9F9F9] border border-gray-200 text-xs text-[#111111] focus:outline-none focus:border-[#111111]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#111111] mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      className="w-full px-3.5 py-2.5 bg-[#F9F9F9] border border-gray-200 text-xs text-[#111111] focus:outline-none focus:border-[#111111]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#111111] mb-1.5">
                      Inquiry
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="How can we assist you with sizing, orders, or styling?"
                      className="w-full px-3.5 py-2.5 bg-[#F9F9F9] border border-gray-200 text-xs text-[#111111] focus:outline-none focus:border-[#111111]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#111111] hover:bg-black text-white text-xs uppercase font-semibold tracking-widest transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              )}

              <div className="mt-8 pt-6 border-t border-gray-100 space-y-2 text-xs text-gray-600">
                <div className="flex items-center space-x-2.5">
                  <Mail size={14} className="text-[#C59A45]" />
                  <span>concierge@kineticsfashion.ke</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Phone size={14} className="text-[#C59A45]" />
                  <span>+254 700 000 000</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <MapPin size={14} className="text-[#C59A45]" />
                  <span>Westlands, Nairobi, Kenya</span>
                </div>
              </div>
            </div>
          )}

          {type === 'Account' && (
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C59A45]">Welcome Back</span>
              <h3 className="text-xl font-bold uppercase tracking-wider text-[#111111] font-['Montserrat'] mt-1 mb-6">
                Client Profile
              </h3>
              <div className="bg-[#F9F9F9] p-4 border border-gray-200 mb-6 flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#111111] text-white flex items-center justify-center font-bold text-lg">
                  K
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-[#111111]">KINETICS VIP Member</h4>
                  <p className="text-xs text-gray-500">Tier: Gold Patron • 450 Points</p>
                </div>
              </div>
              <ul className="divide-y divide-gray-100 text-xs text-[#111111]">
                <li className="py-3 flex justify-between">
                  <span className="text-gray-500">Active Orders</span>
                  <span className="font-semibold">1 in transit (Nairobi Express)</span>
                </li>
                <li className="py-3 flex justify-between">
                  <span className="text-gray-500">Default Delivery</span>
                  <span className="font-semibold">Kilimani, Nairobi</span>
                </li>
                <li className="py-3 flex justify-between">
                  <span className="text-gray-500">M-Pesa Preferred</span>
                  <span className="font-semibold">0712 *** 878</span>
                </li>
              </ul>
              <button
                onClick={onClose}
                className="mt-6 w-full py-3 bg-[#111111] text-white text-xs uppercase font-semibold tracking-wider hover:bg-black transition-colors"
              >
                Close Profile
              </button>
            </div>
          )}

          {type === 'Shipping Policy' && (
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C59A45]">Logistics</span>
              <h3 className="text-xl font-bold uppercase tracking-wider text-[#111111] font-['Montserrat'] mt-1 mb-4">
                Shipping Policy
              </h3>
              <div className="space-y-4 text-xs text-gray-600 leading-relaxed">
                <div>
                  <h4 className="font-bold text-[#111111] uppercase tracking-wider mb-1">Nairobi Same-Day / Next-Day</h4>
                  <p>All orders placed before 2:00 PM EAT within Nairobi are dispatched for same-day delivery via dedicated courier. Free for orders above KSh 5,000.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#111111] uppercase tracking-wider mb-1">Countrywide Kenya</h4>
                  <p>Deliveries to Mombasa, Kisumu, Nakuru, Eldoret, and other towns are handled via secure Fargo Courier or Wells Fargo within 24–48 hours.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#111111] uppercase tracking-wider mb-1">Tracking</h4>
                  <p>You will receive an automated SMS with your live courier tracking link as soon as your dispatch driver leaves our hub.</p>
                </div>
              </div>
            </div>
          )}

          {type === 'Returns & Exchanges' && (
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C59A45]">Assurance</span>
              <h3 className="text-xl font-bold uppercase tracking-wider text-[#111111] font-['Montserrat'] mt-1 mb-4">
                Returns & 14-Day Guarantee
              </h3>
              <div className="space-y-4 text-xs text-gray-600 leading-relaxed">
                <p>We want your wardrobe to fit effortlessly. If any piece is not completely satisfactory, we offer complimentary exchanges or store credit within 14 calendar days of receipt.</p>
                <div>
                  <h4 className="font-bold text-[#111111] uppercase tracking-wider mb-1">Conditions:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Garments must be unworn, unwashed, and with all original tags attached.</li>
                    <li>Footwear must be tried on carpeted surfaces only.</li>
                    <li>Accessories must include all original packaging and dustbags.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {type === 'Size Guide' && (
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C59A45]">Fit Guide</span>
              <h3 className="text-xl font-bold uppercase tracking-wider text-[#111111] font-['Montserrat'] mt-1 mb-4">
                Size Measurements
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border border-gray-200">
                  <thead className="bg-[#F9F9F9] uppercase font-bold text-[#111111]">
                    <tr>
                      <th className="p-2.5 border">Size</th>
                      <th className="p-2.5 border">Chest (in)</th>
                      <th className="p-2.5 border">Waist (in)</th>
                      <th className="p-2.5 border">Hips (in)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-gray-600">
                    <tr><td className="p-2.5 border font-semibold">S</td><td className="p-2.5 border">36-38</td><td className="p-2.5 border">30-31</td><td className="p-2.5 border">37-39</td></tr>
                    <tr><td className="p-2.5 border font-semibold">M</td><td className="p-2.5 border">39-41</td><td className="p-2.5 border">32-34</td><td className="p-2.5 border">40-42</td></tr>
                    <tr><td className="p-2.5 border font-semibold">L</td><td className="p-2.5 border">42-44</td><td className="p-2.5 border">35-37</td><td className="p-2.5 border">43-45</td></tr>
                    <tr><td className="p-2.5 border font-semibold">XL</td><td className="p-2.5 border">45-47</td><td className="p-2.5 border">38-40</td><td className="p-2.5 border">46-48</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
