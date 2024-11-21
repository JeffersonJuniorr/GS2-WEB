import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const user = sessionStorage.getItem('user');
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);
  
  const handleLogout = () => {
    sessionStorage.removeItem('user');
    setIsAuthenticated(false);
  };

  return (
    <nav className="bg-gray-200 bg-opacity-60 backdrop-blur-md px-6 py-4 fixed w-full z-50">
      <div className="flex justify-between items-center font-semibold">
        <Link to="/" className="text-xl font-bold">
          EcoView
        </Link>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-green-400 transition-colors">Home</Link>
          <Link to="/solucao" className="hover:text-green-400 transition-colors">Solução</Link>
          <a href="#sobre" className="hover:text-green-400 transition-colors">Sobre</a>

          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="hover:text-red-400 transition-colors"
            >
              Logout
            </button>
          ) : (
            <Link to="/login" className="hover:text-green-400 transition-colors">Login</Link>
          )}
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? "block" : "hidden"} mt-4 space-y-4`}>
        <Link to="/" onClick={toggleMenu} className="block text-center text-xl hover:text-green-400">Home</Link>
        <Link to="/solucao" onClick={toggleMenu} className="block text-center text-xl hover:text-green-400">Solução</Link>
        <a href="#sobre" onClick={toggleMenu} className="block text-center text-xl hover:text-green-400">Sobre</a>

        {isAuthenticated ? (
          <button
            onClick={handleLogout}
            className="block text-center text-xl hover:text-red-400"
          >
            Logout
          </button>
        ) : (
          <Link to="/login" onClick={toggleMenu} className="block text-center text-xl hover:text-green-400">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Nav;
