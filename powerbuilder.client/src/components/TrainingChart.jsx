// powerbuilder.client/src/components/TrainingChart.jsx
import { motion } from 'framer-motion';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Box, Typography } from '@mui/material';

const data = [
    { name: 'Week 1', Squat: 120, Bench: 90, Deadlift: 140 },
    { name: 'Week 2', Squat: 125, Bench: 95, Deadlift: 145 },
    { name: 'Week 3', Squat: 130, Bench: 100, Deadlift: 150 },
    { name: 'Week 4', Squat: 135, Bench: 105, Deadlift: 155 },
];

const chartVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const TrainingChart = () => {
    return (
        <Box
            component={motion.div}
            variants={chartVariants}
            initial="hidden"
            animate="visible"
            boxShadow={3}
            p={4}
            borderRadius={2}
            bgcolor="rgba(0, 0, 0, 0.8)"
            color="#ffffff"
        >
            <Typography variant="h4" gutterBottom>
                Training Progress
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Squat" stroke="#8884d8" />
                    <Line type="monotone" dataKey="Bench" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="Deadlift" stroke="#ff7300" />
                </LineChart>
            </ResponsiveContainer>
        </Box>
    );
};

export default TrainingChart;
