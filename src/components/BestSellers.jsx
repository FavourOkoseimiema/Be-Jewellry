import { useState, useEffect } from "react";
import api from "../../services/api";

function BestSellers() {
const [featuredProducts, setFeaturedProducts] = useState([]);

useEffect(() => {
const fetchFeaturedProducts = async () => {
try {
const response = await api.get("/products/featured");


    setFeaturedProducts(response.data);
  } catch (error) {
    console.error("Failed to load featured products:", error);
  }
};

fetchFeaturedProducts();


}, []);

return ( <section className="bg-black py-14 overflow-hidden">


  <div className="text-center mb-10">

    <h2 className="font-serif text-3xl tracking-[0.3em] uppercase text-white">
      Best Sellers
    </h2>

    <div className="w-20 h-[1px] bg-amber-500 mx-auto mt-4"></div>
  </div>

  <div className="overflow-hidden">

    <div className="flex gap-6 animate-slide">

      {featuredProducts.map((product) => (
        <div
          key={product._id}
          className="min-w-[280px] flex-shrink-0"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-80 object-cover rounded-lg"
          />
        </div>
      ))}

    </div>

  </div>

</section>


);
}

export default BestSellers;
