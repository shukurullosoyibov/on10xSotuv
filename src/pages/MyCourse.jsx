import React from 'react'
import CourseCard from '../Component/CourseCard'
import { useState } from 'react'
import axios from 'axios';

import { useQuery } from 'react-query';
import { useEffect } from 'react';
import CourseSkelron from '../Component/Skeleron/CourseSkelron';
export default function MyCourse() {
    const my_course_API = 'https://shark.brim.uz/api/profile-manager/profile/my-courses';
   
    function fetchMyCourse () {
        fetch(my_course_API,)
    }

  
  const [dataa, setData] = useState('');
  const [notFound, setNotFound] = useState(false)  ;
  const token = localStorage.getItem('token');
  const userInfoFetch = async (api, token, setData) => {
    try {
      if (token) {
        const response = await axios.get(api, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        if (response.status !== 200) {
          throw new Error('Network response was not ok.');
        }
  
        const datta = response.data;   
       
          setData(datta); // Update the state with fetched data
          if(datta.message === "Hozircha hech qanday kurs topilmadi!"){
            setNotFound(!notFound);
          }
        
      }
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
      throw error; // Throw error to handle at a higher level if needed
    }
  };
  
  const { isLoading, data, error,isFetching } = useQuery('info', () => userInfoFetch(my_course_API, token, setData), {
    retry: 2, // Maximum number of retries (numeric value)
  });
  
  useEffect(() => {
    userInfoFetch(my_course_API, token, setData);
  }, [token]);
  
  if(dataa){
    console.log(dataa);
  }
  return (
    <div className=' container py-10 min-h-[580px]'>
      <h2 className='title_28_600' >Mening kurslarim</h2>
       {
        isLoading ? 
        <div className='flex flex-wrap justify-center t-4 gap-x-3'>
        <CourseSkelron/> 
        <CourseSkelron/>
        <CourseSkelron/>
        <CourseSkelron/>
        </div>
        :
        <div className='flex justify-between flex-wrap lg:flex-nowrap'>
              
          {dataa?.data?.items?.map((lesson) =>(

            <div className=  {`  rounded-lg  flex flex-wrap lg:flex-nowrap gap-x-6  cursor-pointer `}   >
                <div className="rounded-lg  ">
                <img
                    alt="content"
                    className="object-cover rounded-lg object-center h-[228px] w-[286px]"
                    src={lesson.imageUrl}
                />
                </div>
                <div className='flex flex-col justify-between'>

                <h2 className=" title_24_600 font-normal leading-6">
                {lesson.title}
                </h2>
                <p className='title_16_400 leading-4 text-black opacity-50'>
                  narxi
                </p>
                      <div className="flex justify-between md:justify-center  gap-x-5 mb-6">
                    <div className="flex flex-col justify-center items-center px-6 py-3  w-full  bg100">
                      <h2 className="title_24_600 leading-10">
                        100
                      </h2>
                      <p className="text-[12px] font-normal">Jami darslar </p>
                    </div>
                    <div className="flex flex-col justify-center items-center px-3 py-3  w-full  rounded-xl bg-[#00AE30]">
                      <h2 className="text-[24px] font-semibold text-white leading-10">
                        100
                      </h2>
                      <p className="text-[12px] font-normal text-white">Yakunlandi</p>
                    </div>
                  </div>
                  <div className='title_14_400 opacity-50 leading-3 flex justify-between flex-nowrap'>
                  <span>Faollik darajasi </span>
                  <span>{lesson?.completedPercent}%</span>

                  </div>
                  <div className='w-full bg-[#E6EDF2] rounded-[50px] overflow-hidden h-3'>
                    {/* <div  className= 'w-[0%] bg-[#098BED] rounded-[50px] h-full'> */}
                    <div  className={ `w-[${lesson?.completedPercent}%] bg-[#098BED] rounded-[50px] h-full`}>
  
                    </div>
                  </div>
                </div>
            </div>
          ))}
          {
            notFound && <h1 className='font-bold uppercase text-center'>Hozircha darslar mavjus emas</h1>
          }
        </div>
       }
    </div>
  )
}
