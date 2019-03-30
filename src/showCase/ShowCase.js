import React, { Component } from 'react';
import './showCase.css';
import ShowBox from './showcase-box/ShowBox';
import OwlCarousel from 'react-owl-carousel2';

export default class ShowCase extends Component {

    render() {
        const options = {
            items: 4,
            nav: true,
            rewind: false,
            autoplay: false
        };

        const events = {
            onDragged: function (event) { },
            onChanged: function (event) { }
        };
        return (
            <div>
                <OwlCarousel options={options} events={events} >
                    <div style={{ background: 'yellow', width: '100px', height: '100px' }}></div>
                    <div style={{ background: 'yellow', width: '100px', height: '100px' }}></div>
                    <div style={{ background: 'yellow', width: '100px', height: '100px' }}></div>
                    <div style={{ background: 'yellow', width: '100px', height: '100px' }}></div>
                    <div style={{ background: 'yellow', width: '100px', height: '100px' }}></div>
                </OwlCarousel>
            </div>

        )

    }

}
