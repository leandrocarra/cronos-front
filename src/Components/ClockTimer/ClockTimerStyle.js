import styled from 'styled-components';

export const Circle = styled.div`

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
    z-index: 2;
    label {
      width: 20px;
      height: 20px;
      position: absolute;
      border-radius: 50%;
    }
    label {
     
    }
    input {
      border: 0 none;
      width: 0;
      height: 0;

      &:checked + label {
        background-color: rgba(166,149,131, .7);
        width: 20px;
        height: 20px;
      }
    }
    .playButton {
      right: 15px;
    }
    .pauseButton {
      left: 43%;
    }
    .stopButton {
      left: 15px;
    }
    .activeButton {
      background-color: #c4c4c4;
      border-radius: 50%;
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