import React, { Component } from 'react';

export default class Courses extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li className="o-list-bare list-section__header">iOS</li>
                    <li className="o-list-bare">Developing iOS 8 Apps with Swift <span className="bold">CS193P</span></li>
                    <li className="o-list-bare">Complete iOS 10 Developer course with Swift 3</li>
                </ul>
                <ul>
                    <li className="o-list-bare list-section__header">JavaScript</li>
                    <li className="o-list-bare">ES6 Javascript​: The Complete Developer's Guide <span className="bold">UC-EE7RGSC4</span></li>
                    <li className="o-list-bare">JavaScript proficiency test: DescriptionInternational Knowledge Measurement <span className="bold">Score: 83%</span></li>
                </ul>
            </div>
        )
    }
}