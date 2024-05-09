// powerbuilder.client/src/components/CurrentSessionNavigation.jsx
import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import "../css/styles.css";

const sessions = [
    {
        day: "Session 1",
        exercises: [
            { name: "Bench Press", sets: 3, reps: 5, rpe: 8 },
            { name: "Overhead Press", sets: 4, reps: 8, rpe: 7 },
            { name: "Tricep Extension", sets: 3, reps: 12, rpe: 6 }
        ]
    },
    {
        day: "Session 2",
        exercises: [
            { name: "Deadlift", sets: 4, reps: 5, rpe: 8 },
            { name: "Pull-Ups", sets: 4, reps: 8, rpe: 7 },
            { name: "Barbell Row", sets: 3, reps: 10, rpe: 6 }
        ]
    },
    {
        day: "Session 3",
        exercises: [
            { name: "Squat", sets: 4, reps: 5, rpe: 8 },
            { name: "Leg Press", sets: 3, reps: 10, rpe: 7 },
            { name: "Calf Raises", sets: 3, reps: 12, rpe: 6 }
        ]
    }
    // Add additional sessions here
];

const CurrentSessionNavigation = ({ week }) => {
    const [currentSession, setCurrentSession] = useState(0);

    const handlePreviousSession = () => setCurrentSession((prev) => (prev > 0 ? prev - 1 : 0));
    const handleNextSession = () => setCurrentSession((prev) => (prev < sessions.length - 1 ? prev + 1 : sessions.length - 1));

    const { day, exercises } = sessions[currentSession];

    return (
        <Box sx={{ textAlign: "center" }}>
            <Typography variant="h6" align="center" gutterBottom>
                {day}
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                <Button variant="outlined" onClick={handlePreviousSession}>
                    {"<"}
                </Button>
                <Box sx={{ flexGrow: 1, textAlign: "center" }}>
                    {exercises.map((exercise, index) => (
                        <Typography variant="body2" key={index}>
                            {exercise.name}: {exercise.sets} sets x {exercise.reps} reps, RPE {exercise.rpe}
                        </Typography>
                    ))}
                </Box>
                <Button variant="outlined" onClick={handleNextSession}>
                    {">"}
                </Button>
            </Box>
        </Box>
    );
};

export default CurrentSessionNavigation;
