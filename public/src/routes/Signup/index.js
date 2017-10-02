import React, {Component} from 'react';
import {connect} from 'react-redux';

import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'

import SendIcon from 'material-ui/svg-icons/content/send'

import './Signup.css'

const initialState = {
    email: '',
    password: '',
    displayName: '',
}

const paperStyle = {
    margin: '20px',
    padding: '10px 10px 30px 10px'
}

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {...initialState}
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit() {
        const formData = {...this.state}
        console.log(formData);
        this.setState(initialState)
    }
    render() {
        return (
            <main className="SignUp">
            
                <Paper
                className="SignUp-content"
                style={paperStyle} 
                zDepth={2}>
                    <h1>{'Sign Up'}</h1>
                    <form
                        className="SignUp-Form" >
                        <TextField
                            value={this.state.displayName}
                            floatingLabelText="Display Name"
                            onChange={(e, nVal) => this.setState({displayName: nVal})} />
                        <TextField
                            value={this.state.email}
                            floatingLabelText="Email"
                            onChange={(e, nVal) => this.setState({email: nVal})} />
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
                            onClick={this.handleSubmit} />
                    </form>
                </Paper>
            </main>
        )
    }
}

export default SignUp;