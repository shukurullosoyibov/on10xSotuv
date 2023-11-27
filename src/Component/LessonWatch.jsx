
import DropDown from './DropDown'

import React, { useState, useEffect } from "react";
import svg_emoji from '../svg/emoji-smile.svg'
import noCommnet from '../img/notComments.png';
import { initTE } from "tw-elements";
import EmojiPicker from 'emoji-picker-react';
import useSound from "use-sound";
import mySound from "../sound/click.mp3";
import { Collapse, Dropdown, Ripple } from "tw-elements";



import "../style/Lesson.css";

import AccardionCard from "../img/AccardionCard";
import IzohCard from "../img/IzohCard";
import SellCourse from "../Component/SellCourse";

import ModalSell from "../Component/ModalSell";
import {  useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import VideoPlayer from './VideoPlayer';
import { toast } from 'react-toastify';

initTE({ Dropdown, Collapse, Ripple });
const LessonWatch = () => {
    const navigate = useNavigate();
    const {id, slug} = useParams();
    const section_API = `https://shark.brim.uz/api/course-manager/course/watch?lessonKey=${id}`;
    const token = localStorage.getItem('token');
  const [isReady, setReady] = useState(false);
  const [message, setMessage] = useState('');
  const [playSound] = useSound(mySound);
  const { isPending, error, data, isLoading, refetch  } = useQuery({
    queryKey: ['lesso'],
    queryFn: () =>
      fetch(section_API,{
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(
        (res) => res.json(),
      ),
  })

  
  useEffect(() => {
    window.scrollTo(0, 0);

  }, [])
//  useEffect(()=>{
   
//     refetch();
//  },[id])
  const [izohlar, setIzohlar] = useState( [

      {
        id:0,
        usename:' Soyibov Shukurullo',
        data: '13.09.2023 1:59',
        user_izoh: 'Repellat perspiciatis cum! Doloremque ea viverra eu doloremque tellus aliqua gravida fuga dolorum augue, donec beatae. Class urna et doloremque facilisis autem risus fuga nullam quibusdam, tortor deleniti, accumsan dolorem? Posuere hac? Tellus maiores ullam ullamcorper, nostrud lacinia veniam torquent? Consequuntur a',
        javob_izohlar:[
          {
            id:0,
            usename: 'begzod ismoilov',
            data: '13.09.2023 1:59',
            izoh: 'Repellat perspiciatis cum! Doloremque ea viverra eu',

          }
        ]
      },
      {
        id:1,
        usename:' Otajonov Dostonbek',
        data: '13.09.2023 1:59',
        user_izoh: 'Repellat perspiciatis cum! Doloremque ea viverra eu doloremque tellus aliqua gravida fuga dolorum augue, donec beatae. Class urna et doloremque facilisis autem risus fuga nullam quibusdam, tortor deleniti, accumsan dolorem? Posuere hac? Tellus maiores ullam ullamcorper, nostrud lacinia veniam torquent? Consequuntur a',
        javob_izohlar:[
          {
            id:0,
            usename: '',
            data: '',
            izoh: '',

          }
        ]
      },
      {
        id:2,
        usename:' Hayrullo Ermatov',
        data: '13.09.2023 1:59',
        user_izoh: 'Repellat perspiciatis cum! Doloremque ea viverra eu doloremque tellus aliqua gravida fuga dolorum augue, donec beatae. Class urna et doloremque facilisis autem risus fuga nullam quibusdam, tortor deleniti, accumsan dolorem? Posuere hac? Tellus maiores ullam ullamcorper, nostrud lacinia veniam torquent? Consequuntur a',
        javob_izohlar:[
          {
            id:0,
            usename: '',
            data: '',
            izoh: '',

          }
        ]
      },



  ]
  )
 
  const inputDate = new Date();
  function format12HourTime(date) {
    const years = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12; // 0 soati 12 ga o'zgardi.
    const formattedMinutes = minutes.toString().padStart(2, "0");

    return `${day}:${month}:${years} ${formattedHours}:${formattedMinutes} ${ampm}`;
  }
 
 const formattedDate = format12HourTime(inputDate);
  const handle = (e) => {
    // let prev = color;

    setReady(!isReady);

    e.target.classList.toggle("active");
    console.log(e.target);
  };

 const handleAddComment = (e) => {
  e.preventDefault();
  playSound();
  const newIzohlarList = [...izohlar];
  const newComment = {
    id: newIzohlarList.length, // or use a unique identifier library
    usename: 'Mehmon',
    data: formattedDate,
    user_izoh: message,
    javob_izohlar: [
      {
        id: 0,
        usename: '',
        data: '',
        izoh: '',
      },
    ],
  };

  newIzohlarList.push(newComment);
  setIzohlar(newIzohlarList);
  setMessage(''); // Clear the message after adding
};
 const [cll, setCll] = useState(false)
 const cl = ()=>{
  setCll(!cll);
 }

 const onEmojiClick = ({ emoji }) => {
  setMessage(`${message} ${emoji}`);

 }
 const nextLesson = () =>{
     if( data.data.nextLesson){
        navigate(`/courseMain/${slug}/${data.data.nextLesson.id}` );
        
     }
   
 }
 const prevLesson = () =>{
     if( data?.data?.prevLesson){
        navigate(`/courseMain/${slug}/${data?.data?.prevLesson?.id}` );
        
     }
     const theEnd = async () =>{
      const request = await  fetch(`/course-manager/course/mark-as-completed?lessonKey=${data?.data?.prevLesson?.id}`,{
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      const response  = await request.json();
      if(response?.message === 'success'){
          toast.success('darsni muaffiqiyatli yakunladiz!!!');
      }
     }
     theEnd();
   
 }
 if(data){
    
    console.log(data);
    console.log(slug);
 }
  return (
<div className="w-auto mb-10  pl-2">
              <h2 className="text-left  md:text-[28px]  text-[24px] font-semibold leading-normal  mb-[18px]">
                {  isPending ? "Loading..." : data?.data?.lesson.title}
              </h2>
              <div className=" mb-8 relative grid place-items-center  rounded-[18px] w-full h-auto overflow-hidden">
                {/* <img
                  alt="content"
                  className=" left-0 right-0 bottom-0 top-0 relative object-cover object-center h-full w-full"
                  src={data?.data?.course?.imageUrl}
                /> */}
                { data && data?.data?.lesson ?

                <VideoPlayer videoUrl={data?.data?.lesson?.srcUrl}/>
               
                :
                'hozirda dars videosi mavjud emas'
                  }
               
              </div>
              {
                data?.data?.lesson?.filesCount > 0 ?  <DropDown  files={ data.data.lesson.files}  />   :  null
              }
               <p className="title_16_400 leading-5 text-left mb-6 border-b pb-6 "   dangerouslySetInnerHTML={{ __html: data && data?.data?.lesson?.description }}>
                 
                </p>
             <div className='flex flex-nowrap justify-between mb-6'>
                    <p className="text-left md:text-[24px]  text-[18px] font-semibold leading-6 md:leading-8 mb-5">Izohlar</p>
                    {
                        data?.data?.nextLesson ? 
                    
                    <button type='button' onClick={()=>nextLesson()}  className='btn text-white transition-all duration-200 active:bg-[#00ae31a0] shadow-2xl'>
                        Oldingi dars
                    </button>
                    : null

                    }
                     {
                        data?.data?.prevLesson ? 
                    
                    <button type='button' onClick={()=>prevLesson()}  className='btn text-white transition-all duration-200 active:bg-[#00ae31a0] shadow-2xl'>
                        Keyingi dars
                    </button>
                    : null

                    }

             </div>
              {
               izohlar ?  izohlar?.map((item, ind) =>(
                  // <IzohCard key={item.id} {...item} />
                  <IzohCard key={item.id} {...item} usename={item.usename} data={item.data} user_izoh={item.user_izoh} javob_izohlar={item.javob_izohlar} id={item.id}/>

                ))
                :
                <div className="izohlar mb-5  gap-x-[18px] p-5 flex flex-col items-center justify-center title_16_400 leading-5" >
                  <img src={noCommnet} alt="izohlar mavjud emas" className=" w-[150px]  mb-[18px]" />
                  <div className="w-[223px]">
                   <h2>Hozircha hech qanday izohlar topilmadi!</h2>
                  </div>
                </div>
              }
              <div className=" relative  flex flex-nowrap rounded-xl bg-[#F8FAFC]  border-[#CCD3DF]-100 ">
                   <form  className="w-full flex flex-col ">
                    <div className=" relative">
                      <label htmlFor="comment" className="">
                        <textarea name="comment" idcomment  rows="3" onChange={(e)=>setMessage(e.target.value)} value={message} placeholder="izohizni yozing..." 
                        className="bg-[#F8FAFC]   resize-none p-3 rounded-xl  placeholder:text-gray-300 text-[16px] shadow-none text-gray-900 outline-none border-0 w-full"></textarea>
                      </label>
                    </div>
                     <div className=" flex justify-between">
                      <span onClick={cl}
                        className="cursor-pointer hover:opacity-50 active:opacity-75"
                      >
                        <img src={svg_emoji} alt="emoji" className="w-[42px] h-[42px]" />
                      </span>
                     
                      <button onClick={(e)=>handleAddComment(e)} type="button" className=" hover:opacity-50 active:opacity-75 relative p-2 mr-3 mb-3 bg-[#098BED] w-[42px] h-[42px] grid place-items-center rounded-full">
                          <span className=" cursor-pointer  ">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black">
                                <path d="M7.2666 18.7228C6.96452 18.8435 6.6779 18.8178 6.40675 18.6458C6.13558 18.4738 6 18.2233 6 17.8942V13.6731L12.923 12L6 10.327V6.10587C6 5.7768 6.13558 5.52627 6.40675 5.35427C6.6779 5.18225 6.96452 5.15659 7.2666 5.27729L21.223 11.1616C21.5948 11.3281 21.7806 11.6082 21.7806 12.0019C21.7806 12.3955 21.5948 12.6744 21.223 12.8385L7.2666 18.7228Z" fill="white"/>
                              </svg>
                          </span>
                        </button>
                     </div>
                      
                    
                     <div className="absolute bottom-0 right-0 z-10">
                       {
                        cll ?  <EmojiPicker  onEmojiClick={onEmojiClick} />  : null
                       } 
                     </div>
                   </form> 
                   
                   
              </div>
              
            </div>
  )
}

export default LessonWatch
