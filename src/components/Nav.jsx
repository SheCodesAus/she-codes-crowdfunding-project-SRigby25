import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav id="navigation">
            <Link to="/">HomePage</Link>
            <Link to="/login">Login</Link>
        </nav>
    );
}

export default Nav;