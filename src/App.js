import React from "react";
import TestingScreen from "./screens/TestingScreen";
import UploadScreen from "./screens/UploadScreen";
import WorkflowScreen from "./screens/WorkflowScreen";
import Navbar from "./components/Navbar";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={<UploadScreen />}
                />
                <Route
                    path="test"
                    element={<TestingScreen />}
                />
                <Route
                    path="workflow"
                    element={<WorkflowScreen />}
                />
            </Routes>
        </Router>
    );
}

export default App;
