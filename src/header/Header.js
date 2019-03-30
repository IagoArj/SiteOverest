import React, { Component } from 'react';
import './header.css';
export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            class: 'header transparent'
        }
    }

    listenScrollEvent = e => {
        if (window.scrollY > 50) {
            this.setState({class: 'header black'})
        } else {
            this.setState({class: 'header transparent'})
        }
    }
    
    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }
    
    render() {
        return (
            <div>
                <div className={this.state.class}>
                    <div className='over-logo'>
                        <img src={require('../assets/overLogo.png')} alt="logo" className="logo" ></img>
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
