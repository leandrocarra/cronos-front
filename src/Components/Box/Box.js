/* eslint-disable react/jsx-pascal-case */
import React from 'react';

import Timer from '../Timer/Timer';

import * as style from './BoxStyle';

const Box = ({ description, investedTime }) => {
  return (
    <style.StyledBox>
      <style.ContainerTitle>
        {description} 
      </style.ContainerTitle>
      <style.Conector />
      <style.ClickTimerButton__left />
      <style.ClickTimerButton__right />
      <Timer investedTime={investedTime}/>
    </style.StyledBox>
  );
}

export default Box;
