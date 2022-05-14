import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

function NewUser() {

    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
        favdrink: "",
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
        <form>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username"placeholder="Enter username" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password"id="password"placeholder="Password" onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="drink">Fav drink:</label>
                <input type="drink"id="drink"placeholder="Drink" onChange={handleChange}/>
            </div>
            <button type="submit" onClick={handleSubmit}>Login</button>
        </form>
    );
}

export default NewUser;