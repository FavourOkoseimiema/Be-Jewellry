function Checkout({ cartItems }) {

   

    
    return (
        <button
            type="button"
            onClick={handleWhatsAppOrder}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-sm transition-colors"
        >
            Order via WhatsApp
        </button>
    );
}

export default Checkout;