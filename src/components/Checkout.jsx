function Checkout({ cartItems }) {
  if (cartItems.length === 0) return null;

  return (
    <div className="checkout">
      <h3>Checkout</h3>
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="text" placeholder="Address" required />
        <input type="text" placeholder="City" required />
        <input type="text" placeholder="Credit Card Number" required />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}
export default Checkout