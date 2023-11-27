import React from "react";

import { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import photo from '../img/photo-2.png';
const FreeCourse = ({props}) => {
 

  
  

    useEffect(()=>{
      AOS.init();
    },[])

  return (
    <section id="freecourse" className="container">
      <div className=" mx-auto flex p-5  md:p-14 rounded-3xl my-[96px] feature xl:flex-row flex-col-reverse items-center">
   
        <div data-aos="zoom-in-up " data-aos-delay="500" className="lg:flex-grow xl:w-1/2  flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title_28_600 mb-[24px]  md:pt-5 text-left  leading-10">
            Birinchi darsni sizga {" "}
            <br className="hidden lg:inline-block" />
            bepulga taqdim etamiz!
          </h1>
          <p className="title_16_400  flex-1 leading-[22px] text-left mb-[24px]">
            Agar hali ham o’ylayotgan bo’lsangiz, birinchi 3 ta darsimizni
            ko’ring. O’rgangan bilimlarimizni, albatta, sotuvingizga qo’llang,
            agar ish bersa, demak kursni xarid qilib, daromadni 10x ga oshirish
            kerak.
          </p>
          <div className="flex justify-center sm:justify-start   w-full">
              <Link
               to='/autho'
              className="inline-flex btn self-start text-center  w-[96%] xl:w-1/2   text-white bg-indigo-500 border-0 focus:outline-none hover:bg-indigo-600 rounded"
             >
              <span className="text-white title_17_500">Ro'yxatdan o'tish</span>
            </Link>
          </div>
        </div>
        
       

        <div  data-aos="zoom-in-up" data-aos-delay="500" className={`hidden md:block lg:max-w-lg lg:w-full px-4 relative`}>
          <img
            className="object-cover object-top rounded w-[389px] h-[380px]"
            alt="hero"
            src={photo}
          />
        </div>
       
      </div>
    </section>
  );
};

export default FreeCourse;
