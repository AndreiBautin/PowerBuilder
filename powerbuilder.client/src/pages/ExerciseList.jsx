// powerbuilder.client/src/pages/ExerciseList.jsx
import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Divider, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../css/styles.css';

const exercises = ['Squat', 'Bench Press', 'Deadlift', 'Overhead Press', 'Pull-ups'];

const ExerciseList = () => {
    const navigate = useNavigate();

    return (
        <Container maxWidth="md" component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Exercise List
            </Typography>
            <List>
                {exercises.map((exercise, index) => (
                    <React.Fragment key={index}>
                        <ListItem button onClick={() => navigate(`/exercise/${exercise}`)}>
                            <ListItemText primary={exercise} />
                        </ListItem>
                        {index < exercises.length - 1 && <Divider />}
                    </React.Fragment>
                ))}
            </List>
            <Button fullWidth variant="contained" onClick={() => navigate('/dashboard')}>
                Back to Dashboard
            </Button>
        </Container>
    );
};

export default ExerciseList;
