import { IoIosCart } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
function Navbar(props){
    return(
        <nav className="bg-white shadow-md p-4 mb-8 flex justify-between w-full sticky top-0 left-0 z-50">

            <h1 className="text-2xl font-bold text-center"><FaShoppingBag />
                Mini Storefront
            </h1>

            <h2 className="flex items-center justify-center text-lg font-semibold"><IoIosCart size={20} className="text-xl text-red-500"/>
                Cart ({props.cart.length})
            </h2>

        </nav>
    )
}

export default Navbar;