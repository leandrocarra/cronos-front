import React from 'react';
import { connect } from 'react-redux';
import * as modalActions from '../../Store/actions/modal';
import { bindActionCreators } from 'redux';
import axios from 'axios';

import * as style from './ModalStyle';
import settingsIcon from '../../icons/settings.svg';

const URL = 'http://localhost:7777/add';

const handleAdd = () => {
  console.log('adicionado');
  axios.post(URL, {description: 'testeste'}).then(resp => console.log('funfo'));
}

const Modal = ({ toggleModal, handleToggleModal }) => {
  return (
    <style.StyledModal>
      <style.StyledModal__content>
        <style.StyledModal__header>
          Menu
        </style.StyledModal__header>
        <style.StyledModal__close onClick={() => handleToggleModal(toggleModal)}>X</style.StyledModal__close>
        <ul>
          <li onClick={handleAdd}>
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
  toggleModal: state.modal.toggleModal
})

const mapDispatchToProps = dispatch => (
  //handleToggleModal: (toggleModal) => dispatch(modalActions.handleToggleModal(toggleModal))
  bindActionCreators(modalActions, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
