import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';

export default class Lozenge extends Component {
    render() {
        return (
            <li className="o-list-inline__item  lozenge">
                <Link activeClassName="active" className="lozenge--link" to={`${this.props.linkTo}`}>
                    <div className="lozenge--icon icon-list__item icon-list__item--large">
                        <span className={`${this.props.iconClass}`}></span>
                    </div>
                    <div className="lozenge--text">
                        { this.props.text }
                    </div>
                </Link>
            </li>
        );
    }
}