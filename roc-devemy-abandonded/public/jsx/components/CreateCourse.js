import React, {Component} from 'react';
import axios from 'axios';
import { hashHistory } from 'react-router'

export default class CreateCourse extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get('/api/createCourse',).then(function (responseJson) {
            if (!responseJson.data.userNotValid) {
                hashHistory.push('/courses/editor/' + responseJson.data);
            } else {
                hashHistory.push('/');
            }
        }.bind(this));
    }

    render() {
        return (
            <div>
                <h1>Redirecting..</h1>
            </div>
        )
    }
}