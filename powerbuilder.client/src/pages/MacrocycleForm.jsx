// powerbuilder.client/src/pages/MacrocycleForm.jsx
import React from "react";
import { Container, Box, Typography, Button, TextField, MenuItem } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../css/styles.css";

const trainingPhases = ["Hypertrophy", "Strength", "Peaking"];
const splits = ["PPL", "Upper-Lower"];

const MacrocycleForm = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate("/dashboard");
    };

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
                    Generate New MacroCycle
                </Typography>
                <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                    <TextField name="trainingPhase" label="Training Phase" select fullWidth margin="normal">
                        {trainingPhases.map((phase, index) => (
                            <MenuItem key={index} value={phase}>
                                {phase}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField name="trainingSplit" label="Training Split" select fullWidth margin="normal">
                        {splits.map((split, index) => (
                            <MenuItem key={index} value={split}>
                                {split}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField name="mesoLength" label="Meso Length (weeks)" fullWidth margin="normal" />
                    <TextField name="mesoCount" label="Number of Mesocycles" fullWidth margin="normal" />
                    <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
                        Generate MacroCycle
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default MacrocycleForm;
