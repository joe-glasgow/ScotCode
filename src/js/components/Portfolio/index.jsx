import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class Portfolio extends Component {
    // TODO: factor out in portolio items [not DRY]
    render() {
        return (
            <div className="u-1/1 u-padding-left-small u-padding-right-small">
                <div className="u-1/1 o-layout o-layout--flush">
                    <h2 class="u-margin-bottom-small">Recent Work</h2>
                    <div className="o-layout__item u-1/3@tablet u-1/3@desktop u-1/1@mobile u-margin-bottom-small">
                        <span className="o-block u-h3 u-margin-bottom-small">STV News</span>
                        <div
                            data-title="STV News"
                            data-content="Angular JS backend application for Journalists in the field &amp; custom ES6 framework and ITCSS architecture."
                            className="info-box info-box--stv-news">
                            <a className="c-btn--primary info-btn" href="http://news.stv.tv" target="_blank">Visit the STV News site</a>
                        </div>
                    </div>
                    <div className="o-layout__item u-1/3@tablet u-1/3@desktop u-1/1@mobile u-margin-bottom-small">
                        <span className="o-block u-h3 u-margin-bottom-small">STV Player</span>
                        <div data-title="STV Player"
                             data-content="Creating architeture (CSS &amp; JS) for the Web Player, Amazon FireTV Player (Ember and React)"
                             className="info-box info-box--stv-player">
                            <a className="c-btn--primary info-btn" href="http://player.stv.tv/" target="_blank">Visit the STV Player site</a>
                        </div>
                    </div>
                    <div className="o-layout__item u-1/3@tablet u-1/3@desktop u-1/1@mobile u-margin-bottom-small">
                        <span className="o-block u-h3 u-margin-bottom-small">Iberdrola (Smart Solar)</span>
                        <div data-title="Iberdrola"
                             data-content="Creating an Angular application that meaurues realtime solar generation data. Angular JS & Node."
                             className=" info-box info-box--iberdrola">
                            <a className="c-btn--primary info-btn" href="http://iberdrola.es" target="_blank">Visit the Iberdrola site</a>
                        </div>
                    </div>
                </div>
                <div className="u-1/1 u-margin-top-small">
                    <h3>Legacy projects</h3>
                    <p>I have many legacy projects from my years of development, contact me to find out more about these. These include companies like Vue Cinemas and the MediCinema.</p>
                    <small><span className="bold">NB</span> Images are samples of work I have done. No copyright on content. All content images and rights therein belong to their rightful owner. </small>
                </div>
            </div>
        )
    }
}

export default class PortfolioRoute extends Component {
    render() {
        return (
            <Route path="/portfolio" component={Portfolio}/>
        );
    }
}