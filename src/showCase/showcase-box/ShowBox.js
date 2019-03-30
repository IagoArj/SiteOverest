import React, { Component } from 'react';
import './showBox.css';


export default class ShowBox extends Component {
    render() {
        return (
            <div className='show-box flex-vertical'>
                <img className='img-box' src={require("../../assets/dead.jpg")}></img>
                <h3 className='h3-box'>{this.props.title}</h3>
                <p className='p-box'>{this.props.subtitle}</p>
            </div>
        )
    }
}
