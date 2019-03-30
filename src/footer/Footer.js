import React, { Component } from 'react';
import './footer.css';
export default class Footer extends Component {
    render() {
        return (
            <div className='footer flex-horizontal'>
                <div className='flex-horizontal direitos-reservados'>
                    <img src={require('../assets/overLogo.png')} className="logo-footer" ></img>
                    <p className='direitoP'> &copy; 2019. Overest Ltda - Direitos Reservados</p>
                </div>
                <div className='flex-horizontal all-links'>
                    <a className="links-f" href="#home">Serviços</a>
                    <a className='links-f' href="#contact">Como Funciona</a>
                    <a className='links-f' href="#about">Blog</a>
                    <a className='links-f' href="#about">Contato</a>
                </div>
            </div>
        )
    }
}
