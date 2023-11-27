import React from "react";
import {
  svg_emoji,
  svg_group_fill,
  svg_query_starts,
  svg_star2,
} from "../svg/sgv";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const About = () => {
  useEffect(()=>{
AOS.init();
  },[])
  return (
    <section id="aboute" className="text-gray-600  feature body-font">
      <div className="container cont py-10 mx-auto">
        <div className="flex flex-wrap -mx-4 aboute justify-between -mb-10 text-center">
     
          <div data-aos="zoom-in-up" className=" xl:w-1/2 mb-6 px-4 flex flex-col">
            <div className="flex flex-col text-center w-full title_34_600  mb-2">
              <h2 className=" title_34_600 text-left leading-[44px]  mb-3">
                Nega aynan bizni <span>kursni </span>
                <br  className="xl:block hidden" />
                bitirishingiz kerak
              </h2>
              <p className="title_14_400 w-4/5 leading-6 text-left">
                Bizning professional kurslarimiz orqali sotuvlaringizni qisqa
                muddat ichida tiklab olishingiz mumkin.
              </p>
            </div>
            <div className=" mt-4 xl:inline-flex grid place-items-center  md:pb-5 ">
            <Link
              to='/autho'
              className="inline-flex btn xl:self-start self-end text-center  w-full md:w-3/5 xl:w-1/2  text-white bg-indigo-500 border-0 focus:outline-none hover:bg-indigo-600 rounded"
            >
              <span className="text-white title_17_500"> Ro'yxatdan o'tish</span>
            </Link>
            </div>
          </div>
          
       
            
         

          <div data-aos="zoom-in-up" className="flex flex-wrap sm:justify-center sm:pt-5 -m-4 xl:w-1/2 mb-10 px-4">
            <div className="p-1 md:w-1/2 sm:w-2/5">
              <div className="flex h-full bg-white bg-card-gradient transition-all duration-500 cursor-pointer rounded-2xl p-5 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-[#F2F8FB] text-white flex-shrink-0">
                    {svg_emoji}
                  </div>
                  <h2 className="title_16_500 font-medium">
                    Lorem Ipsum is simply dummy text of the
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="title_14_400 leading-5">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </p>
                </div>
              </div>
            </div>
            <div className="p-1 md:w-1/2 sm:w-2/5">
              <div className="flex h-full  bg-card-gradient transition-all duration-500 cursor-pointer bg-white rounded-2xl p-5 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-[#F2F8FB] text-white flex-shrink-0">
                    {svg_query_starts}
                  </div>
                  <h2 className="title_16_500 font-medium">
                    Lorem Ipsum is simply dummy text of the
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="title_14_400 leading-5">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </p>
                </div>
              </div>
            </div>
            <div className="p-1 md:w-1/2 sm:w-2/5">
              <div className="flex h-full bg-white bg-card-gradient transition-all duration-500 cursor-pointer rounded-2xl p-5 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-[#F2F8FB] text-white flex-shrink-0">
                    {svg_star2}
                  </div>
                  <h2 className="title_16_500 font-medium">
                    Lorem Ipsum is simply dummy text of the
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="title_14_400 leading-5">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </p>
                </div>
              </div>
            </div>
            <div className="p-1 md:w-1/2 sm:w-2/5">
              <div className="flex h-full bg-card-gradient transition-all duration-500 cursor-pointer bg-white rounded-2xl p-5 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-[#F2F8FB] text-white flex-shrink-0">
                    {svg_group_fill}
                  </div>
                  <h2 className="title_16_500 font-medium">
                    Lorem Ipsum is simply dummy text of the
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="title_14_400 leading-5">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </p>
                </div>
              </div>
            </div>
          </div>
       
        </div>
      </div>
    </section>
  );
};

export default About;
