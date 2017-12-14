import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import {Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexLink} from 'react-router'
class App extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={Container}>
                    <IndexRoute component={Home}/>
                    <Route path='/hello' component={Address}/>
                    <Route path='*' component={NotFound}/>
                </Route>
            </Router>
        )
    }
}
const Home = () => <h1>Hello from Home!</h1>
const Address = () => <h1>We are located at 555 Jackson St.</h1>
const Address2 = () => <h1>We are located at 555 Jacks222on St.</h1>
const Address3 = () => <h1>We are located at 555 Jacks22332on St.</h1>
const NotFound = () => ( <h1>404.. This page is not found!</h1>)
const Nav = () => (
    <div>
        <IndexLink activeClassName='active' to='/'>Home</IndexLink>&nbsp;
        <IndexLink activeClassName='active' to='/hello'>Address</IndexLink>&nbsp;
    </div>
)

const Container = (props) => <div>
    <Nav />
    {props.children}
</div>


ReactDOM.render(<App/>, document.getElementById('root'))