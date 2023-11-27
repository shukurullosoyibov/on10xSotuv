import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
 import 'swiper/css/mousewheel';
import { svg_person_green } from '../svg/sgv';

const  Swipper = () => {
  return (
    <div class="flex flex-wrap -m-4">
    <div className="flex flex-wrap justify-center py-10 mx-auto -m-4 w-full  mb-10 px-4">
    <div className="p-2 md:w-[90%] ">
    <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={3}
    navigation
 
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >


        
     
     
     
<SwiperSlide>
      <div className="p-2 w-full  sm:flex hidden">
        <div className="flex h-full bg-[#F2F8FB] rounded-2xl p-5 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-white text-white flex-shrink-0">
              {svg_person_green}
            </div>
            <h2 className="title_18_600 leading-6 text-black">
              Eshonov Fakhriyor
            </h2>
          </div>
          <div className="flex-grow">
            <p className="title_16_400_06 leading-5">
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s
            </p>
          </div>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="p-2 w-full  sm:flex hidden">
        <div className="flex h-full bg-[#F2F8FB] rounded-2xl p-5 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-white text-white flex-shrink-0">
              {svg_person_green}
            </div>
            <h2 className="title_18_600 leading-6 text-black">
              Eshonov Fakhriyor
            </h2>
          </div>
          <div className="flex-grow">
            <p className="title_16_400_06 leading-5">
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s
            </p>
          </div>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="p-2 w-full  sm:flex hidden">
        <div className="flex h-full bg-[#F2F8FB] rounded-2xl p-5 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-white text-white flex-shrink-0">
              {svg_person_green}
            </div>
            <h2 className="title_18_600 leading-6 text-black">
              Eshonov Fakhriyor
            </h2>
          </div>
          <div className="flex-grow">
            <p className="title_16_400_06 leading-5">
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s
            </p>
          </div>
        </div>
      </div>
      </SwiperSlide>
     
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    
    
    </Swiper>
    </div>
    
    <div>
  <button className="swiper-button-prev swiper-button-disabled" role="button" ariaLabel="Previous slide" ariaControls="swiper-wrapper-94c09bfe52277621">
  </button>
  <button className="swiper-button-next swiper-button-disabled" role="button" ariaLabel="Next slide" ariaControls="swiper-wrapper-94c09bfe52277621" />
</div>
 </div>
  </div>
  );
};
export default Swipper