/* eslint-disable react/jsx-pascal-case */
import React from 'react';

import styled from 'styled-components';

const StyledWrapper__box = styled.section`
  background-color: red;
  box-sizing: border-box;
  padding: 4px;
  border-radius: 4px;
  border: 1px solid rgba(233,63,51, .5);
  box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.5);
  min-height: 85px;
  width: 100%;
`;

const Box = ({ children }) => {
  return (
    <StyledWrapper__box>
      {children}
    </StyledWrapper__box>
  );
}

export default Box;
