import React from 'react';
import { setAuthUser } from '../actions/authedUser'
import { connect } from 'react-redux';

const Logout = props => (
    <button
        onClick={() => props.dispatch(setAuthUser(null))}>
            Logout
    </button>
)

export default connect()(Logout)