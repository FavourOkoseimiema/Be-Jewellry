import React, { useState } from "react";

function Navbar({ cartCount }) {
  return (
    <nav>
      <h1>Be-Jewelry Co.</h1>
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Categories</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="cart-info">
        🛒 Cart ({cartCount})
      </div>
    </nav>
  );
}

  export default Navbar
