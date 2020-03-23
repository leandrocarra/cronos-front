/* eslint-disable react/jsx-pascal-case */
import React from 'react';

import Timer from './Timer';

import styled from 'styled-components';

const StyledBox = styled.div`
  /* background-color: rgba(166,149,131, .9);
  border: 1px solid #000;
  box-shadow: inset 1px 1px 2px 0px rgba(0,0,0,0.75); */
  float: left;
  width: 140px;
  margin: 3% 0 3% 7%;
  height: 180px;
  position: relative;
`

const ContainerTitle = styled.div`
  background-color: rgba(166,149,131, .9);
  border: 1px solid #000;
  box-shadow: inset 1px 1px 2px 0px rgba(0,0,0,0.75);
  border-radius: 5px;
  color: #000;
  width: 40%;
  height: 20px;
  /* border: 1px solid red; */
  position: absolute;
  left: 45px;
  padding: 2px;
  box-sizing: border-box;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const Conector = styled.div`
  width: 17px;
  height: 17px;
  background-color: rgba(166,149,131, .9);
  border: 1px solid #000;
  box-shadow: inset 1px 1px 2px 0px rgba(0,0,0,0.75);
  position: absolute;
  left: 64px;
  z-index: 1;
  top: 19px;
  border-top: 0;
`

const ClickTimerButton__right = styled.div`
  width: 17px;
  height: 10px;
  background-color: rgba(166,149,131, .9);
  border: 1px solid #000;
  box-shadow: inset 1px 1px 2px 0px rgba(0,0,0,0.75);
  position: absolute;
  left: 105px;
  z-index: 1;
  top: 37px;
  transform: rotate(30deg);
`

const ClickTimerButton__left = styled(ClickTimerButton__right)`
  left: 105px;
  z-index: 1;
  top: 39px;
  transform: rotate(-34deg);
  left: 20px;
`

const Box = () => {
  return (
    <StyledBox>
      <ContainerTitle>
        REACT 
      </ContainerTitle>
      <Conector />
      <ClickTimerButton__left />
      <ClickTimerButton__right />
      <Timer />
    </StyledBox>
  );
}

export default Box;
