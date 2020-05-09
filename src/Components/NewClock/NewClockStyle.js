import styled from 'styled-components';

export const StyledNewClock__container = styled.div`
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

export const StyledNewClock__button = styled.button`
  width: 60%;
  padding: 10px;
  border-radius: 5px;
  float: right;
  margin-right: 15px;
  background-color: #4585F5;
  color: #fff;
  border: 0 none;
  outline: 0 none;
`

export const StyledNewClock__success = styled.div`
  color: #37b537;
  font-size: 20px;
  position: relative;
  font-weight: bold;
  top: 10px;
`