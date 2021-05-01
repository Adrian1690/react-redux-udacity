import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setAuthUser } from '../actions/authedUser';

class Login extends React.Component {

    state = {
        userSelected: ''
    }

    handleSubmit = e => {
        e.preventDefault();
        const { setAuthUser, users } = this.props
        const { userSelected } = this.state

        if(userSelected === '') return;

        setAuthUser(users[userSelected])
    }

    handleInput = e => {
        this.setState(currentState => ({
            userSelected: e.target.value
        }))
    }

    render(){

        const { from } = this.props.location.state || {
			from: { pathname: '/' },
		};

        const { users, authedUser } = this.props;
        const { userSelected } = this.state;

        if (authedUser !== null) {
			return <Redirect to={from} />;
		}

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h3>Select User to Log In</h3>
                    <select
                        value={userSelected}
                        onChange={this.handleInput}
                    >
                        <option value=''>Select User</option>
                        {
                            Object.values(users).map(user => (
                                <option key={user.id} value={user.id}>{user.name}</option>
                            ))
                        }
                    </select>
                    <button type='submit'>Log In</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = ({users, authedUser}) => ({
    users,
    authedUser
})

const mapDispatchToProps = dispatch => ({
    setAuthUser: user => dispatch(setAuthUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)