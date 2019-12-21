import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1>404</h1>
            <h1>Visited the wrong Cantina, pal.</h1>
            <Link to="/">Head back home</Link>
        </div>
    )
}

export default NotFound;