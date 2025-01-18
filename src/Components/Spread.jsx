// import React from 'react'

const Spread = () => {
  return (
    <div className="w-full h-screen py-20 z-10">
      <div className="max-w-screen-2xl mx-auto px-5 sm:px-10">
        <div className="flex items-center justify-center gap-2">
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
            <h1>In the media</h1>
        </div>
       <div className="text mt-10 text-center">
       <h1 className="capitalize text-6xl sm:text-[8rem] tracking-tighter">Spread</h1>
       <h1 className="capitalize text-6xl sm:text-[8rem] tracking-tighter">the news</h1>
       <p className="w-2/3 sm:w-1/2 mx-auto sm:text-[1.5rem] text-wrap mt-5 text-md leading-2">Find out more about our work on these leading design and technology platforms</p>
       <a href="#" className="border-b-[1px] border-zinc-900 pb-1 mt-5 inline-block">Browse all news</a>
       </div>
      </div>
    </div>
  )
}

export default Spread