import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'

import SendIcon from 'material-ui/svg-icons/content/send'

import {handleLoginAttempt} from '../../state/actions/authAction'
import './Signin.css'

const initialState = {
    username: '',
    password: ''
}

const paperStyle = {
    margin: '20px',
    padding: '10px 10px 30px 10px'
}

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {...initialState}

        this.counter = 0;
    }
    handleSubmit(e) {
        e.preventDefault()
        const formData = {...this.state}
        this.props.login(formData)
        this.resetState()
    }

    resetState() {
        this.setState(initialState)
    }
    render() {
        return (
            !this.props.isAuthenticated ?
            <main className="Signin">
            
                <Paper
                className="Signin-content"
                style={paperStyle} 
                zDepth={2}>
                    <h1>{'Sign In'}</h1>
                    <form
                        className="Signin-Form" >
                        <TextField
                            value={this.state.username}
                            floatingLabelText="Username"
                            onChange={(e, nVal) => this.setState({username: nVal})} />
                        <TextField
                            value={this.state.password} 
                            floatingLabelText="Password"
                            onChange={(e, nVal) => this.setState({password: nVal})} />

                        <RaisedButton 
                            label={'Submit'}
                            labelPosition={'before'}
                            labelStyle={{fontSize: '1.2em'}}
                            style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}
                            primary={true}
                            icon={<SendIcon />}
                            onClick={e => this.handleSubmit(e)} />
                    </form>
                </Paper>
            </main> :
            <Redirect to="/polls"/>
        )
    }
}

const mStP = ({auth}) => ({
    isAuthenticated: auth.isAuthenticated
})

const mDtP = dispatch => ({
    login(payload) {
        dispatch(handleLoginAttempt(payload))
    }
})

export default connect(mStP, mDtP)(Signin);