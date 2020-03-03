import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = (props) => {
    const [isOpen, toggleOpen] = useState(false);
    const navLinks = [
        { text: 'About', route: '/' },
        { text: 'Learning', route: '/learning' },
        { text: 'Instruction', route: '/instruction' },
        { text: 'Curriculum', route: '/curriculum' }
    ]
    return (
        <div className={ isOpen ? 'navbar-opened' : 'navbar' }>
            <div id="banner" className="nav-item">
                <Link to="/">
                    <span>/ Adam /</span>
                </Link>
            </div>
            <button
                className={ isOpen ? 'navbar-toggler-opened' : 'navbar-toggler' }
                onClick={ isOpen ? () => toggleOpen(false) : () => toggleOpen(true) }
                >
                { isOpen ? <FaTimes fontSize={23} color="#fff" /> : <FaBars fontSize={23} color="#fff" /> }
            </button>
            <ul className={isOpen ? "nav-items nav-items-opened" : "nav-items"}>
                {
                    navLinks.map(item => {
                        return (
                            <li key={item.text} className="nav-item">
                                <Link to={ item.route } onClick={() => toggleOpen(false)}>
                                    <span>{ item.text }</span>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}
 
export default Navbar;