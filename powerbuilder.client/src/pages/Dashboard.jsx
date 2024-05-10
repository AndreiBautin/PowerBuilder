import React, { useState } from 'react';
import RecoveryScoreChart from '../components/RecoveryScoreChart';
import MacroCycleOverviewChart from '../components/MacroCycleOverviewChart';
import PersonalBestCharts from '../components/PersonalBestCharts';
import { Container, Box, Typography } from '@mui/material';
import TrainingSessionsNavigation from '../components/TrainingSessionsNavigation';

const Dashboard = () => {
    const [selectedWeek, setSelectedWeek] = useState(0);

    const handleNavigateToTrackWorkout = (session) => {
        console.log(`Navigating to Track Workout for ${session}`);
        window.location.href = '/trackworkout';
    };

    const handleWeekChange = (direction) => {
        if (direction === 'prev') {
            setSelectedWeek((prev) => (prev > 0 ? prev - 1 : 0));
        } else {
            setSelectedWeek((prev) => (prev < 11 ? prev + 1 : 11));
        }
    };

    return (
        <Container maxWidth="md" className="dashboard-container">
            <Typography variant="h4" align="center" sx={{ mb: 3, fontWeight: 'bold' }}>
                {new Date().toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                })}
            </Typography>

            <RecoveryScoreChart />

            <Box className="macrocycle-overview-container">
                <Typography variant="h5" align="center">
                    Week {selectedWeek + 1}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <button className="arrow-button" onClick={() => handleWeekChange('prev')}>
                        {'<'}
                    </button>
                    <MacroCycleOverviewChart selectedWeek={selectedWeek} />
                    <button className="arrow-button" onClick={() => handleWeekChange('next')}>
                        {'>'}
                    </button>
                </Box>
                <TrainingSessionsNavigation
                    selectedWeek={selectedWeek}
                    navigateToTrackWorkout={handleNavigateToTrackWorkout}
                />
            </Box>

            <PersonalBestCharts />
        </Container>
    );
};

export default Dashboard;
