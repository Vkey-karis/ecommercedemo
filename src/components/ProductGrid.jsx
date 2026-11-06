import React from 'react';
import ProductCard from './ProductCard';
import { SlidersHorizontal, Sparkles } from 'lucide-react';

export default function ProductGrid({ 
  products, 
  activeCategory, 
  setActiveCategory, 
  onAddToCart,
  wishlist,
  onToggleWishlist,
  onQuickView
}) {
  const categories = [
    { label: 'All Pieces', value: 'All' },
    { label: 'Men', value: 'Men' },
    { label: 'Women', value: 'Women' },
    { label: 'Accessories', value: 'Accessories' },
    { label: 'Sale (Up to -20%)', value: 'Sale' },
  ];

  const filteredProducts = products.filter(product => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Sale') return product.tagType === 'sale';
    return product.category === activeCategory;
  });

  return (
    <section id="collections-section" className="py-20 sm:py-28 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 border-b border-gray-100 pb-8">
          <div>
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C59A45] block mb-2">
              Curated Wardrobe
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111111] font-['Montserrat']">
              Our Collections
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center space-x-2 sm:space-x-4 overflow-x-auto pb-2 mt-6 md:mt-0 no-scrollbar">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`text-xs uppercase tracking-wider font-semibold px-4 py-2 transition-all whitespace-nowrap rounded-none ${
                    isActive
                      ? cat.value === 'Sale'
                        ? 'bg-red-600 text-white'
                        : 'bg-[#111111] text-white shadow-sm'
                      : cat.value === 'Sale'
                        ? 'text-red-600 hover:bg-red-50'
                        : 'text-gray-500 hover:text-black hover:bg-gray-100'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 8 Products Grid: grid-cols-2 md:grid-cols-4 gap-6 */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10 sm:gap-x-6 sm:gap-y-12">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                isWishlisted={wishlist.includes(product.id)}
                onToggleWishlist={onToggleWishlist}
                onQuickView={onQuickView}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#F9F9F9] border border-dashed border-gray-200">
            <p className="text-gray-500 text-sm">No items found matching the selected filter.</p>
            <button
              onClick={() => setActiveCategory('All')}
              className="mt-4 px-6 py-2.5 bg-[#111111] text-white text-xs uppercase font-semibold tracking-wider"
            >
              View All Items
            </button>
          </div>
        )}

        {/* Bottom banner / view all cta */}
        <div className="mt-16 text-center">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">
            Showing {filteredProducts.length} of {products.length} Essential Pieces
          </p>
        </div>

      </div>
    </section>
  );
}
