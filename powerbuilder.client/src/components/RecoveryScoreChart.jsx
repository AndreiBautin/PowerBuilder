import React, { useState } from 'react';
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
import { Box, Typography, Button } from '@mui/material';

const data = [
    { day: 'Mon', weight: 180, steps: 8000, calories: 2200, protein: 150, sleep: 7.5 },
    { day: 'Tue', weight: 182, steps: 7500, calories: 2000, protein: 160, sleep: 8 },
    { day: 'Wed', weight: 181, steps: 8500, calories: 2100, protein: 155, sleep: 7 },
    { day: 'Thu', weight: 183, steps: 8200, calories: 2300, protein: 165, sleep: 7.8 },
    { day: 'Fri', weight: 184, steps: 7800, calories: 2400, protein: 170, sleep: 6.5 },
    { day: 'Sat', weight: 183, steps: 7600, calories: 2300, protein: 160, sleep: 7.2 },
    { day: 'Sun', weight: 182, steps: 8100, calories: 2200, protein: 150, sleep: 8.1 },
];

const metrics = ['weight', 'steps', 'calories', 'protein', 'sleep'];
const metricNames = {
    weight: 'Weight (lbs)',
    steps: 'Steps',
    calories: 'Calories',
    protein: 'Protein (g)',
    sleep: 'Sleep (hours)',
};

const RecoveryScoreChart = () => {
    const [selectedMetricIndex, setSelectedMetricIndex] = useState(0);
    const selectedMetric = metrics[selectedMetricIndex];

    const handleMetricChange = (direction) => {
        if (direction === 'prev') {
            setSelectedMetricIndex((prev) => (prev > 0 ? prev - 1 : metrics.length - 1));
        } else {
            setSelectedMetricIndex((prev) => (prev < metrics.length - 1 ? prev + 1 : 0));
        }
    };

    const average = data.reduce((acc, item) => acc + item[selectedMetric], 0) / data.length;

    return (
        <Box className="recovery-score-container">
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button className="arrow-button" onClick={() => handleMetricChange('prev')}>
                    {'<'}
                </Button>
                <Typography variant="h5" align="center" sx={{ mb: 2, fontWeight: 'bold' }}>
                    {metricNames[selectedMetric]}
                </Typography>
                <Button className="arrow-button" onClick={() => handleMetricChange('next')}>
                    {'>'}
                </Button>
            </Box>
            <ResponsiveContainer width="100%" height={200}>
                <ComposedChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey={selectedMetric} stroke="#FF0000" />
                </ComposedChart>
            </ResponsiveContainer>
            <Typography variant="subtitle2" align="center" sx={{ mt: 2 }}>
                Average: {average.toFixed(1)} {selectedMetric === 'weight' ? 'lbs' : ''}
            </Typography>
        </Box>
    );
};

export default RecoveryScoreChart;
