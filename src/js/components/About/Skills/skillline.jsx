import React, { Component } from 'react';

export default class SkillLine extends Component {
    render() {
        return (
          <li className="o-list-bare u-h6">
              <span className="pe-7s-tools bold"></span> {this.props.tool}  <span className="pe-7s-clock bold"></span> {this.props.duration}
          </li>
        );
    }
}