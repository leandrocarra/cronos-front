/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actionsApi } from '../modules/api';
import { bindActionCreators } from 'redux';

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

  componentDidMount(){
    this.props.getData()
  }
  
  render() { 
    return (
      <StyledWrapper>
        <Header />
        <StyledWrapper__main onClick={this.getClocks}>
          {this.props.data.map(clock => 
            <span key={clock._id}>
              <Box
                description={clock.description}
                investedTime={clock.investedTime}
              />
            </span>
          )}
        </StyledWrapper__main>
      </StyledWrapper>
    );
  }
}

const mapStateToProps = state => ({
  data: state.api.data
})

const mapDispatchToProps = dispatch => (
  bindActionCreators(actionsApi ,dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(App);
