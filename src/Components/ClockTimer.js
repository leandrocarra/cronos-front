import React from 'react';

import styled from 'styled-components';
import play from '../icons/play.svg';
import stop from '../icons/stop.svg';
import pause from '../icons/pause.svg';

const Circle = styled.div`

  .circle-rating {
    float: left;
    position: relative;
  }

  .circle-rating__container {
    position: relative;
    border: 1px solid #000;
    border-radius: 50%;
    box-shadow: 2px 3px 5px 0px rgba(0,0,0,0.75);
  }

  .circle-rating__magical-number {
    position: absolute;
    color: rgb(103,42,58);
    font-weight: 300;
    font-size: 20px;
    left: 50%;
    top: 33px;
    margin-left: -26px;
  }


  .circle__clock {
    position: absolute;
    top: 0px;
    .FocusTitle {
      position: absolute;
      /* color: rgba(0,0,0,0.38); */
      font-weight: 300;
      left: 51px;
      top: 16px;
      font-size: 17px;
      color: rgb(103,42,58)
    }
    .minutsLeft{
      position: absolute;
      color: rgb(103,42,58);
      font-weight: 300;
      font-size: 12px;
      left: 72px;
      top: 39px;
      color: rgb(103,42,58)
    }
  }

  .circle-rating__description {
    text-transform: uppercase;
    font-size: 12px;
    width: 120px;
    letter-spacing: .3px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 10px;
    float: left;
    color: rgb(103,42,58)
  }

  .cirle-rating__simple {
    .circle-rating__description {
      color: rgba(0, 0, 0, 0.38);
    }
    svg{
      transform: rotate(270deg);
      circle {
        stroke: #000;
        opacity: 1;
      }
    }
  }

  .cirle-rating__featured {
    .circle-rating__description {
      color: rgba(0,0,0, .8);
    }
    svg{
      transform: rotate(270deg);
      circle {
        stroke: #000;
      }
    }
  }

  .circle-rating__background {
    background-color: rgba(236,237,232);
    box-shadow: inset 1px 0px 4px 2px rgba(0,0,0,0.75);
    width: 134px;
    height: 134px;
    border-radius: 50%;
    position: relative;
  }

  .circle-rating__background.circle__clock {
    border: 5px solid rgba(166,149,131, .7)
  }

  .containerButtons {
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    img {
      width: 20px;
      height: 20px;
      position: absolute;
    }
    .play {
      right: 15px;
    }
    .pause {
      left: 43%;
    }
    .stop {
      left: 15px;
    }
  }

  .containerTotalHours {
    position: absolute;
    top: 87px;
    text-align: center;
    width: 100%;
    .investmentTitle {
      font-size: 14px;
    }
    .containerHours {
      text-align: center;
      font-size: 14px;
      margin-top: 4px;
      display: block;
    }
  }

`

const ClockTimer = ({
  progressStatus,
  number
}) => {

  // A magica aqui acontece repetindo o dashed da borda num numero grande o suficiente
  // para parecer uma linha e com isso ditar o tamanho necessario

  // Controla a percentagem de preenchimento
  let progress = progressStatus;

  // converte valor da progress de 100 == 1.500.000 que equivalem a 25min
  // let numberToMileseconds = progressStatus * 15000;
  // let milesecondsToMinuts = numberToMileseconds / 60000;

  // Inicializa redondinho
  let radius = 72;
  let normalizedRadius = radius - 3;

  const stroke = 6;
  let circumference = normalizedRadius * 2 * Math.PI;

  // Faz o preenchimento
  const strokeDashoffset = circumference - progress / 100 * circumference;

  return (
    <Circle>
      <div className="circle-rating cirle-rating__simple">
        <div className="circle-rating__container">
          <div className="circle-rating__background circle__clock"></div>
          <div className="circle__clock">
            <span className="circle-rating__magical-number">{number}</span>
            <strong className="FocusTitle">FOCO</strong>
            <p className="minutsLeft">min</p>
            <div className="containerButtons">
              <img src={play} alt="play" className="play" />
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
                stroke-width={stroke}
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
}

export default ClockTimer;
