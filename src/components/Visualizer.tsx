import React from 'react';
import { Dataset } from '../types';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface VisualizerProps {
  dataset: Dataset;
  predictions: number[];
}

const Visualizer: React.FC<VisualizerProps> = ({ dataset, predictions }) => {
  const data = {
    labels: dataset.features.map((_, i) => i.toString()),
    datasets: [
      {
        label: 'Actual Values',
        data: dataset.labels,
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
      {
        label: 'Predictions',
        data: predictions,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return (
    <div className="p-4 border rounded-lg bg-white shadow-sm">
      <h2 className="text-lg font-medium mb-4">Results Visualization</h2>
      <div className="h-[400px]">
        <Line
          data={data}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              title: {
                display: true,
                text: `${dataset.labelName} - Actual vs Predicted Values`,
              },
              legend: {
                position: 'top' as const,
              },
            },
            scales: {
              y: {
                title: {
                  display: true,
                  text: dataset.labelName,
                }
              },
              x: {
                title: {
                  display: true,
                  text: 'Sample Index',
                }
              }
            }
          }}
        />
      </div>
    </div>
  );
};

export default Visualizer; 