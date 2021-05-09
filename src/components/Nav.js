import React from 'react';
import { NavLink } from 'react-router-dom';
import Logout from './Logout';

const Nav = ({ authedUser }) => {

    return (
        <nav className="nav">
            <ul>
                <li>
                    <NavLink to="/" exact activeClassName='active'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/add" exact activeClassName='active'>
                        Add
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/leaderboards" exact activeClassName='active'>
                        Leaderboards
                    </NavLink>
                </li>
            </ul>
            <span className='logout'>
                Hello, <b>{authedUser.name}</b>
                {' '}
                <Logout />
            </span>
        </nav>
    )
}

export default Nav