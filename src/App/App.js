/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../Store';
import { listClocks } from '../api/get';

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

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  componentDidMount(){
    listClocks()
      .then(data => {
        this.setState({items: data})
      })
      console.log(this.state.items);
  }
  
  render() { 
    const { items } = this.state;
    {console.log(this.state.items)}
    return (
      <Provider store={store}>
        <StyledWrapper>
          <Header />
          <StyledWrapper__main onClick={this.getClocks}>
            {items.map(item => 
              <span key={item._id}>
                <Box
                  description={item.description}
                  investedTime={item.investedTime}
                />
              </span>
            )}
          </StyledWrapper__main>
        </StyledWrapper>
      </Provider>
    );
  }
}
 
export default App;
