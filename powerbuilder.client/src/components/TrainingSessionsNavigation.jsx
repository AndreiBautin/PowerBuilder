// powerbuilder.client/src/components/TrainingSessionsNavigation.jsx
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import "../css/styles.css";

const sessions = ["Session 1", "Session 2", "Session 3", "Session 4", "Session 5", "Session 6"];

const TrainingSessionsNavigation = ({ selectedWeek, navigateToTrackWorkout }) => {
    return (
        <Box className="sessions-list">
            <Typography variant="h6" align="center" gutterBottom>
                Week {selectedWeek + 1}
            </Typography>
            {sessions.map((session, index) => (
                <Button
                    key={index}
                    className="sessions-list-item"
                    onClick={() => navigateToTrackWorkout(session)}
                    fullWidth
                >
                    {session}
                </Button>
            ))}
        </Box>
    );
};

export default TrainingSessionsNavigation;
