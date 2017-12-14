import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import io from 'socket.io-client';
import { SocketProvider } from 'socket.io-react';
import { CookiesProvider } from 'react-cookie';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link, Redirect,
} from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';
import Login from './Login';
import Register from './Register';
import axios from 'axios';
import { createUrlPath, errorHandler } from './services/Helpers';
import { ROUTE_PATHS } from './constants/routes';
import { withRouter } from 'react-router-dom';
import { withCookies } from 'react-cookie';

const socket = io.connect('ws://localhost:3004');

const routes = [
    {
        path: ROUTE_PATHS.home,
        exact: true,
        component: Home,
    },
    {
        path: ROUTE_PATHS.chatRoom,
        component: App,
    },
    {
        path: ROUTE_PATHS.login,
        component: Login,
    },
    {
        path: ROUTE_PATHS.register,
        component: Register,
    },
    {
        path: ROUTE_PATHS.notFound,
        component: NotFound,
    },
];

const AuthenticatedRoute = (props) => {
    let returnValue = null;
    if ((props.path !== ROUTE_PATHS.login || props.path !== ROUTE_PATHS.register)) {
        axios.post('/api/isLoggedIn', { token: this.props.cookies.get('token') }).then((response) => {
            if (response.data.isLoggedIn === true) {
                returnValue = <Route {...props}/>;
            } else {
                returnValue = <Redirect to={createUrlPath([ROUTE_PATHS.login])}/>;
            }
            return returnValue;
        }).catch(errorHandler);
    }
};

ReactDOM.render(
    <CookiesProvider>
        <SocketProvider socket={socket}>
            <Router>
                <div>
                    <Switch>
                        {routes.map((elem, index) => <AuthenticatedRoute {...elem} key={index}/>)}
                    </Switch>
                </div>
            </Router>
        </SocketProvider>
    </CookiesProvider>
    , document.getElementById('root'));
registerServiceWorker();
