import React, {Component} from 'react';
import axios from 'axios';
import { hashHistory } from 'react-router';

export default class AuthUser extends Component {
    componentDidMount() {
        axios.get('/api/authUser').then(function (responseJson) {
            if(!responseJson.data.authenticated) {
                hashHistory.push('/');
            }
        });
    }
    render() {
        return (
            <div></div>
        )
    }
}