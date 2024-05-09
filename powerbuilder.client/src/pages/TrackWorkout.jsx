// powerbuilder.client/src/pages/TrackWorkout.jsx
import React, { useState } from "react";
import { Box, Button, Typography, Container } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import "../css/styles.css";

const exercises = [
    { name: "Bench Press", sets: 4, reps: 8, rpe: 7, projectedWeight: 100 },
    { name: "Overhead Press", sets: 3, reps: 10, rpe: 8, projectedWeight: 60 },
    { name: "Skull Crushers", sets: 3, reps: 12, rpe: 8, projectedWeight: 40 }
];

const TrackWorkout = () => {
    const [selectedExercise, setSelectedExercise] = useState(0);
    const [selectedSet, setSelectedSet] = useState(0);

    const previousExercise = () => setSelectedExercise((prev) => (prev > 0 ? prev - 1 : prev));
    const nextExercise = () => setSelectedExercise((prev) => (prev < exercises.length - 1 ? prev + 1 : prev));

    const previousSet = () => setSelectedSet((prev) => (prev > 0 ? prev - 1 : prev));
    const nextSet = () => setSelectedSet((prev) => (prev < exercises[selectedExercise].sets - 1 ? prev + 1 : prev));

    const currentExercise = exercises[selectedExercise];

    return (
        <Container maxWidth="md" className="glass-card" sx={{ mt: 4, p: 2 }}>
            <Typography variant="h6" className="bold-font" gutterBottom>
                {currentExercise.name}
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: 2 }}>
                <Button className="arrow-button" onClick={previousExercise}>
                    <ArrowBack />
                </Button>
                <Typography variant="subtitle1" sx={{ mx: 2 }}>
                    Set {selectedSet + 1} / {currentExercise.sets}
                </Typography>
                <Button className="arrow-button" onClick={nextExercise}>
                    <ArrowForward />
                </Button>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2
                }}
            >
                <Typography variant="body1">Projected Weight: {currentExercise.projectedWeight} kg</Typography>
                <Typography variant="body1">Reps: {currentExercise.reps}</Typography>
                <Typography variant="body1">RPE: {currentExercise.rpe}</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Button className="arrow-button" onClick={previousSet}>
                    <ArrowBack />
                </Button>
                <Typography variant="subtitle1" sx={{ mx: 2 }}>
                    Set {selectedSet + 1}
                </Typography>
                <Button className="arrow-button" onClick={nextSet}>
                    <ArrowForward />
                </Button>
            </Box>
        </Container>
    );
};

export default TrackWorkout;
