/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import './reset.css';

import styled from 'styled-components';

import Header from '../Components/Header';
import Box from '../Components/Box';

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
    <>
      <Header />
      <StyledWrapper__main>
        <Box>
          <h1>cronos</h1>
        </Box>
      </StyledWrapper__main>
    </>
  );
}

export default App;
