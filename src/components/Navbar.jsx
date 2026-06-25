import { TiShoppingCart } from "react-icons/ti";
import { FaShoppingBag } from "react-icons/fa";
function Navbar(props){
    return(
        <nav className="bg-white shadow-md p-4 mb-8 w-full flex justify-between items-center sticky top-0 left-0 z-50">
            <h1 className="text-2xl font-bold text-center flex justify-center items-center gap-2"><FaShoppingBag className="text-xl text-pink-500 font-bold capitalize" />
                Mini Storefront
            </h1>

            <button onClick={()=>props.setShowCart(!props.showCart)} className="flex items-center justify-end text-lg font-semibold">
                <TiShoppingCart size={30} className="text-red-500 transition-transform hover:scale-125"/>
                <sup>{props.cart.length}</sup>
            </button >

        </nav>
    )
}

export default Navbar;