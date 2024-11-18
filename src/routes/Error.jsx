// src/routes/Error.jsx
import React from 'react';

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Página Não Encontrada (404)</h1>
      <p className="text-lg text-gray-600 mb-4">Desculpe, a página que você está procurando não existe.</p>
      <a href="/" className="text-blue-500 hover:text-blue-700">Voltar para a página inicial</a>
    </div>
  );
};

export default Error;
