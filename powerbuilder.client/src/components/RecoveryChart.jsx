// powerbuilder.client/src/components/RecoveryChart.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import "../css/styles.css";

const data = [
    { name: "Day 1", Sleep: 7, Energy: 8, Stress: 3 },
    { name: "Day 2", Sleep: 6, Energy: 7, Stress: 5 },
    { name: "Day 3", Sleep: 8, Energy: 9, Stress: 2 },
    { name: "Day 4", Sleep: 7, Energy: 6, Stress: 6 },
    { name: "Day 5", Sleep: 5, Energy: 5, Stress: 8 },
    { name: "Day 6", Sleep: 8, Energy: 8, Stress: 3 },
    { name: "Day 7", Sleep: 6, Energy: 7, Stress: 4 }
];

const RecoveryChart = ({ height = 150 }) => {
    return (
        <Box>
            <Typography variant="h6" align="center" gutterBottom>
                Recovery Data
            </Typography>
            <ResponsiveContainer width="100%" height={height}>
                <LineChart data={data} margin={{ top: 10, right: 30, left: 10, bottom: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" tick={{ fontSize: 8 }} />
                    <YAxis tick={{ fontSize: 8 }} />
                    <Tooltip />
                    <Line type="monotone" dataKey="Sleep" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="Energy" stroke="#8884d8" />
                    <Line type="monotone" dataKey="Stress" stroke="#FF6347" />
                </LineChart>
            </ResponsiveContainer>
        </Box>
    );
};

export default RecoveryChart;
