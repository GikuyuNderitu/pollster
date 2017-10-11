import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import CancelIcon from 'material-ui/svg-icons/navigation/cancel';
import CancelIcon from 'material-ui/svg-icons/content/add-circle-outline';

import './AddQuote.css';

const initialState = {
    options: [],
    name: ''
}

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

const RemoveOption = (props) => (
    <IconButton 
        tooltip="remove"
        tooltipPosition="top-right">
        <CancelIcon />
    </IconButton>
)

const Options = (props) => (
    <ListItem 
        primaryText={props.text}
        rightIconButton={<RemoveOption />} />
)

const NewOption = (props) => (
    <div>
    </div>
)

class NewPoll extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: [],
            name: ''
        }
    }

    resetState() {
        this.setState(initialState)
    }

    render() {
        return (
            <Paper 
                className="NewPoll"
                style={pollStyle} >
                <h1>Add a Poll</h1>

                <TextField floatingLabelText="Poll Name" />
                {this.state.options.map((val, idx, arr) => (
                    <Options text={val} />
                ))}

                <TextField floatingLabelText="Add an Option" />

                <RaisedButton primary={true} label="Create Poll" />
            </Paper>
        )
    }
}

export default NewPoll;