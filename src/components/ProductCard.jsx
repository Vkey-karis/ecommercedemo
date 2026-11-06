import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Check, Eye } from 'lucide-react';

export default function ProductCard({ 
  product, 
  onAddToCart, 
  isWishlisted, 
  onToggleWishlist,
  onQuickView 
}) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = (e) => {
    e.stopPropagation();
    setIsAdded(true);
    onAddToCart(product);
    setTimeout(() => setIsAdded(false), 1800);
  };

  const formatKsh = (amount) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0,
    }).format(amount).replace('KES', 'KSh');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5 }}
      className="group relative flex flex-col bg-white"
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#F9F9F9] border border-gray-100">
        
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Tiny tag in top-left corner */}
        {product.tag && (
          <div className="absolute top-3 left-3 z-10">
            <span
              className={`inline-block px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase shadow-sm ${
                product.tagType === 'sale'
                  ? 'bg-red-600 text-white'
                  : 'bg-[#111111] text-white'
              }`}
            >
              {product.tag}
            </span>
          </div>
        )}

        {/* Top-right Wishlist Action */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product.id);
          }}
          className={`absolute top-3 right-3 z-10 p-2 rounded-full transition-all duration-200 ${
            isWishlisted 
              ? 'bg-red-50 text-red-600 shadow-sm' 
              : 'bg-white/80 hover:bg-white text-gray-700 hover:text-black opacity-90 sm:opacity-0 sm:group-hover:opacity-100'
          }`}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          title="Wishlist"
        >
          <Heart size={16} fill={isWishlisted ? "currentColor" : "none"} strokeWidth={2} />
        </button>

        {/* Hover overlay gradient */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* 'Add to Cart' button that appears on hover */}
        <div className="absolute inset-x-3 bottom-3 z-20 transition-all duration-300 transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 sm:block">
          <button
            type="button"
            onClick={handleAdd}
            className={`w-full py-3 px-4 flex items-center justify-center space-x-2 text-xs font-semibold tracking-wider uppercase transition-all duration-200 shadow-lg ${
              isAdded 
                ? 'bg-[#C59A45] text-white' 
                : 'bg-[#111111] hover:bg-black text-white hover:text-white'
            }`}
          >
            {isAdded ? (
              <>
                <Check size={15} />
                <span>Added to Bag</span>
              </>
            ) : (
              <>
                <ShoppingCart size={15} />
                <span>Add to Cart</span>
              </>
            )}
          </button>
        </div>

        {/* Mobile touch quick add button */}
        <div className="sm:hidden absolute bottom-2 right-2 z-20">
          <button
            type="button"
            onClick={handleAdd}
            className="p-2.5 bg-[#111111] text-white rounded-full shadow-md"
            aria-label="Add to cart"
          >
            {isAdded ? <Check size={14} /> : <ShoppingCart size={14} />}
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="pt-4 pb-2 flex flex-col flex-1">
        <div className="flex items-center justify-between text-[11px] text-gray-400 uppercase tracking-widest mb-1">
          <span>{product.category}</span>
        </div>

        {/* Product Title */}
        <h3 className="text-sm font-medium text-[#111111] tracking-normal mb-1.5 line-clamp-1 group-hover:text-[#C59A45] transition-colors">
          {product.title}
        </h3>

        {/* Price in KSh */}
        <div className="flex items-center space-x-2 mt-auto">
          <span className="text-sm font-bold text-[#111111] tracking-tight">
            {formatKsh(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-gray-400 line-through">
              {formatKsh(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
