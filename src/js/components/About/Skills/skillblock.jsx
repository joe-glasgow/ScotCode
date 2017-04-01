import React, { Component } from 'react';
import  SkillLine from './skillline';

export default class SkillBlock extends Component {
    render() {
       return (
           <ul>
            <li className="o-list-bare list-section__header u-h6 center-on-mobile"> { this.props.skill } </li>
            { this.props.experience.map((exp, index) => <SkillLine key={index} tool={exp.tool} duration={exp.duration}/>)}
           </ul>
       );
    }
}