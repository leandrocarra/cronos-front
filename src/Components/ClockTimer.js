import React, { Component } from 'react';

import { Circle } from './ClockTimerStyle';
import play from '../icons/play.svg';
import stop from '../icons/stop.svg';
import pause from '../icons/pause.svg';

class ClockTimer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      finalTime : 1500,
      countTime : 0,
      countSeconds : 0,
      countMinuts : 0,
      progress : 0
    };

    this.onPlay = this.onPlay.bind(this);

  }
  
  onPlay() {
    let stopTime = setInterval(() => {

      //checa se acabou o tempo do pomodoro e para o interval
      if( this.state.ountTime === this.state.finalTime ){
        clearInterval(stopTime);
      }
      // a cada 1000 gera 1 segundo
      this.setState({
        countTime: this.state.countTime + 1
      })
      
      // checa se o contador de segundos chegou a 60 segundos e adiciona 1 minuto
      if( this.state.countSeconds === 3) {
        this.setState({
          countSeconds: 0,
          countMinuts: this.state.countMinuts + 60
        })
      }

      // contador de segundos para controle dos minutos
      this.setState({
        countSeconds: this.state.countSeconds + 1
      })

      // adiciona 1 ao estilo de progresso do timer( borda preta )
      this.setState({
        progress: this.state.countMinuts / 60
      })
      // console.log(this.state.countSeconds)
    }, 1000)
  }

  render() { 
    // Inicializa redondinho
    const radius= 72;
    const normalizedRadius= radius -3;
    const stroke= 6;
    const circumference= normalizedRadius * 2 * Math.PI;
    // Faz o preenchimento
    const strokeDashoffset= circumference - this.state.progress / 100 * circumference

    return (
      <Circle>
        <div className="circle-rating cirle-rating__simple">
          <div className="circle-rating__container">
            <div className="circle-rating__background circle__clock"></div>
            <div className="circle__clock">
              <span className="circle-rating__magical-number">18</span>
              <strong className="FocusTitle">FOCO</strong>
              <p className="minutsLeft">min</p>
              <div className="containerButtons">
                <img src={play} alt="play" className="play" onClick={this.onPlay}/>
                <img src={pause} alt="pause" className="pause" />
                <img src={stop} alt="stop" className="stop" />
              </div>

              <div className="containerTotalHours">
                <p className="investmentTitle">INVESTIDOS</p>
                <span className="containerHours">
                  <span className="hourTime">3h</span>
                  <span className="minutsTime">45m</span>
                </span>
              </div>

              <svg
                height={radius * 2}
                width={radius * 2}
              >
                <circle
                  fill='transparent'
                  strokeWidth={stroke}
                  strokeDasharray={circumference + ' ' + circumference}
                  style={{ strokeDashoffset }}
                  r={normalizedRadius}
                  cx={radius}
                  cy={radius}
                />
              </svg>
            </div>
          </div>
        </div>
      </Circle>
    );
  };
}

export default ClockTimer;