import React, { useState } from "react";
import {
  FiHeart,
  FiUser,
  FiShoppingBag,
  FiMenu,
  FiX,
  FiChevronDown
} from "react-icons/fi";


function Navbar({cartCount = 0, wishlistCount = 0, setShowCart}) {

const [mobileMenuOpen,setMobileMenuOpen] = useState(false);
const [shopOpen,setShopOpen] = useState(false);


return (

<>

<header className="fixed top-0 left-0 w-full z-50 bg-stone-50/95 backdrop-blur-md border-b border-stone-200 scroll-mt-28" 
  data-aos="fade-down"
  data-aos-duration="900">



<div className="
bg-black-900
text-stone-100
text-[10px]
tracking-[0.3em]
uppercase
text-center
py-3
">

Free Complimentary Shipping On watches Over ₦250,000

</div>



<div className="
max-w-7xl
mx-auto
px-4
sm:px-6
lg:px-8
h-20
flex
items-center
justify-between
">


{/* LOGO */}

<h1 className="
font-serif
text-xl
sm:text-2xl
tracking-[0.25em]
uppercase text-stone-900">
Be-Jewelry
</h1>



{/* DESKTOP NAV */}

<nav className="
hidden
lg:flex
items-center
gap-10
text-xs
tracking-[0.25em]
uppercase
text-stone-600
">


<a href="#home"
className="hover:text-amber-700 transition">
Home
</a>



{/* <div className="relative group">

<button
className="
flex
items-center
gap-1
hover:text-amber-700
transition
">

Shop

<FiChevronDown
size={13}
/>

</button>



<div className="absolute top-8
left-0 hidden group-hover:block bg-white shadow-xl border border-stone-200 w-48 p-5 ">
<a href="#rings"
className="block py-2 hover:text-amber-700">
Rings
</a>
<a href="#necklaces"className="block py-2 hover:text-amber-700">
Necklaces
</a>
<a href="#bracelets"
className="block py-2 hover:text-amber-700">
Bracelets
</a>
<a href="#earrings"
className="block py-2 hover:text-amber-700">
Earrings
</a>
</div>
</div> */}
<a href="#about"
className="hover:text-amber-700 transition">
About
</a>
<a href="#contact"
className="hover:text-amber-700 transition">
Contact
</a>
</nav>
{/* ICON AREA */}
<div className="flex items-center gap-5 text-stone-800 ">
<button><FiUser size={20}/></button>
<button className="relative">
<FiHeart size={20}/>

{
wishlistCount > 0 &&
<span className="absolute-negative top-[-8px] right-[-8px] bg-amber-700 text-white n rounded-full
text-[9px]
w-4
h-4
flex
items-center
justify-center
">

{wishlistCount}

</span>
}

</button>




<button
onClick={()=>setShowCart(true)}
className="relative"
>

<FiShoppingBag size={20}/>


{
cartCount >0 &&
<span className="
absolute
top-[-8px]
right-[-8px]
bg-stone-900
text-white
rounded-full
text-[9px]
w-4
h-4
flex
items-center
justify-center
">

{cartCount}

</span>
}


</button>



<button
className="lg:hidden"
onClick={()=>setMobileMenuOpen(!mobileMenuOpen)}
>

{
mobileMenuOpen?
<FiX size={25}/>:
<FiMenu size={25}/>
}

</button>


</div>


</div>

</header>
{/* MOBILE OVERLAY */}

<div
className={`
fixed
inset-0
bg-black/50
z-40
lg:hidden
transition-opacity
duration-300
${mobileMenuOpen 
? "opacity-100 pointer-events-auto" 
: "opacity-0 pointer-events-none"}
`}
onClick={()=>setMobileMenuOpen(false)}
>

</div>

<div
className={`fixed top-0 right-0 h-screen  w-[80%] max-w-sm bg-stone-50 z-50 shadow-2xl lg:hidden
transition-transform duration-500 ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>


<div className="
flex
justify-between
items-center
px-6
pt-8
pb-6
border-b
border-stone-200
">


<h1 id="home" className="
font-serif
tracking-widest
uppercase
text-stone-900
">
Be-Jewelry
</h1>

<button
onClick={()=>setMobileMenuOpen(false)}
className="
text-stone-700
hover:text-amber-700
">
<FiX size={25}/>
</button>
</div>
<nav className="flex flex-col px-6 py-8 gap-6 text-sm uppercase tracking-[0.25em] text-stone-700">
<a 
href="#home"
onClick={()=>setMobileMenuOpen(false)}
className="hover:text-amber-700 transition">
Home
</a>

<a
href="#about"
onClick={()=>setMobileMenuOpen(false)}
className="hover:text-amber-700 transition"
>
About
</a>
<a
href="#contact"
onClick={()=>setMobileMenuOpen(false)}
className="hover:text-amber-700 transition"
>
Contact
</a>
</nav>
</div>
</>
);
}
export default Navbar;