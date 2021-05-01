import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Nav from './Nav'

const AuthedRoute = props => {
	const { component: Component, ...rest } = props;

    return (

		<Route
			{...rest}
			render={renderProps =>
				props.authedUser !== null ? (
                    <React.Fragment>
                        <Nav {...renderProps} authedUser={props.authedUser} />
					    <Component {...renderProps} />
                    </React.Fragment>
                ) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: props.location },
						}}
					/>
				)
			}
		/>
	);
};

const mapStateToProps = ({authedUser}) => ({
    authedUser: authedUser
})

export default withRouter(connect(mapStateToProps)(AuthedRoute));