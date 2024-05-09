// powerbuilder.client/src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import TrackWorkout from "./pages/TrackWorkout";
import Warmup from "./pages/Warmup";
import Workout from "./pages/Workout";
import ExerciseSwap from "./pages/ExerciseSwap";
import ExerciseList from "./pages/ExerciseList";
import NewExerciseForm from "./pages/NewExerciseForm";
import "./css/styles.css";

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/trackworkout" element={<TrackWorkout />} />
            <Route path="/warmup" element={<Warmup />} />
            <Route path="/workout" element={<Workout />} />
            <Route path="/exerciseswap" element={<ExerciseSwap />} />
            <Route path="/exerciselist" element={<ExerciseList />} />
            <Route path="/newexerciseform" element={<NewExerciseForm />} />
        </Routes>
    </Router>
);

export default App;
