import { useEffect, useRef } from 'react';
import B from '../assets/videos/B.mp4';
import D from '../assets/videos/D.mp4';
import gsap, { Linear, ScrollTrigger } from 'gsap/all';

const Images = () => {
  const first = useRef(null);
  const second = useRef(null);
  const third = useRef(null);
  const fourth = useRef(null);
  const parent = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        start: '0 90%',
        scrub: 1,
      },
    });
    tl.to(first.current, {
      x: '40%',
      ease: Linear,
    }, 'a')
      .to(third.current, {
        x: '-40%',
        ease: Linear,
      }, 'a')
      .to(second.current, {
        x: '30%',
        ease: Linear,
      }, 'a')
      .to(fourth.current, {
        x: '-30%',
        ease: Linear,
      }, 'a');
  });

  return (
    <div
      ref={parent}
      className="w-full py-20 h-[80vh] sm:h-[150vh] bg-white flex items-center justify-center overflow-hidden"
    >
      <div className="w-[90%] h-full relative flex flex-col sm:flex-row items-center justify-center">
        {/* Image 1 */}
        <div
          ref={first}
          className="absolute w-[30%] sm:w-[25%] h-[20rem] sm:h-[30rem] z-10 top-[10%] sm:top-6 left-[50%] sm:-right-[50%]"
        >
          <img
            src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/1200x1703/filters:quality(90)"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        {/* Video 1 */}
        <div
          ref={second}
          className="absolute w-[40%] sm:w-[30%] h-[15rem] sm:h-[20rem] z-10 top-[35%] left-[20%] sm:-left-[5%]"
        >
          <video
            src={B}
            className="w-full h-full object-cover"
            muted
            loop
            autoPlay
          ></video>
        </div>
        {/* Image 2 */}
        <div
          ref={third}
          className="absolute w-[40%] sm:w-[30%] h-[15rem] sm:h-[20rem] z-10 bottom-[10%] left-[15%] sm:left-[25%]"
        >
          <img
            src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/1200x804/filters:quality(90)"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        {/* Video 2 */}
        <div
          ref={fourth}
          className="absolute w-[40%] sm:w-[35%] h-[20rem] sm:h-[30rem] z-20 bottom-[5%] right-[10%] sm:-right-[20%]"
        >
          <video
            src={D}
            className="w-full h-full object-cover"
            muted
            loop
            autoPlay
          ></video>
        </div>
        {/* Center Image */}
        <img
          src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/1200x2050/filters:quality(90)"
          className="w-[60%] sm:w-[30%] h-[70%] sm:h-[90%] object-cover absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          alt=""
        />
      </div>
    </div>
  );
};

export default Images;
