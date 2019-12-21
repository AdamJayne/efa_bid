import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <div className="navbar">
            <div id="banner" className="nav-item">
                <Link to="/">
                    <span>/ Adam /</span>
                </Link>
            </div>
            {/* <div className="nav-toggle">
                <span>M</span>
            </div> */}
            <ul className="nav-items">
                <li className="nav-item">
                    <Link to="/">
                        <span>About</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/learning">
                        <span>Learning</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/instruction">
                        <span>Instruction</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/curriculum">
                        <span>Curriculum</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/experience">
                        <span>Experience</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}
 
export default Navbar;