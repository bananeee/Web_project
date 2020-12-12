import React from 'react'
import '../css/nav.css'

function Nav() {
    return (
        <nav>
            <div class="logo">
                <h4>The Nav</h4>
            </div>
            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">List</a></li>
                <li><a href="#">Login</a></li>
                <li><a href="#">Sign In</a></li>
            </ul>
            <div className="burger" tabIndex="1">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    )
}

export default Nav
