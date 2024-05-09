// powerbuilder.client/src/pages/Warmup.jsx
import React, { useState } from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../css/styles.css";

const warmupExercises = [
    { name: "Hip Flexor Stretch", sets: 2, duration: "30s" },
    { name: "Shoulder Rotations", sets: 2, duration: "15s" },
    { name: "Cat-Cow Stretch", sets: 2, duration: "30s" }
];

const Warmup = () => {
    const navigate = useNavigate();

    return (
        <Container maxWidth="sm" component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Box className="glass-card" sx={{ width: "100%", textAlign: "center", p: 2, m: "auto" }}>
                <Typography variant="h5" gutterBottom>
                    Warmup Exercises
                </Typography>
                {warmupExercises.map((exercise, index) => (
                    <Box key={index} sx={{ mb: 2 }}>
                        <Typography variant="subtitle1">{exercise.name}</Typography>
                        <Typography variant="body2">
                            {exercise.sets} sets x {exercise.duration}
                        </Typography>
                    </Box>
                ))}
                <Button variant="contained" onClick={() => navigate(`/workout`)}>
                    Proceed to Workout
                </Button>
            </Box>
        </Container>
    );
};

export default Warmup;
