import React, {Component} from 'react'
import { connect } from 'react-redux';


import {Poll} from '../Polls'
import './User.css'

class UserRoute extends Component {
    render() {
        // const polls = this.props.user.polls.map()
        return (
            <main>

            </main>
        )
    }
}

const mStP = ({auth, user}) => ({
    curUser: user.user,
    authedUser: auth.user
})

export default connect(mStP, mDtP)(UserRoute)