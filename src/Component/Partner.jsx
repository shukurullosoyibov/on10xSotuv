import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import parnerPhoto1 from '../img/Rectangle 79.png';
import parnerPhoto2 from '../img/Rectangle 73 (1).png';
import parnerPhoto3 from '../img/Rectangle 73 (2).png';
import parnerPhoto4 from '../img/Rectangle 73.png';
import parnerPhoto5 from '../img/Rectangle 77 (1).png';
import parnerPhoto6 from '../img/Rectangle 77 (2).png';
import parnerPhoto7 from '../img/Rectangle 77.png';
import parnerPhoto8 from '../img/Rectangle 78 (1).png';
import parnerPhoto9 from '../img/Rectangle 78 (2).png';
import parnerPhoto10 from '../img/Rectangle 78.png';
import parnerPhoto11 from '../img/Rectangle 79.png'; 
import parnerPhoto12 from '../img/Rectangle 79 (1).png'; 


const Partner = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const element = document.getElementById('partner'); // O'zgartiring elementni ID nomi
        if (element) {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop < windowHeight) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);
  return (
    <section id="partner" className="text-gray-600 feature  body-font">
      <div className={` container px-3 md:px-5 cont md:py-24 py-6  mx-auto`}>
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <div className="flex flex-col text-center w-full title_34_600  mb-0">
            <h2 className=" leading-9  mb-5">
              Bizga ishongan <span> hamkorlar </span>
            </h2>
            <p className="title_18_400 leading-6">
              Kursimiz ishtirokchilarning fikrini oladigan bo’lsak, ularning 90%
              ida faqat ijobiy fikrlar va real natijalar
            </p>
          </div>
        </div>
        <div className={` ${isVisible ? 'partnerAnim' : ''} flex justify-center sm:justify-between flex-wrap -m-4`}>
          <div className="  ">
            <div className=" w-full h-full p-4 rounded-lg">
              <img
                className="object-cover rounded-xl   w-[284px] h-[119px]"
                src={parnerPhoto1}
                alt="partner_img"
              />
            </div>
          </div>
          <div className=" ">
            <div className=" w-full h-full p-4 rounded-lg">
              <img
                className="object-cover rounded-xl  w-[284px] h-[119px]"
                src={parnerPhoto2}
              />
            </div>
          </div>
          <div className=" ">
            <div className=" w-full h-full p-4 rounded-lg">
              <img
                className="object-cover rounded-xl  w-[284px] h-[119px]"
                src={parnerPhoto3}
              />
            </div>
          </div>
          <div className=" ">
            <div className=" w-full h-full p-4 rounded-lg">
              <img
                className="object-cover rounded-xl  w-[284px] h-[119px]"
                src={parnerPhoto4}
              />
            </div>
          </div>
          <div className=" ">
            <div className=" w-full h-full p-4 rounded-lg">
              <img
                className="object-cover rounded-xl  w-[284px] h-[119px]"
                src={parnerPhoto5}
              />
            </div>
          </div>
          <div className=" ">
            <div className=" w-full h-full p-4 rounded-lg">
              <img
                className="object-cover rounded-xl  w-[284px] h-[119px]"
                src={parnerPhoto6}
              />
            </div>
          </div>
          <div className=" ">
            <div className=" w-full h-full p-4 rounded-lg">
              <img
                className="object-cover rounded-xl  w-[284px] h-[119px]"
                src={parnerPhoto7}
              />
            </div>
          </div>
          <div className=" ">
            <div className=" w-full h-full p-4 rounded-lg">
              <img
                className="object-cover rounded-xl  w-[284px] h-[119px]"
                src={parnerPhoto8}
              />
            </div>
          </div>
          <div className=" ">
            <div className=" w-full h-full p-4 rounded-lg">
              <img
                className="object-cover rounded-xl  w-[284px] h-[119px]"
                src={parnerPhoto9}
              />
            </div>
          </div>
          <div className=" ">
            <div className=" w-full h-full p-4 rounded-lg">
              <img
                className="object-cover rounded-xl  w-[284px] h-[119px]"
                src={parnerPhoto10}
              />
            </div>
          </div>
          <div className=" ">
            <div className=" w-full h-full p-4 rounded-lg">
              <img
                className="object-cover rounded-xl  w-[284px] h-[119px]"
                src={parnerPhoto11}
              />
            </div>
          </div>
          <div className=" ">
            <div className=" w-full h-full p-4 rounded-lg">
              <img
                className="object-cover rounded-xl  w-[284px] h-[119px]"
                src={parnerPhoto12}
              />
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Partner;
