import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../style/Slider.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { svg_person_green } from "../svg/sgv";

export default function Slider() {
  const breakpoints = {
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };
  return (
    <>
            <Swiper
                  pagination={{
                    type: "progressbar",
                  }}
                  navigation={{
                    nextEl: ".next-button",
                    prevEl: ".prev-button",
                  }}
                  breakpoints={breakpoints}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                >
                  <div data-aos="flip-left">

                 

        <SwiperSlide>
          {" "}
          <div className="p-2 ">
            <div className="flex h-full bg-[#F2F8FB] bg-card-gradient transition-all duration-1000 cursor-pointer rounded-2xl p-5 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-white text-white flex-shrink-0">
                  {svg_person_green}
                </div>
                <h2 className="title_18_600 leading-6 text-black">
                  Eshonov Fakhriyor
                </h2>
              </div>
              <div className="flex-grow">
                <p className="title_16_400_06 text-justify leading-5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        </div>
        <SwiperSlide>
          {" "}
          <div className="p-2 ">
            <div className="flex h-full bg-[#F2F8FB] bg-card-gradient transition-all duration-1000 cursor-pointer rounded-2xl p-5 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-white text-white flex-shrink-0">
                  {svg_person_green}
                </div>
                <h2 className="title_18_600 leading-6 text-black">
                  Eshonov Fakhriyor
                </h2>
              </div>
              <div className="flex-grow">
                <p className="title_16_400_06 text-justify leading-5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="p-2 ">
            <div className="flex h-full bg-[#F2F8FB] bg-card-gradient transition-all duration-1000 cursor-pointer rounded-2xl p-5 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-white text-white flex-shrink-0">
                  {svg_person_green}
                </div>
                <h2 className="title_18_600 leading-6 text-black">
                  Eshonov Fakhriyor
                </h2>
              </div>
              <div className="flex-grow">
                <p className="title_16_400_06 text-justify leading-5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="p-2 ">
            <div className="flex h-full bg-[#F2F8FB] bg-card-gradient transition-all duration-1000 cursor-pointer rounded-2xl p-5 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-white text-white flex-shrink-0">
                  {svg_person_green}
                </div>
                <h2 className="title_18_600 leading-6 text-black">
                  Eshonov Fakhriyor
                </h2>
              </div>
              <div className="flex-grow">
                <p className="title_16_400_06 text-justify leading-5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="p-2 ">
            <div className="flex h-full bg-[#F2F8FB] bg-card-gradient transition-all duration-1000 cursor-pointer rounded-2xl p-5 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-white text-white flex-shrink-0">
                  {svg_person_green}
                </div>
                <h2 className="title_18_600 leading-6 text-black">
                  Eshonov Fakhriyor
                </h2>
              </div>
              <div className="flex-grow">
                <p className="title_16_400_06 text-justify leading-5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="p-2 ">
            <div className="flex h-full bg-[#F2F8FB] bg-card-gradient transition-all duration-1000 cursor-pointer rounded-2xl p-5 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-white text-white flex-shrink-0">
                  {svg_person_green}
                </div>
                <h2 className="title_18_600 leading-6 text-black">
                  Eshonov Fakhriyor
                </h2>
              </div>
              <div className="flex-grow">
                <p className="title_16_400_06 text-justify leading-5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="p-2 ">
            <div className="flex h-full bg-[#F2F8FB] bg-card-gradient transition-all duration-1000 cursor-pointer rounded-2xl p-5 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-white text-white flex-shrink-0">
                  {svg_person_green}
                </div>
                <h2 className="title_18_600 leading-6 text-black">
                  Eshonov Fakhriyor
                </h2>
              </div>
              <div className="flex-grow">
                <p className="title_16_400_06 text-justify leading-5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
