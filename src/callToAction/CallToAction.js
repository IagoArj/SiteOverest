import React, { Component } from 'react';
import './callToAction.css';

export default class CallToAction extends Component {
    render() {
        return (
            <div className='call-to-action'>
                <h2 className='action-text'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do orem ipsum dolor sit amet, consectetur  </h2>
                <button className='call-button'>Click Aqui</button>
            </div>
        )
    }
}
