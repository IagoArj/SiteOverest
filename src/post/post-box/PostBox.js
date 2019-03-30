import React, { Component } from 'react';
import './postBox.css';
export default class PostBox extends Component {
    render() {
        return (
            <div className='flex-vertical post-box'>
                <div className='post-img'></div>

                <div className='flex-vertical'>
                    <h3 className='post-box-h3'>bla blblalba balbal</h3>
                    <h4 className='post-box-h4'>odakoa aoaks,aidaja akdoaks aijsdoai ,aidaja akdoaks ai, iajaoaoaoad.</h4>
                </div>
            </div>
        )
    }
}