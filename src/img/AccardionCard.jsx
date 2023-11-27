import React, { useState } from "react";
import Accardion_Main from "./Accardion_Main";
import { svg_arrow_bottom } from "../svg/sgv";

const AccardionCard = ({ item, id, slug, lastLesson }) => {
  
  const [isActive,setActive] = useState(true);
 
  const clicker = () =>{
    setActive(!isActive);
  } 
     
  return (
    <div className="accordion-card">
      {
       
   
      <div className="rounded-2xl border mb-5 transition-all  duration-300 ease-in-out bg-[#F2F8FB] ">
        <h2 onClick={()=>clicker(id)} className="mb-0 ml-0 "  id={id}>
          <button
            className="group rounded-2xl bg-[#F2F8FB]  flex items-start w-full justify-start items-left justify-items-start text-left rounded-t-[15px] border-0 px-5 py-4 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none  [&:not([data-te-collapse-collapsed])]:bg-[#F2F8FB] [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] "
            type="button"
          >
            <span className={`${ isActive ? 'rotate-[0deg]' : 'rotate-[180deg]'}  ml-0 rounded-full justify-center grid place-items-center shrink-0 bg-[#E6F1F6] w-[38px] h-[38px] relative z-20  fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none `}  >
              {svg_arrow_bottom}
            </span>

            <h1 className="ml-[18px] title_18_500 leading-6 flex flex-col">
              {item?.title}
              <p className="title_14_400 leading-[18px] ">{item?.activeLessonsCount} dars</p>
            </h1>
          </button>
        </h2>
        <div
          id={id} 
          className={` ${ isActive ? 'h-w block ' : 'h-0 hidden'} transition-all relative overflow-hidden  duration-300 ease-in-out `}
       
        >
          { item?.activeLessons ?
             item?.activeLessons.map((article, ind) => <Accardion_Main key={article.id} isActive={isActive} article = {article} slug={slug} lastLesson={lastLesson} />)
            : "ma'lumot topilmadi"}
        </div>
      </div>
         }
    </div>
  );
};

export default AccardionCard;
