import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../services/api";
function PaymentCallback() {
  const [paymentStatus, setPaymentStatus] =useState("Verifying");
  const [message, setMessage]= useState("");
  const [searchParams] = useSearchParams();

  const reference = searchParams.get("reference");

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        const response = await api.get(
          `/orders/verify/${reference}`
        );

        console.log("Verification response:", response.data);
        if (reference){
          verifyPayment();
        }
        else{
          setPaymentStatus("failed");
          setMessage("No payment reference was found");
        }
       if (response.data.data.status === "success") {
  setPaymentStatus("success");
  setMessage("Payment successful! Your order is now being processed.");
} else {
  setPaymentStatus("failed");
  setMessage("Payment was not successful.");
} 
      } catch (error) {
        console.error("Verification failed:", error);
      }
    };

    if (reference) {
      verifyPayment();
    }
  }, [reference]);

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