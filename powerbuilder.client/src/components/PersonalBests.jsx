// powerbuilder.client/src/components/PersonalBests.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const data = {
    labels: ['Squat', 'Bench Press', 'Deadlift', 'Overhead Press'],
    datasets: [
        {
            label: 'Personal Bests (kg)',
            data: [180, 120, 220, 75],
            backgroundColor: 'rgba(134, 65, 244, 0.2)',
            borderColor: 'rgba(134, 65, 244, 1)',
            borderWidth: 1,
            fill: true
        }
    ]
};

const PersonalBests = () => {
    return (
        <Box className="glass-box" sx={{ p: 2 }}>
            <Typography variant="h6" align="center" gutterBottom>
                Personal Bests
            </Typography>
            <Radar data={data} />
        </Box>
    );
};

export default PersonalBests;
