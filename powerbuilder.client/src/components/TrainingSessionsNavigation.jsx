// powerbuilder.client/src/components/TrainingSessionsNavigation.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const sessions = ['Session 1', 'Session 2', 'Session 3', 'Session 4', 'Session 5', 'Session 6'];

const TrainingSessionsNavigation = ({ selectedWeek, navigateToTrackWorkout }) => {
    return (
        <Box className="sessions-list">
            <Typography variant="h6" align="center" gutterBottom>
                Training Sessions
            </Typography>
            {sessions.map((session, index) => (
                <Box
                    key={index}
                    className="sessions-list-item"
                    onClick={() => navigateToTrackWorkout(session)}
                >
                    <Typography variant="body2">{session}</Typography>
                </Box>
            ))}
        </Box>
    );
};

export default TrainingSessionsNavigation;
