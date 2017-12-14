import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { createUrlPath, errorHandler } from './services/Helpers';
import { ROUTE_PATHS } from './constants/routes';

class Register extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            secondPassword: '',
        };
    }

    register = () => {
        const name = this.state.name.trim();
        const password = this.state.password.trim();
        const secondPassword = this.state.secondPassword.trim();
        if (name.length === 0 || password.length === 0 || secondPassword.length === 0) {
            this.setState({
                error: 'You must fill in all inputs',
            });
        } else {
            if (password === secondPassword) {
                axios.post('/api/register', {
                    username: name,
                    password: password,
                }).then((response) => {
                    if (response.status === 200) {
                        this.setState({
                            error: '',
                        });
                    }
                    this.props.history.push(createUrlPath([ROUTE_PATHS.home]));
                }).catch((err) => {
                    this.setState({
                        error: err,
                    });
                    errorHandler(err);
                });
            } else {
                this.setState({
                    error: 'Both passwords don\'t match',
                });
            }
        }
    };

    render () {
        return (
            <div>
                name:
                <input value={this.state.name} placeholder="enter your username here"
                    onChange={(e) => this.setState({ name: e.target.value })}/>
                <br/>
                password:
                <input value={this.state.password} placeholder="enter your password here"
                    onChange={(e) => this.setState({ password: e.target.value })}/>
                <br/>
                repeat password:
                <input value={this.state.secondPassword} placeholder="repeat your password"
                    onChange={(e) => this.setState({ secondPassword: e.target.value })}/>
                <br/>
                {
                    this.state.error
                        ? <div>
                            <span>{this.state.error}</span>
                            <br/>
                        </div>
                        : null
                }
                <button value="Register" onClick={this.register}>Register</button>
            </div>
        );
    }
}

export default withRouter(Register);