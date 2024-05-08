// powerbuilder.client/src/components/WeeklyProgress.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';
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

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
    datasets: [
        {
            label: 'Total Volume (kg)',
            data: [2000, 2200, 2400, 2600, 2800, 3000],
            borderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: 'rgba(75,192,192,1)',
            pointRadius: 5,
            fill: false
        }
    ]
};

const WeeklyProgress = () => {
    return (
        <Box className="glass-box" sx={{ p: 2 }}>
            <Typography variant="h6" align="center" gutterBottom>
                Weekly Progress
            </Typography>
            <Line data={data} />
        </Box>
    );
};

export default WeeklyProgress;
