import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Navbar from './components/layout/Navbar'
import Guestpage from './components/layout/Guestpage'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Alert from './components/layout/Alert'
import {Provider} from 'react-redux'
import store from './store'


const App = () => {
  return (
    <Provider store={store} >
      <Router>
        <Fragment> 
          <Navbar />
          <Route exact path = '/' component={Guestpage} />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
