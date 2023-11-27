import React, { useState, useEffect } from "react";

import { initTE } from "tw-elements";

import useSound from "use-sound";
import mySound from "../sound/click.mp3";
import { Collapse, Dropdown, Ripple } from "tw-elements";



import "../style/Lesson.css";

import AccardionCard from "../img/AccardionCard";

import ModalSell from "../Component/ModalSell";
import { Outlet, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
initTE({ Dropdown, Collapse, Ripple });
const CourseMain = () => {
const slug = useParams();
const navigate = useNavigate();

 const section_API = `https://shark.brim.uz/api/course-manager/course/sections?key=${slug.slug}`;
 const token = localStorage.getItem('token');
  
  const [isReady, setReady] = useState(false);
  const [message, setMessage] = useState('');
  const [playSound] = useSound(mySound);
  const { isPending, error, data, isLoading } = useQuery({
    queryKey: ['repo'],
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
    
     if(token){
      console.log(token);

     }
     console.log(data);
     console.log(slug.slug);
    if(data?.status === 403){
      navigate(`/courseAbout/${slug.slug}`);
    }
   
  }, [])
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
  const itms = [
    {
      id:0,
      subtitle: ' 1.0 An easy and good start for the starters',
      items: [{
        id:0,
      title:'1 An easy and good start for the starters.',
      read: false
      },
      {
        id:1,
        title:'2 An easy and good start for the starters.',
      read: false
      },
      {
        id:2,
      title:'3 An easy and good start for the starters.',
      read: false
      }
    ]},

    {
      id:1,
      subtitle: '2.0 An easy and good start for the starters',
      items: [{
        id:0,
      title:'1 An easy and good start for the starters.',
      read: false
      },
      {
        id:1,
        title:'2 An easy and good start for the starters.',
      read: false
      },
      {
        id:2,
      title:'3 An easy and good start for the starters.',
      read: false
      }
    ]},
    
    {
      id:2,
      subtitle: ' 3.0 An easy and good start for the starters',
      items: [{
        id:0,
      title:'1 An easy and good start for the starters.',
      read: false
      },
      {
        id:1,
        title:'2 An easy and good start for the starters.',
      read: false
      },
      {
        id:2,
      title:'3 An easy and good start for the starters.',
      read: false
      }
    ]
    },
  ]
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
 const clicker = () =>{

 }
 const formattedDate = format12HourTime(inputDate);
  const handle = (e) => {
   

    setReady(!isReady);

    e.target.classList.toggle("active");
   
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

 
 if (error) return 'An error has occurred: ' + error.message
  
  
  const lastLesson = 2;
  return (
    <

    >
      <section className="">
        <div className="container cont py-9 mx-auto">
        
          <div className=" grid lg:grid-cols-2 grid-cols-1 gap-x-7 -mb-10 text-center">
            <div className="w-full mb-10">
           
                  <h2 className="title_24_500 leading-8 mb-[18px] text-left">
                    Kurs mavzulari
                  </h2>
                

                  { isLoading ? <h1>Loading...</h1> : 
                    data?.data?.sections?.map((item,id) =>(
                      <AccardionCard key={item.id} item={item} slug={slug} lastLesson={lastLesson} />
                  
                    ))
                  }
                
            </div>
            <Outlet/>
          </div>
        </div>
      </section>
         {
          false &&
          <ModalSell/>
         }
    </>
  );
};

export default CourseMain;
