function ProductCard(props){
return(
    <div className="bg-white shadow-lg rounded-xl p-4 hover:shadow:xl transition">
        <img 
          src={props.product.image}
          className="w-full h-60 object-cover rounded-lg mb-4"
        />
        <h2 className="text-xl font-bold mt-3">
          {props.product.name}
        </h2>
        <p className="text-lg font-semibold text-gray-700 mt-2">
          ₦ {props.product.price.toLocaleString()}
        </p>
        <button onClick={()=>props.addToCart(props.product)}
  className="bg-pink-500 text-white px-4 py-2 rounded-lg mt-4 w-full hover:bg-pink-700">
          Add to Cart
        </button>

    </div>
)
}
export default ProductCard