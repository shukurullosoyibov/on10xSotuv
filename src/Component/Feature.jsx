import React from "react";
import '../style/Feature.css'
import { svg_bolt, svg_handshake, svg_reles, svg_thumb } from "../svg/sgv";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Feature = () => {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <section className=" feature body-font ">
    

     
      <div data-aos="fade-up"  data-aos-easing="ease-in-sine" className="container py-16 cont mx-auto">
        <div className="flex flex-col text-center w-full title_24_600 md:title_34_600  mb-7">
          <h2 className=" leading-10  mb-3">
            Bizning <span> maqsadimiz </span> nima?
          </h2>
         <p className="md:title_14_400 title_16_400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quibusdam!
         </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className=" sm:p-4 xl:w-1/4 sm:w-1/2 w-full">
            <div className="flex rounded-lg h-full  p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-white  text-white flex-shrink-0">
                  {svg_bolt}
                </div>
                <h2 className="text-gray-900 leading-5  title_18_500">
                  Shooting Stars
                </h2>
              </div>
              <div className="flex-grow">
                <p className="title_14_400 leading-4 ">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </p>
                
              </div>
            </div>
          </div>
          <div className=" sm:p-4 xl:w-1/4 sm:w-1/2 w-full">
            <div className="flex rounded-lg h-full  p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-white  text-white flex-shrink-0">
                  {svg_reles}
                </div>
                <h2 className="text-gray-900 leading-5  title_18_500">
                  Shooting Stars
                </h2>
              </div>
              <div className="flex-grow">
                <p className="title_14_400 leading-4 ">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </p>
                
              </div>
            </div>
          </div>  
          <div className="sm:p-4 xl:w-1/4 sm:w-1/2 w-full">
            <div className="flex rounded-lg h-full  p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-white  text-white flex-shrink-0">
                  {svg_handshake}
                </div>
                <h2 className="text-gray-900 leading-5  title_18_500">
                  Shooting Stars
                </h2>
              </div>
              <div className="flex-grow">
                <p className=" title_14_400 leading-4 ">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </p>
                
              </div>
            </div>
          </div>  
          <div className="sm:p-4 xl:w-1/4 sm:w-1/2 w-full">
            <div className="flex rounded-lg h-full  p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-white  text-white flex-shrink-0">
                  {svg_thumb}
                </div>
                <h2 className="text-gray-900 leading-5  title_18_500">
                  Shooting Stars
                </h2>
              </div>
              <div className="flex-grow">
                <p className=" title_14_400 leading-4 ">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </p>
              
              </div>
            </div>
          </div>  
        </div>
  
      </div>
    </section>
  );
};

export default Feature;
