import React, { useEffect } from "react";
import "../style/Hero.css";
import { Link } from "react-router-dom";
import rasm_hero from '../img/photo-2.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import rasm_hero2 from '../img/main.png';
const Hero = () => {


  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <>
      <section id="hero" className="text-gray-600 heroBG py-14 body-font">
        <div data-aos="fade-right" data-aos-easing="ease-in-sine"  className="container  md:pb-0 md:pt-0 pt-5 grid md:grid-cols-2 grid-cols-1  items-center">
          <div className="   flex flex-col  md:text-left mb-16 md:mb-0 items-center ">
            <p className=" self-start text-left title_42_600   mb-7  ">
              Har qanday mahsulot yoki
              <br className="  md:block xl:hidden hidden" /> xizmatni 10x sotish
              uchun <br className=" md:block xl:hidden hidden" />
              <span> onlayn kurs.</span>
            </p>
            <p className="mb-8  text-left title_18_400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </p>

            <Link
              to="/courses"
              className="inline-flex btn self-center  md:self-start text-center  w-full xl:w-1/2   text-white bg-indigo-500 border-0 focus:outline-none hover:bg-indigo-600 rounded"
            >
              <span className="text-white title_17_500"> Bizning kurslar</span>
            </Link>
          </div>
          <div data-aos="fade-left" data-aos-easing="ease-in-sine"  className="   mx-auto ">
            <img
              className="object-fill w-[100%]  rounded-full   object-center "
              alt="hero"
              src={rasm_hero2}
            />
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5  cont py-16 md:flex-row flex-col  items-center justify-between">
     


          <div data-aos="fade-right" data-aos-easing="ease-in-sine" className="  ">
            <div
            className=" xl:w-[521px] xl:h-[461px] w-[350px] h-[309px]     relative  rounded-3xl grid place-items-center  "
              style={{
                
                   background:
                  "linear-gradient(102deg, #FBDADA 0%, #AAFACA 36%, #F4EA98 100%)",
              }}
            >
              <div  className=" w-[80%] h-[80%] rounded-3xl relative grid place-items-center  md:bg-gradient-to-r from-rose-50 via-emerald-50 to-stone-50"
              >
                <img
                className="  mx-auto  absolute w-[100%] h-[110%] z-20 bottom-0  object-cover "
                alt="rasm"
                src={rasm_hero}
              />
              </div>
            
            </div>
         
          </div>
         
          <div data-aos="fade-right"  data-aos-easing="ease-in-sine" className="  md:w-1/2 md:pr-16 flex flex-col  md:items-start mt-5  mb-16 md:mb-0 items-center ">
            <p className=" title_34_600  text-left   md:mb-4  ">
              Biz <span>kimmiz?</span>
            </p>
            <p className="mb-8   title_18_400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also
            </p>
            <div className="flex justify-between md:justify-center  gap-x-5 mb-6">
              <div className="flex flex-col xl:px-14 px-8 py-6 w-full  bg100">
                <h2 className="title_32_600 leading-10">
                  100<span>+</span>
                </h2>
                <p className="title_14_400">Lorem Ipsum</p>
              </div>
              <div className="flex flex-col xl:px-14 px-8 py-6 w-full  bg100">
                <h2 className="title_32_600 leading-10">
                  100<span>+</span>
                </h2>
                <p className="title_14_400">Lorem Ipsum</p>
              </div>
            </div>

            <Link
              to="/courses"
              className="inline-flex btn self-center  md:self-start text-center  w-full xl:w-1/2   text-white bg-indigo-500 border-0 focus:outline-none hover:bg-indigo-600 rounded"
            >
              <span className="text-white title_17_500"> Bizning kurslar</span>
            </Link>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Hero;
