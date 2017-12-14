import React, {Component} from 'react';
import "../ImageHeader.css";
import PropTypes from 'prop-types';

export default class ImageHeader extends Component {

    render() {
        return (
            <div className="ImageHeaderContainer">
                <img src={this.props.firstImage} className="ImageHeaderFirstImage"/>
                <div className="ImageHeaderImageContainer">
                    <img src={this.props.secondImage} className="ImageheaderSecondImage"/>
                    <img src={this.props.thirdImage} className="ImageHeaderThirdImage"/>
                </div>
                <div className="ImageHeaderTextContainer">
                    <div className="ImageHeaderTextTitleContainer">

                        <span className="ImageHeaderTextTitle">{this.props.titleText}</span>
                        <br/>
                        <div className="ImageHeaderTextSubTitleContainer">
                            <span>{this.props.subTitleText}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
ImageHeader.propTypes = {
    firstImage: PropTypes.string,
    secondImage: PropTypes.string,
    thirdImage: PropTypes.string,
    titleText: PropTypes.string,
    subTitleText: PropTypes.string,
};