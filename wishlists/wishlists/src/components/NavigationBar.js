import React, {Component} from 'react';
import {Navbar} from "react-bootstrap";
import Nav from "react-bootstrap/es/Nav";
import NavItem from "react-bootstrap/es/NavItem";
import NavDropdown from "react-bootstrap/es/NavDropdown";
import MenuItem from "react-bootstrap/es/MenuItem";
import IndexLink from "react-router/es6/IndexLink";
import axios from 'axios';

export default class NavigationBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false,
            username: null,
        }
    }

    componentDidMount() {
        axios.get('http://77.174.29.24:7000/api/loggedIn').then((response) => {

            if (response.data.success === true) {
                this.setState({
                    username: response.data.username,
                    loggedIn: true,
                })
            } else if (response.data.success === false) {
                this.setState({
                    loggedIn: false,
                })
            }
        })
    }



    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <IndexLink to="/">Verlanglijstjes</IndexLink>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>

                    {this.state.loggedIn ?
                        <NavItem eventKey={1}>
                            <IndexLink to="/">
                                Hoi, {this.state.username}
                            </IndexLink>
                        </NavItem>
                        :
                        <NavItem eventKey={2} href="http://77.174.29.24:7000/auth/google">
                            Login met google
                        </NavItem>
                    }


                </Nav>
            </Navbar>
        )
    }
}