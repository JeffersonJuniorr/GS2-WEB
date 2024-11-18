
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
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
            <h5 className="text-lg font-semibold mb-4">Siga-nos</h5>
            <div className="flex justify-center space-x-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img
                  src="/images/iconFacebook.svg"
                  alt="Facebook"
                  className="h-8 w-8 hover:opacity-80 transition-opacity"
                />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img
                  src="/images/iconInstagram.svg"
                  alt="Instagram"
                  className="h-8 w-8 hover:opacity-80 transition-opacity"
                />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img
                  src="/images/iconTwitter.svg"
                  alt="Twitter"
                  className="h-8 w-8 hover:opacity-80 transition-opacity"
                />
              </a>
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
