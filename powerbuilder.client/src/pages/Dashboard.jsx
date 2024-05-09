// powerbuilder.client/src/pages/Dashboard.jsx
import React, { useState } from "react";
import { Box, Typography, Container } from "@mui/material";
import RecoveryScoreChart from "../components/RecoveryScoreChart";
import MacroCycleOverviewChart from "../components/MacroCycleOverviewChart";
import TrainingSessionsNavigation from "../components/TrainingSessionsNavigation";
import "../css/styles.css";

const Dashboard = () => {
    const [selectedWeek, setSelectedWeek] = useState(0);
    const [selectedSession, setSelectedSession] = useState(0);

    const previousWeek = () => setSelectedWeek((prev) => (prev > 0 ? prev - 1 : prev));
    const nextWeek = () => setSelectedWeek((prev) => (prev < 11 ? prev + 1 : prev));

    const previousSession = () => setSelectedSession((prev) => (prev > 0 ? prev - 1 : prev));
    const nextSession = () => setSelectedSession((prev) => (prev < 5 ? prev + 1 : prev));

    const navigateToTrackWorkout = (sessionName) => {
        console.log(`Navigating to Track Workout for: ${sessionName}`);
        // Here you can navigate to the Track Workout page or execute any logic needed
    };

    return (
        <Container maxWidth="md" className="glass-card" sx={{ mt: 4, p: 2 }}>
            <Typography variant="h4" className="bold-font" gutterBottom>
                {new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
            </Typography>
            <RecoveryScoreChart />
            <MacroCycleOverviewChart selectedWeek={selectedWeek} previousWeek={previousWeek} nextWeek={nextWeek} />
            <TrainingSessionsNavigation
                selectedSession={selectedSession}
                previousSession={previousSession}
                nextSession={nextSession}
                navigateToTrackWorkout={navigateToTrackWorkout}
            />
        </Container>
    );
};

export default Dashboard;
