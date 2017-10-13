import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {Card, CardHeader, CardTitle, CardText, CardMedia, CardActions} from 'material-ui/Card'
import Divider from 'material-ui/Divider'
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButtonGroup, RadioButton} from 'material-ui/RadioButton'
import AddQuote from '../../components/AddQuote';
import './Polls.css'

import {handlePollGetAttempt} from '../../state/actions/pollAction'

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

// const Option = (props) => (

// )

class Poll extends Component {
    render() {
        return (
            <Card
                style={pollStyle}>
                <CardHeader
                    actAsExpander={true}
                    showExpandableButton={true}
                    title={this.props.name} />
                <CardTitle 
                    expandable={true} 
                    title={this.props.name} 
                    subtitle={this.props.description} />
                <CardText
                    expandable={true}>

                </CardText>
                <CardActions
                    expandable={true} >
                    <RadioButtonGroup
                        className="Poll-RadioButton-Container"
                        name={`Poll_${this.props.id}_selection`} >
                        {this.props.options.map(({option, _id, votes}, idx) => (
                            <RadioButton
                                style={{width: 'auto', margin: '2px 10px'}}
                                key={idx}
                                label={option}
                                value={option}
                                votes={votes} />
                        ))}
                    </RadioButtonGroup>
                    <RaisedButton
                        primary={true}
                        style={{margin: '10px'}}
                        label="Select Option" />
                </CardActions>
            </Card>
        )
    }
}

// const Poll = (this.props) => 

class Polls extends Component {
    componentDidMount() {
        this.props.getPolls()
    }
    render() {
        console.log(this.props.polls);
        return (
            <main className="Polls">
                <h1>Polls</h1>
                <AddQuote />
                {this.props.polls.map(({_id, name, description, options}, idx) => (
                    <Poll
                        id={_id}
                        key={idx}
                        name={name}
                        description={description}
                        options={options} />
                ))}

            </main>
        )
    }
}

const mStP = ({poll}) => ({
    polls: poll.polls,
    pollError: poll.pollError
})

const mDtP = dispatch => ({
    getPolls() {
        dispatch(handlePollGetAttempt())
    }
})

export default connect(mStP, mDtP)(Polls);