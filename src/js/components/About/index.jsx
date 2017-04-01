import React, {Component} from 'react';
import {Route, BrowserRouter as Router, browserHistory} from 'react-router-dom';
import Skills from './Skills';
import Interests from './Interests';
import Courses from './Courses';

import Lozenge from "../../elements/Lozenge";
// Factor out into API call
// TODO: Backend API in Node
const Categories = [{
    iconClass: "pe-7s-joy",
    text: "Me",
    url: "interests"
}, {
    iconClass: "pe-7s-tools",
    text: "Skills",
    url: "skills"
}, {
    iconClass: "pe-7s-notebook",
    text: "Courses",
    url: "courses"
}];

class About extends Component {
    render() {
        // current URL
        const url = this.props.match.url;

        return (
            <Router basename="/" history={browserHistory}>
                <div className="o-layout--center u-margin-top-large">
                    <ul className="o-list-inline icon-list">
                        {Categories.map((category, index) => (
                            <Lozenge linkTo={`${url}/${category.url}`} iconClass={category.iconClass}
                                     text={category.text} key={index}/>))}
                    </ul>
                    <Route path="/about/skills" component={Skills}/>
                    <Route path="/about/courses" component={Courses}/>
                    <Route path="/about/interests" component={Interests}/>
                </div>
            </Router>
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