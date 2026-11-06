import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import ValueProps from './components/ValueProps';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CartDrawer from './components/CartDrawer';
import SearchModal from './components/SearchModal';
import InfoModal from './components/InfoModal';
import { PRODUCTS, INITIAL_CART } from './data/products';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [cartItems, setCartItems] = useState(INITIAL_CART);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [modalState, setModalState] = useState({ isOpen: false, type: '' });
  const [wishlist, setWishlist] = useState([2]); // Product 2 initially wishlisted
  const [toastMessage, setToastMessage] = useState('');

  // Total quantity count for the cart badge
  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 2500);
  };

  const handleAddToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [
          ...prev, 
          {
            id: product.id,
            title: product.title,
            price: product.price,
            quantity: 1,
            image: product.image,
            size: 'M'
          }
        ];
      }
    });
    showToast(`Added "${product.title}" to your bag`);
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    setCartItems(prev => prev.map(item => 
      item.id === productId ? { ...item, quantity: newQuantity } : item
    ));
  };

  const handleRemoveItem = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleToggleWishlist = (productId) => {
    setWishlist(prev => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast('Removed item from your wishlist');
        return prev.filter(id => id !== productId);
      } else {
        showToast('Saved item to your wishlist');
        return [...prev, productId];
      }
    });
  };

  const handleShopNowClick = () => {
    const el = document.getElementById('collections-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openInfoModal = (type) => {
    setModalState({ isOpen: true, type });
  };

  const closeInfoModal = () => {
    setModalState({ isOpen: false, type: '' });
  };

  return (
    <div className="min-h-screen bg-white text-[#111111] flex flex-col font-sans selection:bg-[#111111] selection:text-white">
      
      {/* 1. Sticky Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        wishlistCount={wishlist.length}
        onOpenWishlist={() => openInfoModal('Wishlist')}
        onOpenUser={() => openInfoModal('Account')}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onShopNowClick={handleShopNowClick} />

        {/* 3. Product Grid (The Main Feature) */}
        <ProductGrid
          products={PRODUCTS}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          onAddToCart={handleAddToCart}
          wishlist={wishlist}
          onToggleWishlist={handleToggleWishlist}
          onQuickView={(p) => handleAddToCart(p)}
        />

        {/* 4. Value Proposition Section */}
        <ValueProps />
      </main>

      {/* 5. Minimalist Footer */}
      <Footer 
        onOpenContact={() => openInfoModal('Contact')}
        onOpenPolicy={(policy) => openInfoModal(policy)}
      />

      {/* 6. Floating WhatsApp Button */}
      <WhatsAppButton />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Interactive Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={PRODUCTS}
        onSelectProduct={(product) => {
          handleAddToCart(product);
          setIsCartOpen(true);
        }}
      />

      {/* Info / Policy / Account Modal */}
      <InfoModal
        isOpen={modalState.isOpen}
        onClose={closeInfoModal}
        type={modalState.type}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-6 z-50 bg-[#111111] text-white text-xs font-medium py-3 px-5 shadow-2xl border border-gray-800 flex items-center space-x-2 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-[#C59A45]"></span>
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  );
}
