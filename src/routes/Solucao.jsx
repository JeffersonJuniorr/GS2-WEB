import React from 'react';
import DashboardCards from '../components/Dashboardcards.jsx';
import { Mychart } from "../components/Mychart.jsx";
import Barchart from "../components/Barchart.jsx";
import prototipo1 from "../assets/app1.png"; 
import prototipo2 from "../assets/app2.png"; 
import prototipo3 from "../assets/app3.png";

export default function Solucao() {
  return (
    <div className="flex flex-col p-4 space-y-6 mt-12">
      <div className="bg-green-100 p-4 rounded text-green-800">
        <h1 className='text-xl font-semibold mb-2'>Solução</h1>
        A solução proposta é a criação de um app para monitoramento energético residencial, 
        permitindo aos usuários acompanhar seu consumo de energia em tempo real. Além disso, 
        um site será desenvolvido para permitir a comparação do consumo de energia com outros 
        residenciais na mesma região, promovendo a conscientização e a economia de energia.
      </div>

      {/* Cards sobre a solução */}
      <div className="flex justify-center px-4 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          <div className="p-2 flex flex-col items-center justify-center">
            <img
              src={prototipo1}
              alt="Imagem 1"
              className="rounded-3xl mb-4 w-full sm:w-72 h-auto object-cover shadow-none"
            />
            <h3 className="text-lg font-semibold mb-2 text-center">Central de Dispositivos</h3>
            <p className="text-gray-600 text-sm text-center">
              Uma Central de Dispositivos cadastrados para fácil monitoramento e controle de todos os aparelhos.
            </p>
          </div>
          <div className="p-2 flex flex-col items-center justify-center">
            <img
              src={prototipo2}
              alt="Imagem 2"
              className="rounded-3xl mb-4 w-full sm:w-72 h-auto object-cover shadow-none"
            />
            <h3 className="text-lg font-semibold mb-2 text-center">Gráfico Intuitivo</h3>
            <p className="text-gray-600 text-sm text-center">
              Gráficos interativos para melhor visualização do consumo de energia ao longo do tempo, facilitando a análise.
            </p>
          </div>
          <div className="p-2 flex flex-col items-center justify-center">
            <img
              src={prototipo3}
              alt="Imagem 3"
              className="rounded-3xl mb-4 w-full sm:w-72 h-auto object-cover shadow-none"
            />
            <h3 className="text-lg font-semibold mb-2 text-center">Cenários do Dia a Dia</h3>
            <p className="text-gray-600 text-sm text-center">
              Detalhamento do consumo dos aparelhos do cotidiano, ajudando na análise de eficiência e estratégias de economia.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-100 p-4 rounded text-blue-800 mb-8">
        <h3 className="text-xl font-semibold mb-2">Comparação Regional de Consumo de Energia</h3>
        <p className="text-gray-600 text-sm">
          No gráfico para desktop, será possível comparar seu consumo de energia com o de outras residências na sua região. 
          Isso ajuda a visualizar o seu desempenho em relação à média local, promovendo maior conscientização sobre o uso 
          responsável da energia. Além disso, você poderá identificar padrões e otimizar o consumo para uma gestão mais eficiente.
        </p>
      </div>

      <div className="border-t border-gray-300"></div>

      <div className="bg-yellow-100 p-4 rounded text-yellow-800">
        ⚠️ Consumo Elevado Detectado: Consumo 15% acima da média para este horário.
      </div>

      <div className="flex flex-wrap space-x-4 space-y-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full sm:w-auto">Modo Econômico</button>
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded w-full sm:w-auto">Agendar</button>
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded w-full sm:w-auto">Novo Dispositivo</button>
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded w-full sm:w-auto">Exportar Dados</button>
      </div>

      <DashboardCards />

      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
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
