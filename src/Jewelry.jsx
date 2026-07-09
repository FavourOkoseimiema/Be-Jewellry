import React, { useState, useEffect } from "react";
import Navbar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import ProductShowcase from "./components/ProductShowcase";
import CategoryFilter from "./components/CategoryFilter";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import SocialMediaLinks from "./components/SocialMedia";
import Newsletter from "./components/NewsLetter";
import Footer from "./components/footer";

function JewelryWebsite() {
  const [allProducts, setAllProducts] = useState([]); // Dynamic state replaces the static array
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);

  // 1. Fetch data from the API when the component mounts
  useEffect(() => {
    const fetchJewelry = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("https://fakestoreapi.com/products/category/jewelery");
        const data = await response.json();
        
        // 2. Format the API data to match your ProductCard prop names exactly
        const formattedProducts = data.map((item) => ({
          id: item.id,
          name: item.title,       // API calls it 'title', your card expects 'name'
          description: item.description,
          price: `$${item.price}`, // API returns a number, your card expects a styled string
          image: item.image,       // API returns a real jewelry image URL
          category: "Jewelry"      // Assigning a standard base category mapping
        }));

        setAllProducts(formattedProducts);
      } catch (error) {
        console.error("Error fetching luxury collection:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJewelry();
  }, []);

  // Filter systems remain exactly the same as before
  const categories = ["All", "Rings", "Necklaces", "Bracelets", "Earrings"];

  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.name.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-200 antialiased font-sans">
      <Navbar cartCount={cartItems.length} />
      
      <div className="pt-28 bg-stone-950">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-4 items-center border-b border-stone-900/40 pb-4">
          <SearchBar onSearch={setSearchQuery} />
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>

        <main className="space-y-12 md:space-y-20">
          <section className="text-center max-w-3xl mx-auto px-4 py-16 flex flex-col items-center justify-center">
            <span className="text-[10px] md:text-xs tracking-[0.3em] text-amber-500/80 uppercase font-light mb-4">
              Fine Artisanal Jewelry
            </span>
            <h2 className="font-serif text-3xl md:text-5xl tracking-wide text-stone-100 uppercase font-light">
              Discover Timeless Elegance
            </h2>
          </section>

          {/* 3. Render Loading State or Dynamic Showcase */}
          {isLoading ? (
            <div className="text-center py-20 text-stone-500 text-xs uppercase tracking-widest font-light">
              Opening the vault collections...
            </div>
          ) : (
            <ProductShowcase products={filteredProducts} addToCart={addToCart} />
          )}
          
          <Cart cartItems={cartItems} />
          <Checkout cartItems={cartItems} />
          
          <div className="border-t border-stone-900/40 pt-12 max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pb-12">
            <Newsletter />
            <SocialMediaLinks />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default JewelryWebsite;