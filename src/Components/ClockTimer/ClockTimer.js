import React, { Component } from 'react';

import { Circle } from './ClockTimerStyle';
import play from '../../icons/play.svg';
import stop from '../../icons/stop.svg';
import pause from '../../icons/pause.svg';

class ClockTimer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      finalTime : 8,
      countTime : 0,
      countSeconds : 0,
      countMinutes : 0,
      progress : 0,
      timerInterval: null,
      stopCheck: false
    };
    
    this.onPlay = this.onPlay.bind(this);
    this.onStopCounter = this.onStopCounter.bind(this);
    this.onStop = this.onStop.bind(this);
    this.minuteAdder = this.minuteAdder.bind(this);
    this.secondsAdder = this.secondsAdder.bind(this);
    this.timeControl = this.timeControl.bind(this);
    this.progressTimer = this.progressTimer.bind(this);
    this.onPause = this.onPause.bind(this);
  }

  // checa se o contador de segundos chegou a 60 segundos e adiciona 1 minuto
  minuteAdder(secondCounter) {
    if( secondCounter === 10 ) {
      this.setState({
        countSeconds: 0,
        countMinutes: this.state.countMinutes + 60
      })
    }
  }
  
  // a cada 1000 gera 1 segundo
  secondsAdder(seconds) {
    this.setState({
      countTime: seconds + 1
    })
  }

  // contador de segundos para controle do minuteAdder
  timeControl(timeControl) {
    this.setState({
      countSeconds: timeControl + 1
    })
  }
  
  // adiciona 1 ao estilo de progresso do timer( borda preta )
  progressTimer(progressBar) {
    this.setState({
      progress: progressBar / 60
    })
  }

  onPlay() {
    this.setState({
      stopCheck: false,
      timerInterval: setInterval(() => {
        this.onStopCounter(this.state.countTime)
        this.secondsAdder(this.state.countTime)        
        this.minuteAdder(this.state.countSeconds);
        this.timeControl(this.state.countSeconds);
        this.progressTimer(this.state.countMinutes)
        console.log(this.state.countSeconds, ' segundos')
      }, 300)
    })
  }

  // stopa, mas como os valores no state ainda existem e nao foram zerados ele, simula um pause
  onPause() {
    clearInterval(this.state.timerInterval);
    this.setState({
      stopCheck: false
    })
  }

  // Pausa tudo e restarta do zero
  onStop() {
    clearInterval(this.state.timerInterval);
    console.log('antesw', this.state.stopCheck)
    this.setState({
      countTime: 0,
      countSeconds: 0,
      countMinutes: 0,
      progress: 0,
      stopCheck: true
    })
    console.log('depois', this.state.stopCheck)
  }

  // Pausa assim que o contador atinge o limete
  onStopCounter(countTime) {
    if( countTime === this.state.finalTime ){
      clearInterval(this.state.timerInterval);
      this.onStop()
    }
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
              <span className="circle-rating__magical-number">{this.state.progress}</span>
              <strong className="FocusTitle">FOCO</strong>
              <p className="minutsLeft">min</p>
              <div className="containerButtons">
                <input id="play" type="radio" name="buttonsControll" className="playButton"/>
                <label htmlFor="play" onClick={this.onPlay} className="playButton">
                  <img src={play} alt="play"/>
                </label>
                <input id="pause" type="radio" name="buttonsControll" className="pauseButton"/>
                <label htmlFor="pause" onClick={this.onPause} className="pauseButton">
                  <img src={pause} alt="pause" />
                </label>
                <input
                  id="stop"
                  type="radio"
                  name="buttonsControll"
                  className="stopButton"
                  checked = {this.state.stopCheck ? "checked" : ''}
                />         
                <label htmlFor="stop" onClick={this.onStop} className="stopButton">
                  <img src={stop} alt="stop" />
                </label>  
              </div>
              <div className="containerTotalHours">
                <p className="investmentTitle">INVESTIDOS</p>
                <span className="containerHours">
                  <span>{this.props.investedTime}</span>
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