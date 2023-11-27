import React from "react";
import { useState } from "react";
import { svg_lock, svg_play } from "../svg/sgv";
import { useNavigate } from "react-router-dom";
const Accardion_Main = ({ article, isActive,slug,  lastLesson }) => {
   const [isReady , setReady] = useState(false)

  const navigate = useNavigate();
    const handle = () => {
        
        setReady(true);
        navigate(`/courseMain/${slug.slug}/${article.id}`)
       
      };
    
  return (
    <div
       id={article.id}
      className={` ${ isActive ? '' : ""} px-5  py-4 flex cursor-pointer  items-center gap-x-4  `}
      onClick={() => handle()}
    >
      <span
    
        className={`${ lastLesson === article.id ? 'bg-[#00AE30]' :
          isReady ? "bg-[#00AE30]" : "bg-[#9e0505]"
        } w-[38px] h-[38px] rounded-full  grid place-items-center`}
      >
        { lastLesson === article.id ? svg_play :  !isReady ? svg_lock : svg_play}
      </span>
      <span className={` ${isReady ? 'text-[#00AE30]' : 'text-black'} text-left text-[16px] font-medium leading-5`}>
       {article?.title}
      </span>
    </div>
  );
};

export default Accardion_Main;
