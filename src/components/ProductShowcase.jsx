function ProductShowcase({ products, addToCart }) {
  return (
    <div className="products">
      <h2>Our Collection</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src="https://via.placeholder.com/150" alt={product.name} />
            <h4>{product.name}</h4>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductShowcase