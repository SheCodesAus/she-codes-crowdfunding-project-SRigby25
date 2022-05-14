import React from "react";
import { Link } from "react-router-dom";


function Nav() {
    return (
        <nav id="nav">
            <Link to="/">HomePage</Link>
            <Link to="/login">Login</Link>
            <Link to="/post">Post</Link>
        </nav>
    );
}

export default Nav;