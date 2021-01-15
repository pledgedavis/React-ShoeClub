import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="overlay">
      <header className="App-header">
        <nav>
          <h1>
            <Link to="/" className="navWords">
              Home
            </Link>
          </h1>
          <h1>
            <Link to="/shoes" className="navWords">
              Shoes
            </Link>
          </h1>
          <h1>
            <Link to="/contact" className="navWords">
              Contact
            </Link>
          </h1>
        </nav>
      </header>
    </div>
  );
}
