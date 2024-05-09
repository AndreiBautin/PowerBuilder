// powerbuilder.client/src/pages/NewExerciseForm.jsx
import React, { useState } from "react";
import { Container, Box, Typography, TextField, Button } from "@mui/material";
import { motion } from "framer-motion";
import "../css/styles.css";

const NewExerciseForm = () => {
    const [exercise, setExercise] = useState({
        name: "",
        muscleGroup: "",
        equipmentType: ""
    });

    const handleChange = (e) => setExercise({ ...exercise, [e.target.name]: e.target.value });

    const handleSubmit = () => {
        // Logic to add new exercise goes here
        console.log("New Exercise:", exercise);
    };

    return (
        <Container maxWidth="sm" component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Box className="glass-card" sx={{ width: "100%", textAlign: "center", p: 2, m: "auto" }}>
                <Typography variant="h5" gutterBottom>
                    Create New Exercise
                </Typography>
                <TextField name="name" label="Exercise Name" variant="outlined" fullWidth sx={{ mb: 2 }} value={exercise.name} onChange={handleChange} />
                <TextField name="muscleGroup" label="Muscle Group" variant="outlined" fullWidth sx={{ mb: 2 }} value={exercise.muscleGroup} onChange={handleChange} />
                <TextField name="equipmentType" label="Equipment Type" variant="outlined" fullWidth sx={{ mb: 2 }} value={exercise.equipmentType} onChange={handleChange} />
                <Button variant="contained" onClick={handleSubmit}>
                    Create Exercise
                </Button>
            </Box>
        </Container>
    );
};

export default NewExerciseForm;
