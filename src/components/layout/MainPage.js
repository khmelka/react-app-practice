import React from 'react'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

export const MainPage = ({isAuthenticated}) => {
    if (isAuthenticated) {
        return <Redirect to='/dashboard' />
    }
    return (
        <section className="landing">
            <div className="overlay">
                <div className="landing-inner">
                    <h1 className="x-large" style={{color:"blue"}}>Developer Connector</h1>
                    <p className="lead">
                    Create a developer profile/portfolio, share posts and get help from
                    other developers
                    </p>
                    <div className="buttons">
                        <Link to='/register' className = "btn btn-primary" > Register</Link>
                        <Link to='/login' className = "btn btn-primary">Login</Link>
                    </div>
                </div>
            </div>
      </section>
    )
}

MainPage.propTypes = {
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state=> ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(MainPage)
