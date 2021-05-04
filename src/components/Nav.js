import React from 'react';
import { NavLink } from 'react-router-dom';
import Logout from './Logout';

const Nav = props => {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <NavLink to="/" exact activeClassName='active'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/leaderboards" exact activeClassName='active'>
                        Leaderboards
                    </NavLink>
                </li>
                <li>
                    Hello, {props.authedUser.name}
                    {' '}
                    <Logout />
                </li>
            </ul>
        </nav>
    )
}

export default Nav