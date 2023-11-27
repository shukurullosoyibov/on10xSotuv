import React, { useEffect } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/mousewheel";
import { svg_arrow_left, svg_arrow_right} from "../svg/sgv";

import Slider from "./Slider";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Readers = () => {
 
  useEffect(() => {
      AOS.init();
  }, []);

 

  return (
    <section id="readers" >
      <div data-aos="fade-right"
     className=" container px-5 cont py-14 mx-auto">
        <div className="flex md:flex-nowrap justify-between  w-full mb-7 sm:flex-row flex-col sm:gap-1 gap-5 items-center text-center">
          <div className="flex flex-col text-center items-center sm:items-stretch w-full title_34_600   mb-2">
            <h2 className=" title_34_600 text-left leading-[44px]  mb-3">
              <span> O'quvchilar </span>fikri
            </h2>
            <p className="title_16_400 w-4/5 leading-6 text-[rgba(0, 0, 0, 0.60)] text-left">
              Bizning professional kurslarimiz orqali sotuvlaringizni qisqa
              muddat ichida tiklab olishingiz mumkin.
            </p>
          </div>
          <div className="flex justify-between gap-x-6">
            <button className="rounded-full w-[38px] h-[38px] prev-button grid place-items-center transition-all duration-500 hover:opacity-60 active:opacity-80 bg-[#00AE30]">
              {svg_arrow_left}
            </button>
            <button className="rounded-full w-[38px] h-[38px] next-button  grid place-items-center transition-all duration-500 hover:opacity-60 active:opacity-80  bg-[#00AE30]">
              {svg_arrow_right}
            </button>
          </div>
        </div>
        
        <Slider/>
      </div>
      
    </section>
  );
};

export default Readers;
