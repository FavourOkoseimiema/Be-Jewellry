// import React, { useState } from "react";
// import { FiPlusCircle, FiDollarSign, FiPackage, FiImage, FiGrid, FiSettings } from "react-icons/fi";

// function AdminDashboard() {
//   // 1. Form States for New Product Entry
//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");
//   const [description, setDescription] = useState("");
//   const [image, setImage] = useState(null);
//   const [previewUrl, setPreviewUrl] = useState("");

//   // 2. Handle Image File Selection & Local URL Preview
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(file);
//       setPreviewUrl(URL.createObjectURL(file)); // Creates a temporary visual preview
//     }
//   };

//   // 3. Form Submission Logic (Ready for the Backend Later)
//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Structure data for database payload
//     const newProduct = {
//       name,
//       price: parseFloat(price),
//       description,
//       imageFile: image // This will be sent as FormData when we build the backend
//     };

//     console.log("Saving new boutique item down to the database:", newProduct);
    
//     // Reset Form Input Fields
//     setName("");
//     setPrice("");
//     setDescription("");
//     setImage(null);
//     setPreviewUrl("");
//     alert("✨ Collection item successfully logged into vault!");
//   };

//   return (
//     <div className="min-h-screen bg-stone-950 text-stone-200 antialiased flex flex-col md:flex-row pt-20">
      
//       {/* SIDEBAR NAVIGATION AREA */}
//       <aside className="w-full md:w-64 bg-stone-950 border-b md:border-b-0 md:border-r border-stone-900/60 p-6 flex flex-col gap-6">
//         <div>
//           <span className="text-[10px] tracking-[0.3em] uppercase text-amber-500 font-light">Management Vault</span>
//           <h2 className="font-serif text-lg uppercase tracking-widest text-stone-100 mt-1">Admin Panel</h2>
//         </div>
//         <nav className="flex flex-col gap-2 text-xs uppercase tracking-widest font-light">
//           <button className="flex items-center gap-3 px-4 py-3 bg-stone-900 border border-stone-800 text-amber-500 rounded-sm w-full text-left">
//             <FiPlusCircle /> Add Products
//           </button>
//           <button className="flex items-center gap-3 px-4 py-3 text-stone-400 hover:text-stone-100 hover:bg-stone-900/40 transition w-full text-left">
//             <FiGrid /> Inventory List
//           </button>
//           <button className="flex items-center gap-3 px-4 py-3 text-stone-400 hover:text-stone-100 hover:bg-stone-900/40 transition w-full text-left">
//             <FiSettings /> Shop Settings
//           </button>
//         </nav>
//       </aside>

//       {/* MAIN DASHBOARD CONTENT CONTROL PANEL */}
//       <main className="flex-1 p-6 md:p-10 max-w-5xl">
        
//         {/* TOP STATUS ROW METRICS */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
//           <div className="bg-stone-900/40 border border-stone-900 p-5 rounded-sm flex items-center justify-between">
//             <div>
//               <p className="text-[10px] uppercase tracking-widest text-stone-500">Total Catalog Items</p>
//               <p className="text-2xl font-serif text-stone-200 mt-1">24 Items</p>
//             </div>
//             <FiPackage className="text-amber-500/60 w-6 h-6" />
//           </div>
//           <div className="bg-stone-900/40 border border-stone-900 p-5 rounded-sm flex items-center justify-between">
//             <div>
//               <p className="text-[10px] uppercase tracking-widest text-stone-500">Bespoke Vault Value</p>
//               <p className="text-2xl font-serif text-stone-200 mt-1">₦4,250,000</p>
//             </div>
//             <FiDollarSign className="text-amber-500/60 w-6 h-6" />
//           </div>
//         </div>

//         {/* WORKSTATION CARD: CREATE PRODUCT FORM */}
//         <section className="bg-stone-900/20 border border-stone-900 rounded-sm p-6 md:p-8 shadow-xl">
//           <div className="border-b border-stone-900 pb-4 mb-6">
//             <h3 className="font-serif text-xl uppercase tracking-wider text-stone-100">Introduce New Vault Piece</h3>
//             <p className="text-stone-500 text-xs font-light mt-1">Fill out specifications to register this artisanal accessory onto the showcase feed.</p>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
//               {/* Left Column Fields: Inputs */}
//               <div className="space-y-5">
//                 <div>
//                   <label className="block text-[10px] tracking-widest uppercase text-stone-400 font-light mb-2">Jewelry Item Name</label>
//                   <input 
//                     type="text" 
//                     required
//                     placeholder="e.g., Champagne Diamond Solitaire"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     className="w-full bg-stone-950 border border-stone-800 focus:border-amber-500/80 outline-none text-xs tracking-wide p-3 text-stone-200 placeholder-stone-700 transition-colors rounded-sm font-light"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-[10px] tracking-widest uppercase text-stone-400 font-light mb-2">Retail Valuation (₦ NGN)</label>
//                   <input 
//                     type="number" 
//                     required
//                     placeholder="e.g., 350000"
//                     value={price}
//                     onChange={(e) => setPrice(e.target.value)}
//                     className="w-full bg-stone-950 border border-stone-800 focus:border-amber-500/80 outline-none text-xs tracking-wide p-3 text-stone-200 placeholder-stone-700 transition-colors rounded-sm font-light"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-[10px] tracking-widest uppercase text-stone-400 font-light mb-2">Artisanal Story Description</label>
//                   <textarea 
//                     rows="4"
//                     required
//                     placeholder="Describe the gemstone setting, clarity cuts, and band metal materials..."
//                     value={description}
//                     onChange={(e) => setDescription(e.target.value)}
//                     className="w-full bg-stone-950 border border-stone-800 focus:border-amber-500/80 outline-none text-xs tracking-wide p-3 text-stone-200 placeholder-stone-700 transition-colors rounded-sm font-light resize-none leading-relaxed"
//                   />
//                 </div>
//               </div>

//               {/* Right Column Fields: Image Vault Upload File Slot */}
//               <div>
//                 <label className="block text-[10px] tracking-widest uppercase text-stone-400 font-light mb-2">Showcase Image Asset</label>
//                 <div className="w-full aspect-video md:h-[258px] bg-stone-950 border border-dashed border-stone-800 rounded-sm flex flex-col items-center justify-center relative overflow-hidden group hover:border-amber-500/40 transition-colors">
                  
//                   {previewUrl ? (
//                     <>
//                       <img src={previewUrl} alt="Preview asset" className="w-full h-full object-cover" />
//                       <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
//                         <p className="text-[10px] text-amber-400 tracking-widest uppercase font-light">Swap Asset File</p>
//                       </div>
//                     </>
//                   ) : (
//                     <div className="text-center p-4">
//                       <FiImage className="w-8 h-8 text-stone-700 mx-auto mb-2" />
//                       <p className="text-[11px] tracking-wide text-stone-500 font-light">PNG, JPG formats up to 5MB</p>
//                     </div>
//                   )}

//                   <input 
//                     type="file" 
//                     accept="image/*"
//                     required={!previewUrl}
//                     onChange={handleImageChange}
//                     className="absolute inset-0 opacity-0 cursor-pointer"
//                   />
//                 </div>
//               </div>

//             </div>

//             {/* Submission Activation Trigger Bar */}
//             <div className="border-t border-stone-900 pt-6 flex justify-end">
//               <button 
//                 type="submit"
//                 className="bg-amber-500 hover:bg-amber-600 text-black text-[11px] tracking-widest uppercase font-medium py-3 px-8 transition-all duration-300 shadow-md shadow-amber-500/5 rounded-sm active:scale-95"
//               >
//                 Publish To Storefront
//               </button>
//             </div>
//           </form>

//         </section>
//       </main>
//     </div>
//   );
// }

// export default AdminDashboard;