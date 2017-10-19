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
import {handleLogout} from './state/actions/authAction'
import './App.css';

class Logout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: false
    }
  }
  componentWillMount() {
    axios.get('/api/authenticate/logout')
    .then(data => {
      console.log(data);
      this.setState({redirect: true});
      this.props.logout()
    })
    .catch(err => {
      console.error(err)
    })
  }

  render() {
    return this.state.redirect ? <Redirect to="/" /> : null
  }
}

const LogoutWrapper = connect(null, (dispatch)=>({logout(){ dispatch(handleLogout())}}))(Logout)

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
              <Route path="/logout" component={LogoutWrapper}/>
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
