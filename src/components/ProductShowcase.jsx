import ProductCard from "./ProductCard";
function ProductShowcase({ products, addToCart }) {
  return (
    <div className="products">
      <h2>Our Collection</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <ProductCard/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductShowcase