import React, {Component} from 'react';
import axios from 'axios';
import AuthTeacher from "./AuthTeacher";
import {Paper} from 'material-ui';
import * as styles from '../styles';

export default class MyCourses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }
    componentDidMount() {

    }
    render() {
        return (
            <div>
                <AuthTeacher/>
                <Paper style={styles.paperEditorContent} zDepth={1}>

                </Paper>
            </div>
        )
    }
}