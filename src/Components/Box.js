/* eslint-disable react/jsx-pascal-case */
import React from 'react';

import Timer from './Timer';

import styled from 'styled-components';
import bgReact from '../images/react.png';

const StyledWrapper__box = styled.section`
  position: relative;
  background-color: rgb(242,244,244);
  box-sizing: border-box;
  padding: 4px;
  border-radius: 4px;
  border: 3px solid rgb(28,37,140);
  box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.5);
  min-height: 85px;
  width: 100%;
  margin-bottom: 10px;
  .react {
    background: url(${bgReact}) top center no-repeat;
    background-size: contain;
  }
`;

const StyledImageBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  opacity: .3;
  width: 100%;
  z-index: 1;
  height: 80px;
`

const StyledContent = styled.div`
  position: relative;
  z-index: 2;
  color: #404040;
  font-size: 16px;
`

const StyledTitle = styled.div`
  width: 30%;
  height: 60px;
  background-color: rgb(242,190,49);
  color: #404040;
  text-align: center;
  position: relative;
  top: -4px;
  padding-top: 8px;
  box-sizing: border-box;
  border-radius: 0 0 5px 5px;
  box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.5);
  left: 15px;
  font-family: 'Fjalla One', sans-serif;
  font-size: 20px;
  text-transform: uppercase;
`

const Box = () => {
  return (
    <StyledWrapper__box>
      <StyledImageBackground className="react"/>
      <StyledContent>
        <StyledTitle>
          react
        </StyledTitle>
        <Timer/>
      </StyledContent>
    </StyledWrapper__box>
  );
}

export default Box;
