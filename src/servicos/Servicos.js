import React, { Component } from 'react'
import './servicos.css';
import ServiceOne from './ServiceOne.js';


export default class Servicos extends Component {
    render() {
        return (
            <div>
                <h3 className='service-text'>Serviços</h3>
                <div className='servico'>

                    <ServiceOne></ServiceOne>
                    <ServiceOne></ServiceOne>
                    <ServiceOne></ServiceOne>
                    <ServiceOne></ServiceOne>
                </div>
            </div>
        )
    }
}
