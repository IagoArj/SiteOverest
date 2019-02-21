import React, { Component } from 'react';
import './App.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import Inicial from './inicial/Inicial';
import Services from './services/Services';
import CallToAction from './callToAction/CallToAction';
import Projects from './projects/Projects';
import Posts from './posts/Posts';
import Contact from './contact/Contact';

class App extends Component {
    render() {
        return (
            <div >
                <Header></Header>
                <Inicial></Inicial>
                <Services></Services>
                <CallToAction></CallToAction>
                <Projects></Projects>
                <Posts></Posts>
                <Contact></Contact>
                <Footer></Footer>
            </div>
        );
    }
}

export default App;
