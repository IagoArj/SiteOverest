import React, { Component } from 'react';
import './App.css';
import Header from './header/Header';
import Inicial from './inicial/Inicial';
import Service from './services/Service';
import ShowCase from './showCase/ShowCase';
import Post from './post/Post';
import Footer from './footer/Footer';
import Contact from './contact/Contact';
import Team from './team/Team';
import Newsletter from './newsletter/Newsletter';

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Inicial></Inicial>
        <Service></Service>
        <ShowCase></ShowCase>
        <Team></Team>
        <Newsletter></Newsletter>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
