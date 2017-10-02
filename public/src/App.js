import React, { Component } from 'react';
import {BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './containers/Header/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            <Switch>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
