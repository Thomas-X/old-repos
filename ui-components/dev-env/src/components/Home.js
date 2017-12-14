import React, {Component} from 'react';
import Navbar from "./Navbar";
import ImageHeader from "./ImageHeader";
import {IndexLink} from "react-router";
import shortid from 'shortid';
import Masonry from 'react-masonry-infinite';
import "../Cases.css";
import { hashHistory } from 'react-router';

const someCases = [
    {
        title: "PHP Cursus",
        image: "https://placekitten.com/4096/2048",
        id: 1,
    }, {
        title: "PHP Cursus",
        image: "https://placekitten.com/1920/2048",
        id: 2,
    }, {
        title: "PHP Cursus",
        image: "https://placekitten.com/4096/3048",
        id: 3,
    }
];

export default class Home extends Component {
    constructor(props) {
        super(props);
        let cases = someCases;
        cases.forEach((elem, index) => {
            if (!elem.height) {
                elem.height = this.getRandomElement(this.heights);
            }
            if (!elem.key) {
                elem.key = shortid.generate();
            }
            if ((index + 1) === cases.length) {
                this.state = {
                    hasMore: false,
                    elements: cases,
                }
            }
        });
    }

    heights = [200, 250, 250, 300, 300, 350];

    getRandomElement = array => array[Math.floor(Math.random() * array.length)];

    handleRef = (id) => hashHistory.push('/case/' + id);

    render() {
        return (

            <div>
                <ImageHeader
                    firstImage="https://placekitten.com/4096/2048"
                    secondImage="https://placekitten.com/4096/2048"
                    thirdImage="https://placekitten.com/4096/2048"
                    titleText="My Portfolio"
                    subTitleText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores culpa debitis delectus deleniti eius enim est eveniet facere nisi possimus reiciendis repellat reprehenderit sit, ullam vel veritatis vero! Incidunt!"
                />


                <Masonry
                    className="masonry"
                    hasMore={this.state.hasMore}
                    loader={
                        null
                    }
                    loadMore={() => null}
                >
                    {this.state.elements.map(item => (
                            <div onClick={() => this.handleRef(item.id)} key={item.key} className="card list-item" style={{
                                background: `url('${item.image}')`,
                                height: `${item.height}px`,
                                backgroundSize: "100% 100%",
                                backgroundRepeat: "no-repeat",
                            }}>
                                <h2>{item.title}</h2>
                            </div>
                    ))}
                </Masonry>

            </div>
        )
    }

}