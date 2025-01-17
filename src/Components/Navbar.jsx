// import React from 'react';
import Logo from '../assets/exo_ape_logo.png';
import { IoMenuSharp } from "react-icons/io5";

const Navbar = () => {
  return (


    <div className='w-full fixed  z-[9999]'>
      <div className=" max-w-screen-2xl mx-auto h-20 px-5 py-5 sm:py-10 sm:px-10 flex items-center justify-between text-white">
        <div className="logo">
          <img className="w-20" src={Logo} alt="Logo" />
        </div>

        {/* Links */}
        <div className="links hidden sm:flex space-x-4">
          {['Work', 'Studio', 'News', 'Contact'].map((item, index) => {
            return (
              <a
                key={index}
                className="text-xs font-medium font-sans hover:text-gray-300 transition duration-300"
                href="#"
              >
                {item}
              </a>
            );
          })}
        </div>

        {/* Menu Icon */}
        <span className="sm:hidden text-2xl cursor-pointer">
          <IoMenuSharp />
        </span>
      </div>
    </div>

  );
};

export default Navbar;
