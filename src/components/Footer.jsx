import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaInstagramSquare, FaTiktok } from "react-icons/fa";

function Footer() {
  const socials = [
    { name: "Facebook", icon: <FaFacebook /> },
    { name: "Instagram", icon: <FaInstagramSquare /> },
    { name: "X", icon: <BsTwitterX /> },
    { name: "TikTok", icon: <FaTiktok /> }
  ];

  return (
    <footer className="flex flex-col items-center mt-10 py-6 border-t">
      <div className="flex justify-center gap-6 text-2xl">
        {socials.map((social) => (
          <a key={social.name} href="#" className="transition-transform duration-300 hover:text-pink-500 hover:scale-125">
            {social.icon}
          </a>
        ))}
      </div>

      <p className="text-center text-gray-500 mt-4 hover:text-pink-400">
        © 2026 Favour & Chinwendu Storefront Project
      </p>
    </footer>
  );
}

export default Footer;