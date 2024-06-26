// powerbuilder.client/src/pages/ExerciseList.jsx
import React, { useState } from "react";
import { Container, Box, Typography, TextField } from "@mui/material";
import { motion } from "framer-motion";
import "../css/styles.css";

const exercises = [
    { name: "Bench Press", muscleGroup: "Chest" },
    { name: "Deadlift", muscleGroup: "Posterior Chain" },
    { name: "Squat", muscleGroup: "Quads" },
    { name: "Overhead Press", muscleGroup: "Delts" },
    { name: "Pull-Ups", muscleGroup: "Lats" }
];

const ExerciseList = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredExercises = exercises.filter((exercise) =>
        exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Container maxWidth="sm" component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Box className="glass-card" sx={{ width: "100%", textAlign: "center", p: 2, m: "auto" }}>
                <Typography variant="h5" gutterBottom>
                    Exercises
                </Typography>
                <TextField variant="outlined" label="Search Exercises" fullWidth sx={{ mb: 2 }} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                {filteredExercises.map((exercise, index) => (
                    <Box key={index} sx={{ mb: 2 }}>
                        <Typography variant="body2">
                            {exercise.name} - {exercise.muscleGroup}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Container>
    );
};

export default ExerciseList;
