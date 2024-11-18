import React from 'react';
import DashboardCards from '../components/Dashboardcards.jsx';
import { Mychart } from "../components/Mychart.jsx";
import Barchart from "../components/Barchart.jsx";

export default function Solucao() {
  return (
    <div className="flex flex-col p-6 space-y-6 mt-12">
      <div className="bg-yellow-100 p-4 rounded text-yellow-800">
        ⚠️ Consumo Elevado Detectado: Consumo 15% acima da média para este horário.
      </div>
      <div className="flex space-x-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Modo Econômico</button>
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">Agendar</button>
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">Novo Dispositivo</button>
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">Exportar Dados</button>
      </div>
      <DashboardCards />
      
      <div className="flex space-x-6">
        <div className="flex-1">
          <Mychart />
        </div>
        <div className="flex-1">
          <Barchart />
        </div>
      </div>
    </div>
  );
}
