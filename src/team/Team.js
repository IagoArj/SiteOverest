import React, { Component } from 'react';
import './team.css';

export default class Team extends Component {
    render() {
        return (
            <div className='flex-horizontal team-box'>
                <div className='red-box flex-horizontal'>
                    <h3 className='navizinha'>Saiba mais sobre <br></br> nossa equipe</h3>
                    <button className='btn-secondary' href='#team'>Conheça a Overest</button>
                </div>
                <img src={require('../assets/rosa.png')} className='rosa-dos-ventos'></img>
            </div>
        )
    }
}
