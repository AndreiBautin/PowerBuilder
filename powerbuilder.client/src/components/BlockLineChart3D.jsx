// powerbuilder.client/src/components/BlockLineChart3D.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Box } from '@mui/material';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend);

const BlockLineChart3D = ({ selectedWeek }) => {
    const data = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12'],
        datasets: [
            {
                label: 'Hypertrophy',
                data: [50, 60, 70, 30, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: 'rgba(136, 132, 216, 0.8)',
                stack: 'training',
                barThickness: 15,
                fillOpacity: (index) => (index === selectedWeek ? 1 : 0.3)
            },
            {
                label: 'Strength',
                data: [0, 0, 0, 0, 50, 60, 70, 30, 0, 0, 0, 0],
                backgroundColor: 'rgba(130, 202, 157, 0.8)',
                stack: 'training',
                barThickness: 15
            },
            {
                label: 'Peaking',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 50, 60, 70, 30],
                backgroundColor: 'rgba(255, 115, 0, 0.8)',
                stack: 'training',
                barThickness: 15
            },
            {
                label: 'Intensity',
                data: [70, 75, 80, 60, 72, 78, 83, 65, 75, 80, 85, 60],
                type: 'line',
                borderColor: '#FF0000',
                fill: false,
                tension: 0.4
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: { size: 8 }
                }
            }
        },
        scales: {
            x: {
                stacked: true
            },
            y: {
                stacked: true
            }
        }
    };

    return (
        <Box sx={{ width: '100%', height: 300 }}>
            <Bar data={data} options={options} />
        </Box>
    );
};

export default BlockLineChart3D;
