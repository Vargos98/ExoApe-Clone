import React, { useState } from 'react';
import One from '../assets/videos/1.mp4';
import Two from '../assets/videos/2.mp4';
import Three from '../assets/videos/3.mp4';
import Four from '../assets/videos/4.mp4';

const Work = () => {
  // State to store video data
  // const [videos] = useState([
  //   {
  //     src: One,
  //     title: 'Amaterasu',
  //     description: 'Frontier Health Innovation',
  //   },
  //   {
  //     src: Two,
  //     title: 'Columbia Pictures',
  //     description: 'Celebrating a Century of Cinema',
  //   },
  //   {
  //     src: Three,
  //     title: 'Cambium',
  //     description: 'Pioneering Sustainable Solutions',
  //   },
  //   {
  //     src: Four,
  //     title: 'Studio D',
  //     description: 'Urban and Landscape Design',
  //   },
  // ]);
  //   <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4">
  //   <path
  //     d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
  //     fill="currentColor"
  //   ></path>
  // </svg>
  // return (
  // <div className="w-full relative">
  //   <div className="max-w-screen-2xl mx-auto px-5 py-20 sm:px-10">
  //     {/* Featured Projects Section */}
  //     <div className="featured flex items-center gap-2 mb-5">

  //       <h3 className="text-gray-800 font-medium">Featured Projects</h3>
  //     </div>
  //     <h1 className="text-6xl my-5">Work</h1>
  //     <p className="text-md">
  //       Highlights of cases that we passionately built with forward-thinking clients and friends over the years.
  //     </p>

  //     {/* Videos Section */}
  //     <div className="videos mt-10 space-y-10 sm:flex sm:flex-wrap sm:gap-2 hidden ">
  //       {videos.map((video, index) => (
  //         <div key={index} className="video w-full sm:w-[48%]">
  //           <video className="w-full h-auto" src={video.src} autoPlay muted loop></video>
  //           <h1 className="mt-5 text-sm font-medium">{video.title}</h1>
  //           <p className="text-sm opacity-40">{video.description}</p>
  //         </div>
  //       ))}
  //     </div>

  //   </div>
  // </div>
  //  );

  return (
    //desktop view
    <div className='max-w-screen-2xl mx-auto h-[250vh] py-20 relative '>
      <div>
        <h1 className='text-[20rem] font-semibold ml-28 tracking-tight'>Work</h1>
      </div>
      <div className='video-content flex gap-20'>

        <div className='left-video  w-1/2 h-[50rem]  ml-28 -mt-10'>
          <video src={One} className='w-full h-full object-cover ' muted autoPlay></video>
          <div className='flex items-center '>
            <h1 className='text-xl opacity-90 '>Amaterasu -</h1>
            <p className='text-md opacity-80 mt-1'>Frontier Innovation</p>
          </div>
        </div>
        <div className='right-content h-64 w-1/3  -mt-10 ml-20'>
          <div className='flex gap-2'>
            <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4">
              <path
                d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
                fill="currentColor"
              ></path>
            </svg>
            <h1 className='text-xl opacity-90'>Featured Projects</h1>
          </div>
          <p className='text-wrap w-[90%] mt-20 text-4xl  opacity-80'>
            Highlights of cases that we passionately built with forward-thinking clients and friends over the years.
          </p>
        </div>

      </div>
      <div className='absolute bottom-[40rem] right-0 '>
        <div className='w-[32rem] bg-zinc-800 h-[70vh]'>
          <video src={Two} autoPlay muted className='w-full h-full object-cover'></video>
          <div className='flex items-center '>
            <h1 className='text-xl opacity-90 '>AColumbia Pictures -</h1>
            <p className='text-md opacity-80 mt-1'>Celebrating a Century of Cinema</p>
          </div>

        </div>
      </div>
    </div>
  );

};

export default Work;
