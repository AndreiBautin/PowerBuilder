// powerbuilder.client/src/pages/ExerciseSwap.jsx
import React, { useState } from "react";
import { Container, Box, Typography, Button, TextField } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../css/styles.css";

const availableExercises = [
    { name: "Dips", muscleGroup: "Chest" },
    { name: "Incline Bench Press", muscleGroup: "Chest" },
    { name: "Pec Deck", muscleGroup: "Chest" },
    { name: "Face Pull", muscleGroup: "Upper Back" },
    { name: "DB Row", muscleGroup: "Lats" }
];

const ExerciseSwap = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");

    const filteredExercises = availableExercises.filter((exercise) =>
        exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Container maxWidth="sm" component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Box className="glass-card" sx={{ width: "100%", textAlign: "center", p: 2, m: "auto" }}>
                <Typography variant="h5" gutterBottom>
                    Swap Exercise
                </Typography>
                <TextField variant="outlined" label="Search Exercises" fullWidth sx={{ mb: 2 }} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                {filteredExercises.map((exercise, index) => (
                    <Box key={index} sx={{ mb: 2 }}>
                        <Typography variant="body2">
                            {exercise.name} - {exercise.muscleGroup}
                        </Typography>
                    </Box>
                ))}
                <Button variant="contained" onClick={() => navigate("/workout")}>
                    Back to Workout
                </Button>
            </Box>
        </Container>
    );
};

export default ExerciseSwap;
