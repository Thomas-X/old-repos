import React, {Component} from 'react';
import Jumbotron from "react-bootstrap/es/Jumbotron";
import Button from "react-bootstrap/es/Button";


export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <Jumbotron>
                    <h1>Verlanglijstjes site</h1>
                    <p>Deze site is om een verlanglijstje te kunnen maken.</p>
                </Jumbotron>

                <hr/>
                <h1>
                    Hoe gebruik je het?
                </h1>
                <p> todo voeg shit hier toe</p>
            </div>
        )
    }
}