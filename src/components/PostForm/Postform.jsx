import React, { useState } from "react";
import { useNavigate } from "react-router-dom"


function PostForm() {
 
    const [credentials, setCredentials] = useState({
            title: "",
            description: "",
            goal: "",
            image: "",
            is_open: "",
            date_created: "",
            category: ""
    });

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { id, value } = event.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
        }));
    };

    const postData = async () => {
        const response = await fetch(
        `${process.env.REACT_APP_API_URL}api-token-auth/`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
        }
        );
        return response.json();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (credentials.username && credentials.password) {
            postData().then((response) => {
                window.localStorage.setItem("token", response.token);
                window.localStorage.setItem("username", credentials.username);
                navigate("/");
            console.log("data". data);
        });
        }
    };



    return (
        <form > 
            <div>
                <label htmlFor="description">description:</label>
                <input type="text" id="description"placeholder="Enter description" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="goal">goal:</label>
                <input type="goal"id="goal"placeholder="goal" onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="is_open">is_open:</label>
                <input type="is_open"id="is_open"placeholder="is_open" onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="date_created">date_created</label>
                <input type="date_created"id="date_created"placeholder="date_created" onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="category">category:</label>
                <input type="category"id="category"placeholder="category" onChange={handleChange}/>
            </div>
            <div>
            <button type="submit" onClick={handleSubmit}>Post</button>
            </div>
        </form>
    );
}

export default PostForm;