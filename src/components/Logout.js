import React from 'react';
import { setAuthUser } from '../actions/authedUser'
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
const Logout = props => (
    <Button
        color="secondary"
        onClick={() => props.dispatch(setAuthUser(null))}>
            Logout
    </Button>
)

export default connect()(Logout)