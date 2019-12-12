import React from 'react';
import { Link } from 'react-router-dom';


const BottomBar = (props) => {
    return (
        <div>
            <ul>
                <li className="bar-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="bar-item">
                    <Link to="/learning">Learning</Link>
                </li>
                <li className="bar-item">
                    <Link to="/instruction">Instruction</Link>
                </li>
                <li className="bar-item">
                    <Link to="/curriculum">Curriculum</Link>
                </li>
                <li className="bar-item">
                    <Link to="/experience">Experience</Link>
                </li>
            </ul>
        </div>
    );
}
 
export default BottomBar;