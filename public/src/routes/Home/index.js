import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import './Home.css'

const heroStyle = {
    margin: '10px',
    padding: '10px',
    gridArea: 'hero',
    color: "#06d"
}

const Hero = (props) => (
    <Paper
        className="Home-Hero"
        zDepth={1}
        style={heroStyle}>
        <h1>{'Pollster'}</h1>
        {props.isAuthenticated ? 
            <div className="Home-Hero-buttons">
                <RaisedButton
                    primary
                    label="Checkout Polls"
                    containerElement={<Link to="/polls" />} />
                <RaisedButton
                    label="Logout"
                    containerElement={<Link to="/logout" />} />
            </div>
             : <div className="Home-Hero-buttons">

            <RaisedButton
                containerElement={<Link to={'/signin'} />}>{"Sign In"}</RaisedButton>
            <RaisedButton
                primary
                containerElement={<Link to={'/signup'} />}>{"Sign Up!"}</RaisedButton>
        </div>}
    </Paper>
)

const Adverts = (props) => (
    <Paper
        className="Home-Adverts"
        zDepth={1}
        style={heroStyle} >
        <h1>{'Adverts'}</h1>
    </Paper>
)

class Home extends Component {
    render() {
        return (
            <main className="Home">
                <Hero isAuthenticated={this.props.isAuthenticated} />
                <Adverts />
            </main>
        )
    }
}

const mStP = ({auth}) => ({
    isAuthenticated: auth.isAuthenticated
})

export default connect(mStP)(Home);