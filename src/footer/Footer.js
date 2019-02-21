import React, { Component } from 'react'
import './footer.css';

export default class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <img src={require('../assets/overLogo.png')} className="logoFooter" ></img>
            </div>
        )
    }
}
