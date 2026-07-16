import React from "react";

function ProductCard({ product, onAddToCart }) {
  const { 
    name = "Fine Jewelry Piece", 
    description = "Excellence crafted in 18k gold.", 
    price = "$0.00", 
    image = "https://via.placeholder.com/300" 
  } = product || {};

  return (
<div
  data-aos="zoom-in-up"
  data-aos-duration="700"
  className="group relative bg-zinc-950 border border-zinc-900 hover:border-amber-500/50 p-5 transition-all duration-500 flex flex-col justify-between h-full shadow-xl overflow-hidden rounded-sm"
>      
      <div className="w-full aspect-square bg-zinc-900 overflow-hidden relative mb-4 flex items-center justify-center border border-zinc-800/50">
        <img 
          src={image} 
          alt={name} 
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="flex flex-col flex-grow text-center">
        <h4 className="font-serif text-base tracking-wide text-zinc-100 group-hover:text-amber-400 transition-colors duration-300 line-clamp-1">
          {name}
        </h4>
        
        <p className="text-zinc-500 text-[11px] font-light tracking-wide mt-1.5 mb-3 line-clamp-2 max-w-[90%] mx-auto leading-relaxed">
          {description}
        </p>
        
        <p className="text-amber-400 font-sans text-sm tracking-widest font-medium mt-auto mb-4">
          {price}
        </p>
      </div>

      <button 
        onClick={() => onAddToCart && onAddToCart(product)}
        className="w-full border border-amber-500/80 text-amber-400 hover:bg-amber-500 hover:text-black text-[10px] tracking-widest uppercase font-light py-2.5 px-4 transition-all duration-300 ease-in-out focus:outline-none focus:ring-1 focus:ring-amber-500"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
