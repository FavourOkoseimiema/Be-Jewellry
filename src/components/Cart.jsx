import React from "react";
import Checkout from "./Checkout";
import { FiTrash2, FiShoppingBag, FiArrowRight, FiX } from "react-icons/fi";

function Cart({ cartItems = [], onRemoveItem, onClose }) {
   const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0);
    };
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
  const handleWhatsAppOrder = () => {

        let message = "";

        if (cartItems.length === 0) {

            message =
                "Hello! I saw your jewelry collection on your website and I'm interested in placing an order.";

        } else {

            const orderItems = cartItems.map((item) => {
                return `• ${item.name} ×${item.quantity} - ₦${(item.price * item.quantity).toLocaleString()}`;
            });

            const orderList = orderItems.join("\n");

            message = `
Hello!
I'd like to order the following items:
${orderList}
Total: ₦${grandTotal.toLocaleString()}
Please let me know how to proceed.
Thank you.`; }
        const phoneNumber = "2347019963931"; 
        const whatsappURL = `https://wa.me/2347019963931?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, "_blank");
    };
  const shippingThreshold = 250000;
  const shippingCost = subtotal >= shippingThreshold || subtotal === 0 ? 0 : 5000;
  const grandTotal = subtotal + shippingCost;
  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-12 bg-stone-50 min-h-[60vh]">
      <div className="flex justify-between items-center border-b border-stone-200 pb-4 mb-8">

  <h2 className="text-2xl font-serif tracking-widest text-stone-900 uppercase">
    Your Shopping Bag
  </h2>

  <button
    onClick={onClose}
    className="text-stone-600 hover:text-black"
  >
    <FiX size={24}/>
  </button>

</div>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center animate-fade-in">
          <FiShoppingBag className="text-stone-300 mb-4 stroke-[1.2]" size={56} />
          <p className="text-stone-500 font-light tracking-wide text-sm mb-6">
            Your shopping bag is currently empty.
          </p>
          <a 
            href="#shop" 
            className="inline-flex items-center bg-stone-900 hover:bg-amber-700 text-stone-50 text-[11px] uppercase tracking-widest font-light px-8 py-3.5 rounded-sm transition-all duration-300 active:scale-95 shadow-sm"
          >
            Explore Collections
          </a>
        </div>
      ) : (
        /* Populated Cart Content */
        <div className="space-y-8">
          
          {/* Item Loop Wrapper */}
          <ul className="divide-y divide-stone-200/60 border-b border-stone-200/60">
            {cartItems.map((item, index) => (
              <li 
                key={item.id || index} 
                className="flex items-center justify-between py-5 group"
              >
                {/* Left Side: Product Details & Thumbnail */}
                <div className="flex items-center gap-4 sm:gap-6">

                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-stone-100 rounded-sm overflow-hidden shrink-0 border border-stone-200/50 relative">
                    <img 
                      src={item.image || "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=200&q=80"} 
                      alt={item.name} 
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <h4 className="text-xs sm:text-sm font-medium text-stone-900 tracking-wide">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-stone-400 font-light">
                      Quantity: {item.quantity || 1}
                    </p>
                    <p className="text-xs text-amber-700 font-medium sm:hidden mt-1">
                      ₦{(item.price).toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* Right Side: Desktop Price Display & Actions */}
                <div className="flex items-center gap-6 sm:gap-8">
                  <p className="text-sm font-light text-stone-900 tracking-wider hidden sm:block">
                    ₦{(item.price * (item.quantity || 1)).toLocaleString()}
                  </p>
                  
                  <button 
                    onClick={() => onRemoveItem && onRemoveItem(index)}
                    className="text-stone-400 hover:text-stone-900 p-2 transition-colors duration-200 rounded-full hover:bg-stone-200/40"
                    aria-label="Remove item"
                  >
                    <FiTrash2 size={16} />
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* Premium Order Summary Sheet */}
          <div className="mt-8 bg-stone-100/70 p-6 sm:p-8 rounded-sm max-w-md ml-auto border border-stone-200/30">
            <h3 className="text-xs uppercase font-serif tracking-widest text-stone-900 mb-4 font-semibold">
              Order Summary
            </h3>
            
            <div className="space-y-3 text-xs tracking-wide text-stone-600">
              <div className="flex justify-between items-center">
                <span>Subtotal</span>
                <span className="font-light text-stone-900">₦{subtotal.toLocaleString()}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span>Delivery Fees</span>
                {shippingCost === 0 ? (
                  <span className="text-amber-700 text-[10px] uppercase font-medium tracking-wider bg-amber-50 px-2 py-0.5 rounded-sm">
                    Complimentary
                  </span>
                ) : (
                  <span className="font-light text-stone-900">₦{shippingCost.toLocaleString()}</span>
                )}
              </div>
              
              <hr className="border-stone-200/80 my-2" />
              
              <div className="flex justify-between items-center text-stone-900 font-medium pt-1">
                <span className="uppercase text-[11px] tracking-widest font-serif">Estimated Total</span>
                <span className="text-sm sm:text-base font-sans">
                  ₦{grandTotal.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Premium Interactive CTA Button */}
            <button onClick={handleWhatsAppOrder} className="w-full mt-6 bg-stone-900 hover:bg-amber-700 text-stone-50 text-[11px] uppercase tracking-widest font-light py-4 rounded-sm transition-all duration-300 shadow-md flex items-center justify-center gap-2 group active:scale-[0.99]">
              🟢 Order via WhatsApp
              <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={14} />
            </button> 
          </div>
          
        </div>
      )}
    </div>
  );
}

export default Cart;