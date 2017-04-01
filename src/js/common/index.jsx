import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import HomeRoute from '../components/Index';
import AboutRoute from '../components/About';

export default class Main extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div className="o-wrapper u-margin-top-small o-wrapper--tiny" role="heading">
                        <Header/>
                        <HomeRoute/>
                        <AboutRoute/>
                    </div>
                </Router>
                <Footer/>
            </div>
        )
    }
}