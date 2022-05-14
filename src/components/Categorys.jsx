import React from 'react'
import { Link } from "react-router-dom";

function Categorys() {
    return (
        <nav id="cat">
            <Link to="/category/1drink">|  1 Drink ideas  |</Link>
            <Link to="/category/2drink">  2 Drink ideas  |</Link>
            <Link to="/category/3drink">  3 Drink ideas  |</Link>
            <Link to="/category/4drink">  4+ Drink ideas  |</Link>
        </nav>
    );
}

export default Categorys