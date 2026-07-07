import Navbar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import ProductShowcase from "./components/ProductShowcase";
import CategoryFilter from "./components/CategoryFilter";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import SocialMediaLinks from "./components/SocialMedia";
import Newsletter from "./components/NewsLetter";
import { useState } from "react";

function JewelryWebsite() {
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const allProducts = [
    { id: 1, name: "Diamond Ring", description: "Elegant diamond ring", price: 500, category: "Rings" },
    { id: 2, name: "Gold Necklace", description: "Classic gold necklace", price: 350, category: "Necklaces" },
    { id: 3, name: "Silver Bracelet", description: "Stylish silver bracelet", price: 200, category: "Bracelets" },
    { id: 4, name: "Pearl Earrings", description: "Beautiful pearl earrings", price: 150, category: "Earrings" },
  ];

  const categories = ["All", "Rings", "Necklaces", "Bracelets", "Earrings"];

  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="website">
      <Navbar cartCount={cartItems.length} />
      <SearchBar onSearch={setSearchQuery} />
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <main>
        <section className="intro">
          <h2>Discover Timeless Elegance</h2>
          <p>We craft jewelry that tells your story.</p>
        </section>

        <ProductShowcase products={filteredProducts} addToCart={addToCart} />
        <Cart cartItems={cartItems} />
        <Checkout cartItems={cartItems} />
        <SocialMediaLinks />
        <Newsletter />
      </main>

      <footer>
        <p>© 2026 Be-Jewelry Co. | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default JewelryWebsite;
