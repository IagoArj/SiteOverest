import React, { Component } from 'react';
import './post.css';
import PostBox from './post-box/PostBox';
export default class Post extends Component {
    render() {
        return (
            <div className='flex-vertical post'>
                <h2 className='post-h2'>Últimas Postagens</h2>
                <div className='flex-horizontal posts'>
                    <PostBox></PostBox>
                    <PostBox></PostBox>
                    <PostBox></PostBox>
                    <PostBox></PostBox>
                </div>
            </div>
        )
    }
}
