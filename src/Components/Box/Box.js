/* eslint-disable react/jsx-pascal-case */
import React from 'react';

import Timer from '../Timer/Timer';

import * as style from './BoxStyle';


const Box = () => {
  return (
    <style.StyledBox>
      <style.ContainerTitle>
        REACT 
      </style.ContainerTitle>
      <style.Conector />
      <style.ClickTimerButton__left />
      <style.ClickTimerButton__right />
      <Timer />
    </style.StyledBox>
  );
}

export default Box;
