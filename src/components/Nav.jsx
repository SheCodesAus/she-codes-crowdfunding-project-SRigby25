import React from "react";
import { Link } from "react-router-dom";


function Nav() {
    return (
        <nav id="nav">
            <Link to="/">Home  </Link>
            <Link to="/login">Login  </Link>
            <Link to="/post">Post  </Link>
            <Link to="/user">Create User</Link>
        </nav>
    );
}

export default Nav;