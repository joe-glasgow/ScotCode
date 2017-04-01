import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Lozenge from "../../elements/Lozenge";
// Factor out into API call
// TODO: Backend API in Node
const Categories = [{
        iconClass: "skillsClass",
        text: "Skills"
    }, {
        iconClass: "coursesClass",
        text: "Courses"
    }, {
        iconClass: "interestsClass",
        text: "Interests"
    }];

class About extends Component {
    render() {
        return (
            <div className="o-layout--center u-margin-top-huge">
                <ul className="o-list-inline">
                    {Categories.map((category, index) => (<Lozenge iconClass={category.iconClass} text={category.text} key={index}  />))}
                </ul>
            </div>
        );
    }
}

export default class AboutRoute extends Component {
    render() {
        return (
          <Route path="/about" component={About}/>
        );
    }
}