import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import Sobre from "./Sobre";

import imagem1 from "../assets/energia1.jpg";
import imagem2 from "../assets/energia2.jpg";
import imagem3 from "../assets/energia3.jpg";

import prototipo1 from "../assets/app1.png"
import prototipo2 from "../assets/app2.png"
import prototipo3 from "../assets/app3.png"

function Home() {
  return (
    <div className="relative bg-gray-50">
      {/* Slideshow */}
      <div className="mb-12">
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          spaceBetween={0}
          slidesPerView={1}
          className="w-screen"
        >
          <SwiperSlide>
            <img
              src={imagem1}
              alt="Imagem 1"
              className="w-screen h-[80vh] object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={imagem2}
              alt="Imagem 2"
              className="w-screen h-[80vh] object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={imagem3}
              alt="Imagem 3"
              className="w-screen h-[80vh] object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>

   
      <Sobre /> 

      {/* Cards */}
      
    </div>
  );
}

export default Home;
