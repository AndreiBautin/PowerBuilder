// powerbuilder.client/src/pages/Workout.jsx
import React, { useState } from "react";
import { Container, Box, Typography, Button, TextField } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../css/styles.css";

const workoutExercises = [
    {
        name: "Bench Press",
        sets: [
            { setNumber: 1, weight: 135, reps: 8, rpe: 7 },
            { setNumber: 2, weight: 145, reps: 7, rpe: 8 },
            { setNumber: 3, weight: 150, reps: 6, rpe: 9 }
        ]
    },
    {
        name: "Overhead Press",
        sets: [
            { setNumber: 1, weight: 95, reps: 8, rpe: 7 },
            { setNumber: 2, weight: 100, reps: 7, rpe: 8 }
        ]
    }
];

const Workout = () => {
    const navigate = useNavigate();
    const [currentExercise, setCurrentExercise] = useState(0);
    const [currentSet, setCurrentSet] = useState(0);

    const currentExerciseData = workoutExercises[currentExercise];
    const currentSetData = currentExerciseData.sets[currentSet];

    const handlePreviousExercise = () => setCurrentExercise((prev) => (prev > 0 ? prev - 1 : 0));
    const handleNextExercise = () => setCurrentExercise((prev) => (prev < workoutExercises.length - 1 ? prev + 1 : workoutExercises.length - 1));
    const handlePreviousSet = () => setCurrentSet((prev) => (prev > 0 ? prev - 1 : 0));
    const handleNextSet = () => setCurrentSet((prev) => (prev < currentExerciseData.sets.length - 1 ? prev + 1 : currentExerciseData.sets.length - 1));

    return (
        <Container maxWidth="sm" component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Box className="glass-card" sx={{ width: "100%", textAlign: "center", p: 2, m: "auto" }}>
                <Typography variant="h5" gutterBottom>
                    {currentExerciseData.name}
                </Typography>
                <Typography variant="subtitle1">Set {currentSetData.setNumber}</Typography>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 2 }}>
                    <Button variant="outlined" onClick={handlePreviousSet}>
                        {"<"}
                    </Button>
                    <Typography variant="body2">
                        Weight: <TextField variant="outlined" size="small" defaultValue={currentSetData.weight} /> lbs, Reps:{" "}
                        <TextField variant="outlined" size="small" defaultValue={currentSetData.reps} />, RPE:{" "}
                        <TextField variant="outlined" size="small" defaultValue={currentSetData.rpe} />
                    </Typography>
                    <Button variant="outlined" onClick={handleNextSet}>
                        {">"}
                    </Button>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
                    <Button variant="outlined" onClick={handlePreviousExercise}>
                        {"< Previous Exercise"}
                    </Button>
                    <Button variant="outlined" onClick={handleNextExercise}>
                        {"Next Exercise >"}
                    </Button>
                </Box>
                <Button variant="contained" onClick={() => navigate("/dashboard")} sx={{ mt: 2 }}>
                    Complete Workout
                </Button>
            </Box>
        </Container>
    );
};

export default Workout;
