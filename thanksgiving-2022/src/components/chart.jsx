import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
      borderSkipped: false,
      borderRadius: 20
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Bedroom Arrangements',
    },
  },
//
  scales: {
    x: {
      position: 'top',
      min: 23,
      max: 28,
      ticks: {
        stepSize: 1,
        callback: (val, index) => {
          let date = val;
          let result = 'Nov ' +date;
          return result;
        } 
      }
    }
  }

};

const labels = ['Bruce', 'Tony', 'Zazil', 'Mea', 'Sophia', 'Alica', 'Matt'];

export const data = {
  labels,
  datasets: [
    {
      label: ['Bruces Room', 'Mea\'s Room', 'Alicia\'s Room'],
      data: [[23, 28], 
              [23,25], 
              [24,26], 
              [0], 
              [25,28], 
              [26,27], 
              [0]],
      borderColor: ['rgb(255, 99, 132)', 'rgb(53, 162, 235)', 'rgb(53, 162, 235)'],
      backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(53, 162, 235, 0.5)', 'rgba(53, 162, 0, 0.5)'],
    },
  ],
};

export function Chart() {
  return <img src="/img/zaz.jpg"/>,<Bar options={options} data={data} />;
}
