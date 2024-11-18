import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-transparent fixed top-0 left-0 w-full z-50">
      <div className="flex-shrink-0">
        <Link to="/" className="text-2xl font-bold">EcoView</Link>
      </div>
      <div className="flex space-x-12 mr-5 font-bold">
        <Link to="/" className="hover:text-gray-400 p-1">Home</Link>
        <a href="#sobre" className="hover:text-gray-400 p-1">Sobre</a>
        <Link to="/solucao" className="hover:text-gray-400 p-1">Solução</Link>
        <Link to="/cadastrar" className="hover:text-gray-400 p-1">Cadastrar</Link>
        <Link to="/login" className="hover:text-gray-400 p-1">Login</Link>
      </div>
    </nav>
  );
};

export default Nav;
