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
    margin: '20px 10px',
    padding: '10px',
    textAlign: 'left'
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
            actAsExpander={true}
            showExpandableButton={true}
            title="Potential real Title" />
        <CardTitle 
            expanded={props.expanded}
            expandable={true} 
            title="Poll Title Goes here" 
            subtitle="Subtitle Goes here" />
        <CardText
            expanded={props.expanded}
            expandable={true}>
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