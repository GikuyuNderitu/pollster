import React, { Component } from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import axios from 'axios'

import {handleAuthAttempt} from './state/actions/authAction'

import Header from './containers/Header/Header';
import HomeRoute from './routes/Home'
import SignupRoute from './routes/Signup'
import SigninRoute from './routes/Signin'
import PollsRoute from './routes/Polls'

import './App.css';

class Logout extends Component {
  componentWillMount() {
    axios.get('/api/authenticate/logout')
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.error(err)
    })
  }

  render() {
    return <Redirect to="/" />
  }
}

// Finish this action which will allow component to dispatch a logout action
// const LogoutWrapper = connect()

class App extends Component {
  componentDidMount() {
    this.props.attemptAuth()
  }
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={HomeRoute}/>
              <Route path="/polls" component={PollsRoute}/>
              <Route path="/signup" component={SignupRoute}/>
              <Route path="/signin" component={SigninRoute}/>
              <Route path="/user/:username" component={SignupRoute}/>
              <Route path="/logout" component={Logout}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

const mDtP = dispatch => ({
  attemptAuth() {
    dispatch(handleAuthAttempt())
  }
})

export default connect(null, mDtP)(App);
