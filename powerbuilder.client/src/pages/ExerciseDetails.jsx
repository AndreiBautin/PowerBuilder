// powerbuilder.client/src/pages/ExerciseDetails.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Typography, Box, Card, CardContent, Button } from "@mui/material";
import { motion } from "framer-motion";
import "../css/styles.css";

const exercisesDetails = {
    Squat: { description: "Squat exercise details.", sets: [1, 2, 3] },
    "Bench Press": { description: "Bench Press exercise details.", sets: [1, 2, 3] },
    Deadlift: { description: "Deadlift exercise details.", sets: [1, 2, 3] }
};

const ExerciseDetails = () => {
    const { exercise } = useParams();
    const navigate = useNavigate();
    const exerciseDetail = exercisesDetails[exercise] || {};

    return (
        <Container maxWidth="md" component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Typography variant="h4" align="center" gutterBottom>
                {exercise} Details
            </Typography>
            <Card className="glass-box" sx={{ mt: 2 }}>
                <CardContent>
                    <Typography variant="h6">{exerciseDetail.description || "No Details Found"}</Typography>
                    <Box sx={{ mt: 2 }}>
                        <Typography variant="subtitle1">Sets:</Typography>
                        {exerciseDetail.sets && exerciseDetail.sets.map((set, index) => (
                            <Typography key={index}>Set {set}</Typography>
                        ))}
                    </Box>
                </CardContent>
            </Card>
            <Box mt={3}>
                <Button fullWidth variant="contained" onClick={() => navigate("/dashboard")}>
                    Back to Dashboard
                </Button>
            </Box>
        </Container>
    );
};

export default ExerciseDetails;
