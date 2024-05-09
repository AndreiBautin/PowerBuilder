// powerbuilder.client/src/pages/MacroCycleForm.jsx
import React, { useState } from "react";
import { Container, Box, Typography, Button, TextField } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../css/styles.css";

const MacroCycleForm = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Replace with actual form submission logic
        console.log("Submitted MacroCycle Form:", form);
        navigate("/dashboard");
    };

    return (
        <Container maxWidth="sm" component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Box className="glass-card" sx={{ textAlign: "center", p: 2, m: "auto" }}>
                <Typography variant="h5" gutterBottom>
                    Create MacroCycle
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField name="mesoCount" label="Meso Count" onChange={handleInputChange} fullWidth margin="normal" />
                    <TextField name="mesoLength" label="Meso Length" onChange={handleInputChange} fullWidth margin="normal" />
                    <TextField name="trainingPhase" label="Training Phase" onChange={handleInputChange} fullWidth margin="normal" />
                    <Button type="submit" variant="contained" sx={{ mt: 2 }}>
                        Generate MacroCycle
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default MacroCycleForm;
