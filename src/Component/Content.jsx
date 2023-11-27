import React from "react";
// import { svg_batafsil } from "../svg/sgv";
import { Link } from "react-router-dom";

import { useEffect, useState} from "react";

import '../style/content.css'
// import coursePhoto1 from '../img/Rectangle 3 (2).png'
// import coursePhoto2 from '../img/Rectangle 3 (3).png'
// import coursePhoto3 from '../img/Rectangle 3 (4).png'
// import coursePhoto4 from '../img/Rectangle 3.png'
// import { fetchCourses } from "../fetch/fetchGetData";
import { isError, useQuery } from "react-query";
import CourseCard from './CourseCard';
import CourseSkelron from "./Skeleron/CourseSkelron";
import { fetchBesteller } from "../fetch/fetchGetData";


const Content = () => {
  const courses_API = 'https://shark.brim.uz/api/course-manager/course/bestseller';
// const {isLoading, isFetching, data} = useQuery( fetchBesteller);
// const {isLoading, isFetching, isError,error, data} = useQuery(fetchBesteller)
// if(data){ console.log(data);}
const [isLoading, setLoading] = useState(false);
const [data, setData] = useState('');

async function fetchBesteller() {
  setLoading(true);
  try {
    const response = await fetch(courses_API);
    if (!response.ok) {
      throw new Error('HTTP xato: ' + response.status);
    }
    const data = await response.json();
    setData(data);
    if(data){
      setLoading(false);

    }

    return data;
  } catch (error) {
    setLoading(false);

    console.error("Ma'lumotlarni olishda xatolik yuz berdi: ", error);
    throw error;
  }
}
useEffect(()=>{
  fetchBesteller();
},[])
  return (
    <section id='courses' className="text-gray-600 body-font">
      <div className="container px-5 py-24 cont mx-auto">
        <div className="flex flex-col">
          <div className="flex flex-col text-center w-full title_34_600  mb-7">
            <h2 className=" leading-9  mb-3">
              Bizning <span> professional </span> kurslarimiz
            </h2>
            <p className="title_14_400 leading-6">
              Bizning professional kurslarimiz orqali sotuvlaringizni qisqa
              muddat ichida tiklab olishingiz mumkin.
            </p>
          </div>
          
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          {
            isLoading ? 
            <div className='flex flex-wrap justify-center gap-x-3'>
            <CourseSkelron/> 
            <CourseSkelron/>
            <CourseSkelron/>
            <CourseSkelron/>
            </div>
            :
            data?.data?.slice(0,4).map((item, ind) =>(
                <CourseCard  key={ind} {...item}  />
            ))
           
            // <h1>
            //   Hech qanday kurs mavjud emas
            // </h1>
            
            }
          
        </div>
        <div className="py-3 px-22 justify-center mt-4 mx-auto flex ">
       
         {
          isLoading ? null : 
           <Link
                  to="/courses"
                  className="inline-flex btn-anim btn self-start text-center  w-full xl:w-1/4  sm:w-1/2 text-white bg-indigo-500 border-0 focus:outline-none hover:bg-indigo-600 rounded"
                >

                  <span className="text-white title_17_500"> Bizning kurslar</span>
            </Link>
             }
        </div>
      </div>
    </section>
  );
};

export default Content;
