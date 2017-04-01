import React, { Component } from 'react';

export default class Footer extends Component {
    constructor(props) {
        super(props);
        // get today
        const now = new Date();
        // fill year
        this.state = { year : now.getFullYear() };
    }
    render() {
        /* TODO: Refactor out into React elements*/
        return (
            <div className="page-footer--dark u-padding-top-small">
                <div className="o-wrapper">
                    <div className="o-layout u-1/1 o-layout--flush">
                        <div className="center-on-mobile o-layout__item u-1\/2\@desktop u-1/2@tablet u-1/1@mobile">
                            <p>&copy; { this.state.year } DevByJoe Limited.</p>
                            <p>Registered in Scotland. SCO 541206</p>
                        </div>
                        <div className="o-layout__item u-1/2@desktop u-1/2@tablet u-1/1@mobile center-on-mobile--then-right">
                            <ul className="o-list-inline">
                                <li className="o-list-inline__item"><a className="footer-icon footer-icon--twitter" href="http://twitter.com/ates_tee_em_el" target="_blank"></a></li>
                                <li className="o-list-inline__item"><a className="footer-icon footer-icon--linkedin" href="https://www.linkedin.com/in/joemorrisonweb/" target="_blank"></a></li>
                            </ul>
                            <ul className="o-list-inline">
                                <li className="o-list-inline__item footer-contact"><span className="icon-list__item--medium pe-7s-phone footer-font-icon"></span>: 07957136176 </li>
                                <li className="o-list-inline__item footer-contact"><span className="icon-list__item--medium pe-7s-mail footer-font-icon"></span>: <a
                                    href="mailto:web@devbyjoe.co.uk">web@devbyjoe.co.uk</a> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}