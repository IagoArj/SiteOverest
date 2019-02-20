import React, { Component } from 'react'
import './header.css'

export default class Header extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <div className='over-logo'>
                        <img src={require('../assets/overLogo.jpeg')} className="logo" ></img>
                        <h2>Overest</h2>
                    </div>
                    <div className="header-right">
                        <a className="active" href="#home">Home</a>
                        <a href="#contact">Home</a>
                        <a href="#about">Home</a>
                        <a href="#about">Home</a>
                    </div>
                </div>
            </div>
        )
    }
}
