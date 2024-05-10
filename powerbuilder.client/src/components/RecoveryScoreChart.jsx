import React from 'react';
import {
    ResponsiveContainer,
    ComposedChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';
import { Box, Typography } from '@mui/material';

const data = [
    { day: 'Mon', weight: 180, steps: 8000, calories: 2200, protein: 150, sleep: 7.5 },
    { day: 'Tue', weight: 182, steps: 7500, calories: 2000, protein: 160, sleep: 8 },
    { day: 'Wed', weight: 181, steps: 8500, calories: 2100, protein: 155, sleep: 7 },
    { day: 'Thu', weight: 183, steps: 8200, calories: 2300, protein: 165, sleep: 7.8 },
    { day: 'Fri', weight: 184, steps: 7800, calories: 2400, protein: 170, sleep: 6.5 },
    { day: 'Sat', weight: 183, steps: 7600, calories: 2300, protein: 160, sleep: 7.2 },
    { day: 'Sun', weight: 182, steps: 8100, calories: 2200, protein: 150, sleep: 8.1 },
];

const RecoveryScoreChart = () => {
    return (
        <Box className="recovery-score-container glass-card">
            <Typography variant="h5" align="center" sx={{ mb: 2, fontWeight: 'bold' }}>
                Recovery Metrics
            </Typography>
            <ResponsiveContainer width="100%" height={200}>
                <ComposedChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="weight" stroke="#FF0000" />
                    <Line type="monotone" dataKey="steps" stroke="#00FF00" />
                    <Line type="monotone" dataKey="calories" stroke="#0000FF" />
                    <Line type="monotone" dataKey="protein" stroke="#FFFF00" />
                    <Line type="monotone" dataKey="sleep" stroke="#FF00FF" />
                </ComposedChart>
            </ResponsiveContainer>
            <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle2" align="center">
                    Avg Weight: {Math.round(data.reduce((acc, item) => acc + item.weight, 0) / data.length)} lbs
                </Typography>
                <Typography variant="subtitle2" align="center">
                    Avg Steps: {Math.round(data.reduce((acc, item) => acc + item.steps, 0) / data.length)}
                </Typography>
                <Typography variant="subtitle2" align="center">
                    Avg Calories: {Math.round(data.reduce((acc, item) => acc + item.calories, 0) / data.length)}
                </Typography>
                <Typography variant="subtitle2" align="center">
                    Avg Protein: {Math.round(data.reduce((acc, item) => acc + item.protein, 0) / data.length)} g
                </Typography>
                <Typography variant="subtitle2" align="center">
                    Avg Sleep: {Math.round(data.reduce((acc, item) => acc + item.sleep, 0) / data.length)} hours
                </Typography>
            </Box>
        </Box>
    );
};

export default RecoveryScoreChart;
