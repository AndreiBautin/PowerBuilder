// powerbuilder.client/src/components/Profile.jsx
import React from 'react';
import { Box, Typography, TextField } from '@mui/material';

const Profile = () => {
    return (
        <Box className="glass-box" sx={{ p: 2 }}>
            <Typography variant="h6" align="center" gutterBottom>
                Profile
            </Typography>
            <TextField label="Name" fullWidth margin="normal" variant="outlined" />
            <TextField label="Age" fullWidth margin="normal" variant="outlined" />
            <TextField label="Height" fullWidth margin="normal" variant="outlined" />
            <TextField label="Weight" fullWidth margin="normal" variant="outlined" />
            <TextField label="Training Focus (Powerlifting/Bodybuilding)" fullWidth margin="normal" variant="outlined" />
        </Box>
    );
};

export default Profile;
