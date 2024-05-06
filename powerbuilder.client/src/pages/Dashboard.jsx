// powerbuilder.client/src/pages/Dashboard.jsx
import React, { useState } from 'react';
import { Container, Box, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import BlockLineChart from '../components/BlockLineChart';
import TrainingSessionsNavigation from '../components/TrainingSessionsNavigation';
import '../css/styles.css';

const Dashboard = () => {
    const [selectedWeek, setSelectedWeek] = useState(0);
    const navigate = useNavigate();

    const handlePreviousCycle = () => {
        setSelectedWeek((prev) => (prev > 0 ? prev - 1 : 0));
    };

    const handleNextCycle = () => {
        setSelectedWeek((prev) => (prev < 11 ? prev + 1 : 11)); // 12 weeks total
    };

    const navigateToTrackWorkout = (session) => {
        navigate(`/trackworkout/${session}`);
    };

    return (
        <Container maxWidth="lg" component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Box className="dashboard-container">
                <Box className="chart-box glass-box">
                    <BlockLineChart selectedWeek={selectedWeek} />
                </Box>
                <Grid container spacing={2} className="training-block-section">
                    <Grid item xs={2} className="navigation-arrows">
                        <Button className="arrow-button" onClick={handlePreviousCycle}>{'<'}</Button>
                    </Grid>
                    <Grid item xs={8}>
                        <TrainingSessionsNavigation
                            selectedWeek={selectedWeek}
                            navigateToTrackWorkout={navigateToTrackWorkout}
                        />
                    </Grid>
                    <Grid item xs={2} className="navigation-arrows">
                        <Button className="arrow-button" onClick={handleNextCycle}>{'>'}</Button>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Dashboard;
