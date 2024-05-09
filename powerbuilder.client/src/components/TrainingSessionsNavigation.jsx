// powerbuilder.client/src/components/TrainingSessionsNavigation.jsx
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import "../css/styles.css";

const sessions = [
    {
        name: "Push Day",
        exercises: [
            { name: "Bench Press", sets: 4, reps: 8, rpe: 7 },
            { name: "Overhead Press", sets: 3, reps: 10, rpe: 8 },
            { name: "Skull Crushers", sets: 3, reps: 12, rpe: 8 }
        ]
    },
    {
        name: "Pull Day",
        exercises: [
            { name: "Pull Ups", sets: 3, reps: 8, rpe: 7 },
            { name: "Barbell Rows", sets: 3, reps: 10, rpe: 8 },
            { name: "Hammer Curls", sets: 3, reps: 12, rpe: 8 }
        ]
    },
    {
        name: "Legs Day",
        exercises: [
            { name: "Squats", sets: 4, reps: 8, rpe: 7 },
            { name: "Leg Press", sets: 3, reps: 10, rpe: 8 },
            { name: "Leg Curls", sets: 3, reps: 12, rpe: 8 }
        ]
    },
    {
        name: "Push Day 2",
        exercises: [
            { name: "Incline Bench Press", sets: 4, reps: 8, rpe: 7 },
            { name: "Dips", sets: 3, reps: 10, rpe: 8 },
            { name: "Tricep Extensions", sets: 3, reps: 12, rpe: 8 }
        ]
    },
    {
        name: "Pull Day 2",
        exercises: [
            { name: "Lat Pulldowns", sets: 3, reps: 8, rpe: 7 },
            { name: "Cable Rows", sets: 3, reps: 10, rpe: 8 },
            { name: "Concentration Curls", sets: 3, reps: 12, rpe: 8 }
        ]
    },
    {
        name: "Legs Day 2",
        exercises: [
            { name: "Front Squats", sets: 4, reps: 8, rpe: 7 },
            { name: "Lunges", sets: 3, reps: 10, rpe: 8 },
            { name: "Calf Raises", sets: 3, reps: 12, rpe: 8 }
        ]
    }
];

const TrainingSessionsNavigation = ({ selectedSession, previousSession, nextSession, navigateToTrackWorkout }) => {
    const currentSession = sessions[selectedSession];

    return (
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: 2 }}>
            <Button className="arrow-button" onClick={previousSession}>
                <ArrowBack />
            </Button>
            <Box className="glass-card" sx={{ flexGrow: 1, textAlign: "center" }}>
                <Typography variant="h6" className="cool-font" gutterBottom>
                    {currentSession.name}
                </Typography>
                {currentSession.exercises.map((exercise, index) => (
                    <Box key={index} sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                        <Typography variant="body2">{exercise.name}</Typography>
                        <Typography variant="body2">
                            {exercise.sets}x{exercise.reps} @ {exercise.rpe} RPE
                        </Typography>
                    </Box>
                ))}
                <Button className="button" onClick={() => navigateToTrackWorkout(currentSession.name)}>
                    Begin Session
                </Button>
            </Box>
            <Button className="arrow-button" onClick={nextSession}>
                <ArrowForward />
            </Button>
        </Box>
    );
};

export default TrainingSessionsNavigation;
