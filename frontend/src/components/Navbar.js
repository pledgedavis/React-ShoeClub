import React from 'react'
import {  Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="overlay">
            <header className="App-header">
                <nav>
            <Link to="/" > Home</Link>
            <Link to="/shoes" > Shoes</Link>
            <Link to="/contact" > Contact</Link>
            </nav>
            </header>
        </div>
    )
}
