/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import Settings from '../Settings/Settings';

import Logo from '../../icons/logoTimer.svg';
import * as style from './HeaderStyle';

const Header = () => {
  return (
    <style.StyledWrapper__header>
      <style.StyledLogo>
        <img src={Logo} alt="logo"/>
      </style.StyledLogo>
      <style.StyledTitle>
        CRONOS TIMER
      </style.StyledTitle>
      <style.StyledSettings>
        <Settings/>
      </style.StyledSettings>
    </style.StyledWrapper__header>
  );
}

export default Header;
