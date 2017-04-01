import React, { Component } from "react";
import { Route } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div className="o-wrapper u-margin-top-large o-wrapper--tiny" role="main">
                <div className="o-layout--center">
                    <div className="mugshot"></div>
                    <p className="fs-large">
                        Hey, I’m Joe!
                    </p>
                    <p className="fs-large">
                        I’m a Glasgow based <span className="fs-blue">JavaScript Engineer</span> <br/>with humble beginnings in <span className="fs-blue">Front End Web
                        Development</span>.
                    </p>
                    <p className="fs-large">
                        I like code, gaming and 5 shot lattes.
                    </p>
                </div>
            </div>
        )
    }
}

export default class HomeRoute extends Component {
    render() {
        return (
            <Route exact path="/" component={Home}/>
        )
    }
}