// powerbuilder.client/src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import TrackWorkout from "./pages/TrackWorkout";
import ExerciseDetails from "./pages/ExerciseDetails";
import Login from "./pages/Login";
import MacrocycleForm from "./pages/MacrocycleForm";
import MacrocycleDetails from "./pages/MacrocycleDetails";
import Settings from "./pages/Settings";
import "./css/styles.css";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/trackworkout/:session" element={<TrackWorkout />} />
                <Route path="/exercisedetails/:exercise" element={<ExerciseDetails />} />
                <Route path="/macrocycleform" element={<MacrocycleForm />} />
                <Route path="/macrocycledetails" element={<MacrocycleDetails />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Dashboard />} />
            </Routes>
        </Router>
    );
};

export default App;
