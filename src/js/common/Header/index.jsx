import React, { Component } from "react";

import { NavLink as Link } from "react-router-dom";

import { MOBILE_WIDTH } from '../../constants';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  expandedClass :  "",
                        canExpand: window.outerWidth <= MOBILE_WIDTH,
                        BEMListClass: window.outerWidth <= MOBILE_WIDTH ? "-bare" : "-inline"
                    };
    }
    // Initial component load
    componentDidMount() {
        // TODO: throttle this
        window.addEventListener("resize", () => {
            // Desktop View
            if (window.outerWidth > MOBILE_WIDTH) {
                this.setState({
                    canExpand: false,
                    expandedClass: "",
                    BEMListClass: "-inline"
                });

                return;
            }
            // Mobile View
            this.setState({
                canExpand: true,
                BEMListClass: "-bare"
            });
        });
    }

    handleMainNavClick() {
        // If in Mobile Responsive View
        if (this.state.canExpand) {
            this.setState({
                expandedClass: this.state.expandedClass === "" ? "expanded" : ""
            });
        }

    }
    render () {
        return (
            <header className="o-layout u-1/1 o-layout--flush">
                <section className="o-layout__item u-1/2@desktop u-1/2@mobile">
                    <div className="logo logo--small"></div>
                    <div className="o-layout o-layout__item u-1/2 u-3/4@mobile">
                        <span className="u-margin-bottom-none fs-h1"><span className="bold">Scot</span>:code</span>
                        <span className="hide-on-mobile u-margin-bottom-none u-h6">Development from Joe Morrison</span>
                    </div>
                </section>
                <nav onClick={ this.handleMainNavClick.bind(this) } className={`${this.state.expandedClass} o-layout__item main-nav u-1/2@desktop u-1/2@mobile`}>
                    <ul className={`o-list-${this.state.BEMListClass} main-nav__container`}>
                        <li className={`o-list-${this.state.BEMListClass}__item main-nav__item`}><Link className="main-nav__link" exact activeClassName="active" to="/">Home</Link></li>
                        <li className={`o-list-${this.state.BEMListClass}__item main-nav__item`}><Link className="main-nav__link" exact activeClassName="active" to="/about/interests">About</Link></li>
                        <li className={`o-list-${this.state.BEMListClass}__item main-nav__item`}><Link className="main-nav__link" exact activeClassName="active" to="/portfolio">Portfolio</Link></li>
                        <li className={`o-list-${this.state.BEMListClass}__item main-nav__item main-nav__item--with-icon`}><a className="main-nav__link" href="http://github.com/joe-glasgow/?tab=repositories" target="_blank">Github</a></li>
                        <li className={`o-list-${this.state.BEMListClass}__item main-nav__item`}><a className="main-nav__link" href="mailto:web@devbyjoe.co.uk" target="_blank">Hire/Contact Me</a></li>
                    </ul>
                </nav>
            </header>
        );
    }
}