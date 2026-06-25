function Cart(props) {
  const totalPrice = props.cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div className="mt-8 p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">
        Cart ({props.cart.length})
      </h2>

      {props.cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        props.cart.map((item, index) => (
  <div
    key={index}
    className="flex justify-between items-center border-b py-2"
  >
    <div>
      <p>{item.name}</p>
      <p>₦{item.price.toLocaleString()}</p>
    </div>

    <button
      onClick={() => props.removeFromCart(index)}
      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
    >
      Remove
    </button>
  </div>
))
      )}
    </div>
  );
}


export default Cart;