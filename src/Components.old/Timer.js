import React from 'react';

import styled from 'styled-components';

import ClockTimer from './ClockTimer';

const Circle = styled.div`
  position: absolute;
  top: 0px;
  left: 45%;
`

const Timer = () => {
  return (
    <Circle>
      <ClockTimer
        progressStatus={23}
        number={'18'}
      />
    </Circle>
  );
}

export default Timer;



