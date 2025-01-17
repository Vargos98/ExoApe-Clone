// import React from 'react';
import Logo from '../assets/exo_ape_logo.png'
const Navbar = () => {
  return (
    <div className="max-w-screen-2xl h-20 bg-red-500 px-5 flex items-center">
      <div className="logo " >
        <img src={Logo}alt={Logo} />
      </div>
    </div>
  );
};

export default Navbar;
