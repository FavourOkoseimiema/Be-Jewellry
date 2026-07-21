import React, { useState, useEffect } from "react";
import Navbar from "./components/NavBar";
// import SearchBar from "./components/SearchBar";
import ProductShowcase from "./components/ProductShowcase";
// import CategoryFilter from "./components/CategoryFilter";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import SocialMediaLinks from "./components/SocialMedia";
import Newsletter from "./components/NewsLetter";
import Footer from "./components/footer";
// import PRODUCTS from "./data/product";
import Loader from "./loader";
import "./index.css"
import api from "../services/api";
import BestSellers from "./components/BestSellers";

function JewelryWebsite() {
  const [products,setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const closeCart = () => {  setShowCart(false);};
    const [showCart, setShowCart] = useState(false);
    const [loading, setLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 2500); 
  
 return () => clearTimeout(timer);
}, []);

useEffect(() => {
  const fetchProducts = async () => {
    try {
      const response = await api.get("/products");

      setProducts(response.data);

    } catch (error) {
      console.error(error);
      alert("Unable to load products.");
    }
  };
  fetchProducts();
}, []);
 

  // // Filter Logic: Matches search strings and explicit dropdown category badges
  // const filteredProducts = allProducts.filter((product) => {
  //   const matchesCategory =
  //     selectedCategory === "All" ||
  //     product.category.toLowerCase() === selectedCategory.toLowerCase();

  //   const matchesSearch =
  //     product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     product.description.toLowerCase().includes(searchQuery.toLowerCase());

  //   return matchesCategory && matchesSearch;
  // });

 // Add item to cart
const addToCart = (product) => {
  const existingItem = cartItems.find((item) => item._id === product._id);

  if (existingItem) {
    const updatedCart = cartItems.map((item) => {
      if (item._id === product._id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }

      return item;
    });

    setCartItems(updatedCart);
  } else {
    setCartItems([
      ...cartItems,
      {
        ...product,
        quantity: 1,
      },
    ]);
  }
};

// Remove item completely
const removeFromCart = (index) => {
  setCartItems((prev) => prev.filter((_, i) => i !== index));
};

// Increase quantity
const increaseQuantity = (id) => {
  setCartItems((prev) =>
    prev.map((item) => {
      if (item._id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }

      return item;
    })
  );
};

// Decrease quantity
const decreaseQuantity = (id) => {
  setCartItems((prev) =>
    prev
      .map((item) => {
        if (item._id === id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }

        return item;
      })
      .filter((item) => item.quantity > 0)
  );
};
if (loading) {
  return <Loader />;
}
  ;
  return (
    <div className="min-h-screen bg-stone-950 text-stone-200 antialiased font-sans selection:bg-amber-700 selection:text-white">
      {/* Navigation Layer */}
      <Navbar cartCount={cartItems.length} setShowCart={setShowCart} />
      <div className="pt-28 bg-stone-950">
        {/* Search & Filter Toolbar Controls */}
        {/* <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center border-b border-stone-900/60 pb-8">
          <SearchBar onSearch={setSearchQuery} /> */}
          {/* <CategoryFilter
            categories={["All", "Rings", "Necklaces", "Bracelets", "Earrings"]}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          /> */}
        {/* </div> */}

        {/* Global Boutique Main Stage */}
        <main className="space-y-4">
          {/* Aesthetic Intro Minimal Header */}
          <section
            className="h-[600px] w-full flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/Loader.jpg')",
            }}
          >
            <h1 className="text-[10px] tracking-[0.3em] text-amber-500/80 uppercase font-light mb-3">
              Fine Artisanal Jewelry
            </h1>

            <h2 className="font-serif text-3xl md:text-5xl tracking-widest text-stone-100 uppercase font-light">
              Be Elegant . <i>Everyday</i>
            </h2>

            <div className="w-12 h-[1px] bg-stone-800 mt-6" />
          </section>
          <BestSellers product={products}/>
          <ProductShowcase id="shop" products={products} addToCart={addToCart} />

          <div
  className={`fixed top-0 right-0 z-50 h-screen w-[380px] overflow-y-auto bg-stone-50 shadow-2xl transition-transform duration-500 ${
showCart ? "translate-x-0" : "translate-x-full"
  }`}
  >
<Cart
  cartItems={cartItems}
onClose={() => setShowCart(false)}
    onRemoveItem={removeFromCart}
    increaseQuantity={increaseQuantity}
  decreaseQuantity={decreaseQuantity}
  />
  </div>

          {/* Engagement Modules */}
          <div data-aos="fade-right">
            <Newsletter />
<div data-aos="fade-left"><SocialMediaLinks/></div>         
 </div>
        </main>

      <div data-aos="fade up" id="contact">
        <Footer />
      </div>
      </div>
    </div>
  );

}
  export default JewelryWebsite;
