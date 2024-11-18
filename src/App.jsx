import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
// import Sidebar from "./components/Slidebar.jsx";
import Login from "./routes/Login.jsx";
import Cadastrar from "./routes/Cadastrar.jsx";
import Solucao from "./routes/Solucao.jsx";
import Home from "./routes/Hone.jsx";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Error from "./routes/Error.jsx";
import Sobre from "./routes/Sobre.jsx";

function Modal({ children, onClose }) {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative bg-white rounded shadow-md max-w-md w-full mx-auto">
        <button
          onClick={onClose}
          className="absolute z-10 top-2 right-6 text-gray-500 hover:text-gray-800 text-3xl"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const closeModal = () => navigate("/");

  // Condição para verificar se é a página de erro
  const isErrorPage = location.pathname === "/404" || location.pathname === "*";

  return (
    <div className="flex flex-col min-h-screen">
      {/* Renderiza a Nav e Footer apenas para rotas válidas */}
      {location.pathname !== "/404" && location.pathname !== "*" && <Nav />}
      
      <div className="flex flex-1">
        <main className="flex-1 bg-gray-50">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solucao" element={<Solucao />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="*" element={<Error />} /> {/* Página de erro para rotas inválidas */}
          </Routes>
        </main>
      </div>
      
      {/* Renderiza o Footer apenas se não for a página de erro */}
      {location.pathname !== "/404" && location.pathname !== "*" && <Footer />}

      {/* Modals */}
      {location.pathname === "/login" && (
        <Modal onClose={closeModal}>
          <Login />
        </Modal>
      )}
      {location.pathname === "/cadastrar" && (
        <Modal onClose={closeModal}>
          <Cadastrar />
        </Modal>
      )}
    </div>
  );
}

export default App;
