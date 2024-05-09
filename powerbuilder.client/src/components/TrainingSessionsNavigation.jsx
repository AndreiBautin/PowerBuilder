// powerbuilder.client/src/components/TrainingSessionsNavigation.jsx
import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

const sessions = [
    {
        name: 'Push Day',
        exercises: [
            { name: 'Bench Press', sets: 4, reps: 8, rpe: 7 },
            { name: 'Overhead Press', sets: 3, reps: 10, rpe: 8 },
            { name: 'Skull Crushers', sets: 3, reps: 12, rpe: 8 },
        ],
    },
    {
        name: 'Pull Day',
        exercises: [
            { name: 'Deadlift', sets: 4, reps: 5, rpe: 8 },
            { name: 'Pull-Ups', sets: 3, reps: 10, rpe: 8 },
            { name: 'Face Pulls', sets: 3, reps: 12, rpe: 7 },
        ],
    },
    {
        name: 'Leg Day',
        exercises: [
            { name: 'Squats', sets: 4, reps: 8, rpe: 7 },
            { name: 'Leg Press', sets: 3, reps: 10, rpe: 8 },
            { name: 'Calf Raises', sets: 3, reps: 12, rpe: 8 },
        ],
    },
];

const TrainingSessionsNavigation = ({ selectedWeek, navigateToTrackWorkout }) => {
    const currentSession = sessions[selectedWeek % sessions.length];

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2 }}>
            <Button className="arrow-button">
                <ArrowBack />
            </Button>
            <Box className="session-card" sx={{ flexGrow: 1, textAlign: 'center', mx: 2 }}>
                <Typography variant="h6">{currentSession.name}</Typography>
                <Box>
                    {currentSession.exercises.map((exercise, index) => (
                        <Typography key={index} variant="body2">
                            {exercise.name}: {exercise.sets}x{exercise.reps}, RPE {exercise.rpe}
                        </Typography>
                    ))}
                </Box>
                <Button onClick={() => navigateToTrackWorkout(currentSession.name)}>
                    Begin Session
                </Button>
            </Box>
            <Button className="arrow-button">
                <ArrowForward />
            </Button>
        </Box>
    );
};

export default TrainingSessionsNavigation;
