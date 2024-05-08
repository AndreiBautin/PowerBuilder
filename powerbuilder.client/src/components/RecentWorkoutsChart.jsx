// powerbuilder.client/src/components/RecentWorkoutsChart.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import "../css/styles.css";

const data = [
    { name: "Workout 1", volume: 120, intensity: 70 },
    { name: "Workout 2", volume: 130, intensity: 75 },
    { name: "Workout 3", volume: 140, intensity: 80 },
    { name: "Workout 4", volume: 110, intensity: 60 }
];

const RecentWorkoutsChart = () => {
    return (
        <Box>
            <Typography variant="h6" align="center" gutterBottom>
                Recent Workouts
            </Typography>
            <ResponsiveContainer width="100%" height={250}>
                <LineChart data={data} margin={{ top: 10, right: 30, left: 10, bottom: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" tick={{ fontSize: 8 }} />
                    <YAxis tick={{ fontSize: 8 }} />
                    <Tooltip />
                    <Line type="monotone" dataKey="volume" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="intensity" stroke="#8884d8" />
                </LineChart>
            </ResponsiveContainer>
        </Box>
    );
};

export default RecentWorkoutsChart;
