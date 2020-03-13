/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import './reset.css';

import styled from 'styled-components';

import Header from '../Components/Header';
import Box from '../Components/Box';

const StyledWrapper = styled.div`
  max-width: 380px;
  overflow: hidden;
  margin: 0 auto;
`

const StyledWrapper__main = styled.section`
  max-width: 380px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 8px;
  overflow: hidden;
  min-height: 100vh;
`;

function App() {
  return (
    <StyledWrapper>
      <Header />
      <StyledWrapper__main>
        <Box />
        <Box />
      </StyledWrapper__main>
    </StyledWrapper>
  );
}

export default App;
