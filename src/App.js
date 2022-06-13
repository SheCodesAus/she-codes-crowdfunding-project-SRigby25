import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


// components
import Title from "./components/TitlePage/Title"
import Nav from "./components/Nav"
import About from "./components/About"
import Categorys from "./components/Categorys";

// Pages
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import LoginPage from "./pages/LoginPage";
import PostPage from "./pages/PostPage";
import CreateUser from "./pages/CreateUser";

// styles
import "./App.css";

function App() {
  return (
    <Router>
      <div>
<<<<<<< HEAD
        <Title />
        <Nav /> <About /> <Categorys />
=======
        <Title /><Nav /> <About /> <Categorys />
>>>>>>> parent of 23e6460 (Updating home page)
        <Routes>
          <Route path="/post" element={<PostPage />} /> 
          <Route path="/login" element={<LoginPage />} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/user" element={<CreateUser />} />
        </Routes>









      </div>
    </Router>
  );
}

export default App;
