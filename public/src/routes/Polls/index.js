import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {Card, CardHeader, CardTitle, CardText, CardMedia, CardActions} from 'material-ui/Card'
import Divider from 'material-ui/Divider'
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import AddQuote from '../../components/AddQuote';
import './Polls.css'

const pollStyle = {
    margin: '10px',
    padding: '10px',
}

const times = (num, arr=[]) => {
    for(let i = 0; i < num; i++) {
        arr.push(i)
    }
    return arr
}

const Poll = (props) => (
    <Card
        style={pollStyle}>
        <CardHeader
            title="Potential real Title" />
        <CardTitle title="Poll Title Goes here" subtitle="Subtitle Goes here" />
        <CardText>
            {`Poll Data goes here`}
        </CardText>
    </Card>
)

class Polls extends Component {
    render() {
        return (
            <main className="Polls">
                <h1>Polls</h1>
                <AddQuote />
                {times(3).map(val => (<Poll key={val} />))}

            </main>
        )
    }
}

export default Polls;