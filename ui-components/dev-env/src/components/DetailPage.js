import React, {Component} from 'react';
import {IndexLink} from "react-router";
import "../DetailPage.css";

export default class DetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="DetailPageContainer">
                <div className="DetailFlexPageContainer">
                    <img src="https://placekitten.com/640/380" className="DetailPageImage"/>
                    <div className="DetailPageTextDescriptionButtonsContainer">
                        <h1>
                            Een React Project
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus beatae dicta dignissimos
                            distinctio doloremque ea eos fugit minima nihil officiis omnis quae quam, quidem repellendus
                            tempora veritatis voluptates voluptatibus voluptatum. Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Animi fugit, maxime quam qui reprehenderit vitae voluptates.
                            Aspernatur culpa distinctio eligendi exercitationem, facilis fugiat, iusto laudantium
                            perferendis, quibusdam suscipit voluptatem voluptates!
                        </p>
                        <div className="DetailPageButtonsContainer">
                            <a href="#" className="btn">
                                <i className="fa fa-github"></i> github
                            </a>
                            <a href="#" className="btn">
                                <i className="fa fa-object-group"></i> demo
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}