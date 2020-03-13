import React from 'react';

import styled from 'styled-components';

const Circle = styled.div`

  .circle-rating {
    float: left;
    width: 80px;
    position: relative;
  }

  .circle-rating__container {
    position: relative;
  }

  .circle-rating__magical-number {
    position: absolute;
    color: rgba(0, 0, 0, 0.38);
    font-weight: 300;
    font-size: 20px;
    left: 22px;
    top: 21px;
  }


  .circle__clock {
    position: absolute;
    top: 5px;
    p{
      position: absolute;
      color: rgba(0,0,0,0.38);
      font-weight: 300;
      font-size: 12px;
      left: 25px;
      top: 40px;
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
    background-color: #fff;
    opacity: .3;
    width: 62px;
    height: 62px;
    border-radius: 50%;
    position: relative;
  }

  .circle-rating__background.circle__clock {
    border: 5px solid rgba(0,0,0, .5);
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
  let radius = 36;
  let normalizedRadius = radius - 3;

  const stroke = 4;
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
            <p>min</p>
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
