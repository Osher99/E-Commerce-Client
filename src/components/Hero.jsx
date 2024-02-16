import React from 'react';
import CategoryNav from "./CategoryNav";
import MainSlider from "./MainSlider";
import promo_img_1 from "../img/promo_img1.png";
import promo_img_2 from "../img/promo_img2.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
      <section className="mb-[30px] pt-36 lg:pt-0">
        <div className="container mx-auto">
            <div className="flex flex-col gap-y-[30px] xl:flex-row xl:gap-x-[30px]">
                {/* promos */}
                <div className="flex flex-col gap-y-[30px] w-full mx-auto h-[500px] ">
                    {/* promo img 1 */}
                    <div className="grad flex-1 h-[250px] rounded-[8px] overflow-hidden relative p-6">
                        <div className="dir-rtl flex flex-col max-w-[71px] h-full justify-center">
                            <div className="text-[20px] uppercase font-medium leading-tight mb-4">
                                חסוך עד 35% על משחקים חדשים!
                            </div>
                            <Link to="products/1" className="uppercase text-accent">
                                קנה עכשיו
                            </Link>
                        </div>
                        <img className="absolute z-20 right-6 h-full top-1" src={promo_img_1} alt=""/>
                    </div>
                    {/* promo img 2 */}
                    <div className="grad flex-1 h-[250px] rounded-[8px] overflow-hidden relative p-6">
                        <div className="dir-rtl flex flex-col max-w-[71px] h-full justify-center">
                            <div className="text-[20px] uppercase font-medium leading-tight mb-4">
                                חסוך עד 35% על משחקים חדשים!
                            </div>
                            <Link to="products/1" className="uppercase text-accent">
                                קנה עכשיו
                            </Link>
                        </div>
                        <img className="absolute z-20 right-0 h-[260px] top-[-10px]" src={promo_img_2} alt=""/>
                    </div>
                </div>
                {/* main slider */}
                <div className="w-full max-w-lg lg:max-w-[734px] mx-auto">
                    <MainSlider />
                </div>
                {/* sidebar */}
                <div>
                    <CategoryNav />
                </div>
            </div>
        </div>
      </section>
  );
};

export default Hero;
