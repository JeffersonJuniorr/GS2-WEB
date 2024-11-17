import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

function Home() {
  return (
    <div className="bg-gray-50 p-6">
      
      <h1 className="text-4xl font-bold text-center mb-8">Bem-vindo à Nossa Plataforma</h1>

      {/* Slideshow */}
      <div className="w-full max-w-4xl mx-auto mb-12">
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          className="rounded-lg shadow-md"
        >
          <SwiperSlide>
            <img
              src="https://via.placeholder.com/800x400?text=Imagem+1"
              alt="Imagem 1"
              className="w-full h-64 object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://via.placeholder.com/800x400?text=Imagem+2"
              alt="Imagem 2"
              className="w-full h-64 object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://via.placeholder.com/800x400?text=Imagem+3"
              alt="Imagem 3"
              className="w-full h-64 object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Texto sobre o tema */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-2xl font-semibold mb-4">Sobre o Tema</h2>
        <p className="text-gray-700 leading-relaxed">
          Nossa solução é focada em melhorar a gestão energética para garantir um futuro sustentável. 
          Aqui você encontrará ferramentas intuitivas e visualizações práticas para acompanhar seus 
          dados em tempo real e tomar decisões conscientes sobre o consumo energético.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
          <img
            src="https://via.placeholder.com/300x200?text=Imagem+1"
            alt="Imagem 1"
            className="rounded-md mb-4 w-full h-40 object-cover"
          />
          <h3 className="text-lg font-semibold mb-2">Título do Card 1</h3>
          <p className="text-gray-600 text-sm">
            Descrição breve da solução que será apresentada aqui.
          </p>
        </div>
        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
          <img
            src="https://via.placeholder.com/300x200?text=Imagem+2"
            alt="Imagem 2"
            className="rounded-md mb-4 w-full h-40 object-cover"
          />
          <h3 className="text-lg font-semibold mb-2">Título do Card 2</h3>
          <p className="text-gray-600 text-sm">
            Outro destaque da solução em desenvolvimento.
          </p>
        </div>
        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
          <img
            src="https://via.placeholder.com/300x200?text=Imagem+3"
            alt="Imagem 3"
            className="rounded-md mb-4 w-full h-40 object-cover"
          />
          <h3 className="text-lg font-semibold mb-2">Título do Card 3</h3>
          <p className="text-gray-600 text-sm">
            Um terceiro ponto chave para explorar.
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default Home;
