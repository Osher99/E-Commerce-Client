import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../slider.css';
import { Pagination } from 'swiper';
import { getMainSliderItems } from "../utils/utils.ts";
import { Link } from "react-router-dom";

const MainSlider = () => {
  const items = getMainSliderItems();
  return (
      <Swiper
          modules={[Pagination]}
          loop={false}
          navigation={false}
          pagination={{
            clickable: true
          }}
          className="mainSlider h-full bg-primary xl:bg-mainSlider xl:bg-no-repeat max-w-lg lg:max-w-none rounded-[8px] overflow-hidden drop-shadow-2xl mb-[-15px]"
      >
        <>
            {
                items?.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col lg:flex-row h-full p-[20px] ">
                                {/* text */}
                                <div className="w-full lg:flex-1 leading-relaxed">
                                    <div className="text-accent uppercase mb-1 text-center text-[18px] dir-rtl">{item?.pretitle}</div>
                                    <div className="text-3xl md:text-[26px] font-semibold uppercase leading-none text-center xl:mb-20 dir-rtl">
                                        {item?.titlePart1} <br />
                                        {item?.titlePart2} <br />
                                        <div className="flex flex-col justify-center items-center leading-relaxed mt-[4px]">
                                            <Link to="products/5" className="btn btn-accent mx-auto lg:mx-0 text-center lg:text-right dir-rtl">
                                                {item?.btnText}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* image */}
                            <div className="flex-1">
                                <img className="xl:absolute xl:-right-0 xl:-bottom-12 w-[100%] h-[76%]" src={item?.img} alt="" />
                            </div>
                        </SwiperSlide>
                    );
                })
            }
        </>
      </Swiper>
  );
};

export default MainSlider;
