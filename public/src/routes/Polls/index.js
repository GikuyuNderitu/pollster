import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Card from 'material-ui/Card'
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import './Polls.css'

const heroStyle = {
    margin: '10px',
    padding: '10px',
    gridArea: 'hero'
}

const times = (num, arr=[]) => {
    for(let i = 0; i < num; i++) {
        arr.push(i)
    }
    return arr
}


const Poll = (props) => (
    <Card>
        {`Poll Data goes here`}
    </Card>
)

class Polls extends Component {
    render() {
        return (
            <main className="Polls">
                <h1>hello</h1>
                {times(8).map(val => <Poll key={val} />)}
            </main>
        )
    }
}

export default Polls;