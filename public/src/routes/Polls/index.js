import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import './Polls.css'

const heroStyle = {
    margin: '10px',
    padding: '10px',
    gridArea: 'hero'
}

const Hero = (props) => (
    <Paper
        zDepth={1}
        style={heroStyle}>
        <h1>{'Pollster'}</h1>
        <div className="Polls-hero-buttons">
            <RaisedButton containerElement={<Link to={'/signin'} />}>{"Sign In"}</RaisedButton>
            <RaisedButton containerElement={<Link to={'/signup'} />}>{"Sign Up!"}</RaisedButton>
        </div>
    </Paper>
)

class Polls extends Component {
    render() {
        return (
            <main className="Polls">
                <Hero />

            </main>
        )
    }
}

export default Polls;