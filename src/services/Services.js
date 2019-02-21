import React, { Component } from 'react'
import './services.css';
import ServiceOne from './ServiceOne.js';


export default class Services extends Component {
    render() {
        return (
            <div>
                <h3 className='service-text'>Serviços</h3>
                <div className='service'>

                    <ServiceOne></ServiceOne>
                    <ServiceOne></ServiceOne>
                    <ServiceOne></ServiceOne>
                    <ServiceOne></ServiceOne>
                </div>
            </div>
        )
    }
}
