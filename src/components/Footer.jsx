import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        
        <div className="text-center md:text-left">
          <h4 className="text-lg font-bold">Sistema Inteligente de Gestão Energética</h4>
          <p className="text-sm mt-1">
            © 2024 Todos os direitos reservados.
          </p>
        </div>

     
        <div className="flex space-x-6 text-sm">
          <a href="#home" className="hover:text-yellow-400">
            Início
          </a>
          <a href="#sobre" className="hover:text-yellow-400">
            Sobre
          </a>
          <a href="#contato" className="hover:text-yellow-400">
            Contato
          </a>
        </div>

       
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img
              src="/icons/iconFacebook.svg"
              alt="Facebook"
              className="h-6 w-6 hover:opacity-80"
            />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img
              src="/icons/iconInstagram.svg"
              alt="Instagram"
              className="h-6 w-6 hover:opacity-80"
            />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img
              src="/icons/iconTwitter.svg"
              alt="Twitter"
              className="h-6 w-6 hover:opacity-80"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
