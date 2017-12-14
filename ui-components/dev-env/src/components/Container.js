import React, {Component} from 'react';
import ImageHeader from "./ImageHeader";
import Navbar from "./Navbar";
import { hashHistory } from 'react-router';


export default class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <div>
                <Navbar
                    brandName="Thomas Zwarts"
                    brandNameRef="#"
                    leftItemName="Contact"
                    leftItemRef="#"
                    rightItemRef="#"
                    rightItemName="Over mij"
                    fixed={true}
                />
                {this.props.children}
            </div>
        )
    }

}