import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight } from 'lucide-react';

export default function SearchModal({ isOpen, onClose, products, onSelectProduct }) {
  const [query, setQuery] = useState('');

  const filtered = query.trim() === '' ? [] : products.filter(p => 
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50"
          />

          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            className="fixed top-0 inset-x-0 bg-white z-50 border-b border-gray-200 shadow-2xl max-h-[85vh] overflow-hidden flex flex-col"
          >
            <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 py-6">
              <div className="flex items-center justify-between border-b-2 border-[#111111] pb-4">
                <Search size={22} className="text-[#111111] mr-3" />
                <input
                  type="text"
                  autoFocus
                  placeholder="Search collections, coats, shirts, accessories..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full text-base sm:text-xl font-medium text-[#111111] placeholder-gray-400 focus:outline-none bg-transparent"
                />
                <button 
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-black transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Search results or popular suggestions */}
              <div className="py-6 overflow-y-auto max-h-[60vh]">
                {query.trim() === '' ? (
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">
                      Popular Searches
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['Wool Blazer', 'Linen Trench', 'Cashmere Knit', 'Silk Shirt', 'Chelsea Boots'].map(term => (
                        <button
                          key={term}
                          onClick={() => setQuery(term)}
                          className="px-3.5 py-1.5 bg-[#F9F9F9] hover:bg-gray-200 text-xs font-medium text-gray-700 transition-colors"
                        >
                          {term}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : filtered.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {filtered.map(item => (
                      <div
                        key={item.id}
                        onClick={() => {
                          onSelectProduct(item);
                          onClose();
                        }}
                        className="flex items-center space-x-4 p-3 hover:bg-[#F9F9F9] cursor-pointer transition-colors border border-transparent hover:border-gray-200"
                      >
                        <img src={item.image} alt={item.title} className="w-16 h-20 object-cover bg-gray-100" />
                        <div>
                          <span className="text-[10px] text-gray-400 uppercase font-semibold">{item.category}</span>
                          <h4 className="text-sm font-semibold text-[#111111]">{item.title}</h4>
                          <p className="text-xs font-bold text-[#111111] mt-1">
                            KSh {item.price.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-500 text-center py-8">
                    No results found for "{query}". Try searching for 'blazer', 'silk', or 'boots'.
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
