import styled from 'styled-components';

export const StyledBox = styled.div`
  float: left;
  width: 140px;
  margin: 3% 0 3% 7%;
  height: 180px;
  position: relative;
`

export const ContainerTitle = styled.div`
  background-color: rgba(166,149,131, .9);
  border: 1px solid #000;
  box-shadow: inset 1px 1px 2px 0px rgba(0,0,0,0.75);
  border-radius: 5px;
  color: #000;
  width: 40%;
  height: 20px;
  position: absolute;
  left: 45px;
  padding: 2px;
  box-sizing: border-box;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const Conector = styled.div`
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

export const ClickTimerButton__right = styled.div`
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

export const ClickTimerButton__left = styled(ClickTimerButton__right)`
  left: 105px;
  z-index: 1;
  top: 39px;
  transform: rotate(-34deg);
  left: 20px;
`