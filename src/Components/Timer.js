import React from 'react';

import styled from 'styled-components';

export const ClockTimer = ({
  progressStatus,
  specialClass,
  position,
  number
}) => {

  // A magica aqui acontece repetindo o dashed da borda num numero grande o suficiente
  // para parecer uma linha e com isso ditar o tamanho necessario

  // Controla a percentagem de preenchimento
  let progress = progressStatus;

  // converte valor da progress de 100 == 1.500.000 que equivalem a 25min
  let numberToMileseconds = progressStatus * 15000;
  let milesecondsToMinuts = numberToMileseconds / 60000;

  // Inicializa redondinho
  let radius = 36;
  let normalizedRadius = radius - 3;

  const stroke = 4;
  let circumference = normalizedRadius * 2 * Math.PI;

  // Faz o preenchimento
  const strokeDashoffset = circumference - progress / 100 * circumference;

  // if (window.innerWidth <= 500) {
  //   normalizedRadius = 33;
  //   radius = 36;
  // }


  return (
    <div className={`circle-rating ${specialClass}`}>
      <div className="circle-rating__container">
        <div className={`circle-rating__background ${position}`}></div>
        <div className={`${position}`}>
          <span className="circle-rating__magical-number">{number}</span>
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
  );
}


const Circle = styled.div`
  position: absolute;
  top: -26px;
  right: 0px;

  .circle-rating {
    float: left;
    width: 120px;
    margin-right: 6%;
    position: relative;
  }

  .circle-rating__container {
    position: relative;
    top: 25px;
  }

  .circle-rating__magical-number {
    font-size: 38px;
    position: absolute;
    left: 33px;
    top: 40px;
    color: rgba(0, 0, 0, 0.38);
    font-weight: 300;
  }


  .circle__clock {
    position: absolute;
    top: 0;
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
    opacity: .5;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    position: relative;
  }

  .circle-rating__background.circle__clock {
    border: 5px solid rgba(0,0,0, .5);
  }


  @media screen and (max-width: 500px) {
    .circle-rating {
      width: 80px;
    }
    .circle-rating__description {
      width: 73px;
    }
    .circle-rating__background {
      width: 62px;
      height: 62px;
    }
    .circle-rating__magical-number {
      font-size: 24px;
      left: 20px;
      top: 24px;
    }
    .circle__container{
      svg {
        width: 72px;
        height: 72px;
        circle {
          r: 33;
          cx: 37;
          cy: 36;
        }
      }
      .circle-rating__background.circle__clock {
        border: 5px solid #888;
        opacity: 1;
      }
      .circle__clock{
        circle {
          stroke: #000;
          stroke-dashoffset: -162 !important;
          opacity: 1;
        }
      }
    }
  }
`

const Timer = () => {
  return (
    <>
      <Circle>
        <ClockTimer
          progressStatus={23}
          specialClass={'cirle-rating__simple'}
          position={'circle__clock'}
          number={'4.5'}
        />
      </Circle>
    </>
  );
}

export default Timer;



