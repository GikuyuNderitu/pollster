import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './containers/Header/Header';
import HomeRoute from './routes/Home'
import SignupRoute from './routes/Signup'
import SigninRoute from './routes/Signin'
import PollsRoute from './routes/Polls'

import './App.css';

class App extends Component {
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
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
