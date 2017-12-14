import React, {Component} from 'react';
import {CircularProgress} from 'material-ui';
import axios from 'axios';
import PropTypes from 'prop-types';

export default class Course extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null,
            loaded: false,
        }
    }

    componentDidMount() {

        axios.get('/api/getCourseById/' + this.props.params.courseid)
            .then(function (response) {
                this.setState({
                    data: response.data,
                    loaded: true,
                })
            }.bind(this))
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return (
            <div>
                {this.state.loaded ? <CourseInner data={this.state.data}/> : <CircularProgress size={80} thickness={5}/>}
            </div>
        )
    }
}
class CourseInner extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.data.author}
            </div>
        )
    }
}
CourseInner.propTypes = {
    data: PropTypes.object,
}