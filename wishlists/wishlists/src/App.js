import React, {Component} from 'react';
import {Router, Route, Link, IndexRoute, hashHistory, browserHistory} from 'react-router';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import NotFound from './components/NotFound';
import test from './components/test';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Container}>
                    <IndexRoute component={Home}/>
                    <Route path="/test" component={test}/>
                    <Route path="*" component={NotFound}/>
                </Route>
            </Router>
        );
    }
}

class Container extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavigationBar/>
                {this.props.children}
            </div>
        )
    }
}

export default App;
