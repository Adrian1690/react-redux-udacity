import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import { connect } from 'react-redux';
import { handleInitialData } from './actions/shared';
import LoadingBar from 'react-redux-loading';
import AuthedRoute from './components/AuthedRoute';
import Home from './components/Home';
import Login from './components/Login';
import QuestionPage from './components/QuestionPage';
import NewQuestion from './components/NewQuestion';
import Leaderboards from './components/Leaderboards';

class App extends React.Component {

    componentDidMount(){
        this.props.dispatch(handleInitialData())
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <LoadingBar />
                    <div className="container">
                        <Switch>
                        <Route path="/login" exact component={Login} />
                        <AuthedRoute path="/" exact component={Home} />
                        <AuthedRoute path="/add" exact component={NewQuestion} />
                        <AuthedRoute path="/question/:id" exact component={QuestionPage} />
                        <AuthedRoute path="/leaderboards" exact component={Leaderboards} />
                        {
                            /**
                                <Route path="/question/:id" exact component={TweetPage} />
                                <Route path="/add" component={NewTweet} />
                                <Route path="/leaderboard" component={NewTweet} />
                                */
                        }
                        <AuthedRoute component={() => (<h3>404 - Page Not Found</h3>)} />
                    </Switch>
                    </div>
                </Fragment>
            </Router>
        )
    }
}

export default connect()(App);
