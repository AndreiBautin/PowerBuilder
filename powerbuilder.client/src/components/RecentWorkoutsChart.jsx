// powerbuilder.client/src/components/PersonalBestChart.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import { ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from "recharts";
import "../css/styles.css";

const data = [
    { subject: "Squat", A: 90, fullMark: 100 },
    { subject: "Bench Press", A: 80, fullMark: 100 },
    { subject: "Deadlift", A: 100, fullMark: 100 },
    { subject: "Overhead Press", A: 70, fullMark: 100 },
    { subject: "Pull-ups", A: 65, fullMark: 100 },
    { subject: "Lunges", A: 80, fullMark: 100 }
];

const PersonalBestChart = ({ height = 150 }) => {
    return (
        <Box>
            <Typography variant="h6" align="center" gutterBottom>
                Personal Bests
            </Typography>
            <ResponsiveContainer width="100%" height={height}>
                <RadarChart outerRadius={70} data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} />
                    <Radar name="A" dataKey="A" stroke="#FF6347" fill="#FF6347" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </Box>
    );
};

export default PersonalBestChart;
