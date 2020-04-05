/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { Provider } from 'react-redux';
import store from '../Store';

import './reset.css';
import styled from 'styled-components';

import Header from '../Components/Header/Header';
import Box from '../Components/Box/Box';

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
    <Provider store={store}>
      <StyledWrapper>
        <Header />
        <StyledWrapper__main>
          <Box/>
          <Box/>
          <Box/>
        </StyledWrapper__main>
      </StyledWrapper>
    </Provider>
  );
}

export default App;
