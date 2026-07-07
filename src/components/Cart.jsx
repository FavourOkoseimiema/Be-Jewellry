function Cart({ cartItems }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h3>Your Cart</h3>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
          <p><strong>Total: ${total}</strong></p>
        </>
      )}
    </div>
  );
}
export default Cart