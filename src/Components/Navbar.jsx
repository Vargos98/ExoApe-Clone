import { useState, useEffect, useRef } from 'react';
import Logo from '../assets/exo_ape_logo.png';
import { Expo, Power4 } from "gsap/all";
import { IoMenuOutline, IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Navbar */}
      <div
        className={`w-full fixed z-[9999] transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <div className="mx-auto h-20 px-5 py-5 sm:py-10 sm:px-10 flex items-center justify-between text-white sm:mt-16">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            transition={{ ease: Power4.easeInOut, duration: 0.7 }}
            className="logo"
          >
            <img className="w-36 sm:w-56 -ml-5" src={Logo} alt="Logo" />
          </motion.div>

          {/* Links for Desktop */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            transition={{ ease: Power4.easeInOut, duration: 0.7 }}
            className="links hidden sm:flex space-x-10"
          >
            {["Work", "Studio", "News", "Contact"].map((item, index) => (
              <a
                key={index}
                className="text-xs font-medium sm:text-xl font-sans hover:text-gray-300 transition duration-300"
                href="#"
              >
                {item}
              </a>
            ))}
          </motion.div>

          {/* Menu Icon for Mobile */}
          <motion.span
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            transition={{ ease: Power4.easeInOut, duration: 0.7 }}
            className="sm:hidden text-2xl cursor-pointer flex items-center gap-2"
            onClick={() => setMenuOpen(true)}
          >
            <h1 className="text-sm font-medium">Menu</h1>
            <IoMenuOutline />
          </motion.span>
        </div>
      </div>

      {/* Overlay Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          transition={{ ease: Power4.easeInOut, duration: 0.7 }}
          className="fixed inset-0 bg-black bg-opacity-100 z-[9998] flex flex-col items-center justify-center space-y-8"
        >
          {/* Close Icon */}
          <IoClose
            className="absolute top-20 right-5 text-white text-3xl cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />

          {/* Menu Items */}
          {["Work", "Studio", "News", "Contact"].map((item, index) => (
            <a
              key={index}
              href="#"
              className="text-white text-3xl font-bold"
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
