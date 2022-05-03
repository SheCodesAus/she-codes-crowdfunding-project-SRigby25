import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


// components
import Title from "./components/Title"
import Nav from "./components/Nav"

// Pages
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import LoginPage from "./pages/LoginPage";
// styles
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Title /><Nav />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
