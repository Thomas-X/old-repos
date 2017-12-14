import React, { Component } from 'react';
import axios from 'axios'; 
import { withCookies } from 'react-cookie';
import { withRouter } from 'react-router-dom';
import { errorHandler } from './services/Helpers';

class Login extends Component {
    constructor (props) {
        super(props);

        const { cookies } = this.props;

        this.cookies = cookies;

        this.state = {
            username: '',
            password: '',
            error: ''
        };
    }

    login = () => {
        axios.post('/api/login', {username: this.state.username, password: this.state.password}).then((response) => {
            if (response.data.token) {
                this.cookies.set('token', response.data.token);
                this.props.history.push('/');
            } else {
                this.setState({
                    error: 'Whoops! Something went wrong!',
                });
            }
        }).catch(errorHandler);
    };

    render () {
        return (
            <div>
                {this.state.error}
                username <input onChange={(event) => this.setState({ username: event.target.value })} value={this.state.username}/>
                <br/>
                password <input type="password" onChange={(event) => this.setState({ password: event.target.value })} value={this.state.password}/>
                <br/>
                <button onClick={this.login}>login</button>
            </div>
        );
    }
}

export default withCookies(withRouter(Login));