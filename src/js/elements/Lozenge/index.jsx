import React, { Component } from 'react';

export default class Lozenge extends Component {
    render() {
        return (
            <li className="o-list-inline__item">
                <span className={`${this.props.iconClass}`}></span>  | { this.props.text }
            </li>
        );
    }
}