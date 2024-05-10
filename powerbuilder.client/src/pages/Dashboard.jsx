import React, { useState } from 'react';
import RecoveryScoreChart from '../components/RecoveryScoreChart';
import MacroCycleOverviewChart from '../components/MacroCycleOverviewChart';
import PersonalBestCharts from '../components/PersonalBestCharts';
import TrainingSessionsNavigation from '../components/TrainingSessionsNavigation';
import { Container, Box, Typography } from '@mui/material';
import '../css/styles.css';

const Dashboard = () => {
    const [selectedWeek, setSelectedWeek] = useState(0);

    const handleWeekChange = (direction) => {
        if (direction === 'prev') {
            setSelectedWeek((prev) => (prev > 0 ? prev - 1 : 0));
        } else {
            setSelectedWeek((prev) => (prev < 11 ? prev + 1 : 11));
        }
    };

    return (
        <Container maxWidth="md" className="dashboard-container">
            {/* Recovery Metrics */}
            <Box className="recovery-score-container">
                <RecoveryScoreChart />
            </Box>

            {/* MacroCycle Overview */}
            <Box className="macrocycle-overview-container">
                <Typography variant="h5" align="center" sx={{ mb: 2, fontWeight: 'bold' }}>
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
                <TrainingSessionsNavigation selectedWeek={selectedWeek} />
            </Box>

            {/* Personal Bests */}
            <PersonalBestCharts />
        </Container>
    );
};

export default Dashboard;
