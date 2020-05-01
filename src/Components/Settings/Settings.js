import React from 'react';
import { connect } from 'react-redux';

import * as modalActions from '../../Store/actions/modal';
import { bindActionCreators } from 'redux';

import Modal from '../Modal/Modal';
import styled from 'styled-components';
import settingsIcon from '../../icons/settings.svg';

const StyledSettings = styled.div`
  padding-top: 16px;
  width: 20px;
  height: 50px;
  box-sizing: border-box;
  margin-left: 30%;
`

const Settings = ({ toggleModal, handleToggleModal }) => {
  return (
    <>
      <StyledSettings>
        <img 
          src={settingsIcon} 
          alt="settings" 
          onClick={() => handleToggleModal(toggleModal)}
        />
      </StyledSettings>
      { toggleModal && <Modal /> }
    </>
  )
}

const mapStateToProps = state => ({
  toggleModal: state.modal.toggleModal
});

const mapDispatchToProps = dispatch => bindActionCreators( modalActions, dispatch )


export default connect(mapStateToProps, mapDispatchToProps)(Settings);