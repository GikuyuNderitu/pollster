import React, {Component} from 'react';
import {connect} from 'react-redux';

import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'

import SendIcon from 'material-ui/svg-icons/content/send'

import './Signup.css'
import {handleRegisterAttempt} from '../../state/actions/authAction'

const initialState = {
    username: '',
    password: '',
    password_confirmation: '',
    displayName: '',
}

const paperStyle = {
    margin: '20px',
    padding: '0 10px 30px 10px'
}

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {...initialState}
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit() {
        const formData = {...this.state}
        this.setState(initialState)
        this.props.register(formData)
    }
    render() {
        return (
            <main className="SignUp">
            
                <Paper
                className="SignUp-content"
                style={paperStyle} 
                zDepth={2}>
                    <h1 style={{margin: '10px 0'}}>{'Sign Up'}</h1>
                    <form
                        className="SignUp-Form" >
                        <TextField
                            value={this.state.displayName}
                            floatingLabelText="Display Name"
                            onChange={(e, nVal) => this.setState({displayName: nVal})} />
                        <TextField
                            value={this.state.username}
                            floatingLabelText="Username"
                            onChange={(e, nVal) => this.setState({username: nVal})} />
                        <TextField
                            value={this.state.password} 
                            floatingLabelText="Password"
                            onChange={(e, nVal) => this.setState({password: nVal})} />
                        
                        <TextField
                            value={this.state.password_confirmation} 
                            floatingLabelText="Confirm Password"
                            onChange={(e, nVal) => this.setState({password_confirmation: nVal})} />

                        <RaisedButton 
                            label={'Submit'}
                            labelPosition={'before'}
                            labelStyle={{fontSize: '1.2em'}}
                            style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}
                            primary={true}
                            icon={<SendIcon />}
                            onClick={this.handleSubmit} />
                    </form>
                </Paper>
            </main>
        )
    }
}

const mDtP = dispatch => ({
    register(payload) {
        dispatch(handleRegisterAttempt(payload))
    }
})

export default connect(null, mDtP)(SignUp);