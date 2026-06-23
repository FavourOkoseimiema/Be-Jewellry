import { IoIosCart } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
function Navbar(props){
    return(
        <nav className="bg-white shadow-md p-4 mb-8 w-full grid grid-cols-3 items-center sticky top-0 left-0 z-50">
<div></div>
            <h1 className="text-2xl font-bold text-center flex justify-center items-center gap-2"><FaShoppingBag className="text-xl text-pink-500 font-bold capitalize" />
                Mini Storefront
            </h1>

            <h2 className="flex items-center justify-end text-lg font-semibold"><IoIosCart size={20} className="text-red-500"/>
                Cart ({props.cart.length})
            </h2>

        </nav>
    )
}

export default Navbar;