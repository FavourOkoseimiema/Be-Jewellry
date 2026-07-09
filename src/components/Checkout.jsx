import React, { useState } from "react";

function Checkout({ cartItems = [], onOrderSuccess }) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    city: "",
    cardNumber: "",
  });

  // If cart is empty, seamlessly hide the checkout panel
  if (cartItems.length === 0) return null;

  // Calculate Order Total (Assumes product.price is a numeric string or number like 250 or "$250")
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const priceNum = typeof item.price === 'string' 
        ? parseFloat(item.price.replace(/[^0-9.]/g, '')) 
        : item.price;
      return total + (priceNum || 0);
    }, 0);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulated Frontend Payment Gateway Logic (e.g., Tokenization)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2500)); // Simulating API latency
      
      console.log("Payment Token Generated successfully for:", formData.fullName);
      console.log("Sending token and order details to Backend API...");

      if (onOrderSuccess) onOrderSuccess();
      alert("Order successfully placed! Thank you for shopping with Be-Jewelry Co.");
    } catch (error) {
      console.error("Payment failed", error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <section className="bg-black min-h-screen text-zinc-100 py-16 px-4 sm:px-6 lg:px-8 border-t border-zinc-950">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* LEFT COLUMN: Luxury Checkout Form */}
        <div className="lg:col-span-7 bg-zinc-950 border border-zinc-900 p-6 md:p-10 rounded-sm shadow-2xl">
          <h3 className="font-serif text-xl md:text-2xl tracking-widest uppercase text-zinc-100 mb-8 border-b border-zinc-900 pb-4">
            Secure Checkout
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-[10px] tracking-widest uppercase text-zinc-400 mb-2 font-light">Full Name</label>
              <input 
                type="text" 
                name="fullName"
                required 
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Ex: Eleanor Vance" 
                className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-amber-500 outline-none text-xs tracking-wide p-3.5 text-zinc-200 transition-colors placeholder-zinc-600 rounded-sm"
              />
            </div>

            <div>
              <label className="block text-[10px] tracking-widest uppercase text-zinc-400 mb-2 font-light">Shipping Address</label>
              <input 
                type="text" 
                name="address"
                required 
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Street Address, Apartment, Suite" 
                className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-amber-500 outline-none text-xs tracking-wide p-3.5 text-zinc-200 transition-colors placeholder-zinc-600 rounded-sm"
              />
            </div>

            <div>
              <label className="block text-[10px] tracking-widest uppercase text-zinc-400 mb-2 font-light">City</label>
              <input 
                type="text" 
                name="city"
                required 
                value={formData.city}
                onChange={handleInputChange}
                placeholder="Ex: New York" 
                className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-amber-500 outline-none text-xs tracking-wide p-3.5 text-zinc-200 transition-colors placeholder-zinc-600 rounded-sm"
              />
            </div>

            <div>
              <label className="block text-[10px] tracking-widest uppercase text-zinc-400 mb-2 font-light">Credit Card Details</label>
              <div className="relative">
                <input 
                  type="text" 
                  name="cardNumber"
                  required 
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  maxLength="19"
                  placeholder="0000 0000 0000 0000" 
                  className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-amber-500 outline-none text-xs tracking-widest p-3.5 text-zinc-200 transition-colors placeholder-zinc-600 rounded-sm font-mono"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-amber-500/60 tracking-widest">
                  🔒 ENCRYPTED
                </span>
              </div>
            </div>

            {/* Golden Submission Action */}
            <button 
              type="submit" 
              disabled={isProcessing}
              className="w-full bg-amber-500 hover:bg-amber-600 text-black font-medium text-xs tracking-widest uppercase py-4 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-4 shadow-lg shadow-amber-500/10 rounded-sm"
            >
              {isProcessing ? "Authorizing Payment Vault..." : `Authorize Payment — $${calculateTotal().toLocaleString()}`}
            </button>
          </form>
        </div>

        {/* RIGHT COLUMN: Order Summary Box */}
        <div className="lg:col-span-5 bg-zinc-950 border border-zinc-900 p-6 md:p-8 rounded-sm">
          <h4 className="font-serif text-sm tracking-widest uppercase text-zinc-400 mb-6 pb-2 border-b border-zinc-900">
            Your Order Summary ({cartItems.length})
          </h4>
          
          {/* Scrollable Mini-Cart Items List */}
          <div className="max-h-60 overflow-y-auto space-y-4 pr-2 divide-y divide-zinc-900">
            {cartItems.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between pt-4 first:pt-0 gap-4">
                <div>
                  <h5 className="text-xs font-medium text-zinc-200 tracking-wide">{item.name}</h5>
                  <p className="text-[10px] text-zinc-500 mt-0.5">18k Fine Craftsmanship</p>
                </div>
                <span className="text-xs text-amber-400 font-mono">{item.price}</span>
              </div>
            ))}
          </div>

          {/* Pricing Ledger Details */}
          <div className="border-t border-zinc-900 mt-6 pt-6 space-y-3 text-xs tracking-wide">
            <div className="flex justify-between text-zinc-500">
              <span>Subtotal</span>
              <span className="font-mono text-zinc-300">${calculateTotal().toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-zinc-500">
              <span>Insured Shipping</span>
              <span className="text-amber-500 uppercase text-[10px] tracking-widest font-medium">Complimentary</span>
            </div>
            <div className="flex justify-between text-zinc-100 text-sm font-medium pt-3 border-t border-zinc-900">
              <span className="uppercase tracking-widest text-xs text-zinc-400">Total Due</span>
              <span className="font-mono text-amber-400 text-base">${calculateTotal().toLocaleString()}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Checkout;