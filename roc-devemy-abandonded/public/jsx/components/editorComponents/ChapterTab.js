import PropTypes from 'prop-types';
import React, {Component} from "react";

export default class ChapterTab extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        // it's the first item in the array (we don't want a special shape)
        return (
            <button type="button" className={"tablinks " + this.props.isActive}
                    onClick={this.props.clicked}>{this.props.chapterName}</button>
        )
    }
}
ChapterTab.propTypes = {
    chapterName: PropTypes.string.isRequired,
    clicked: PropTypes.func,
    isActive: PropTypes.string,
}