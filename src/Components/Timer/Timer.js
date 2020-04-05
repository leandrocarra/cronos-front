import React from 'react';

import styled from 'styled-components';

import ClockTimer from '../ClockTimer/ClockTimer';

const Circle = styled.div`
  position: absolute;
  top: 35px;
  width: 100%;
  z-index: 2;
`

const Timer = () => {
  return (
    <Circle>
      <ClockTimer />
    </Circle>
  );
}

export default Timer;



