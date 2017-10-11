import React, {Component} from 'react';
import {connect} from 'react-redux';


import {Card, CardHeader, CardText, CardActions} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import {red600} from 'material-ui/styles/colors'
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import DescIcon from 'material-ui/svg-icons/action/description'
import ClearIcon from 'material-ui/svg-icons/content/clear';
import CancelIcon from 'material-ui/svg-icons/navigation/cancel';
import AddCircleIcon from 'material-ui/svg-icons/content/add-circle-outline'
import AddIcon from 'material-ui/svg-icons/content/add'

import './AddQuote.css';

const initialState = {
    options: [],
    description: '',
    name: '',
    newOption: '',
    nameError: '',
    newOptionError: '',
    validForm: false,
    expanded: false
}

const newPollStyle = {
    margin: '10px',
    padding: '20px 10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}

const optionListStyle = {
    width: '100%',
    maxWidth: '360px',
    textAlign: 'left'
}

const times = (num, arr=[]) => {
    for(let i = 0; i < num; i++) {
        arr.push(i)
    }
    return arr
}

const RemoveOption = (props) => (
    <IconButton 
        style={{textAlign: 'right'}}
        tooltip="remove"
        tooltipPosition="top-right">
        <CancelIcon />
    </IconButton>
)

// const Options = (props) => (
    
// )

const NewOption = (props) => (
    <div>
    </div>
)

class NewPoll extends Component {
    constructor(props) {
        super(props);

        this.state = {...initialState}
        this.handleNewOption = this.handleNewOption.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.checkNameError = this.checkNameError.bind(this);
        this.checkOptionError = this.checkOptionError.bind(this);
    }

    checkNameError() {
        const{name} = this.state

        if(name.length < 3) {
            this.setState({nameError: "Name must be at least 3 characters"})
            return
        }

        this.setState({nameError: ''})
    }

    checkOptionError() {
        const {newOption, options} = this.state

        console.log(newOption, options);
        if(newOption.trim().length === 0 && options.length <= 1) {
            this.setState({newOptionError: 'You must create at least two options'})
            return
        }

        this.setState({newOptionError: ''})
    }

    checkFormValidity() {

    }

    handleNewOption() {
        const {newOption, options} = this.state
        if(newOption.trim().length == 0) {
            return
        }

        const newOptions = [...options, newOption.trim()]
        this.setState({options: newOptions, newOption: ''})
    }


    handleSubmit() {

    }

    resetState() {
        this.setState(initialState)
    }

    removeOption(e, idx) {
        e.stopPropagation()
        e.preventDefault()
        const {options} = this.state
        options.splice(idx, 1)
        this.setState({options})
    }

    renderListItems() {
        return this.state.options.map((val, idx, arr) => (
            <ListItem
                key={idx}
                insetChildren={true}
                primaryText={<p>{val}</p>}
                rightIconButton={(
                    <IconButton
                        onClick={e => this.removeOption(e, idx)}
                        style={{textAlign: 'right', color: 'red', fontSize:'2em'}}
                        tooltip="remove"
                        tooltipPosition="top-right">
                        <CancelIcon color={red600} />
                    </IconButton>
                )} />
        ))
    }

    render() {
        return (
            <Card 
                className="NewPoll"
                style={newPollStyle} >
                <CardHeader
                    avatar={<DescIcon />}
                    closeIcon={<AddIcon />}
                    openIcon={<ClearIcon />}
                    showExpandableButton={true}
                    title={<h2 style={{margin: "5px 0", paddingLeft:"0"}}>Add a Poll</h2>} />

                <CardText
                    expandable={true} >
                    <TextField
                        onBlur={this.checkNameError}
                        onChange={(e, name) => this.setState({name})}
                        value={this.state.name}           
                        errorText={this.state.nameError}
                        floatingLabelText="Poll Name" />

                    <TextField
                        floatingLabelStyle={{left:'0',width: '100%'}}
                        multiLine={true}
                        onChange={(e, description) => this.setState({description})}
                        value={this.state.description}
                        floatingLabelFixed={true}
                        floatingLabelText="Description (optional)" />
                    <List
                        style={optionListStyle}>
                        {this.renderListItems()}
                    </List>

                    <TextField
                        onBlur={this.checkOptionError}
                        onChange={(e, newOption) => this.setState({newOption})}
                        value={this.state.newOption}
                        errorText={this.state.newOptionError}
                        multiLine={true}
                        floatingLabelText="Add an Option" />

                    <FlatButton
                        label="Add Option"
                        onClick={this.handleNewOption}
                        style={{margin:"10px 0"}} />
                </CardText>

                <CardActions>
                    <RaisedButton 
                        primary={true}
                        label="Create Poll"
                        labelPosition="before"
                        icon={<AddCircleIcon />} />
                </CardActions>
            </Card>
        )
    }
}

export default NewPoll;