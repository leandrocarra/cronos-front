import React from 'react';
import { connect } from 'react-redux';
import * as modalActions from '../../Store/actions/modal';

import * as style from './ModalStyle';
import settingsIcon from '../../icons/settings.svg';

const Modal = ({ modal, toggleModal }) => {
  return (
    <style.StyledModal>
      <style.StyledModal__content>
        <style.StyledModal__header>
          Menu
        </style.StyledModal__header>
        <style.StyledModal__close onClick={() => toggleModal(modal.toggleModal)}>
          X
        </style.StyledModal__close>
        <ul>
          <li>
            <img src={settingsIcon} alt="icon"/>
            <span>Add New one</span>
          </li>
          <li>
            <img src={settingsIcon} alt="icon"/>
            <span>Config Time</span>
          </li>
          <li>
            <img src={settingsIcon} alt="icon"/>
            <span>Delete one</span>
          </li>
          <li>
            <img src={settingsIcon} alt="icon"/>
            <span>Insert Time</span>
          </li>
          <li>
            <img src={settingsIcon} alt="icon"/>
            <span>Logoff/Login</span>
          </li>
        </ul>
      </style.StyledModal__content>
    </style.StyledModal>
  );
}

const mapStateToProps = state => ({
  modal: state.modal
})

const mapDispatchToProps = dispatch => ({
  toggleModal: (toggleModal) => dispatch(modalActions.modalFlow(toggleModal))
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
