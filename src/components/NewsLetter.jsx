// import React, { useState } from "react";

// function Newsletter() {
//   const [email, setEmail] = useState("");
//   const [subscribed, setSubscribed] = useState(false);

//   const handleSubscribe = (e) => {
//     e.preventDefault();
//     if (!email) return;

//     // Simulate API subscription request
//     console.log(`Subscribed email to luxury vault list: ${email}`);
//     setSubscribed(true);
//     setEmail("");
//   };

//   return (
//     <div className="w-full max-w-xl mx-auto p-6 md:p-8 bg-stone-950 border border-stone-900/60 rounded-sm shadow-xl text-center">
      
//       {/* Small Ambient Accent Tag */}
//       <span className="text-[9px] md:text-[10px] tracking-[0.25em] text-amber-500/80 uppercase font-light block mb-2">
//         The Inner Circle
//       </span>
      
//       {/* Title */}
//       <h3 className="font-serif text-lg md:text-xl tracking-widest uppercase text-stone-100 mb-3">
//         Subscribe to Our Newsletter
//       </h3>
      
//       {/* Description */}
//       <p className="text-stone-500 text-[11px] font-light tracking-wide max-w-sm mx-auto mb-6 leading-relaxed">
//         Receive exclusive priority invitations to private collection launches, artisanal stories, and bespoke exhibitions.
//       </p>

//       {/* Dynamic State Feedback Container */}
//       {subscribed ? (
//         <div className="text-amber-400 text-xs tracking-widest uppercase py-3 font-light animate-fade-in">
//           ✨ Welcome to the vault list. Thank you.
//         </div>
//       ) : (
//         <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 items-stretch justify-center">
          
//           {/* Email Input Field */}
//           <input
//             type="email"
//             required
//             placeholder="ENTER YOUR EMAIL"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="flex-grow bg-stone-900/40 border border-stone-800 focus:border-amber-500/80 outline-none text-xs tracking-widest p-3 text-stone-200 transition-colors placeholder-stone-600 rounded-sm font-light min-w-[240px] normal-case"
//           />
          
//           {/* Submit Action Button */}
//           <button 
//             type="submit"
//             className="bg-amber-500 hover:bg-amber-600 text-black text-[10px] tracking-widest uppercase font-medium py-3 px-6 transition-all duration-300 shadow-md shadow-amber-500/5 rounded-sm whitespace-nowrap active:scale-95"
//           >
//             Subscribe
//           </button>
          
//         </form>
//       )}
//     </div>
//   );
// }

// export default Newsletter;