import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-transparent fixed top-0 left-0 w-full z-50 backdrop-blur-lg shadow-lg">
      <div className="flex-shrink-0">
        <Link to="/" className="text-3xl font-bold text-gray-600 hover:text-gray-200 transition-colors">EcoView</Link>
      </div>

      {/* Menu para desktop */}
      <div className="flex space-x-12 mr-5 font-bold md:flex">
        <Link to="/" className="hover:text-gray-200 text-gray-700 p-1 transition">Home</Link>
        <a href="#sobre" className="hover:text-gray-200 text-gray-700 p-1 transition">Sobre</a>
        <Link to="/solucao" className="hover:text-gray-200 text-gray-700 p-1 transition">Solução</Link>
        <Link to="/cadastrar" className="hover:text-gray-200 text-gray-700 p-1 transition">Cadastrar</Link>
        <Link to="/login" className="hover:text-gray-200 text-gray-700 p-1 transition">Login</Link>
      </div>

      {/* Menu Hamburguer para Mobile */}
      <div className="md:hidden">
        <button 
          onClick={toggleMenu} 
          className="text-white text-3xl hover:text-gray-200 focus:outline-none transition"
        >
          ☰
        </button>
      </div>

      {/* Menu de navegação para Mobile */}
      <div className={`${isMenuOpen ? "block" : "hidden"} absolute top-16 left-0 w-full bg-white bg-opacity-90 p-6 md:hidden rounded-b-lg shadow-lg transition-all`}>
        <ul className="space-y-4 text-center font-bold text-gray-800">
          <li>
            <Link to="/" className="block hover:text-blue-500 transition">Home</Link>
          </li>
          <li>
            <a href="#sobre" className="block hover:text-blue-500 transition">Sobre</a>
          </li>
          <li>
            <Link to="/solucao" className="block hover:text-blue-500 transition">Solução</Link>
          </li>
          <li>
            <Link to="/cadastrar" className="block hover:text-blue-500 transition">Cadastrar</Link>
          </li>
          <li>
            <Link to="/login" className="block hover:text-blue-500 transition">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
