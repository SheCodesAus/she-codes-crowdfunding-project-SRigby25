import React, { useState, useEffect } from "react";

// Component
import ProjectCard from "../components/ProjectCard/ProjectCard";

// data
import { allProjects } from "../data";



function HomePage() {
 // states
const[projectList, setProjectList] = useState([]);

// action and helper
useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}projects`)
    .then((results) => {
        return results.json();
    }).then((data) => {
        setProjectList(data);
    });
}, []);

    return (
        <div id="project-list">
            {projectList.map((projectData, key) => {
                return <ProjectCard key={key} projectData={projectData} />;
             })}
        </div>
    );
}

export default HomePage;