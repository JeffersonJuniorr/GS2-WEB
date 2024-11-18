import React, { useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';


ChartJS.register(CategoryScale, LinearScale, BarElement, BarController, Title, Tooltip, Legend);

const Barchart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const labels = ['Ar Condicionado', 'Chuveiro Elétrico', 'Máquina de Lavar', 'Geladeira', 'Iluminação'];
    const vendasData = [0.9, 0.7, 0.6, 0.5, 0.2];
    const despesasData = [1.2, 1.0, 0.8, 0.7, 0.4];

    const sortedData = vendasData
      .map((value, index) => ({
        label: labels[index],
        vendas: value,
        despesas: despesasData[index],
      }))
      .sort((a, b) => b.vendas - a.vendas);

    const sortedLabels = sortedData.map((item) => item.label);
    const sortedVendasData = sortedData.map((item) => item.vendas);
    const sortedDespesasData = sortedData.map((item) => item.despesas);

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');
    chartInstance.current = new ChartJS(ctx, {
      type: 'bar',
      data: {
        labels: sortedLabels,
        datasets: [
          {
            label: 'Consumo Atual',
            data: sortedVendasData,
            backgroundColor: 'rgba(255,30,71)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
          {
            label: 'Consumo Regional',
            data: sortedDespesasData,
            backgroundColor: 'rgba(65,105,225)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Consumo por Dispositivo',
          },
          legend: {
            position: 'top',
          },
        },
        scales: {
          x: {
            grid: {
              offset: true,
            },
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Consumo (kWh)',
              font: {
                size: 14,
              },
              padding: { top: 10, bottom: 10 },
            },
            ticks: {
              stepSize: 0.2,
              min: 0,
              max: Math.max(...sortedDespesasData) + 0.2,
            },
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="w-full h-96 sm:h-72 md:h-80 lg:h-96 border">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default Barchart;
