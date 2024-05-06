// powerbuilder.client/src/pages/Settings.jsx
import React from 'react';
import { Container, Typography, Button, List, ListItem, ListItemText, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../css/styles.css';

const settings = [
    { name: 'Clear Macrocycle', description: 'Clear your current macrocycle and start fresh.' },
    { name: 'Change Theme', description: 'Switch between light and dark themes.' }
];

const Settings = () => {
    const navigate = useNavigate();

    return (
        <Container maxWidth="md" component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Settings
            </Typography>
            <List>
                {settings.map((setting, index) => (
                    <React.Fragment key={index}>
                        <ListItem button>
                            <ListItemText primary={setting.name} secondary={setting.description} />
                        </ListItem>
                        {index < settings.length - 1 && <Divider />}
                    </React.Fragment>
                ))}
            </List>
            <Button fullWidth variant="contained" onClick={() => navigate('/dashboard')}>
                Back to Dashboard
            </Button>
        </Container>
    );
};

export default Settings;
