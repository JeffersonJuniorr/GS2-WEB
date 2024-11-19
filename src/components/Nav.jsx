import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = sessionStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-transparent fixed top-0 left-0 w-full z-50 backdrop-blur-lg shadow-lg">
      <div className="flex-shrink-0">
        <Link
          to="/"
          className="text-3xl font-bold text-gray-600 hover:text-gray-200 transition-colors"
        >
          EcoView
        </Link>
      </div>

      {/* Menu para desktop */}
      <div className="hidden md:flex space-x-12 mr-5 font-bold">
        <Link
          to="/"
          className="hover:text-gray-200 text-gray-700 p-1 transition"
        >
          Home
        </Link>
        <a
          href="#sobre"
          className="hover:text-gray-200 text-gray-700 p-1 transition"
        >
          Sobre
        </a>
        <Link
          to="/solucao"
          className="hover:text-gray-200 text-gray-700 p-1 transition"
        >
          Solução
        </Link>
        {!isLoggedIn && (
          <Link
            to="/cadastrar"
            className="hover:text-gray-200 text-gray-700 p-1 transition"
          >
            Cadastrar
          </Link>
        )}
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="hover:text-gray-200 text-gray-700 p-1 transition"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="hover:text-gray-200 text-gray-700 p-1 transition"
          >
            Login
          </Link>
        )}
      </div>

      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-white text-3xl hover:text-gray-200 focus:outline-none transition"
        >
          ☰
        </button>
      </div>

      {/* Menu de navegação para Mobile */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-16 left-0 w-full bg-white bg-opacity-90 p-6 rounded-b-lg shadow-lg transition-all`}
      >
        <ul className="space-y-4 text-center font-bold text-gray-800">
          <li>
            <Link
              to="/"
              className="block hover:text-blue-500 transition"
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <a
              href="#sobre"
              className="block hover:text-blue-500 transition"
              onClick={toggleMenu}
            >
              Sobre
            </a>
          </li>
          <li>
            <Link
              to="/solucao"
              className="block hover:text-blue-500 transition"
              onClick={toggleMenu}
            >
              Solução
            </Link>
          </li>
          {!isLoggedIn && (
            <li>
              <Link
                to="/cadastrar"
                className="block hover:text-blue-500 transition"
                onClick={toggleMenu}
              >
                Cadastrar
              </Link>
            </li>
          )}
          {isLoggedIn ? (
            <li className="flex justify-center">
              <button
                onClick={() => {
                  handleLogout();
                  toggleMenu();
                }}
                className="block hover:text-blue-500 transition"
              >
                Logout
              </button>
            </li>
          ) : (
            <li>
              <Link
                to="/login"
                className="block hover:text-blue-500 transition"
                onClick={toggleMenu}
              >
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
