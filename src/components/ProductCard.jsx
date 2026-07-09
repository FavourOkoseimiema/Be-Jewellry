function ProductCard(product) {
  return (
    <div>
      <img src="https://via.placeholder.com/150" alt={product.name} />
      <h4>{product.name}</h4>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
