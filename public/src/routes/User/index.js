import React, {Component} from 'react'
import { connect } from 'react-redux';

import RefreshIndicator from 'material-ui/RefreshIndicator'

import { handleUserGetAttempt } from '../../state/actions/userActions'
import {Poll} from '../Polls'

import './User.css'

class UserRoute extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.username);
    }
    render() {
        // const polls = this.props.user.polls.map()
        console.log(this.props.loadingUser);
        return (
            <main className="UserRoute">
                {this.props.loadingUser ? 
                    <RefreshIndicator
                        size={150}
                        left={50}
                        top={50}
                        status="loading" /> : <div>
                    </div> }
            </main>
        )
    }
}

const mStP = ({auth, user}) => ({
    curUser: user.user,
    loadingUser: user.loadingUser,
    authedUser: auth.user
})

const mDtP = dispatch => ({
    getUser(username) {
        dispatch(handleUserGetAttempt(username))
    }
})

export default connect(mStP, mDtP)(UserRoute)