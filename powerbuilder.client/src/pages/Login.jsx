// powerbuilder.client/src/pages/Login.jsx
import React from "react";
import { Container, Box, TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../css/styles.css";

const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate("/dashboard");
    };

    return (
        <Container maxWidth="xs">
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    mt: 8,
                    p: 4,
                    borderRadius: "8px",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.37)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.18)"
                }}
            >
                <Typography variant="h4" align="center" gutterBottom>
                    PowerBuilder Login
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField name="username" label="Username" fullWidth margin="normal" />
                    <TextField name="password" label="Password" type="password" fullWidth margin="normal" />
                    <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
                        Login
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default Login;
