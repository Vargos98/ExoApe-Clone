// import React from 'react'
import B from '../assets/videos/B.mp4';
import D from '../assets/videos/D.mp4';
const Images = () => {
  return (
    <div className='w-full h-[70vh] sm:h-[150vh] bg-white flex items-center justify-center overflow-hidden'>
      <div className='w-[40%] h-1/2 relative '>
        <div className=' absolute w-20 h-[7rem] sm:w-40 sm:h-[14rem] z-10 sm:-right-10 -right-1/3  top-6 '>
          <img src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/1200x1703/filters:quality(90)" alt="" className="w-full h-full object-cover"/>
        </div>
        <div className=' absolute w-[8rem] sm:w-[17rem] sm:-left-20 z-10 aspect-video -left-1/2 top-1/3'>
          <video src={B} className='w-full h-full object-cover' muted loop autoPlay></video>
        </div>
        <div className=' absolute w-[9rem] aspect-video sm:w-[18rem] sm:-bottom-40 -bottom-10 -left-[75%] sm:-left-[40%]'>
        <img src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/1200x804/filters:quality(90)" alt="" className="w-full h-full object-cover"/>
        </div>
        <div className=' z-20 absolute w-[10rem] sm:w-[20rem] sm:h-[30rem] aspect-[1.5/1] sm:-right-64 -right-[70%] -bottom-[37%] sm:-bottom-[90%]  '>
        <video src={D} className='w-full h-full object-cover' muted loop autoPlay></video>
        </div>
        <img src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/1200x2050/filters:quality(90)" className='w-full h-full object-cover sm:w-[15rem] sm:h-[80vh] absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2' alt="" />
      </div>
    </div>
  )
}

export default Images