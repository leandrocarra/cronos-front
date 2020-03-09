import React from 'react';

import styled from 'styled-components';

const StyledTimerMachine = styled.div`
  background-color: blue;
  width: 20%;
  border-radius: 50%;
  height: 100%;
  position: absolute;
  right: 5%;
  top: 3px;
`

const Timer = () => {
  return (
    <StyledTimerMachine>
      TIMER
    </StyledTimerMachine>
  );
}

export default Timer;
