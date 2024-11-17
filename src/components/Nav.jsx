import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between p-4 border">
      <div className="flex-shrink-0">
        <Link to="/" className="text-2xl font-bold">EcoView</Link>
      </div>
      <div className="flex space-x-12 mr-5">
        <Link to="/" className="hover:text-gray-400 border p-1 rounded-lg">Home</Link>
        <Link to="/solucao" className="hover:text-gray-400 border p-1 rounded-lg">Solução</Link>
        <Link to="/sobre" className="hover:text-gray-400 border p-1 rounded-lg">Sobre</Link>
        <Link to="/cadastrar" className="hover:text-gray-400 border p-1 rounded-lg">Cadastrar</Link>
        <Link to="/login" className="hover:text-gray-400 border p-1 rounded-lg">Login</Link>
      </div>
    </nav>
  );
};

export default Nav;
