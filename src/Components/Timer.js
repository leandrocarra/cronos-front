import React from 'react';

import styled from 'styled-components';

import ClockTimer from './ClockTimer';

const Circle = styled.div`
  position: absolute;
  top: 35px;
  width: 100%;
  z-index: 2;
`

const Timer = () => {
  return (
    <Circle>
      <ClockTimer
        progressStatus={6}
        number={'18'}
      />
    </Circle>
  );
}

export default Timer;



