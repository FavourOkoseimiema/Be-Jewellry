import React, { useState } from "react";
import ProductCard from "./ProductCard";
import ProductDetails from "./ProductDetails";

function ProductShowcase({ products = [], addToCart }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section className="bg-black min-h-screen py-16 px-4 sm:px-6 lg:px-8 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div
          className="text-center mb-12 md:mb-16"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          <h2 className="font-serif text-2xl md:text-4xl tracking-widest uppercase text-zinc-100">
            Our Collection
          </h2>

          <div className="w-16 h-[1px] bg-amber-500 mx-auto mt-4 opacity-80" />

          <p className="text-zinc-500 text-[10px] md:text-xs uppercase tracking-widest mt-3 font-light">
            Exquisite design meets timeless craftsmanship
          </p>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-20 text-zinc-500 text-xs uppercase tracking-widest font-light">
            Curating the collection...
          </div>
        ) : (
          <>
            {/* PRODUCT GRID */}
            <div
              className={`
                transition-all
                duration-500
                ${
                  selectedProduct
                    ? "lg:pr-[430px]"
                    : "pr-0"
                }
              `}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                {products.map((product) => (
                  <ProductCard
                    key={product._id}
                    product={product}
                    onAddToCart={addToCart}
                    onProductSelect={setSelectedProduct}
                  />
                ))}
              </div>
            </div>

            {/* BACKDROP */}
            {selectedProduct && (
              <div
                className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
                onClick={() => setSelectedProduct(null)}
              />
            )}

            {/* DETAILS PANEL */}
            {selectedProduct && (
              <div
                className="
                  fixed
                  top-0
                  right-0
                  h-screen
                  w-full
                  lg:w-[430px]
                  bg-zinc-950
                  z-50
                  overflow-y-auto
                  shadow-2xl
                  animate-in
                  slide-in-from-right
                  duration-500
                "
              >
                <ProductDetails
                  product={selectedProduct}
                  onAddToCart={addToCart}
                  onClose={() => setSelectedProduct(null)}
                />
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default ProductShowcase;