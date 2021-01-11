import React from 'react'
import {  Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>

            <Link to="/" > Home</Link>
            <Link to="/shoe" > Shoe</Link>
            <Link to="/contact" > Contact</Link>
        </div>
    )
}
