import  icon1 from "../assets/icon/icon-face.png"
import  icon2 from "../assets/icon/icon-insta.png"
import  icon3 from "../assets/icon/icon-xt.png"


import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
  <div className="container mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
      <div>
        <h4 className="text-xl font-semibold mb-2">EcoView</h4>
        <p className="text-sm mb-2">
          Sistema Inteligente desenvolvido para um futuro mais Sustentável
        </p>
        <p className="text-sm text-gray-400">Transformando o futuro da energia com soluções inteligentes.</p>
      </div>

      <div>
        <h5 className="text-lg font-semibold mb-4">Contato</h5>
        <div className="flex flex-col space-y-2">
          <p className='text-sm'>ecoview@gmail.com</p>
          <br></br>
          <p className='text-sm'>jeffersonjunior1645@gmail.com</p>
        </div>
      </div>

      <div>
        <h2>ㅤ</h2>
        <div className="flex justify-end space-x-10">

            <img
              src={icon1}
              alt="Facebook"
              className="h-8 w-8 hover:opacity-80 transition-opacity"
            />
          
            <img
              src={icon2}
              alt="Instagram"
              className="h-8 w-8 hover:opacity-80 transition-opacity"
            />
         
            <img
              src={icon3}
              alt="Twitter"
              className="h-8 w-8 hover:opacity-80 transition-opacity"
            />
          
        </div>
      </div>
    </div>

    <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
      <p className="text-gray-400">
        © EcoView - 2024 Todos os direitos reservados.
      </p>
    </div>
  </div>
</footer>

  );
};

export default Footer;
