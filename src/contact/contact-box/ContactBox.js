import React, { Component } from 'react';
import './contactBox.css';
export default class ContactBox extends Component {
    render() {
        return (
            <div className='contact-box flex-horizontal'>
                <div className='flex-vertical contact'>
                    <div className='flex-horizontal e-box'>
                        <i className="far fa-envelope"></i>
                        <strong>Email</strong>
                    </div>
                    <p>contato@overest.com.br</p>
                    <div className="c-box">
                        <i class="fab fa-whatsapp"></i>
                        <strong>Telefone</strong>
                        <p>(85)9456-9799</p>
                        <p>(85)9564-9568</p>
                    </div>
                </div>
                <div className='flex-vertical contact-input'>
                    <h3>Como Podemos <br></br>te ajudar?</h3>
                    <strong>Email</strong>
                    <input className='input-over' name='email' type='text'></input>
                    <strong>Mensagem</strong>
                    <textarea className='input-over mesage' name='mesage' type='text'></textarea>
                    <div className='flex-horizontal button-contact'>
                        <button className='button-over'>Enviar</button>
                    </div>
                </div>
            </div>
        )
    }
}
