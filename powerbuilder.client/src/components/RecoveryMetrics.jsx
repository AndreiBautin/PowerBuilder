// powerbuilder.client/src/components/RecoveryMetrics.jsx
import React from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';

const data = [
    { day: 'Mon', weight: 180, steps: 8000, calories: 2200, protein: 150, sleep: 7.5 },
    { day: 'Tue', weight: 182, steps: 7500, calories: 2000, protein: 160, sleep: 8 },
    { day: 'Wed', weight: 181, steps: 8500, calories: 2100, protein: 155, sleep: 7 },
    { day: 'Thu', weight: 183, steps: 8200, calories: 2300, protein: 165, sleep: 7.8 },
    { day: 'Fri', weight: 184, steps: 7800, calories: 2400, protein: 170, sleep: 6.5 },
    { day: 'Sat', weight: 183, steps: 7600, calories: 2300, protein: 160, sleep: 7.2 },
    { day: 'Sun', weight: 182, steps: 8100, calories: 2200, protein: 150, sleep: 8.1 },
];

const RecoveryMetrics = () => {
    const avgWeight = Math.round(data.reduce((acc, item) => acc + item.weight, 0) / data.length);
    const avgSteps = Math.round(data.reduce((acc, item) => acc + item.steps, 0) / data.length);
    const avgCalories = Math.round(data.reduce((acc, item) => acc + item.calories, 0) / data.length);
    const avgProtein = Math.round(data.reduce((acc, item) => acc + item.protein, 0) / data.length);
    const avgSleep = Math.round(data.reduce((acc, item) => acc + item.sleep, 0) / data.length);

    return (
        <Box className="recovery-score-container">
            <Typography variant="h5" align="center" sx={{ mb: 2, fontWeight: 'bold' }}>
                Recovery Metrics
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', width: '100%' }}>
                <Box sx={{ textAlign: 'center' }}>
                    <CircularProgress variant="determinate" value={(avgWeight / 200) * 100} />
                    <Typography variant="body2">Weight: {avgWeight} lbs</Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                    <CircularProgress variant="determinate" value={(avgSteps / 10000) * 100} />
                    <Typography variant="body2">Steps: {avgSteps}</Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                    <CircularProgress variant="determinate" value={(avgCalories / 3000) * 100} />
                    <Typography variant="body2">Calories: {avgCalories}</Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                    <CircularProgress variant="determinate" value={(avgProtein / 200) * 100} />
                    <Typography variant="body2">Protein: {avgProtein} g</Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                    <CircularProgress variant="determinate" value={(avgSleep / 10) * 100} />
                    <Typography variant="body2">Sleep: {avgSleep} hrs</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default RecoveryMetrics;
