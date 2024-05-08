// powerbuilder.client/src/components/MacroForm.jsx
import React from 'react';
import { Box, Typography, TextField, Select, MenuItem } from '@mui/material';

const MacroForm = () => {
    return (
        <Box className="glass-box" sx={{ p: 2 }}>
            <Typography variant="h6" align="center" gutterBottom>
                MacroCycle Form
            </Typography>
            <TextField label="Training Goal" fullWidth margin="normal" variant="outlined" />
            <Select fullWidth defaultValue="Powerlifting" variant="outlined" margin="normal">
                <MenuItem value="Powerlifting">Powerlifting</MenuItem>
                <MenuItem value="Bodybuilding">Bodybuilding</MenuItem>
                <MenuItem value="Strength & Conditioning">Strength & Conditioning</MenuItem>
            </Select>
            <TextField label="Experience Level" fullWidth margin="normal" variant="outlined" />
            <TextField label="Available Training Days" fullWidth margin="normal" variant="outlined" />
        </Box>
    );
};

export default MacroForm;
