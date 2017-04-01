import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class Header extends Component {
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
                <nav className="o-layout__item main-nav u-1/2@desktop u-1/2@mobile">
                    <ul className="o-list-inline">
                        <li className="o-list-inline__item main-nav__item"><Link to="/">Home</Link></li>
                        <li className="o-list-inline__item main-nav__item"><Link to="/about">About</Link></li>
                        <li className="o-list-inline__item main-nav__item"><a href="#">Portfolio</a></li>
                        <li className="o-list-inline__item main-nav__item main-nav__item--with-icon"><a href="#">Github</a></li>
                        <li className="o-list-inline__item main-nav__item"><a href="#">Hire/Contact Me</a></li>
                    </ul>
                </nav>
            </header>
        );
    }
}