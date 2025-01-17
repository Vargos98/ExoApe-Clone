import { useState, useEffect } from 'react';
import Logo from '../assets/exo_ape_logo.png';
import { IoMenuOutline } from "react-icons/io5";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true); // Controls visibility of the navbar
  const [lastScrollY, setLastScrollY] = useState(0); // Stores the last scroll position

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down, hide navbar
        setIsVisible(false);
      } else {
        // Scrolling up, show navbar
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`w-full fixed z-[9999] transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto h-20 px-5 py-5 sm:py-10 sm:px-10 flex items-center justify-between text-white sm:mt-16">
        <div className="logo">
          <img className="w-36 sm:w-56 -ml-5" src={Logo} alt="Logo" />
        </div>

        {/* Links */}
        <div className="links hidden sm:flex space-x-10">
          {['Work', 'Studio', 'News', 'Contact'].map((item, index) => {
            return (
              <a
                key={index}
                className="text-xs font-medium sm:text-xl font-sans hover:text-gray-300 transition duration-300"
                href="#"
              >
                {item}
              </a>
            );
          })}
        </div>

        {/* Menu Icon */}
        <span className="sm:hidden text-2xl cursor-pointer flex items-center gap-2">
          <h1 className="text-sm font-medium">Menu</h1>
          <IoMenuOutline />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
