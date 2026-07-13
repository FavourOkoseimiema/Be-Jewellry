import React, { useState } from "react";
import Navbar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import ProductShowcase from "./components/ProductShowcase";
import CategoryFilter from "./components/CategoryFilter";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import SocialMediaLinks from "./components/SocialMedia";
import Newsletter from "./components/NewsLetter";
import Footer from "./components/footer";
import MOCK_PRODUCTS from "./data/product";

function JewelryWebsite() {
  const [allProducts] = useState(MOCK_PRODUCTS);
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showCart, setShowCart] = useState(false);
  const closeCart = () => {  setShowCart(false);

  };

  // Filter Logic: Matches search strings and explicit dropdown category badges
  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" ||
      product.category.toLowerCase() === selectedCategory.toLowerCase();

    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const addToCart = (product) => {
    // Step 1: Check if the product already exists
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      // Step 2: Product exists
      // Increase its quantity
      const updatedCart = cartItems.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }

        return item;
      });

      setCartItems(updatedCart);
    } else {
      // Step 3: Product doesn't exist
      // Add it with quantity = 1
      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  };
  const removeFromCart = (index) => {
  setCartItems((prev) =>
    prev.filter((_, i) => i !== index)
  );
  };

  ;
  return (
    <div className="min-h-screen bg-stone-950 text-stone-200 antialiased font-sans selection:bg-amber-700 selection:text-white">
      {/* Navigation Layer */}
      <Navbar cartCount={cartItems.length} setShowCart={setShowCart} />
      <div className="pt-28 bg-stone-950">
        {/* Search & Filter Toolbar Controls */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center border-b border-stone-900/60 pb-8">
          <SearchBar onSearch={setSearchQuery} />
          <CategoryFilter
            categories={["All", "Rings", "Necklaces", "Bracelets", "Earrings"]}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>

        {/* Global Boutique Main Stage */}
        <main className="space-y-4">
          {/* Aesthetic Intro Minimal Header */}
          <section id="home"
            className="h-[600px] flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/necklace.jpg')",
            }}
          >
            <span className="text-[10px] tracking-[0.3em] text-amber-500/80 uppercase font-light mb-3">
              Fine Artisanal Jewelry
            </span>

            <h2 className="font-serif text-3xl md:text-5xl tracking-widest text-stone-100 uppercase font-light">
              Discover Timeless Elegance
            </h2>

            <div className="w-12 h-[1px] bg-stone-800 mt-6" />
          </section>

          <ProductShowcase  products={filteredProducts} addToCart={addToCart} />

          <div
  className={`fixed top-0 right-0 z-50 h-screen w-[380px] overflow-y-auto bg-stone-50 shadow-2xl transition-transform duration-500 ${
showCart ? "translate-x-0" : "translate-x-full"
  }`}
  >
<Cart
  cartItems={cartItems}
onClose={() => setShowCart(false)}
    onRemoveItem={removeFromCart}
  />
  </div>

          {/* Engagement Modules */}
          <div className="border-t border-stone-900/60 pt-16 max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-20">
            <Newsletter />
            <SocialMediaLinks />
          </div>
        </main>

        <Footer id="contact" />
      </div>
    </div>
  );

}
  export default JewelryWebsite;
