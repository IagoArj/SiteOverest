import React, { Component } from 'react';
import './header.css';
export default class Header extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <div className='over-logo'>
                        <img src={require('../assets/overLogo.png')} className="logo" ></img>
                        <h2>Overest</h2>
                    </div>
                    <div className="header-right">
                        <a className="active links" href="#home">Serviços</a>
                        <a className='links' href="#contact">Projetos</a>
                        <a className='links' href="#about">Posts</a>
                        <a className='links' href="#about">Contato </a>
                    </div>
                </div>
            </div>
        )
    }
}
