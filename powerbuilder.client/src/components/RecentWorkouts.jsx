// powerbuilder.client/src/components/RecentWorkouts.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const data = {
    labels: ['Squat', 'Bench Press', 'Deadlift'],
    datasets: [
        {
            label: 'Volume Last Session (kg)',
            data: [2000, 1500, 2500],
            backgroundColor: 'rgba(255, 99, 132, 0.8)'
        }
    ]
};

const RecentWorkouts = () => {
    return (
        <Box className="glass-box" sx={{ p: 2 }}>
            <Typography variant="h6" align="center" gutterBottom>
                Recent Workouts
            </Typography>
            <Bar data={data} options={{ indexAxis: 'y' }} />
        </Box>
    );
};

export default RecentWorkouts;
