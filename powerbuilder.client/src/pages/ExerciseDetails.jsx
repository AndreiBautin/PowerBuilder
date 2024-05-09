// powerbuilder.client/src/pages/ExerciseDetails.jsx
import React from "react";
import { Container, Box, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import "../css/styles.css";

const sampleHistory = [
    { date: "2024-05-01", weight: 100, reps: 10, rpe: 8 },
    { date: "2024-05-02", weight: 105, reps: 8, rpe: 9 },
    { date: "2024-05-03", weight: 110, reps: 6, rpe: 9 }
];

const ExerciseDetails = () => {
    const { exerciseName } = useParams();
    const navigate = useNavigate();

    return (
        <Container maxWidth="sm" component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Box className="glass-card" sx={{ textAlign: "center", p: 2, m: "auto" }}>
                <Typography variant="h5" gutterBottom>
                    Exercise Details: {exerciseName}
                </Typography>
                <Box>
                    <Typography variant="subtitle1" gutterBottom>
                        History
                    </Typography>
                    {sampleHistory.map((item, index) => (
                        <Box key={index} sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                            <Typography variant="body2">{item.date}</Typography>
                            <Typography variant="body2">
                                Weight: {item.weight}, Reps: {item.reps}, RPE: {item.rpe}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
            <Box className="bottom-tabs">
                <Box className="tab-item" onClick={() => navigate("/dashboard")}>
                    <Typography className="tab-icon">📈</Typography>
                    <Typography variant="caption">Dashboard</Typography>
                </Box>
                <Box className="tab-item" onClick={() => navigate("/stats")}>
                    <Typography className="tab-icon">📊</Typography>
                    <Typography variant="caption">Stats</Typography>
                </Box>
                <Box className="tab-item" onClick={() => navigate("/macrocycleoverview")}>
                    <Typography className="tab-icon">🔍</Typography>
                    <Typography variant="caption">Macro Overview</Typography>
                </Box>
                <Box className="tab-item" onClick={() => navigate("/settings")}>
                    <Typography className="tab-icon">⚙️</Typography>
                    <Typography variant="caption">Settings</Typography>
                </Box>
            </Box>
        </Container>
    );
};

export default ExerciseDetails;
