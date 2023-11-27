import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const CourseSkelron = () => {
  return (
    <div>
      <div className="w-full">
        <div className="w-[286px] h-[203px]">
          <Skeleton className="h-full" />
        </div>

        <div className="p-4  w-full sm:mb-0 mb-6">
          <div className="rounded-lg overflow-hidden">
            <Skeleton />
          </div>
          <h2 className=" title_20_500 font-normal leading-6 mt-5">
            <Skeleton />
          </h2>
          <p className=" title_16_400 leading-5 mt-2">
            <Skeleton />
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseSkelron;
