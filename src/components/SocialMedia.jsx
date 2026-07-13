import React from "react";
import { FaFacebookF, FaInstagram,FaWhatsapp , FaTiktok} from "react-icons/fa6";

function SocialMediaLinks() {
  const socials = [
    { 
      name: "Facebook", 
      url: "https://facebook.com/Blessing Ajah", 
      icon: <FaFacebookF className="w-4 h-4" /> 
    },
    { 
      name: "Instagram", 
      url: "https://instagram.com/glammybee8", 
      icon: <FaInstagram className="w-4.5 h-4.5" /> 
    },
    { 
      name: "Whatsapp", 
      url: "https://wa.me/2347019963931", 
      icon: <FaWhatsapp  className="w-4.5 h-4.5" /> 
    },
    {
      name:"tiktok",
      url:"https://tiktok.com/@bejewelryportharcourt",
      icon:<FaTiktok size={18} />
    }
  ];

  return (
    <div className="w-full max-w-md mx-auto text-center py-8 bg-stone-950">
      {/* Elegant Subtitle Heading */}
      <h3 className="font-serif text-xs tracking-[0.25em] uppercase text-stone-400 mb-6 font-light">
        Connect With Us
      </h3>
      
    
      <ul className="flex items-center justify-center gap-5">
        {socials.map((social) => (
          <li key={social.name}>
            <a 
              href={social.url} 
              target="_blank" 
              rel="noreferrer"
              aria-label={`Follow us on ${social.name}`}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-stone-900 bg-stone-900/20 text-stone-400 hover:text-black hover:bg-amber-500 hover:border-amber-500 transition-all duration-300 ease-out active:scale-95 shadow-md"
            >
              {social.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialMediaLinks;