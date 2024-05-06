// powerbuilder.client/src/pages/MacrocycleForm.jsx
import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../css/styles.css';

const MacrocycleForm = () => {
    const navigate = useNavigate();

    return (
        <Container maxWidth="md" component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Create Your Macrocycle
            </Typography>
            <TextField fullWidth label="Name" margin="normal" />
            <TextField fullWidth label="Start Date" margin="normal" />
            <TextField fullWidth label="End Date" margin="normal" />
            <Button fullWidth variant="contained" onClick={() => navigate('/dashboard')}>
                Create Macrocycle
            </Button>
        </Container>
    );
};

export default MacrocycleForm;
