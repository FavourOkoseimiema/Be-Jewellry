import React from "react";
import ProductCard from "./ProductCard";

function ProductShowcase({ products = [], addToCart }) {
  return (
    <section className="bg-black min-h-screen py-16 px-4 sm:px-6 lg:px-8 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        
        {/* 1. Luxurious Header & Subtitle */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-2xl md:text-4xl tracking-widest uppercase text-zinc-100">
            Our Collection
          </h2>
          
        
          <div className="w-16 h-[1px] bg-amber-500 mx-auto mt-4 opacity-80" />
          
          <p className="text-zinc-500 text-[10px] md:text-xs uppercase tracking-widest mt-3 font-light">
            Exquisite design meets timeless craftsmanship
          </p>
        </div>

        {/* 2. Seamless Responsive Product Grid */}
        {products.length === 0 ? (
          <div className="text-center py-20 text-zinc-500 text-xs uppercase tracking-widest font-light">
            Curating the collection...
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {products.map((product) => (
              // Passed down your data & actions correctly to the ProductCard here
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={addToCart} 
              />
            ))}
          </div>
        )}
        
      </div>
    </section>
  );
}

export default ProductShowcase;