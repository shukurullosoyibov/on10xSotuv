import React from 'react'
import click_svg from "../svg/click 1.svg";
import payme_svg from "../svg/Payme.svg";
import apelsin from "../img/apelsin.png";
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';

const SellCourse = ({setDone, data}) => {
   const {slug} = useParams();
   const [loading, setLoading] = useState(false);
   const [link, setLink] = useState('');
   const [error, setError] = useState(null);
  console.log(slug);
    const getPaymeUlr = async () => {
      setLoading(true);
      const response = await fetch(`https://shark.brim.uz/api/course-manager/course-payment/get-payme-url?courseKey=${slug}`, {
        method: "GET",  
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }); 
      const data = await response.json();
      console.log(data?.status);
      if(response.status !== 200){
        setError(data.message);
        setLoading(false);
      }
     else {
      setLoading(false);
    
      setLink(data);
      console.log(link?.data?.url);
     }
    };
    const payme = () => {
     
      getPaymeUlr();
     
       window.open(link?.data?.url , "_blank");
       toast.success("To'lov muvaffaqiyatli amalga oshirildi");
       setDone(true);

    }
  return (
    <form className=" px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8" >
                <h3 className="title_24_600 leading-8">
                  Kursni<span> sotib olish </span>
                </h3>
                <h6 className="title_16_400_08 leading-normal">
                  Kursni davomini ko’rish uchun, sotib oling!
                </h6>
                <label
                  htmlFor="click"
                  className=" mt-7 title_16_400_08 leading-normal  block mb-2 dark:text-gray-300"
                >
                  {" "}
                  To’lov tizimini tanlang
                </label>
                <div className="flex flex-nowrap justify-between mb-6 pb-6 border-b">
                  <label className="">
                    <div className="mb-2 cursor-pointer md:w-[107px] md:h-[70px] rounded-xl grid place-items-center border">
                      <img className=" " src={click_svg} alt="click" />
                    </div>
                    <input
                      type="radio"
                      name="payment"
                      id="click"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder=""
                      required
                    />
                  </label>
                  <label>
                    <div className="mb-2 cursor-pointer md:w-[107px] md:h-[70px] rounded-xl grid place-items-center">
                      <img src={payme_svg} alt="payme" />
                    </div>
                    <input
                      type="radio"
                      name="payment"
                      id="payme"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder=""
                      required
                    />
                  </label>
                  <label>
                    <div className="mb-2 cursor-pointer md:w-[107px] md:h-[70px] rounded-xl grid place-items-center  border">
                      <img
                        src={apelsin}
                        alt="apelsin"
                        className=" "
                      />
                    </div>
                    <input
                      type="radio"
                      name="payment"
                      id="apelsin"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder=""
                      required
                    />
                  </label>
                </div>

                <div className="flex justify-between items-center">
                  <h3 className="title_16_400_08 leading-normal">
                    Kurs umumiy narxi
                  </h3>
                  <h3 className="text-right">
                    <p className="title_12_400_05 line-through">{data.data.priceFormat}</p>
                    <span className="title_18_600_green">{data.data.priceFormat}</span>
                  </h3>
                </div>

                <button
                  type="button"
                   onClick={payme}
                  className="w-full mt-7 btn  text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 title_16_400_white leading-5 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  { loading ? 'Yuklanmoqda...' : 'To\'lovni amalga oshirish'}
                </button>
              </form>
  )
              
}

export default SellCourse