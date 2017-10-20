import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import {cyan400, amberA400, pink400, greenA100, teal100, blueA100, orangeA200, purpleA100, redA100,red800} from 'material-ui/styles/colors'
import {Card, CardHeader, CardTitle, CardText, CardMedia, CardActions} from 'material-ui/Card'
import Divider from 'material-ui/Divider'
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButtonGroup, RadioButton} from 'material-ui/RadioButton'
import FlatButton from 'material-ui/FlatButton'
import ClearIcon from 'material-ui/svg-icons/content/clear'
import TextField from 'material-ui/TextField'
import AddQuote from '../../components/AddQuote';
import './Polls.css'
import {times} from '../../utils'

import {Doughnut} from 'react-chartjs-2'

import {
    handlePollGetAttempt,
    handleOptionCreateAttempt
} from '../../state/actions/pollAction'

const pollStyle = {
    margin: '20px 10px',
    padding: '10px',
    textAlign: 'left'
}

const COLORS = [
    cyan400,
    amberA400,
    pink400,
    greenA100,
    teal100,
    blueA100,
    orangeA200,
    purpleA100,
]

const getOwnerName = owner => owner.displayName || owner.username

const getColors = num => 
    times(num).map((val, idx, arr) => {
        return COLORS[val]
    })

const getRandomColor = () => COLORS[Math.floor(Math.random()*COLORS.length)]


const transformPollData = (name, options, colors) => ({
    labels: options.map(({option}) => option),
    datasets: [{
        data: options.map(({votes}) => votes),
        label: name,
        backgroundColor: getColors(options.length)
    }]

})

export class Poll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: ''
        }

        this.ws = undefined

        this.sendOption = this.sendOption.bind(this);
        this.expandedChanged = this.expandedChanged.bind(this);
        this.initSocket = this.initSocket.bind(this);
        this.destroySocket = this.destroySocket.bind(this);
        this.setWebSocket = this.setWebSocket.bind(this);
        this.voteViaSocket = this.voteViaSocket.bind(this);
    }

    voteViaSocket(data) {
        this.ws.send(JSON.stringify(data))
    }

    sendOption() {
        const optionData = {
            poll_id: this.props.id,
            option_id: this.state.selectedOption
        }
        this.voteViaSocket(optionData)
        this.props.sendOption(optionData)
    }

    initSocket() {
        if(this.ws !== undefined) {console.log('did a hard cancel');return;}

        this.ws = new WebSocket(`ws://localhost:1337/${this.props.id}`)
        this.ws.onopen = (e) => {
            // console.log(e);
        }

        this.ws.onmessage = (srv) => {
            console.log('Message ', JSON.parse(srv.data));
        }
    }

    destroySocket() {
        this.ws.close()
    }

    expandedChanged() {
        const expandedId = this.props.expanded ? '' : this.props.id
        this.props.setExpanded(expandedId)
        this.setWebSocket()
    }

    setWebSocket() {
        setTimeout(() => {
            const expanded = this.props.expanded
            if(expanded) {
                console.log('initialize socket');
                this.initSocket()
            } else {
                this.destroySocket()
            }
        }, 0)
    }

    render() {
        console.log(this.props);
        return (
            <Card
                onExpandChange={this.expandedChanged}
                expanded={this.props.expanded}
                style={pollStyle}>
                <CardHeader
                    actAsExpander={true}
                    showExpandableButton={true}
                    title={this.props.name}
                    subtitle={`Poll By: ${getOwnerName(this.props.owner)}`} />
                <CardTitle 
                    expandable={true} 
                    title={this.props.name} 
                    subtitle={this.props.description} />

                <CardMedia
                    expandable={true}>
{/*                    <ReactCSSTransitionGroup
                        transitionName="poll-chart-transition" 
                        transitionAppear={true}
                        transitionEnter={false}
                        transitionLeave={false}
transitionAppearTimeout={100} >*/}
                        <Doughnut 
                            data={transformPollData(this.props.name, this.props.options)}
                            height={125} />
{/*</ReactCSSTransitionGroup>*/}
                </CardMedia>

                <CardText
                    expandable={true} >
                    {this.props.description} --- Check out <Link to={`/user/${this.props.owner.username}`}>{getOwnerName(this.props.owner)}</Link>
                </CardText>
                <CardActions
                    expandable={true} >
                    <RadioButtonGroup
                        valueSelected={this.state.selectedOption}
                        onChange={(e, selectedOption) => this.setState({selectedOption})}
                        className="Poll-RadioButton-Container"
                        name={`Poll_${this.props.id}_selection`} >
                        {this.props.options.map(({option, _id, votes}, idx) => (
                            <RadioButton
                                style={{width: 'auto', margin: '2px 10px'}}
                                key={idx}
                                label={option}
                                value={_id}
                                votes={votes} />
                        ))}
                    </RadioButtonGroup>
                    <div className="Poll-Action-Buttons">
                        <RaisedButton
                            onClick={this.sendOption}
                            primary={true}
                            style={{margin: '10px'}}
                            label="Select Option" />
                        {this.props.canEdit ? 
                            <FlatButton
                                backgroundColor={red800}
                                hoverColor={red800}
                                rippleColor={redA100}
                                label="Delete Poll"
                                labelPosition="after"
                                labelStyle={{color: "#fff"}}
                                icon={<ClearIcon color="white" />} >
                            </FlatButton> : null}
                    </div>
                </CardActions>
            </Card>
        )
    }
}

class Polls extends Component {
    constructor(props) {
        super(props)
        this.state = {
            expanded: '',
            searchBy: ''
        }

        this.setExpanded = this.setExpanded.bind(this)
    }

    setExpanded(expanded) {
        this.setState({expanded})
    }
    componentDidMount() {
        this.props.getPolls()
    }
    render() {
        const polls = this.props.polls
            .filter(({name}) => name.toLowerCase().includes(this.state.searchBy.toLowerCase()))
            .map(({_id, name, description, options, owner, canEdit}, idx) => (
                <Poll
                    expanded={this.state.expanded === _id}
                    owner={owner}
                    setExpanded={this.setExpanded}
                    sendOption={this.props.selectOption}
                    id={_id}
                    canEdit={canEdit}
                    key={idx}
                    name={name}
                    description={description}
                    options={options} />
            ))
        return (
            <main className="Polls">
                <h1>Polls</h1>
                <TextField
                    floatingLabelText="Search for a Poll"
                    onChange={(e, searchBy) => this.setState({searchBy})} />
                {this.props.isAuthenticated ? <AddQuote /> : null}

                <ReactCSSTransitionGroup
                    transitionName="allPolls"
                    transitionEnter={true}
                    transitionLeave={true}
                    transitionEnterTimeout={200}
                    transitionLeaveTimeout={500} >
                    {polls}
                </ReactCSSTransitionGroup>


            </main>
        )
    }
}


const mStP = ({poll, auth}) => ({
    isAuthenticated: auth.isAuthenticated,
    polls: poll.polls,
    pollError: poll.pollError
})

const mDtP = dispatch => ({
    getPolls() {
        dispatch(handlePollGetAttempt())
    },
    selectOption(payload) {
        dispatch(handleOptionCreateAttempt(payload))
    }
})

export default connect(mStP, mDtP)(Polls);