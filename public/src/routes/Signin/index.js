import React, {Component} from 'react';
import {connect} from 'react-redux';

import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'

import SendIcon from 'material-ui/svg-icons/content/send'

import './Signin.css'

const initialState = {
    email: '',
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
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit() {
        const formData = {...this.state}
        console.log(formData);
        this.setState(initialState)
    }
    render() {
        return (
            <main className="Signin">
            
                <Paper
                className="Signin-content"
                style={paperStyle} 
                zDepth={2}>
                    <h1>{'Sign In'}</h1>
                    <form
                        className="Signin-Form" >
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

export default Signin;