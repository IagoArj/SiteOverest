import React, { Component } from 'react';
import './App.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import Inicial from './inicial/Inicial';
import Servicos from './servicos/Servicos';

class App extends Component {
    render() {
        return (
            <div >
                <Header></Header>
                <Inicial></Inicial>
                <Servicos></Servicos>
                <Footer></Footer>
            </div>
        );
    }
}

export default App;
