import React, { Fragment, useState } from 'react'
import {Link, Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import {setAlert} from '../../actions/alert'
import {register} from '../../actions/auth'
import PropTypes from 'prop-types'


const Register = ({setAlert, register, isAuthenticated}) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: ""
    })

    const {name, email, password,password2} = formData

    const onChange = (event) => setFormData({...formData, [event.target.name]: event.target.value })

    const onSubmit = async (event) => {
        event.preventDefault()
        if(password !== password2) {
            setAlert('Passwords no not match', 'danger')
        }
        else {
            register({name, email, password})
      }
  }

  if(isAuthenticated) {
      return <Redirect to="/dashbord" />
  }
    
    return (
        <Fragment>
            <h1 className="large text-primary">Sign Up</h1>
                <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
                <form className="form" onSubmit={event => onSubmit(event)}>
                    <div className="form-group">
                        <input 
                            type="text" 
                            placeholder="Name" 
                            name="name" 
                            value={name} 
                            onChange ={event => onChange(event)}   
                            
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="email" 
                            placeholder="Email Address" 
                            name="email" 
                            value={email}
                            onChange ={event => onChange(event)}
                        />
                        <small className="form-text">
                            This site uses Gravatar so if you want a profile image, use a
                            Gravatar email</small
                        >
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            minLength="6"
                            value={password}
                            onChange ={event => onChange(event)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            name="password2"
                            minLength="6"
                            value={password2}
                            onChange ={event => onChange(event)}
                        />
                    </div>
                    <input type="submit" className="btn btn-primary" value="Register" />
                </form>
            <p className="my-1">
                Already have an account? <Link to='/login'>Login</Link>
            </p>
        </Fragment>
    )
}

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {setAlert, register})(Register)