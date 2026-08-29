import { useState } from "react";
import api from "../../services/api";
import { FiX } from "react-icons/fi";
import {toast} from "react-hot-toast";

function Checkout({ cartItems, onClose }) {
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [isProcessing, setIsProcessing]= useState(false);
  const handleCreateOrder = async () => {
  if (isProcessing) return;

  try {
    setIsProcessing(true);

    const response = await api.post("/orders", {
      customerName,
      customerEmail,
      customerPhone,
      shippingAddress,
      products: cartItems.map((item) => ({
        product: item._id,
        quantity: item.quantity || 1,
      })),
      totalPrice: cartItems.reduce(
        (total, item) =>
          total + item.price * (item.quantity || 1),
        0
      ),
    });

    const orderId = response.data.order._id;

    const paymentResponse = await api.post("/orders/pay", {
      email: customerEmail,
      amount: cartItems.reduce(
        (total, item) =>
          total + item.price * (item.quantity || 1),
        0
      ),
      orderId,
    });

    window.location.href =
      paymentResponse.data.data.authorization_url;

  } catch (error) {
    console.error("Checkout error:", error);
    setIsProcessing(false);
  }
};
   
  return (
    <div className="w-full min-h-full bg-[#111111] text-white p-6 md:p-8 rounded-lg border border-[#2a2a2a]">

      {/* Header */}
      <div className="mb-8">
   
        <p className="text-[#c9a227] text-xs tracking-[0.3em] uppercase mb-2">
          <i>Checkout </i>
        </p>
        
        <h2 className="text-2xl md:text-3xl font-semibold tracking-wide">
          Shipping Information
        </h2>

        <p className="text-gray-400 text-sm mt-2">
          Enter your details to continue with your order.
        </p>
      </div>

      {/* Form */}
      <div className="space-y-5">

        {/* Full Name */}
        <div>
          <label className="block text-sm text-gray-300 mb-2">
            Full Name
          </label>

          <input
            className="w-full bg-[#1a1a1a] border border-[#333333] 
            focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227]
            outline-none text-white placeholder-gray-500
            px-4 py-3 rounded-md transition-all duration-200"
            type="text"
            placeholder="Enter your full name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm text-gray-300 mb-2">
            Email Address
          </label>

          <input
            className="w-full bg-[#1a1a1a] border border-[#333333]
            focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227]
            outline-none text-white placeholder-gray-500
            px-4 py-3 rounded-md transition-all duration-200"
            type="email"
            placeholder="Enter your email"
            value={customerEmail}
            onChange={(e) => setCustomerEmail(e.target.value)}
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm text-gray-300 mb-2">
            Phone Number
          </label>

          <input
            className="w-full bg-[#1a1a1a] border border-[#333333]
            focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227]
            outline-none text-white placeholder-gray-500
            px-4 py-3 rounded-md transition-all duration-200"
            type="tel"
            placeholder="Enter your phone number"
            value={customerPhone}
            onChange={(e) => setCustomerPhone(e.target.value)}
          />
        </div>

        {/* Address */}
        <div>
          <label className="block text-sm text-gray-300 mb-2">
            Shipping Address
          </label>

          <textarea
            className="w-full bg-[#1a1a1a] border border-[#333333]
            focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227]
            outline-none text-white placeholder-gray-500
            px-4 py-3 rounded-md transition-all duration-200
            min-h-[110px] resize-none"
            placeholder="Enter your shipping address"
            value={shippingAddress}
            onChange={(e) => setShippingAddress(e.target.value)}
          />
        </div>

      </div>

      {/* Order Summary */}
      <div className="mt-8 pt-6 border-t border-[#333333]">

        <div className="flex justify-between items-center mb-5">
          <span className="text-gray-400">
            Order Total
          </span>

          <span className="text-[#c9a227] text-xl font-semibold">
            ₦
            {cartItems
              .reduce(
                (total, item) =>
                  total + item.price * (item.quantity || 1),
                0
              )
              .toLocaleString()}
          </span>
        </div>
     <button
  type="button"
  onClick={handleCreateOrder}
  disabled={isProcessing}
  className="w-full bg-[#c9a227] hover:bg-[#b08d20]
  disabled:opacity-50 disabled:cursor-not-allowed
  text-black font-semibold py-4 rounded-md
  transition-all duration-300 tracking-wide"
>
  {isProcessing ? "Processing Payment..." : "Continue to Payment"}
</button>

      </div>

    </div>
  );
}

export default Checkout;