import React from 'react'
import { useState } from 'react';
import SellCourse from './SellCourse';

import frame_svg from "../svg/Frame.svg";

import {  useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
const ModalSell = ({data, slug}) => {
    const [hidden, setHidden] = useState(false);
    const [done, setDone] = useState(false);
    const navigate = useNavigate();
 

    

  return (
    <div
    id="authentication-modal"
    aria-hidden="true"
    className={`${
      hidden ? "hidden" : ""
    } overflow-x-hidden  bg-[#0F1F2C80] overflow-y-auto flex sm:h-full  fixed h-modal md:h-full top-4 left-0 right-0 md:inset-0 sm:align-bottom z-50 justify-center mx-auto items-center`}
  >
    <div className="relative w-full   mx-auto max-w-md px-4  grid place-items-center   h-screen md:h-auto">
    <AnimatePresence>
    <motion.div
      initial={{ opacity: 0, y: -100, scale:0.7 }} // Boshlang'ich holat
      animate={{ opacity: 1, y: 0, scale:1 }}
      exit={{ opacity: 0, scale: 0.7 }} // Animatsiya davomida
      transition={{ duration: 0.5 }} // Animatsiya davomiyligi
        >
      <div className="bg-white md:w-[416px]  rounded-3xl shadow relative dark:bg-gray-700">
        <div className="flex justify-end p-2">
          <button
            type="button"
            onClick={() => setHidden(!hidden)}
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-toggle="authentication-modal"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        {!done ? (
             <SellCourse setDone={setDone} data={data} ></SellCourse>
        ) : (
          <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: -100, scale:0.7 }} // Boshlang'ich holat
            animate={{ opacity: 1, y: 0, scale:1 }}
            exit={{ opacity: 0, scale: 0.7 }} // Animatsiya davomida
            transition={{ duration: 0.5 }} // Animatsiya davomiyligi
              >
          <div className="flex flex-col p-10">
            <img className="w=[90px] h-[90px]" src={frame_svg} alt="done" />
            <h2 className="title_24_600 leading-8 text-center">
              Kurs muvaffaqiyatli sotib olindi!
            </h2>
            <button className="btn mt-7 hover:bg-indigo-600 ">
              <p onClick={()=>navigate('/my-courses')} className=" grid place-items-center text-white ">
                Mening kurslarim
              </p>
            </button>
          </div>
          </motion.div>
          </AnimatePresence>
        )}
      </div>
      </motion.div>
          </AnimatePresence>
    </div>
  </div>
  )
}

export default ModalSell