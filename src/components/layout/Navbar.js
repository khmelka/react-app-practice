import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar bg-dark">
            <h1>
                <Link to='/'>
                    <i className="fas fa-code"></i> DevConnector
                </Link>
            </h1>
            <ul>
                <Link to='/later'>
                     Developer
                </Link>
                <Link to='/register'>
                     Register
                </Link>
                <Link to='/login'>
                     Login
                </Link>
            </ul>
    </nav>
    )
}

export default Navbar
