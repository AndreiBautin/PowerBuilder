// powerbuilder.client/src/pages/ExerciseDetail.jsx
import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../css/styles.css';

ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend);

const data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
    datasets: [
        {
            label: 'Weight Lifted (kg)',
            data: [100, 120, 140, 150, 160, 170],
            borderColor: 'rgba(75,192,192,1)',
            fill: false
        }
    ]
};

const ExerciseDetail = () => {
    const { exercise } = useParams();
    const navigate = useNavigate();

    return (
        <Container maxWidth="md" component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Typography variant="h4" align="center" gutterBottom>
                {exercise}
            </Typography>
            <Line data={data} />
            <Button fullWidth variant="contained" onClick={() => navigate('/exerciselist')}>
                Back to Exercise List
            </Button>
        </Container>
    );
};

export default ExerciseDetail;
