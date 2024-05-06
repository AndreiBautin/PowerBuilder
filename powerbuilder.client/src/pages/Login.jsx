// powerbuilder.client/src/pages/Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Container, Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        navigate('/dashboard');
    };

    return (
        <Container maxWidth="xs" component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                mt={8}
                p={4}
                boxShadow={3}
                borderRadius={2}
                className="login-box"
            >
                <Typography variant="h4" mb={2}>
                    PowerBuilder Login
                </Typography>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleLogin}
                    style={{ marginTop: '1rem' }}
                >
                    Login
                </Button>
            </Box>
        </Container>
    );
};

export default Login;
