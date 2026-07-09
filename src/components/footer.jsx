import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-stone-950 text-stone-400 border-t border-stone-900/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Brand Identity */}
        <div className="text-center md:text-left">
          <h4 className="font-serif text-sm tracking-widest uppercase text-stone-200">
            Be-Jewelry Co.
          </h4>
          <p className="text-[10px] tracking-wider text-stone-500 mt-1 font-light">
            Crafting timeless elegance since 2024.
          </p>
        </div>

    
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[11px] tracking-widest uppercase font-light text-stone-400">
          <li>
            <a href="#privacy" className="hover:text-amber-500 transition-colors duration-200">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#terms" className="hover:text-amber-500 transition-colors duration-200">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="#shipping" className="hover:text-amber-500 transition-colors duration-200">
              Shipping & Returns
            </a>
          </li>
        </ul>

        <div className="text-center md:text-right text-[10px] tracking-widest text-stone-500 font-light uppercase">
          <p>© {currentYear} Be-Jewelry Co. | All Rights Reserved</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;