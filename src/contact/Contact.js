import React, { Component } from 'react';
import './contact.css';
import ContactBox from './contact-box/ContactBox';
export default class Contact extends Component {
    render() {
        return (
            <div className='flex-horizontal contact-inside'>
                <ContactBox></ContactBox>
            </div>
        )
    }
}
