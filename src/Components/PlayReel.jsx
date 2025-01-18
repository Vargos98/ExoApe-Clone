// import React from 'react'
import Playvid from '../assets/videos/PlayReel.mp4'

const PlayReel = () => {
  return (
    <div className="w-full overflow-hidden h-screen mt-[150vh] sm:mt-[380vh] relative bg-black">
      {/* Video Box */}
      <div className="w-40 sm:w-96 overflow-hidden z-[10] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <video
          className="w-full h-full object-cover scale-[2.5]"
          src={Playvid}
          muted
          loop
          autoPlay
        ></video>
      </div>

      {/* Overlay Content */}
      <div className="overlay absolute w-full h-full bg-black text-white flex flex-col justify-between py-20">
        <div className="w-full flex items-center justify-center gap-3">
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4"
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
            ></path>
          </svg>
          <h3 className="text-sm">Work in motion</h3>
        </div>
        <h1 className="w-full flex justify-center gap-32 sm:gap-80 items-center">
          <div className="text-4xl z-20 sm:text-8xl font-medium">Play</div>
          <div className="text-4xl z-20 sm:text-8xl font-medium">Reel</div>
        </h1>
        <p className="text-center px-10 text-xs">
          Our work is best experienced in motion. Don't forget to put on your
          headphones
        </p>
      </div>
    </div>
  );
};

export default PlayReel;
