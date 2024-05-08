// powerbuilder.client/src/components/ModernButtons.jsx
import React from "react";
import { Box, Button } from "@mui/material";
import "../css/styles.css";

const ModernButtons = ({ onPrevious, onNext, onReset }) => {
    return (
        <Box className="modern-buttons-container">
            <Button className="modern-button" onClick={onPrevious}>
                Previous
            </Button>
            <Button className="modern-button" onClick={onReset}>
                Reset
            </Button>
            <Button className="modern-button" onClick={onNext}>
                Next
            </Button>
        </Box>
    );
};

export default ModernButtons;
