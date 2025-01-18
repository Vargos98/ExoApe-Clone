import { MdOutlineArrowDownward } from "react-icons/md";
import { motion , stagger} from "framer-motion";

const Landing = () => {
  return (
    <div className="w-full h-[150vh] sm:h-[250vh] relative">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
         data-scroll data-scroll-speed="-1"
          className="w-full h-full object-cover"
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)"
          alt="Digital design studio background"
        />
      </div>

      {/* Text Content */}
      <div className="w-full absolute top-0">
        <div className="max-w-screen-2xl mx-auto px-5 sm:px-10 text-white h-full flex flex-col justify-center">
          {/* Main Paragraph */}
          <div className="para mt-[15rem] sm:mt-[15rem] font-regular opacity-90 sm:w-[70%] animate-fade-in text-nowrap">
            {["Global digital design studio partnering with", "brands and businesses that create exceptional", "experiences where people live, work, and unwind."].map((item, index) => (
              <p key={index} className="text-md masker sm:text-2xl leading-snug overflow-hidden">
                <motion.span
                  initial={{ rotate: 90, y: "100%", opacity: 0 }}
                  animate={{ rotate: 0, y: "0%", opacity: 1 }}
                  transition={{ ease: "easeInOut", duration: 0.8 , delay: index *0.2}}
                  className="inline-block origin-left"
                >
                  {item}
                </motion.span>
              </p>
            ))}
          </div>

          {/* Headings */}
          <div className="headings mt-5 sm:mt-10 sm:-ml-5">
            {["Digital","Design","Experience"].map((item,index)=>{
              return <h1 key={index} className="text-5xl sm:text-[14rem] tracking-tighter leading-none animate-slide-in ">
              <motion.span
                    initial={{ rotate: 90, y: "100%", opacity: 0 }}
                    animate={{ rotate: 0, y: "0%", opacity: 1 }}
                    transition={{ ease: [0.22, 1, 0.36,1], duration: 0.8,
                    delay: 1+index*.15 }}
                    className="inline-block origin-left"
                  >
                    {item}
                  </motion.span>
              </h1>
            })}
            
            
            <div className="mt-6 text-2xl sm:text-4xl sm:ml-5 animate-bounce">
              <MdOutlineArrowDownward />
            </div>
          </div>

          {/* Secondary Paragraph */}
          <div className="para2 mt-10 sm:w-1/3 animate-fade-in">
            <div className="font-medium text-lg sm:text-3xl text-nowrap">
              <p>We help experience-driven companies</p>
              <p>thrive by making their audience feel the</p>
              <p>refined intricacies of their brand and product</p>
              <p>in the digital space. Unforgettable journeys</p>
              <p>start with a click.</p>
            </div>
            <a
              href="#"
              className="text-md sm:text-xl border-b border-zinc-100 pb-1 inline-block mt-10"
            >
              The Studio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
