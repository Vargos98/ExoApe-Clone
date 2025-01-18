// import React from 'react';
import Global from '../assets/videos/Global.mp4';

const Footer = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between px-10 sm:px-20 py-10 sm:py-20 flex-1">
        <div className="sm:w-1/2 flex flex-col space-y-6">
          <h1 className="text-6xl sm:text-9xl font-regular">
            Our <br /> Story
          </h1>
          <p className="text-sm sm:text-lg max-w-md opacity-80">
            The story behind Exo Ape is one of exploration, creativity, and curiosity.
          </p>
        </div>

        {/* Video Section */}
        <div className="sm:w-[80rem] relative flex justify-end items-center mt-10 sm:mt-0">
          <video
            className="w-[300px] sm:w-full object-cover rounded-lg shadow-lg"
            src={Global}
            muted
            loop
            autoPlay
          ></video>
        </div>
      </header>

      {/* Footer Section */}
      <footer className="bg-black text-white py-10 px-5 sm:px-20 border-t border-gray-700 opacity-80">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-5">
          <div className='hidden sm:block'>
            <address className="not-italic">
              Willem II Singel 8 <br />
              6041 HS, Roermond <br />
              The Netherlands <br />
              <a href="mailto:hello@exoape.com" className="hover:underline">
                hello@exoape.com
              </a>
            </address>
          </div>
          <div className="space-y-2">
            <a href="#" className="block hover:underline">
              Work
            </a>
            <a href="#" className="block hover:underline">
              Studio
            </a>
            <a href="#" className="block hover:underline">
              News
            </a>
            <a href="#" className="block hover:underline">
              Contact
            </a>
          </div>
          <div className="space-y-2">
            <a href="#" className="block hover:underline">
              Behance
            </a>
            <a href="#" className="block hover:underline">
              Dribbble
            </a>
            <a href="#" className="block hover:underline">
              Twitter
            </a>
            <a href="#" className="block hover:underline">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
