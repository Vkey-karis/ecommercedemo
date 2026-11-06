import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CartDrawer({ 
  isOpen, 
  onClose, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem,
  onClearCart
}) {
  const [checkingOut, setCheckingOut] = useState(false);
  const [phone, setPhone] = useState('0712345678');
  const [orderComplete, setOrderComplete] = useState(false);

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const delivery = subtotal > 5000 || cartItems.length === 0 ? 0 : 350;
  const total = subtotal + delivery;

  const formatKsh = (amount) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0,
    }).format(amount).replace('KES', 'KSh');
  };

  const handleMpesaPay = (e) => {
    e.preventDefault();
    setCheckingOut(true);
    setTimeout(() => {
      setCheckingOut(false);
      setOrderComplete(true);
      setTimeout(() => {
        setOrderComplete(false);
        onClearCart?.();
        onClose();
      }, 3500);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 transition-opacity"
          />

          {/* Slide-out drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="fixed inset-y-0 right-0 max-w-full w-full sm:w-[440px] bg-white z-50 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <ShoppingBag size={20} className="text-[#111111]" />
                <h3 className="text-base font-bold uppercase tracking-wider text-[#111111] font-['Montserrat']">
                  Your Bag ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-black transition-colors focus:outline-none"
                aria-label="Close cart drawer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {orderComplete ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 size={36} />
                  </div>
                  <h4 className="text-xl font-bold text-[#111111]">M-Pesa STK Push Sent!</h4>
                  <p className="text-xs text-gray-500 max-w-xs mx-auto leading-relaxed">
                    Check your phone ({phone}) and enter your M-Pesa PIN to complete payment of <span className="font-bold text-[#111111]">{formatKsh(total)}</span>.
                  </p>
                  <p className="text-[11px] text-[#C59A45] font-semibold tracking-wider uppercase mt-4">
                    Order Ref: KIN-84920
                  </p>
                </div>
              ) : cartItems.length === 0 ? (
                <div className="text-center py-24 space-y-4">
                  <ShoppingBag size={48} className="mx-auto text-gray-300 stroke-1" />
                  <p className="text-sm text-gray-500">Your shopping bag is currently empty.</p>
                  <button
                    onClick={onClose}
                    className="mt-4 px-6 py-3 bg-[#111111] text-white text-xs uppercase font-semibold tracking-wider hover:bg-black transition-colors"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                <div className="divide-y divide-gray-100">
                  {cartItems.map((item) => (
                    <div key={item.id} className="py-4 flex space-x-4">
                      {/* Thumbnail */}
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-20 h-24 object-cover bg-gray-100 shrink-0 border border-gray-100"
                      />

                      {/* Info */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start">
                            <h4 className="text-xs font-semibold text-[#111111] line-clamp-1 pr-2">
                              {item.title}
                            </h4>
                            <button
                              onClick={() => onRemoveItem(item.id)}
                              className="text-gray-400 hover:text-red-500 transition-colors p-0.5"
                              title="Remove item"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                          {item.size && (
                            <span className="text-[11px] text-gray-400 block mt-0.5">
                              Size: {item.size}
                            </span>
                          )}
                          <p className="text-xs font-bold text-[#111111] mt-1">
                            {formatKsh(item.price)}
                          </p>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-3 mt-3">
                          <div className="inline-flex items-center border border-gray-200">
                            <button
                              onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                              className="p-1.5 text-gray-500 hover:text-black hover:bg-gray-50"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="px-3 text-xs font-semibold text-[#111111]">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                              className="p-1.5 text-gray-500 hover:text-black hover:bg-gray-50"
                              aria-label="Increase quantity"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                          <span className="text-[11px] text-gray-400 font-mono">
                            Subtotal: {formatKsh(item.price * item.quantity)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer / Summary */}
            {cartItems.length > 0 && !orderComplete && (
              <div className="p-6 border-t border-gray-100 bg-[#F9F9F9] space-y-4">
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between text-gray-500">
                    <span>Subtotal</span>
                    <span className="font-medium text-[#111111]">{formatKsh(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-gray-500">
                    <span>Delivery (Nairobi)</span>
                    <span className="font-medium text-green-700">
                      {delivery === 0 ? 'FREE' : formatKsh(delivery)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-[#111111] pt-2 border-t border-gray-200">
                    <span>Estimated Total</span>
                    <span>{formatKsh(total)}</span>
                  </div>
                </div>

                {/* Instant M-Pesa Checkout simulation form */}
                <form onSubmit={handleMpesaPay} className="pt-2 space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-[11px] font-semibold text-gray-600 uppercase">M-Pesa Number:</span>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="07XXXXXXXX"
                      className="flex-1 px-3 py-1.5 bg-white border border-gray-300 text-xs font-mono text-[#111111] focus:outline-none focus:border-[#111111]"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={checkingOut}
                    className="w-full py-4 bg-[#111111] hover:bg-black text-white text-xs font-bold uppercase tracking-[0.16em] transition-all flex items-center justify-center space-x-2 shadow-lg disabled:opacity-75"
                  >
                    {checkingOut ? (
                      <span>Initiating M-Pesa Prompt...</span>
                    ) : (
                      <>
                        <span>Pay with M-Pesa • {formatKsh(total)}</span>
                        <ArrowRight size={15} />
                      </>
                    )}
                  </button>
                </form>

                <p className="text-[10px] text-center text-gray-400 uppercase tracking-widest">
                  End-to-End SSL Encrypted Checkout
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
