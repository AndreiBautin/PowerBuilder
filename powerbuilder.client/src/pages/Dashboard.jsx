// powerbuilder.client/src/pages/Dashboard.jsx
import React, { useState } from "react";
import { Container, Box, Typography, Tabs, Tab, Button } from "@mui/material";
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

    const handleChange = (event, newValue) => setTabValue(newValue);
    const handlePreviousWeek = () => setSelectedWeek((prev) => (prev > 0 ? prev - 1 : 0));
    const handleNextWeek = () => setSelectedWeek((prev) => (prev < 11 ? prev + 1 : 11));

    return (
        <Container maxWidth="md" component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Typography variant="h4" align="center" gutterBottom>
                PowerBuilder Dashboard
            </Typography>
            <Box className="glass-box" sx={{ width: "100%", overflow: "auto", textAlign: "center", p: 2, m: "auto" }}>
                <Tabs value={tabValue} onChange={handleChange} variant="scrollable" scrollButtons allowScrollButtonsMobile>
                    <Tab label="MacroCycle Overview" {...a11yProps(0)} />
                    <Tab label="Personal Bests" {...a11yProps(1)} />
                    <Tab label="Recent Workouts" {...a11yProps(2)} />
                    <Tab label="Settings" {...a11yProps(3)} onClick={() => navigate("/settings")} />
                </Tabs>
                <TabPanel value={tabValue} index={0}>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1, mb: 2 }}>
                        <Button className="arrow-button" onClick={handlePreviousWeek}>{"<"}</Button>
                        <BlockLineChart selectedWeek={selectedWeek} />
                        <Button className="arrow-button" onClick={handleNextWeek}>{">"}</Button>
                    </Box>
                    <TrainingSessionsNavigation selectedWeek={selectedWeek} navigateToTrackWorkout={(session) => navigate(`/trackworkout/${session}`)} />
                </TabPanel>
                <TabPanel value={tabValue} index={1}>
                    <PersonalBestChart />
                </TabPanel>
                <TabPanel value={tabValue} index={2}>
                    <RecentWorkoutsChart />
                </TabPanel>
            </Box>
        </Container>
    );
};

export default Dashboard;
