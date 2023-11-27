import React from "react";
import { useState } from "react";
import { svg_lock, svg_play } from "../svg/sgv";
import { useNavigate } from "react-router-dom";
const AccardionMain = ({ article, isActive,slug }) => {
   const [isReady , setReady] = useState(false)
  //  icon = document.querySelector('#icon')
  const navigate = useNavigate();
    const handle = () => {
        
        setReady(true);
        navigate(`/courseMain/${slug.slug}/${article.id}`)
        // e.target.classList.toggle("active");
        // icon.classList.replace("fa-circle-notch", "fa-check");
      };
    
  return (
    <div
       id={article.id}
      className={` ${ isActive ? '' : ""} px-5  py-4 flex cursor-pointer  items-center gap-x-4  `}
      onClick={() => handle()}
    >
      <span
    
        className={`${
          isReady ? "bg-[#00AE30]" : "bg-[#9e0505]"
        } w-[38px] h-[38px] rounded-full  grid place-items-center`}
      >
        {   !isReady ? svg_lock : svg_play}
      </span>
      <span className={` ${isReady ? 'text-[#00AE30]' : 'text-black'} text-left text-[16px] font-medium leading-5`}>
       {article?.title}
      </span>
    </div>
  );
};

export default AccardionMain;
