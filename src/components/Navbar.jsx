import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, X, User, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ 
  cartCount, 
  onOpenCart, 
  onOpenSearch, 
  activeCategory, 
  setActiveCategory,
  wishlistCount = 0,
  onOpenWishlist,
  onOpenUser
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Men', id: 'Men', isSale: false },
    { name: 'Women', id: 'Women', isSale: false },
    { name: 'Accessories', id: 'Accessories', isSale: false },
    { name: 'Sale', id: 'Sale', isSale: true },
  ];

  const handleNavClick = (category) => {
    setActiveCategory(category);
    setMobileMenuOpen(false);
    const element = document.getElementById('collections-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top micro announcement bar */}
      <div className="bg-[#111111] text-white text-[11px] tracking-widest uppercase font-medium py-2 px-4 text-center">
        <span>Complimentary Express Delivery on all Nairobi orders above KSh 5,000</span>
      </div>

      {/* Main Sticky Navbar */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200 transition-shadow duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Left: Mobile hamburger & Bold text logo 'KINETICS' */}
            <div className="flex items-center space-x-4">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 -ml-2 text-gray-700 hover:text-black focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>

              <a 
                href="#" 
                className="font-extrabold text-2xl tracking-[0.22em] text-[#111111] uppercase hover:opacity-80 transition-opacity font-['Montserrat']"
              >
                KINETICS
              </a>
            </div>

            {/* Center: Desktop Nav Links (Men, Women, Accessories, Sale in red) */}
            <nav className="hidden md:flex items-center space-x-10">
              {navLinks.map((link) => {
                const isActive = activeCategory === link.id;
                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.id)}
                    className={`relative text-sm tracking-wider uppercase transition-colors duration-200 font-medium py-1 ${
                      link.isSale 
                        ? 'text-red-600 hover:text-red-700 font-semibold' 
                        : isActive
                          ? 'text-[#111111]'
                          : 'text-gray-600 hover:text-[#111111]'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className={`absolute bottom-0 left-0 right-0 h-[2px] ${
                          link.isSale ? 'bg-red-600' : 'bg-[#111111]'
                        }`}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right: Icons for Search, Wishlist, User Profile, and Shopping Cart */}
            <div className="flex items-center space-x-5 sm:space-x-6 text-[#111111]">
              <button
                type="button"
                onClick={onOpenSearch}
                className="p-1 hover:text-[#C59A45] transition-colors focus:outline-none"
                aria-label="Search catalogue"
                title="Search"
              >
                <Search size={21} strokeWidth={1.75} />
              </button>

              <button
                type="button"
                onClick={onOpenWishlist}
                className="relative p-1 hover:text-[#C59A45] transition-colors focus:outline-none hidden sm:block"
                aria-label="View Wishlist"
                title="Wishlist"
              >
                <Heart size={21} strokeWidth={1.75} />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#111111] text-white text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </button>

              <button
                type="button"
                onClick={onOpenUser}
                className="p-1 hover:text-[#C59A45] transition-colors focus:outline-none hidden sm:block"
                aria-label="User account"
                title="Account"
              >
                <User size={21} strokeWidth={1.75} />
              </button>

              <button
                type="button"
                onClick={onOpenCart}
                className="relative p-1 hover:text-[#C59A45] transition-colors focus:outline-none group"
                aria-label="Shopping Cart"
                title="Shopping Bag"
              >
                <ShoppingCart size={22} strokeWidth={1.75} />
                {/* Tiny black badge with cart item count */}
                <span className="absolute -top-1.5 -right-2 bg-[#111111] group-hover:bg-[#C59A45] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center transition-colors shadow-sm">
                  {cartCount}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile slide-down menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden border-t border-gray-100 bg-white px-6 py-5 space-y-4 shadow-xl"
            >
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.id)}
                    className={`text-left text-base uppercase tracking-wider py-2 font-medium border-b border-gray-100 ${
                      link.isSale ? 'text-red-600 font-semibold' : 'text-[#111111]'
                    }`}
                  >
                    {link.name}
                  </button>
                ))}
              </div>

              <div className="pt-2 flex items-center justify-around border-t border-gray-100 text-sm text-gray-600">
                <button 
                  onClick={() => { setMobileMenuOpen(false); onOpenWishlist(); }} 
                  className="flex items-center space-x-2 py-2"
                >
                  <Heart size={18} />
                  <span>Wishlist ({wishlistCount})</span>
                </button>
                <button 
                  onClick={() => { setMobileMenuOpen(false); onOpenUser(); }} 
                  className="flex items-center space-x-2 py-2"
                >
                  <User size={18} />
                  <span>Account</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
