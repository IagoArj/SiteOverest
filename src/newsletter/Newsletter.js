import React, { Component } from 'react'
import './newsletter.css';

export default class Newsletter extends Component {
    render() {
        return (
            <div className='flex-horizontal newsletter-box'>
                <div className='flex-vertical'>
                    <div className='flex-vertical news-text-box'>
                        <h3 className='h3-news'>Quer Saber Nossas Novidades?</h3>
                        <p className='p-news'>Escreva seu email aqui embaixo,<br></br>prometemos não mandar spam!</p>
                    </div>
                    <div className='flex-horizontal input-box'>
                        <input className='input-news' placeholder='  Email' type="text" name="email"></input>
                        <button className='btn-news'>Enviar</button>
                    </div>
                </div>
            </div>
        )
    }
}
