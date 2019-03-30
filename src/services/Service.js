import React, { Component } from 'react'
import './service.css';
import ServiceBox from './serviceBox/ServiceBox';
export default class Service extends Component {

    services = [{
        title: 'Sistemas Web',
        description: 'Sistemas online que atendem as nescessidades específicas da sua empresa.',
        icon: 'fas fa-code'
    }, {
        title: 'Aplicativos Móveis',
        description: 'Aplicativos de alto desempenho Android e iOS com interface intuituva.',
        icon: 'fas fa-mobile-alt'
    }, {
        title: 'Sites e lojas',
        description: 'Projetos com foco em conversão de visitantes em leads e vendas',
        icon: 'fas fa-store'
    }]

    render() {
        return (
            <div className='service'>
                <h2>O que fazemos?</h2>
                <div className='boxes'>
                    {this.services.map((service) => {
                        return <ServiceBox title={service.title} description={service.description} icon={service.icon}></ServiceBox>
                    }
                    )}
                </div>
            </div>
        )
    }
}
