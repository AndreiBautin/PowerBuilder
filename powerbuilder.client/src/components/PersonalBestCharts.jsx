// powerbuilder.client/src/components/PersonalBestCharts.jsx
import React from 'react';
import {
    ResponsiveContainer,
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    Legend,
    Tooltip,
} from 'recharts';
import { Box, Typography } from '@mui/material';

const data = [
    { exercise: 'Bench Press', current: 250, goal: 275 },
    { exercise: 'Squat', current: 320, goal: 350 },
    { exercise: 'Deadlift', current: 400, goal: 450 },
];

const PersonalBestCharts = () => {
    return (
        <Box sx={{ width: '90%', mt: 2 }}>
            <Typography variant="h5" align="center" sx={{ mb: 2, fontWeight: 'bold' }}>
                Personal Bests
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="exercise" />
                    <Radar name="Current" dataKey="current" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                    <Radar name="Goal" dataKey="goal" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                    <Tooltip />
                    <Legend />
                </RadarChart>
            </ResponsiveContainer>
        </Box>
    );
};

export default PersonalBestCharts;
