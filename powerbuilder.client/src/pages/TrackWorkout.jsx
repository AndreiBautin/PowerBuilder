// powerbuilder.client/src/pages/TrackWorkout.jsx
import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Divider, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import '../css/styles.css';

const exercises = [
    { name: 'Squat', sets: 4, reps: 8 },
    { name: 'Bench Press', sets: 4, reps: 8 },
    { name: 'Deadlift', sets: 4, reps: 8 }
];

const TrackWorkout = () => {
    const { session } = useParams();
    const navigate = useNavigate();

    return (
        <Container maxWidth="md" component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Typography variant="h4" align="center" gutterBottom>
                {session} Workout
            </Typography>
            <List>
                {exercises.map((exercise, index) => (
                    <React.Fragment key={index}>
                        <ListItem button onClick={() => navigate(`/exercise/${exercise.name}`)}>
                            <ListItemText primary={exercise.name} secondary={`Sets: ${exercise.sets}, Reps: ${exercise.reps}`} />
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

export default TrackWorkout;
