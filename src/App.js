import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

// components
import Nav from "./components/Nav"

// Pages
import HomePage from "./pages/HomePage"
import ProjectPage from "./pages/ProjectPage";

// styles
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
