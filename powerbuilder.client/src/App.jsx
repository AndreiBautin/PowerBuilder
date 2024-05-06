// powerbuilder.client/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import TrackWorkout from './pages/TrackWorkout';
import ExerciseList from './pages/ExerciseList';
import ExerciseDetail from './pages/ExerciseDetail';
import MacrocycleForm from './pages/MacrocycleForm';
import Settings from './pages/Settings';
import './css/styles.css';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MacrocycleForm />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/trackworkout/:session" element={<TrackWorkout />} />
                <Route path="/exerciselist" element={<ExerciseList />} />
                <Route path="/exercise/:exercise" element={<ExerciseDetail />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </Router>
    );
};

export default App;
