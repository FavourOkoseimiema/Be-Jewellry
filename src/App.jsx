import { useState } from "react"
import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar"
import Cart from "./components/Cart";
import Footer from "./components/Footer";
function App() {

  const products = [
    {
      id: "1",
      name: "Brown Leather Bag",
      price: 20000,
      image: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=400&auto=format&fit=crop&q=60"
    },

    {
      id: "2",
      name: "Unpaired Red Nike Sneaker",
      price: 35000,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&auto=format&fit=crop&q=60"
    },

    {
      id: "3",
      name: "Variety of lip gloss product",
      price: 3000,
      image: "https://images.unsplash.com/photo-1643168186368-c42359c82573?w=400&auto=format&fit=crop&q=60"
    },
    {
      id: "4",
      name: "Slipper",
      price: 5500,
      image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U2xpcHBlcnN8ZW58MHx8MHx8fDA%3D"

    },
    {
      id: "5",
      name: "Men's Hair Kit",
      price: 24000,
      image: "https://images.unsplash.com/photo-1596362601603-b74f6ef166e4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGFpciUyMGtpdHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      id: "6",
      name: "Lenovo ThinkPad T6420",
      price: 280000,
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQt8g5oaSiGAcw7EwKoMfeY5qEy-J5y9xtAXTetgMuAEi0vIMMWUsOaKgoLz7wzliv0j0DFfN-RGpkYQ9arDNgCaKNA3S_nFcpACp3VHnuaFUiKzDxyKSbkorekLLqZgEFyPdyXbd8&usqp=CAc"
    },
    {
      id: "7",
      name: "Portable Electric Fan",
      price: 7500,
      image: "https://images.unsplash.com/photo-1718815416565-c65944a5ec14?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWxlY3RyaWMlMjBmYW58ZW58MHx8MHx8fDA%3D"
    },
    {id:"8",
      name:"Human Hair Wig",
      price:65000,
      image:"https://images.unsplash.com/photo-1663582816222-0058880a9fdc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGh1bWFuJTIwaGFpciUyMHdpZ3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {id:"9",
      name:"Coco Noir Chanel",
      price:85000,
      image:"https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyZnVtZXxlbnwwfHwwfHx8MA%3D%3D"
    }
  ]

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  return (
    <div>

      <Navbar cart={cart} />

      <ProductList
        products={products}
        addToCart={addToCart}
      />

      <Cart cart={cart} />
      <Footer/>

    </div>
  )
}

export default App