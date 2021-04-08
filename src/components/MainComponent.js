import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Experience from './ExperienceComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter, useParams } from 'react-router-dom';


class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <Home />
            </div>
        );   
    }
}

export default Main;
