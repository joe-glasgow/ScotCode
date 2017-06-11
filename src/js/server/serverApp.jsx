import React, { Component } from 'react';
import { StaticRouter as Router } from 'react-router-dom';
import Footer from '../common/Footer';
import Header from '../common/Header';
import HomeRoute from '../components/Index';
import AboutRoute from '../components/About';
import PortfolioRoute from '../components/Portfolio';
import 'whatwg-fetch';
global.window = global.window || {};

export default class Main extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div className="o-wrapper u-padding-top-small" role="heading">
                        <Header/>
                        <HomeRoute/>
                        <AboutRoute/>
                        <PortfolioRoute/>
                    </div>
                </Router>
                <Footer/>
            </div>
        )
    }
}