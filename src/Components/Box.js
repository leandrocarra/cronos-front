/* eslint-disable react/jsx-pascal-case */
import React from 'react';

import Timer from './Timer';

import styled from 'styled-components';
import Logo from '../icons/logoTimer.svg'


const sortColor = () => {
  const color = ['7D36A2', 'D93E5F', '5E36B1', '2788E5', '40897C'];
  return `#${color[4]}`;
}

const StyledWrapper__box = styled.section`
  position: relative;
  background-color: ${sortColor()};
  box-sizing: border-box;
  padding: 8x;
  border-radius: 4px;
  box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.5);
  min-height: 80px;
  width: 100%;
  margin-bottom: 10px;
`

const StyledTitle = styled.div`
  width: 40%;
  height: 77px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: rgb(242,190,49);
  color: #404040;
  text-align: center;
  position: relative;
  padding: 8px 4px 0 4px;
  box-sizing: border-box;
  border-radius: 0 0 5px 5px;
  box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.5);
  left: 10px;
  font-family: 'Fjalla One', sans-serif;
  font-size: 20px;
  text-transform: uppercase;
  float: left;
`

const StyledAllTime = styled.div`
  margin-top: 5px;
  span {
    font-size: 14px;
  }
  img {
    margin-left: -10%;
    width: 24px;
    height: 24px;
    position: relative;
    top: 5px;
  }
`

const Box = () => {
  return (
    <StyledWrapper__box>
      <StyledTitle>
        react
        <StyledAllTime>
          <img src={Logo} alt="logo"/> <span>3h:34m:33s</span>
        </StyledAllTime>
      </StyledTitle>
      <Timer/>
    </StyledWrapper__box>
  );
}

export default Box;
