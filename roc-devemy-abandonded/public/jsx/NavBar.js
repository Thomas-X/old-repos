// import React from 'react';
// import {Tabs, Tab} from 'material-ui/Tabs';
// import {AppBar, FlatButton} from "material-ui";
// import TouchRipple from 'material-ui/internal/TouchRipple';
// import * as styles from './styles';
// import SwipeableViews from 'react-swipeable-views';
// import TabComponentTwo from "./tabTwo";
// import PropTypes from 'prop-types';
// import Drawer from 'material-ui/Drawer';
// import MenuItem from 'material-ui/MenuItem';
//
//
// class LoggedIn extends React.Component {
//     render() {
//         return (
//             <FlatButton label='LOGGED IN!'/>
//         )
//     }
// }
// class Login extends React.Component {
//     render() {
//         return (
//             <FlatButton label='LOGIN'/>
//         )
//     }
// }
//
// export default class NavBar extends React.Component {
//
//     constructor(props) {
//         super(props);
//         console.log(this.props.userdata[0]);
//         this.state = {
//             slideIndex: 0,
//             loggedIn: this.props.userdata[0].loggedIn,
//             username: this.props.userdata[0].username,
//             email: this.props.userdata[0].email,
//             displayImage: this.props.userdata[0].displayImage,
//         };
//         console.log(this.props.userdata);
//         this.handleChange = this.handleChange.bind(this);
//         this.drawerActivated = this.drawerActivated.bind(this);
//     }
//     drawerActivated() {
//         this.setState({
//                 drawerOpen: !this.state.drawerOpen
//             }
//         )
//     }
//
//     handleChange(value) {
//         this.state.slideIndex = value;
//         this.setState(this.state);
//     };
//
//     render() {
//         return (
//
//         )
//     }
// }
// NavBar.propTypes = {
//     userdata: PropTypes.arrayOf(PropTypes.shape({
//         loggedIn: PropTypes.bool,
//         username: PropTypes.string,
//         email: PropTypes.string,
//         displayImage: PropTypes.string
//     }))
// }