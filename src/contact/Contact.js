import React, { Component } from 'react';
import './contact.css';
export default class Contact extends Component {
    render() {
        return (
            <div className='vertical-flex justify-center' style={{ alignItems: "center" }}>
                <h2 className='contact-text'>Entre em Contato</h2>
                <div className='input-contact'>
                    <input className='name' type="text" name="name" placeholder='Nome'></input>
                    <input className='subject ' type="text" name="subject" placeholder='Assunto'></input>
                </div>
                <input className='message' type='text' name='message' placeholder='Mensagem'></input>
                <button className='send-button'>Enviar</button>
            </div>
        )
    }
}
