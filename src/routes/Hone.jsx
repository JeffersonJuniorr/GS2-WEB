// Home.jsx
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
              className="w-full h-[100vh] object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={imagem2}
              alt="Imagem 2"
              className="w-full h-[100vh] object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={imagem3}
              alt="Imagem 3"
              className="w-full h-[100vh] object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>

   
      <Sobre /> 

      {/* Cards */}
      <div className="flex justify-center px-4 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-screen-lg justify-items-center">
          <div className="p-4 w-60">
            <img
              src={prototipo1}
              alt="Imagem 1"
              className="rounded-3xl mb-4 w-full h-auto object-cover shadow-none"
            />
            <h3 className="text-lg font-semibold mb-2">Central de Dispositivos</h3>
            <p className="text-gray-600 text-sm">
              Uma Central de Dispositivos cadastrados.
            </p>
          </div>
          <div className="p-4 w-60">
            <img
              src={prototipo2}
              alt="Imagem 2"
              className="rounded-3xl mb-4 w-full h-auto object-cover shadow-none"
            />
            <h3 className="text-lg font-semibold mb-2">Grafico Intuitivo</h3>
            <p className="text-gray-600 text-sm">
              Graficos para melhor visualização.
            </p>
          </div>
          <div className="p-4 w-60">
            <img
              src={prototipo3}
              alt="Imagem 3"
              className="rounded-3xl mb-4 w-full h-auto object-cover shadow-none"
            />
            <h3 className="text-lg font-semibold mb-2">Cenários do Dia a Dia</h3>
            <p className="text-gray-600 text-sm">
              Consumo detalhado dos seus aparelhos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
