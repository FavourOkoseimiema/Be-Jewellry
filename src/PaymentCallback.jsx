import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../services/api";
function PaymentCallback() {
  const [paymentStatus, setPaymentStatus] =useState("verifying");
  const [message, setMessage]= useState("");
  const [searchParams] = useSearchParams();
  const [order, setOrder] = useState(null);

  const reference = searchParams.get("reference");

  useEffect(() => {
  const verifyPayment = async () => {
 try {
  const response = await api.get(`/orders/verify/${reference}`);
  if (response.data.paymentStatus === "success") {
    setPaymentStatus("success");
    setMessage(
      "Payment successful! Your order is now being processed."
    );
    setOrder(response.data.order);
    return;
  }

  setPaymentStatus("failed");
  setMessage("Payment was not successful.");
} catch (error) {
  console.error(
    "Verification failed:",
    error.response?.data || error.message
  );

  setPaymentStatus("failed");
  setMessage("Unable to verify payment.");
}
  };

  if (reference) {
    verifyPayment();
  } else {
    setPaymentStatus("failed");
    setMessage("No payment reference was found.");
  }
}, [reference]);
  const handleWhatsAppReceipt = () => {
  if (!order) return;

  const productList = order.products
    .map((item) => {
      return `• ${item.product.name} ×${item.quantity} - ₦${(
        item.product.price * item.quantity
      ).toLocaleString()}`;
    })
    .join("\n");
const whatsappNumber = order.customerPhone
  .replace(/\D/g, "")
  .replace(/^0/, "234");
  const message = `Hello! Here is your Be-Jewelry receipt.

Customer: ${order.customerName}
Phone: ${order.customerPhone}
Address: ${order.shippingAddress}

Order:
${productList}

Total: ₦${order.totalPrice.toLocaleString()}
Payment: ${order.paymentStatus}
Order Status: ${order.status}

Payment Reference: ${order.paymentReference}

Thank you for shopping with Be-Jewelry!`;
 
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappURL, "_blank");
};

  return (
  <div className="min-h-screen flex items-center justify-center bg-stone-950 text-white">
    <div className="text-center p-8">
      {paymentStatus === "verifying" && (
        <>
          <h1 className="text-2xl font-semibold text-amber-300">
            Verifying Payment...
          </h1>

          <p className="text-gray-400 mt-3">
            Please wait while we confirm your transaction.
          </p>
        </>
      )}

      {paymentStatus === "success" && (
        <>
          <h1 className="text-3xl font-semibold text-green-400">
            Payment Successful! ✔️
          </h1>

          <p className="text-gray-300 mt-3">
            {message}
          </p>
                    {order && (
  <button
    type="button"
    onClick={handleWhatsAppReceipt}
    className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md"
  >
    Send Receipt to WhatsApp
  </button>
)}
        </>
      )}

      {paymentStatus === "failed" && (
        <>
          <h1 className="text-3xl font-semibold text-red-400">
            Payment Failed
          </h1>

          <p className="text-gray-300 mt-3">
            {message}
          </p>
        </>
      )}
    </div>
  </div>
);
}

export default PaymentCallback;