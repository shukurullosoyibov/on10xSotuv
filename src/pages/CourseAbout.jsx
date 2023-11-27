import React, { useEffect, useState } from "react";
import { svg_done} from "../svg/sgv";
import { Collapse, initTE } from "tw-elements";
import "../style/Lesson.css";
import AccardionCard from "../img/AccardionCard";
import ModalSell from "../Component/ModalSell";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import TGN_9 from '../img/TGN_9.png'
import AccardionCards from "./AccardionCards";

import { useNavigate } from "react-router-dom";
initTE({ Collapse });
const CourseAbout = () => {
  const {slug} = useParams();
  const navigate = useNavigate();
  const courses_Slug_API = `https://shark.brim.uz/api/course-manager/course/detail?key=${slug}`;
  const [urls, setUrl] = useState(null);
  const token = localStorage.getItem('token');
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch(courses_Slug_API,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), 
    
    }).then(res =>
      res.json()
    )
  )
  const handleCourseSale = async (slug) => {
    console.log(slug);
    try {
      const request = await fetch(
        `https://shark.brim.uz/api/course-manager/course-payment/get-payme-url?courseKey=${slug}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (request.ok) {
        const data = await request.json();
        setUrl(data);
        if(data.status === 200){
          
          // href=(urls?.data.url);
          // target=(_blank);
        }
        else if (data.status === 403){
          navigate(`/courseAbout/${slug}`)
          
        }
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };
  const [hidden, setHidden] = useState(false);
  const [done, setDone] = useState(false)
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
 
      useEffect(() => {
        window.scrollTo(0, 0);
     
      }, [])



  return (
    <
    >
      <section className="text-gray-600 body-font">
        <div className="container cont py-9 mx-auto">
          <div className=" grid lg:grid-cols-[55%,1fr] grid-cols-1  flex-wrap-mb-10 text-center">
            <div className="w-full mb-10  space-x-2 px-2">
              <div className=" text-left title_34_600 leading-normal mb-5">
                <h2>{data?.data?.title}</h2>
              </div>
              <p className=" w-ful title_16_400_08 hidden md:flex leading-6 text-left mb-6">
              {data?.data?.short_description}
              </p>

              <div className="mx-auto">
                <div className="grid lg:grid-cols-2 grid-cols-1  md:gap-x-12">
                  <div className=" md:w-[90%] md:mb-6">
                    <div className=" flex flex-col gap-y-3 justify-start rounded-lg">
                      <div className="w-10 h-10 inline-flex items-center ml-0 justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                        {svg_done}
                      </div>
                      <h2 className="title_18_500 leading-6 text-left  ">
                        An easy and good start for the starters.
                      </h2>
                      <p className="title-16_400 leading-5 text-left ">
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in
                      </p>
                    </div>
                  </div>
                  <div className="md:w-[90%] md:mb-6">
                    <div className=" flex flex-col gap-y-3 justify-start rounded-lg">
                      <div className="w-10 h-10 inline-flex items-center ml-0 justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                        {svg_done}
                      </div>
                      <h2 className="title_18_500 leading-6 text-left  ">
                        An easy and good start for the starters.
                      </h2>
                      <p className="title-16_400 leading-5 text-left ">
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in
                      </p>
                    </div>
                  </div>
                  <div className="md:w-[90%]  md:mb-6">
                    <div className=" flex flex-col gap-y-3 justify-start rounded-lg">
                      <div className="w-10 h-10 inline-flex items-center ml-0 justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                        {svg_done}
                      </div>
                      <h2 className="title_18_500 leading-6 text-left  ">
                        An easy and good start for the starters.
                      </h2>
                      <p className="title-16_400 leading-5 text-left ">
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in
                      </p>
                    </div>
                  </div>
                  <div className="md:w-[90%] md:mb-6">
                    <div className=" flex flex-col gap-y-3 justify-start rounded-lg">
                      <div className="w-10 h-10 inline-flex items-center ml-0 justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                        {svg_done}
                      </div>
                      <h2 className="title_18_500 leading-6 text-left  ">
                        An easy and good start for the starters.
                      </h2>
                      <p className="title-16_400 leading-5 text-left ">
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="title_24_500 leading-8 mb-[18px]">
                    Kurs mavzulari
                  </h2>
                  {  data &&
                    data?.data?.requirements?.map((article,idx) =>(
                      <AccardionCards key={article.id} article={article} idx={idx}  ></AccardionCards>
                  
                    ))
                  }
                  
                </div>
              </div>
            </div>
            <div className="w-full mb-10 xl:px-2">
              <div className=" mb-8 relative grid place-items-center rounded-[18px] w-full h-auto overflow-hidden">
                <img
                  alt="content"
                  className=" left-0 right-0 bottom-0 top-0 relative w-full   object-cover object-center "
                  src={data?.data?.imageUrl}
                />

                {/* <img
                  src="https://www.figma.com/file/BmZ9jYP8dSmEyJde7p3oqq/image/40e8e59f22524a7ebce7164ce3ea4684d6b9c162"
                  alt="you tube"
                  className="absolute h-[78px] w-[105px] rounded-xl "
                /> */}
              </div>
              <div className="sells rounded-[18px]    w-full p-7 flex flex-col justify-items-start gap-y-4 ">
                <div className=" flex flex-nowrap items-center ">
                  <img
                    src={TGN_9}
                    alt="icon"
                    className="w-[80px] h-[80px]  "
                  />

                  <h2 className="title_28_600 leading-normal mr-[18px]">
                    <span>Sotib</span> olish
                  </h2>
                </div>
                <p className="title_16_400_08 leading-6  text-left ">
                  llo natoque provident potenti ullamcorper quis hymenaeos
                  lectus nobis nobis dui.
                </p>
                <div className="flex justify-between">
                  <p className="title_16_400 opacity-40">Kurs narxi</p>
                  <p className="  text-[24px] font-semibold text-[#00AE30]">{data?.data?.priceFormat}</p>
                </div>
                <button
                  onClick={() => setHidden(!hidden)}
                  className="btn hover:bg-indigo-600 text-white  inline title_17_500"
                >
                  Sotib olish
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </section>
      
      {
        hidden && <ModalSell data={data} slug={slug}/>
      }

      {/* kurs sotib olish */}
     
    </>
  );
};

export default CourseAbout;
