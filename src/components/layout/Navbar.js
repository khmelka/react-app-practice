import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {logout} from '../../actions/auth'

export const Navbar = ({auth: {isAuthenticated, loading, user}, logout}) => {
    const authLinks = (
        <ul>
           <li><Link to='/dashboard'>Dashboard</Link></li>
           <li><Link to='/' onClick={logout}><span className="hide-sm">Logout</span></Link></li>
            <li>{user && user.name}</li>
        </ul>
    )

    const guestLinks = (
        <ul>
            <Link to='#!'>Developer</Link> 
        </ul>
    )
    return (
        <nav className="navbar bg-dark">
            <h1>
                <Link to='/'>
                    <i className="fas fa-code"></i> DevConnector
                </Link>
            </h1>
            { !loading && (<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)}
    </nav>
    )
}

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {logout})(Navbar)

