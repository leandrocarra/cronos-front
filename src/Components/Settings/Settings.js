import React from 'react';
import { connect } from 'react-redux';

import * as modalActions from '../../Store/actions/modal';

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

const Settings = ({ modal, modalFlow }) => {
  return (
    <>
      <StyledSettings>
        <img 
          src={settingsIcon} 
          alt="settings" 
          onClick={() => modalFlow(modal.toggleModal)}
        />
      </StyledSettings>
      { modal.toggleModal && <Modal /> }
    </>
  )
}

const mapStateToProps = state => ({
  modal: state.modal
});

const mapDispatchToProps = dispatch => ({
  modalFlow: (toggleModal) => dispatch(modalActions.modalFlow(toggleModal))
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);