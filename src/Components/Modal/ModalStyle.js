import styled from 'styled-components';

export const StyledModal = styled.section`
  background-color: rgba(0,0,0,.7);
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`

export const StyledModal__header = styled.div`
  background-color: #4585F5;
  height: 30px;
  width: 106%;
  box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.5);
  margin-bottom: 5px;
  margin-left: -8px;
  margin-top: -8px;
  box-sizing: border-box;
  padding: 8px;
  color: #fff;
`

export const StyledModal__close = styled.div`
  position: absolute;
  top: -11px;
  right: -7px;
  color: #fff;
  font-size: 25px;
`

export const StyledModal__content = styled.div`
  background-color: #fff;
  width: 80%;
  min-height: 80px;
  position: relative;
  left: 50%;
  margin-left: -40%;
  top: 30px;
  box-sizing: border-box;
  padding: 8px 8px 16px 8px;
  box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.5);
  li {
    clear: both;
    padding: 10px 0;
    overflow: hidden;
    
    img {
      float: left;
      width: 20px;
    }
    h2 {
      margin-left: 15px;
      float: left;
      padding-top: 4px;
      &:hover {
        background-color: #cbcbcb;
      }
    }
  }
`

export const StyledModal__container = styled.div`
  clear: both;
  padding-top: 10px;
  div {
    margin-left: 50px;
    margin-bottom: 15px;
  }
  input {
    padding: 10px 10px 5px 5px;
    border: 0 none;
    outline: 0 none;
    border-bottom: 1px solid #404040;
    color: #404040;
  }
`

export const StyledModal__button = styled.button`
  width: 60%;
  padding: 10px;
  border-radius: 5px;
  float: right;
  margin-right: 30px;
  background-color: #4585F5;
  color: #fff;
  border: 0 none;
  outline: 0 none;
`