function ProductDetails({ product, onAddToCart, onClose }) {
  if (!product) return null;

  return (
    
    <div className="min-h-screen top-28 bg-zinc-950 border border-zinc-800 rounded-sm p-6">
     <div className="flex justify-end">

<button
onClick={onClose}
className="text-zinc-500 hover:text-white text-2xl transition"
>

✕

</button>

</div>
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-[320px] lg:h-[420px] object-cover rounded-sm"
      />

      <h2 className="mt-6 text-2xl font-serif text-white tracking-wide">
        {product.name}
      </h2>

      <p className="mt-3 text-amber-400 text-xl">
        ₦{product.price.toLocaleString()}
      </p>

      <p className="mt-5 text-zinc-400 leading-7">
        {product.description}
      </p>

      <div className="mt-6 space-y-2 text-sm text-zinc-500">
        <p>
          <span className="text-zinc-300">Category:</span>{" "}
          {product.category}
        </p>

        <p>
          <span className="text-zinc-300">Available:</span>{" "}
          {product.stock}
        </p>
      </div>

      <button
        onClick={() => onAddToCart(product)}
        className="mt-8 w-full border border-amber-500 text-amber-400 py-3 uppercase tracking-widest hover:bg-amber-500 hover:text-black transition"
      >
        Add to Cart
      </button>

    </div>
  );
}

export default ProductDetails;