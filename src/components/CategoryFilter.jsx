// import React from "react";

// function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
//   return (
//     <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-10 border-b border-stone-100">
      
//       <h3 className="text-center font-serif text-base md:text-lg tracking-widest uppercase text-stone-800 mb-6">
//         Filter by Category
//       </h3>
      
//       <div className="w-full flex justify-start md:justify-center overflow-x-auto no-scrollbar">
//         <ul className="flex items-center gap-6 md:gap-10 whitespace-nowrap px-4 md:px-0 pb-2">
//           {categories.map((cat) => {
//             const isActive = selectedCategory === cat;
            
//             return (
//               <li
//                 key={cat}
//                 onClick={() => onSelectCategory(cat)}
//                 className={`cursor-pointer text-[11px] md:text-xs tracking-widest uppercase transition-all duration-300 pb-2 border-b font-light select-none relative ${
//                   isActive
//                     ? "text-amber-600 border-amber-600 font-normal"
//                     : "text-stone-400 border-transparent hover:text-stone-800 hover:border-stone-300"
//                 }`}
//               >
//                 {cat}
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default CategoryFilter;