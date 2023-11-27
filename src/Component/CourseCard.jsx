import React from 'react'
import { Link } from 'react-router-dom'
import { svg_batafsil } from '../svg/sgv'

const CourseCard = ({imageUrl,title ,short_description,slug}) => {
  return (
    <div className=  {`  rounded-lg transition-all duration-300 course-card-hover cursor-pointer   p-4 sm:w-1/2 xl:w-1/4 w-full sm:mb-0 mb-6`}   >
            <div className="rounded-lg h-64 overflow-hidden">
            <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src={imageUrl}
            />
            </div>
            <h2 className=" title_20_500 font-normal leading-6 mt-5">
           {title}
            </h2>
            <p className=" title_16_400 leading-5 mt-2">
           {short_description.slice(0,30)}...
            </p>
            <Link to={`/courseMain/${slug}`} className="btn-anim title_16_500_green inline-flex gap-x-3 items-center mt-3">
            <span>Batafsil ko'rish</span>
            {svg_batafsil}
            </Link>
  </div>
  )
}

export default CourseCard