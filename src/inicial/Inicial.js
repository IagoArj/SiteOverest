import React, { Component } from 'react'
import './inicial.css'
export default class Inicial extends Component {
  render() {
    return (
      <div className='inicial'>
        <div className='moon-box'>
          <img src={require('../assets/Moon.svg')} className='moon'></img>
          <img src={require('../assets/Cloud.svg')} className='cloud c1'></img>
          <img src={require('../assets/Cloud.svg')} className='cloud c2'></img>
          <div className='light l-1'></div>
          <div className='light l-2'></div>
          <div className='light l-3'></div>
        </div>
        <div className='orcamento-box'>
          <h1>Aplicativos, Sistemas e Soluções Digitais</h1>
          <h2>Para fazer você alcançar <br /> novas possibilidades</h2>
          <button className='btn-primary'>Faça um orçamento!</button>
        </div>
      </div>
    )
  }
}
