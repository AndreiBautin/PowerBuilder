// powerbuilder.client/src/pages/Dashboard.jsx
import React, { useState } from "react";
import { Container, Box, Typography, Tabs, Tab } from "@mui/material";
import BlockLineChart from "../components/BlockLineChart";
import PersonalBestChart from "../components/PersonalBestChart";
import RecentWorkoutsChart from "../components/RecentWorkoutsChart";
import TrainingSessionsNavigation from "../components/TrainingSessionsNavigation";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../css/styles.css";

function TabPanel({ children, value, index, ...other }) {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `tab-${index}`,
        "aria-controls": `tabpanel-${index}`
    };
}

const Dashboard = () => {
    const navigate = useNavigate();
    const [selectedWeek, setSelectedWeek] = useState(0);
    const [tabValue, setTabValue] = useState(0);

    const handleWeekChange = (newWeek) => setSelectedWeek(newWeek);
    const handleChange = (event, newValue) => setTabValue(newValue);

    const navigateToTrackWorkout = (session) => {
        navigate(`/trackworkout/${session}`);
    };

    return (
        <Container maxWidth="md" component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Typography variant="h4" align="center" gutterBottom>
                PowerBuilder Dashboard
            </Typography>
            <Box className="glass-box" sx={{ width: "100%" }}>
                <Tabs value={tabValue} onChange={handleChange} indicatorColor="primary" textColor="inherit" centered>
                    <Tab label="MacroCycle Overview" {...a11yProps(0)} />
                    <Tab label="Training Sessions" {...a11yProps(1)} />
                    <Tab label="Personal Bests" {...a11yProps(2)} />
                    <Tab label="Recent Workouts" {...a11yProps(3)} />
                </Tabs>
                <TabPanel value={tabValue} index={0}>
                    <BlockLineChart selectedWeek={selectedWeek} />
                </TabPanel>
                <TabPanel value={tabValue} index={1}>
                    <TrainingSessionsNavigation selectedWeek={selectedWeek} navigateToTrackWorkout={navigateToTrackWorkout} />
                </TabPanel>
                <TabPanel value={tabValue} index={2}>
                    <PersonalBestChart />
                </TabPanel>
                <TabPanel value={tabValue} index={3}>
                    <RecentWorkoutsChart />
                </TabPanel>
            </Box>
        </Container>
    );
};

export default Dashboard;
