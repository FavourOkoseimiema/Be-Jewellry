import React, { useState } from "react";

// Premium, clean SVG Icons for a luxury aesthetic
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
);

const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
);

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);

const CartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
);

function Navbar({ cartCount = 0, wishlistCount = 2 }) {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-100 shadow-sm transition-all duration-300">
      
      {/* 1. Announcement Bar */}
      <div className="bg-stone-900 text-stone-100 text-[10px] tracking-widest uppercase py-2 text-center font-light">
        Free Complimentary Shipping on Orders Over $250
      </div>

      {/* Main Navigation Container */}
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* 2. Logo (Elegant Serif Font) */}
        <div className="flex-1 lg:flex-none">
          <h1 className="text-xl md:text-2xl font-serif tracking-widest uppercase font-medium text-stone-800 cursor-pointer hover:opacity-70 transition-opacity">
            Be-Jewelry Co.
          </h1>
        </div>

        {/* 3. Center Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-light tracking-widest text-stone-600 uppercase">
          <a href="#home" className="hover:text-amber-600 transition-colors duration-300">
            Home
          </a>
          
          {/* Shop Dropdown Trigger */}
          <div className="relative group cursor-pointer py-2">
            <span className="hover:text-amber-600 transition-colors duration-300 flex items-center gap-1">
              Shop
            </span>
            
            <div className="absolute top-full left-0 hidden group-hover:block bg-white border border-stone-100 shadow-xl py-4 px-6 min-w-[180px] mt-1 transition-all duration-200">
              <ul className="flex flex-col gap-3 text-[11px] tracking-wider text-stone-500">
                <li><a href="#rings" className="hover:text-amber-600 block transition-colors">Rings</a></li>
                <li><a href="#necklaces" className="hover:text-amber-600 block transition-colors">Necklaces</a></li>
                <li><a href="#earrings" className="hover:text-amber-600 block transition-colors">Earrings</a></li>
                <li><a href="#bracelets" className="hover:text-amber-600 block transition-colors">Bracelets</a></li>
              </ul>
            </div>
          </div>

          <a href="#about" className="hover:text-amber-600 transition-colors duration-300">About</a>
          <a href="#contact" className="hover:text-amber-600 transition-colors duration-300">Contact</a>
        </nav>

        <div className="flex items-center gap-6 text-stone-700 flex-1 lg:flex-none justify-end">
          <div className="flex items-center relative">
            <input 
              type="text" 
              placeholder="Search..." 
              className={`border-b border-stone-300 focus:border-amber-600 outline-none text-xs py-1 transition-all duration-300 bg-transparent ₦{
                searchOpen ? "w-32 opacity-100 mr-2" : "w-0 opacity-0 pointer-events-none"
              }`}
            />
            <button onClick={() => setSearchOpen(!searchOpen)} className="hover:text-amber-600 transition-colors" aria-label="Search">
              <SearchIcon />
            </button>
          </div>

          <button className="hover:text-amber-600 transition-colors" aria-label="Account">
            <UserIcon />
          </button>

          
          <button className="hover:text-amber-600 transition-colors relative" aria-label="Wishlist">
            <HeartIcon />
            {wishlistCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-amber-600 text-white text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-sans font-medium">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Cart Icon with Numeric Count */}
          <button className="hover:text-amber-600 transition-colors relative flex items-center gap-1.5" aria-label="Cart">
            <CartIcon />
            <span className="text-xs font-light text-stone-500 hidden sm:inline">({cartCount})</span>
            {cartCount > 0 && (
              <span className="sm:hidden absolute -top-1.5 -right-1.5 bg-stone-900 text-white text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-sans font-medium">
                {cartCount}
              </span>
            )}
          </button>

        </div>
      </div>
    </header>
  );
}

export default Navbar;