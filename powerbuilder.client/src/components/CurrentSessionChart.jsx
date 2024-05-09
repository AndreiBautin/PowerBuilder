// powerbuilder.client/src/components/CurrentSessionChart.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import "../css/styles.css";

const data = [
    { session: "Session 1", volume: 120, intensity: 70 },
    { session: "Session 2", volume: 130, intensity: 75 },
    { session: "Session 3", volume: 140, intensity: 80 },
    { session: "Session 4", volume: 110, intensity: 60 },
    { session: "Session 5", volume: 100, intensity: 65 },
    { session: "Session 6", volume: 90, intensity: 70 }
];

const CurrentSessionChart = ({ week }) => {
    const currentData = [data[week % data.length]];

    return (
        <Box>
            <Typography variant="h6" align="center" gutterBottom>
                Current Session
            </Typography>
            <ResponsiveContainer width="100%" height={150}>
                <BarChart data={currentData} margin={{ top: 10, right: 30, left: 10, bottom: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="session" tick={{ fontSize: 8 }} />
                    <YAxis tick={{ fontSize: 8 }} />
                    <Tooltip />
                    <Bar dataKey="volume" fill="#82ca9d" />
                    <Bar dataKey="intensity" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </Box>
    );
};

export default CurrentSessionChart;
