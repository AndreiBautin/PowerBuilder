// powerbuilder.client/src/pages/Settings.jsx
import React from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../css/styles.css";

const Settings = () => {
    const navigate = useNavigate();

    return (
        <Container maxWidth="md" component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    mt: 8,
                    p: 4,
                    borderRadius: "8px",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.37)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.18)"
                }}
                className="glass-box"
            >
                <Typography variant="h4" align="center" gutterBottom>
                    Settings
                </Typography>
                <Typography variant="body2">
                    Generic app settings will be displayed here.
                </Typography>
                <Button fullWidth variant="contained" sx={{ mt: 2 }} onClick={() => navigate("/dashboard")}>
                    Back to Dashboard
                </Button>
            </Box>
        </Container>
    );
};

export default Settings;
