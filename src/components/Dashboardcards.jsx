import React from 'react';

export default function DashboardCards() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="bg-white shadow p-4 rounded text-center">
        <h3 className="text-lg font-semibold">Consumo Atual</h3>
        <p className="text-2xl font-bold">1,8 kWh</p>
        <p className="text-sm text-gray-500">+5% vs média</p>
      </div>
      <div className="bg-white shadow p-4 rounded text-center">
        <h3 className="text-lg font-semibold">Projeção Mensal</h3>
        <p className="text-2xl font-bold">R$ 245,30</p>
        <p className="text-sm text-gray-500">-12% vs mês anterior</p>
      </div>
      <div className="bg-white shadow p-4 rounded text-center">
        <h3 className="text-lg font-semibold">Eficiência</h3>
        <p className="text-2xl font-bold">85%</p>
        <p className="text-sm text-gray-500">Meta: 90%</p>
      </div>
      <div className="bg-white shadow p-4 rounded text-center">
        <h3 className="text-lg font-semibold">Energia Solar</h3>
        <p className="text-2xl font-bold">2,1 kWh</p>
        <p className="text-sm text-gray-500">Geração Atual</p>
      </div>
    </div>
  );
}
