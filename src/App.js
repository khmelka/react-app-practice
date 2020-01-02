import React, {Fragment, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Navbar from './components/layout/Navbar'
import MainPage from './components/layout/MainPage'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Alert from './components/layout/Alert'
import {Provider} from 'react-redux'
import store from './store'
import {loadUser} from './actions/auth'
import setAuthToken from './utility/setAuthToken'
import Dashboard from './components/dash/Dashboard'
import PrivateRoute from './components/routes/PrivateRoute'
import CreateProfile from './components/forms/CreateProfile'
import EditProfile from './components/forms/EditProfile'


if(localStorage.token) {
  setAuthToken(localStorage.token)
}
  
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser())
  }, []) //adding brackets will make component to run once like componentDidMount
  return (
    <Provider store={store} >
      <Router>
        <Fragment> 
          <Navbar />
          <Route exact path = '/' component={MainPage} />
          <section className="container">
            <Alert />
            <Switch>
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/create-profile" component={CreateProfile} />
              <PrivateRoute exact path="/edit-profile" component={EditProfile} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
