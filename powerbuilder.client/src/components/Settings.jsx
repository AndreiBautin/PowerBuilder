// powerbuilder.client/src/components/Settings.jsx
import React from 'react';
import { Box, Typography, TextField, Switch, FormControlLabel } from '@mui/material';

const Settings = () => {
    return (
        <Box className="glass-box" sx={{ p: 2 }}>
            <Typography variant="h6" align="center" gutterBottom>
                Settings
            </Typography>
            <TextField label="Language" fullWidth margin="normal" variant="outlined" />
            <FormControlLabel
                control={<Switch />}
                label="Enable Notifications"
            />
        </Box>
    );
};

export default Settings;
