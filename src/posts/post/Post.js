import React, { Component } from 'react';
import './post.css';
export default class Post extends Component {
    render() {
        return (
            <div className='post ' >
                <div className='post-image vertical-flex'></div>
                <h3 className='post-title'>meu chapa</h3>
                <h4 className='post-text'>hakunamatata é lindo dizer,é aprender, hakunamatata</h4>
            </div>
        )
    }
}
