import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import PledgeForm from "../components/Pledge";
// import { useEffect } from "react";

// import { oneProject } from "../data"

function ProjectPage() {
    const [projectData, setProjectData] = useState();
    const { id } = useParams();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setProjectData(data);
        });
    }, [id]);

    // loading state

    if (!projectData) {
        return <h3> Loading Data</h3>
    }

    // normal State

    return (
        <div id="idea">
        <h2>{projectData.title}</h2>
        <h3>About:</h3>
        {projectData.description}
        {/* <h3>{`Status: ${projectData.is_open}`}</h3> */}
        <h3> Submitted by: </h3>
        {projectData.owner}
        <h3> When the worlds best idea was created:</h3>
        {projectData.date_created}
        <div>
        {projectData.image}
        </div>
        <div id="form"> 
        <h3>Pledges:</h3>
        <ul>
        {projectData.pledges.map((pledgeData, key) => {
            return (
                <li>
                {pledgeData.amount} from {pledgeData.supporter}
                </li>
            );
        })}
    </ul>
    
    <PledgeForm projectId={id}/>
    </div>
    </div>
    );
}

export default ProjectPage;