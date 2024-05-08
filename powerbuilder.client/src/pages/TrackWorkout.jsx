// powerbuilder.client/src/pages/TrackWorkout.jsx
import React, { useState } from "react";
import { Container, Typography, Box, Card, CardContent, TextField, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import ModernButtons from "../components/ModernButtons";
import "../css/styles.css";

const workouts = {
    "Session 1": [
        {
            name: "Squat",
            sets: 3,
            reps: 8,
            weight: "100 kg",
            rpe: 7,
            previous: "90 kg",
            setDetails: [
                { setNumber: 1, weight: "100 kg", reps: 8, rpe: 7 },
                { setNumber: 2, weight: "100 kg", reps: 8, rpe: 7 },
                { setNumber: 3, weight: "100 kg", reps: 8, rpe: 7 }
            ]
        },
        {
            name: "Bench Press",
            sets: 3,
            reps: 8,
            weight: "80 kg",
            rpe: 8,
            previous: "75 kg",
            setDetails: [
                { setNumber: 1, weight: "80 kg", reps: 8, rpe: 8 },
                { setNumber: 2, weight: "80 kg", reps: 8, rpe: 8 },
                { setNumber: 3, weight: "80 kg", reps: 8, rpe: 8 }
            ]
        }
    ],
    "Session 2": [
        {
            name: "Overhead Press",
            sets: 3,
            reps: 10,
            weight: "40 kg",
            rpe: 7,
            previous: "35 kg",
            setDetails: [
                { setNumber: 1, weight: "40 kg", reps: 10, rpe: 7 },
                { setNumber: 2, weight: "40 kg", reps: 10, rpe: 7 },
                { setNumber: 3, weight: "40 kg", reps: 10, rpe: 7 }
            ]
        }
    ]
};

const TrackWorkout = () => {
    const { session } = useParams();
    const navigate = useNavigate();
    const exercises = workouts[session] || [];
    const [currentExercise, setCurrentExercise] = useState(0);
    const [currentSet, setCurrentSet] = useState(0);

    const handlePreviousExercise = () => setCurrentExercise((prev) => (prev > 0 ? prev - 1 : 0));
    const handleNextExercise = () => setCurrentExercise((prev) => (prev < exercises.length - 1 ? prev + 1 : exercises.length - 1));
    const handlePreviousSet = () => setCurrentSet((prev) => (prev > 0 ? prev - 1 : 0));
    const handleNextSet = () => setCurrentSet((prev) => (prev < exercises[currentExercise].setDetails.length - 1 ? prev + 1 : exercises[currentExercise].setDetails.length - 1));
    const handleResetExercise = () => setCurrentExercise(0);
    const handleResetSet = () => setCurrentSet(0);

    const exercise = exercises[currentExercise] || {};
    const set = exercise.setDetails ? exercise.setDetails[currentSet] : {};

    return (
        <Container maxWidth="md" component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Typography variant="h4" align="center" gutterBottom>
                {session}
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Button className="arrow-button" onClick={handlePreviousExercise}>{"<"}</Button>
                <Typography variant="h6">{exercise.name || "No Exercise Selected"}</Typography>
                <Button className="arrow-button" onClick={handleNextExercise}>{">"}</Button>
            </Box>
            <Card className="glass-box" sx={{ mt: 2 }}>
                <CardContent>
                    <Typography variant="body2">
                        Sets: {exercise.sets} | Reps: {exercise.reps} | Weight: {exercise.weight}
                        | Previous: {exercise.previous} | RPE: {exercise.rpe}
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 2 }}>
                        <Button className="arrow-button" onClick={handlePreviousSet}>{"<"}</Button>
                        <Typography variant="subtitle2">
                            Set {set.setNumber}: Weight - {set.weight}, Reps - {set.reps}, RPE - {set.rpe}
                        </Typography>
                        <Button className="arrow-button" onClick={handleNextSet}>{">"}</Button>
                    </Box>
                    <Box mt={2}>
                        <TextField label="Weight" defaultValue={set.weight} fullWidth variant="outlined" margin="dense" />
                        <TextField label="Reps" defaultValue={set.reps} fullWidth variant="outlined" margin="dense" />
                        <TextField label="RPE" defaultValue={set.rpe} fullWidth variant="outlined" margin="dense" />
                    </Box>
                </CardContent>
            </Card>
            <ModernButtons onPrevious={handlePreviousExercise} onNext={handleNextExercise} onReset={handleResetExercise} />
            <Box mt={3}>
                <Button fullWidth variant="contained" onClick={() => navigate(`/exercisedetails/${exercise.name}`)}>
                    View Exercise Details
                </Button>
            </Box>
            <Box mt={3}>
                <Button fullWidth variant="contained" onClick={() => navigate("/dashboard")}>
                    Back to Dashboard
                </Button>
            </Box>
        </Container>
    );
};

export default TrackWorkout;
