import React from "react";
import SliderImport from "react-slick";
const Slider = SliderImport.default ?? SliderImport;

import Image1 from "../../assets/hero/headphone.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/macbook.png";
import Button from "../Shared/Button";

const HeroData = [
  {
    id: 1,
    img: Image1,
    subtitle: "beats Solo",
    title: "wireless",
    title2: "Headphone",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    img: Image2,
    subtitle: "beats Solo",
    title: "wireless",
    title2: "virtual",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    img: Image3,
    subtitle: "beats Solo",
    title: "Branded",
    title2: "Laptops",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Hero = ({}) => {
  const setting = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="container">
      <div className="overflow-hidden rounded-3xl min-h-[550px] hero-bg-color flex justify-center items-center">
        <div className="container pb-8 sm:pb-0">
          <Slider {...setting}>
            {HeroData.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* Text Section */}
                  <div
                    className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 
                  sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10"
                  >
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-2xl sm:text-6xl lg:text-2xl font-bold"
                    >
                      {data.subtitle}
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                    >
                      {data.title}
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-5xl uppercase text-white
                    dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold"
                    >
                      {data.title2}
                    </h1>

                    <div
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="500"
                      data-aos-delay="300"
                    >
                      <Button
                        text="Shop By Category"
                        bgColor="bg-primary"
                        textColor="text-white"
                      />
                    </div>
                  </div>

                  {/* Image Section */}
                  <div className="order-1 sm:order-2 flex justify-center items-center">
                    <img
                      data-aos="zoom-in"
                      data-aos-once="true"
                      src={data.img}
                      alt={data.title2}
                      className="w-[300px] h-[300px] sm:h-[300PX] sm:w-[450px] sm:scale-105 
                      lg:scale-110 object-contain mx-auto 
                      drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
