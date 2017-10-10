import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'

import SendIcon from 'material-ui/svg-icons/content/send'

import './Signup.css'
import {removeEmpties} from '../../utils'
import {handleRegisterAttempt} from '../../state/actions/authAction'

const initialState = {
    username: '',
    password: '',
    password_confirmation: '',
    displayName: '',
    validForm: true
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
        this.checkFormValidation = this.checkFormValidation.bind(this);
    }

    checkFormValidation() {
        var result = Object.keys(this.state).every(key => key === 'validForm' || this.state[key].length > 0)
        this.setState({validForm: !result})
    }

    handleSubmit() {
        const formData = {...this.state, validForm: undefined}
        this.setState(initialState)
        this.props.register(formData)
    }

    render() {
        return (
            !this.props.isAuthenticated ? 
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
                            onChange={(e, nVal) => this.setState({displayName: nVal})} 
                            onBlur={this.checkFormValidation} />
                        <TextField
                            value={this.state.username}
                            floatingLabelText="Username"
                            onChange={(e, nVal) => this.setState({username: nVal})} 
                            onBlur={this.checkFormValidation} />
                        <TextField
                            value={this.state.password} 
                            floatingLabelText="Password"
                            onChange={(e, nVal) => this.setState({password: nVal})} 
                            onBlur={this.checkFormValidation} />
                        
                        <TextField
                            value={this.state.password_confirmation} 
                            floatingLabelText="Confirm Password"
                            onChange={(e, nVal) => this.setState({password_confirmation: nVal})} 
                            onBlur={this.checkFormValidation} />

                        <RaisedButton 
                            disabled={this.state.validForm}
                            label={'Submit'}
                            labelPosition={'before'}
                            labelStyle={{fontSize: '1.2em'}}
                            style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}
                            primary={true}
                            icon={<SendIcon />}
                            onClick={this.handleSubmit} />
                    </form>
                </Paper>
            </main> :
            <Redirect to="/polls" />
        )
    }
}

const mStP = ({auth}) => ({
    isAuthenticated: auth.isAuthenticated
})

const mDtP = dispatch => ({
    register(payload) {
        try {
            dispatch(handleRegisterAttempt(removeEmpties(payload)));
        } catch (error) {
            console.error(error)
        }
    }
})

export default connect(mStP, mDtP)(SignUp);