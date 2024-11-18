import React, { useEffect, useRef, useState } from 'react';
import { 
  Chart, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  LineController, 
  Title, 
  Tooltip, 
  Legend, 
  Filler 
} from 'chart.js';

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  LineController,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const Mychart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [selectedTime, setSelectedTime] = useState('all');

  const data24h = [7, 8, 7, 15, 20, 18, 15, 13];
  const data7d = [6, 8, 7, 13, 18, 17, 14, 12];
  const data30d = [5, 8, 7, 11, 17, 17, 12, 11,];

  const labels24h = ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00'];

  const getData = () => {
    if (selectedTime === '24h') {
      return [
        {
          label: '24h',
          data: data24h,
          borderColor: 'rgba(0, 123, 255, 1)',
          backgroundColor: 'rgba(0, 123, 255, 0.2)', 
          fill: true,
          tension: 0.4,
          pointRadius: 2,
        },
      ];
    } else if (selectedTime === '7d') {
      return [
        {
          label: '7d',
          data: data7d,
          borderColor: 'rgba(0, 255, 0, 1)',
          backgroundColor: 'rgba(0, 255, 0, 0.2)', 
          fill: true,
          tension: 0.4,
          pointRadius: 2,
        },
      ];
    } else if (selectedTime === '30d') {
      return [
        {
          label: '30d',
          data: data30d,
          borderColor: 'rgba(255, 165, 0, 1)',
          backgroundColor: 'rgba(255, 165, 0, 0.2)', 
          fill: true,
          tension: 0.4,
          pointRadius: 2,
        },
      ];
    }
    return [
      {
        label: '24h',
        data: data24h,
        borderColor: 'rgba(0, 123, 255, 1)',
        backgroundColor: 'rgba(0, 123, 255, 0.2)', 
        fill: true,
        tension: 0.4,
        pointRadius: 2,
      },
      {
        label: '7d',
        data: data7d,
        borderColor: 'rgba(0, 255, 0, 1)',
        backgroundColor: 'rgba(0, 255, 0, 0.2)', 
        fill: true,
        tension: 0.4,
        pointRadius: 2,
      },
      {
        label: '30d',
        data: data30d,
        borderColor: 'rgba(255, 165, 0, 1)',
        backgroundColor: 'rgba(255, 165, 0, 0.2)',
        fill: true,
        tension: 0.4,
        pointRadius: 2,
      },
    ];
  };

  useEffect(() => {
    const ctx = chartRef.current?.getContext('2d');
    if (ctx) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels24h,
          datasets: getData(),
        },
        options: {
          maintainAspectRatio: false,
          scales: {
            x: {
              title: {
                display: true,
                text: '',
              },
            },
            y: {
              min: 0,
              max: 40,
              title: {
                display: true,
                text: 'Consumo (kWh)',
              },
            },
          },
          responsive: true,
          plugins: {
            tooltip: {
              mode: 'index',
              intersect: false,
            },
            legend: {
              display: true,
              position: 'top',
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [selectedTime]);

  return (
    <div className='border'>
  <div className="flex space-x-4 mb-4 pt-3 pl-3">
    <button onClick={() => setSelectedTime('24h')} className="p-2 bg-blue-500 text-white rounded-xl">24h</button>
    <button onClick={() => setSelectedTime('7d')} className="p-2 bg-green-500 text-white rounded-xl">7d</button>
    <button onClick={() => setSelectedTime('30d')} className="p-2 bg-orange-500 text-white rounded-xl">30d</button>
    <button onClick={() => setSelectedTime('all')} className="p-2 bg-gray-500 text-white rounded-xl">Todos</button>
  </div>

  <div className="relative h-64 sm:h-80 md:h-96 w-full">
    <canvas ref={chartRef} />
  </div>
</div>

  );
};
