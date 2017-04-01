import React, { Component } from 'react';
import Sidebar from '../../../elements/Sidebar';
import SkillBlock from './skillblock';
import json from '../../../data/skill.json';

export default class Skills extends Component {
    render() {
        return (
            <div className="o-layout o-layout--right o-layout--flush u-1/1">
                <Sidebar />
                <div className="o-layout__item u-2/3@tablet u-2/3@desktop u-1/1@mobile">
                    { json.skills.map((skill, index) => <SkillBlock skill={skill.skill} key={index} experience={skill.experience} />)}
                </div>

            </div>
        )
    }
}