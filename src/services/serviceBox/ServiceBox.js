import React, { Component } from 'react';
import './serviceBox.css';
export default class ServiceBox extends Component {
    render() {
        return (
            <div className='service-box flex-vertical'>
                <div className='service-icon flex-horizontal'>
                    <i className={this.props.icon}></i>
                </div>
                <h3 className='service-box-h3'>{this.props.title}</h3>
                <h4 className='service-box-h4'>{this.props.description}</h4>
            </div>
        )
    }
}
