import React, { useEffect, useState } from 'react'
import { svg_batafsil } from '../svg/sgv'
import { Link, useNavigate } from 'react-router-dom'
import '../App.css'
import 'react-loading-skeleton/dist/skeleton.css'
import CourseSkelron from '../Component/Skeleron/CourseSkelron'
import coursePhoto1 from '../img/Rectangle 3 (2).png'
import coursePhoto2 from '../img/Rectangle 3 (3).png'
import coursePhoto3 from '../img/Rectangle 3 (4).png'
import coursePhoto4 from '../img/Rectangle 3.png'

import { useQuery } from 'react-query'
 const token = localStorage.getItem('token');
export default function CoursesSection () {
  const [article, setArticle] = useState([]);
  const [errors, setErrors] = useState(null);
  const [slug, setSlug] = useState('');
   const Courses_API = 'https://shark.brim.uz/api/course-manager/course/all'
   const section_API = `https://shark.brim.uz/api/course-manager/course/sections?key=${slug}`;
 const navigate = useNavigate();
const { isPending, error, data, isLoading } = useQuery({
  queryKey: ['repoData'],
  queryFn: () =>
    fetch(Courses_API,{
      method: 'GET',
    }).then(
      (res) => res.json(),
    ),
})

const getIn = async (slug) =>{
  const request = await fetch(section_API,{
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  if(request.ok){
    const data = await request.json();
    setArticle(data);
  }
}
   
const handleCourse = async (slug) => {
  console.log(slug);
  try {
    const request = await fetch(
      `https://shark.brim.uz/api/course-manager/course/sections?key=${slug}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (request.ok) {
      const data = await request.json();
      setArticle(data);
      if(data.status === 200){
        console.log(data);
        navigate(`/courseMain/${slug}`)
      }
      else if (data.status === 403){
        navigate(`/courseAbout/${slug}`)
        console.log(data.message);
      }
    }
  } catch (error) {
    console.error('Error occurred:', error);
  }
};

useEffect(() => {window.scrollTo(0, 0); },[]);

  return (
    <section
    
  
    className="text-gray-600 body-font">
      <div className="container px-5 py-24 cont mx-auto">
        <div className="flex flex-col">
          <div className="flex   md:flex-row text-left   w-full sm:justify-between justify-start mb-7">
            <h2 className=" self-start leading-9  title_34_600   mb-3">
            Kurslar
            </h2>
           <p
           className='title_18_400 leading-6 sm:block sm:w-[491px] hidden'
           >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
          </div>
         
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      {isLoading ? (
        <div className="flex justify-center gap-x-12 items-center mx-auto">
          <div className="flex">
            <CourseSkelron />
          </div>
          <div className="flex">
            <CourseSkelron />
          </div>
          <div className="md:flex sm:hidden">
            <CourseSkelron />
          </div>
          <div className="md:hidden xl:flex">
            <CourseSkelron />
          </div>
        </div>
      ) : data && data?.data?.items?.map((item, id) => {
          return (
            <div key={id} className="p-4 sm:w-1/2 xl:w-1/4 w-full transition-all duration-300 course-card-hover hover:rounded-lg cursor-pointer sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt={item.title}
                  className="object-cover object-center h-full w-full"
                  src={item.imageUrl}
                />
              </div>
              <h2 className="title_20_500 font-normal leading-6 mt-5">
                {item.title}
              </h2>
              <p className="title_16_400 leading-5 mt-2">
                {item.short_description.slice(0,50)}...
              </p>
              {/* <Link to={`/courseMain/${item.slug}`} className="title_16_500_green btn-anim inline-flex gap-x-3 items-center mt-3">
                <span>Batafsil ko'rish</span>
                {svg_batafsil}
              </Link> */}
              <span onClick={()=>handleCourse(item.slug)} className="title_16_500_green btn-anim inline-flex gap-x-3 items-center mt-3">
                <span>Batafsil ko'rish</span>
                {svg_batafsil}
              </span> 
            </div>
          );
        })}
    </div>
        {/* <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          { isLoading ? 
          
        <div className='flex  justify-center gap-x-12 items-center mx-auto'>

            <div  className='flex'><CourseSkelron/></div>
            <div  className='flex'><CourseSkelron/></div>
            <div  className='md:flex sm:hidden'><CourseSkelron/></div>
            <div  className=' md:hidden xl:flex'><CourseSkelron /></div>
         </div>
       : data &&  data.data.items.maps((item, id) =>{
        return  <div  key={id}  className="p-4 sm:w-1/2 xl:w-1/4 w-full transition-all duration-300 course-card-hover cursor-pointer sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img
            alt={item.title}
            className="object-cover object-center h-full w-full"
            src={item.imageUrl}
          />
        </div>
        <h2 className=" title_20_500 font-normal leading-6 mt-5">
        {item.title}
        </h2>
        <p className=" title_16_400 leading-5 mt-2">
        {item.short_description}
        </p>
        <Link to={`/courseAbout/${item.slug}`} className="title_16_500_green btn-anim inline-flex gap-x-3 items-center mt-3">
        <span>Batafsil ko'rish</span>
          {svg_batafsil}
        </Link>
      </div>
        
           }
        </div>
         */}
      </div>
    </section>
  )
}

  