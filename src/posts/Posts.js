import React, { Component } from 'react';
import './posts.css';
import Post from './post/Post';

export default class Posts extends Component {
    render() {
        return (
            <div>
                <h2 className='horizontal-flex justify-center posts-h2'>Últimas Postagens</h2>
                <div className='posts flex justify-center' >
                    <Post></Post>
                    <Post></Post>
                    <Post></Post>
                </div>
            </div>
        )
    }
}
