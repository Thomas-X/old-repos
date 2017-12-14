import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './font-awesome.css';
import Navbar from "./components/Navbar";
import ImageHeader from "./components/ImageHeader";
import {hashHistory, IndexRoute, Route, Router} from "react-router";
import Home from "./components/Home";
import DetailPage from "./components/DetailPage";
import Container from "./components/Container";


class App extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Container}>
                    <IndexRoute component={Home}/>
                    <Route path="/case/:itemid" component={DetailPage}/>
                </Route>
            </Router>
        );
    }
}


export default App;
