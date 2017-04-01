import React, { Component } from 'react';
import { BrowserRouter as Router, browserHistory } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import HomeRoute from '../components/Index';
import AboutRoute from '../components/About';
import PortfolioRoute from '../components/Portfolio';

export default class Main extends Component {
    render() {
        return (
            <div>
                <Router history={browserHistory}>
                    <div className="o-wrapper u-margin-top-small o-wrapper--tiny" role="heading">
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