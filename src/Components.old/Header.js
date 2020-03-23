/* eslint-disable react/jsx-pascal-case */
import React from 'react';

import styled from 'styled-components';

import Logo from '../icons/logoTimer.svg'

const StyledWrapper__header = styled.header`
  background-color: #4585F5;
  height: 50px;
  box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.5);
  margin-bottom: 15px;
`

const StyledLogo = styled.div`
  float: left;
  margin: 10px 10px 0 10px;
  width: 30px;
  height: 30px;
`

const StyledTitle = styled.span`
  float: left;
  color: #FFFFFF;
  font-size: 16px;
  margin-top: 20px;
`

const Header = () => {
  return (
    <StyledWrapper__header>
      <StyledLogo>
        <img src={Logo} alt="logo"/>
      </StyledLogo>
      <StyledTitle>
        CRONOS TIMER
      </StyledTitle>
    </StyledWrapper__header>
  );
}

export default Header;
