import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "../Navbar.css";
import {IndexLink} from 'react-router';

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
            fixed: this.props.fixed,
        }
    }

    handleClick = () => this.setState({isActive: !this.state.isActive});

    handleBrandClick = () => this.setState({isActive: false});

    render() {
        return (
            <div className={this.state.fixed ? "NavbarFixed" : null}>
                <div className="NavbarGradientContainer">
                    <div className="NavbarContainer">
                        <div className="NavbarBorderContainer">
                            <IndexLink onClick={this.handleClick} to={this.props.leftItemRef}
                                       className="NavbarLeftItem">
                                <span >{this.props.leftItemName}</span>
                            </IndexLink>
                            <IndexLink className="NavbarBrandName" to={this.props.brandNameRef}
                                       onClick={this.handleBrandClick}>
                                <span >{this.props.brandName}</span>
                            </IndexLink>
                            <IndexLink onClick={this.handleClick} to={this.props.rightItemRef}
                                       className="NavbarRightItem">
                                <span >{this.props.rightItemName}</span>
                            </IndexLink>
                            <div
                                className={this.state.isActive ? "hamburger hamburger--spin is-active" : "hamburger hamburger--spin"}
                                onClick={this.handleClick} type="button">
                                <div className="hamburger-box">
                                    <div className="hamburger-inner"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={this.state.isActive ? "NavbarHamburgerContainer" : "hidden"}>
                        <IndexLink onClick={this.handleClick} to={this.props.leftItemRef}
                                   className="NavbarHambugerLeftItemCollapsed">
                        <span>
                            {this.props.leftItemName}
                        </span>
                        </IndexLink>
                        <IndexLink onClick={this.handleClick} to={this.props.rightItemRef}
                                   className="NavbarHambugerRightItemCollapsed">
                            <span>{this.props.rightItemName}</span>
                        </IndexLink>
                    </div>
                </div>
            </div>
        )
    }
}

Navbar.propTypes = {
    brandName: PropTypes.string,
    leftItemName: PropTypes.string,
    rightItemName: PropTypes.string,
    leftItemRef: PropTypes.string,
    rightItemRef: PropTypes.string,
    brandNameRef: PropTypes.string,
    fixed: PropTypes.bool,
};
Navbar.defaultProps = {
    fixed: false,
};