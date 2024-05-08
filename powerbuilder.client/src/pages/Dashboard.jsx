// powerbuilder.client/src/pages/Dashboard.jsx
import React, { useState } from "react";
import { Container, Box, Typography, Tabs, Tab } from "@mui/material";
import BlockLineChart from "../components/BlockLineChart";
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

    return (
        <Container maxWidth="md" component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Typography variant="h4" align="center" gutterBottom>
                PowerBuilder Dashboard
            </Typography>
            <Box className="glass-box" sx={{ width: "100%", height: "100vh", overflow: "auto" }}>
                <Tabs value={tabValue} onChange={handleChange} variant="scrollable" scrollButtons allowScrollButtonsMobile>
                    <Tab label="MacroCycle Overview" {...a11yProps(0)} />
                    <Tab label="Settings" {...a11yProps(1)} onClick={() => navigate("/settings")} />
                </Tabs>
                <TabPanel value={tabValue} index={0}>
                    <BlockLineChart selectedWeek={selectedWeek} />
                    <TrainingSessionsNavigation selectedWeek={selectedWeek} navigateToTrackWorkout={(session) => navigate(`/trackworkout/${session}`)} />
                </TabPanel>
            </Box>
        </Container>
    );
};

export default Dashboard;
