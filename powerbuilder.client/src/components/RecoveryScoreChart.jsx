// powerbuilder.client/src/components/RecoveryScoreChart.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";
import "../css/styles.css";

const recoveryData = [
    { day: "Mon", sleep: 85, soreness: 75, mood: 80, energy: 70 },
    { day: "Tue", sleep: 90, soreness: 80, mood: 85, energy: 75 },
    { day: "Wed", sleep: 80, soreness: 70, mood: 75, energy: 65 },
    { day: "Thu", sleep: 95, soreness: 85, mood: 90, energy: 80 },
    { day: "Fri", sleep: 78, soreness: 73, mood: 80, energy: 68 },
    { day: "Sat", sleep: 88, soreness: 80, mood: 85, energy: 70 },
    { day: "Sun", sleep: 92, soreness: 87, mood: 89, energy: 78 }
];

const RecoveryScoreChart = () => {
    return (
        <Box sx={{ textAlign: "center", p: 2 }}>
            <Typography variant="h5" className="cool-font" gutterBottom>
                Recovery Score
            </Typography>
            <ResponsiveContainer width="100%" height={150}>
                <LineChart data={recoveryData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="sleep" stroke="#76daff" />
                    <Line type="monotone" dataKey="soreness" stroke="#ff6f61" />
                    <Line type="monotone" dataKey="mood" stroke="#76c7c0" />
                    <Line type="monotone" dataKey="energy" stroke="#ffcc29" />
                </LineChart>
            </ResponsiveContainer>
        </Box>
    );
};

export default RecoveryScoreChart;
