import React, { Component } from 'react';
import './contactBox.css';
export default class ContactBox extends Component {
    render() {
        return (
            <div className='contact-box flex-horizontal'>
                <div className='flex-vertical contact-info'>

                    <div>
                        <div className='flex-horizontal'>
                            <i className="far fa-envelope"></i>
                            <p className="title with-icon">Email</p>
                        </div>
                        <p>contato@overest.com.br</p>
                    </div>                                      
                    

                    <div>
                        <div className='flex-horizontal'>
                            <i className="fab fa-whatsapp"></i>
                            <p className="title with-icon">Telefone</p>
                        </div>
                        <p>(85)9456-9799</p>
                        <p>(85)9564-9568</p>
                    </div>

                    <div>
                        <p className="title">Nossas Redes</p>                        
                        <div>
                            <i className="fab fa-whatsapp"></i>
                            <i className="fab fa-whatsapp"></i>
                        </div>
                    </div>                    
                    

                </div>
                <div className='flex-vertical contact-form'>
                    <h3>Como Podemos <br />te ajudar?</h3>

                    <input className='contact-input' placeholder="Email"
                    name='email' type='text'></input>
                    <textarea className='contact-input message'
                    placeholder="Mensagem"
                    name='message' type='text'></textarea>

                    <button className='button-contact'>Enviar</button>                                        
                </div>
            </div>
        )
    }
}
