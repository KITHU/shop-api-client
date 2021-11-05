import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="links">
              <Link to="/">login</Link>
              <Link to="/register">register</Link>
              <Link to="/products">products</Link>
            </div>
        </nav>
    )
}

export default Navbar
