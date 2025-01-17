// import React from 'react'
import { MdOutlineArrowDownward } from "react-icons/md";
const Landing = () => {
  return (
    <div className="w-full h-[150vh] sm:h-[250vh] relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)"
          alt="Church"
        />
      </div>

      {/* Text Content */}
      <div className="w-full absolute top-0 ">
      <div className=" max-w-screen-2xl mx-auto px-5 sm:px-10 text-white h-full flex flex-col justify-center">
        <div className="para mt-[15rem] sm:mt-[40rem] font-regular sm:text-nowrap opacity-90 w-1/2">
         
          <p className="text-md  sm:text-4xl ">Global digital design studio partnering with</p>
          <p className="text-md  sm:text-4xl">brands and businesses that create exceptional</p>
          <p className="text-md  sm:text-4xl">experiences where people live, work, and unwind.</p>
        </div>
        <div className="headings mt-5 sm:mt-32 sm:-ml-5">
          <h1 className="text-6xl sm:text-[20rem] tracking-tighter leading-none">
            Digital
          </h1>
          <h1 className="text-6xl sm:text-[20rem] tracking-tighter leading-none">
            Design
          </h1>
          <h1 className="text-6xl  sm:text-[20rem]  tracking-tighter leading-none">
            Experience
          </h1>
          <div className="mt-6 text-xl sm:text-4xl sm:ml-5">
          <MdOutlineArrowDownward />
          </div>
        </div>
        <div className="para2 mt-10 sm:w-1/3">
          <div className="font-medium  sm:text-3xl text-nowrap">
            <p>We help experience-drivern companies</p>
            <p>thrive by making their audience feel the</p>
            <p>refined intricacies of their brand and product</p>
            <p>in the digital space. Unforgettable journeys</p>
            <p>start with a click.</p>    
          </div>
          <a href="#" className="sm:text-xl sm:border-b-[1px] border-b-[0.3px] mt-10 inline-block border-zinc-100 pb-1">The Studio</a>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default Landing;
