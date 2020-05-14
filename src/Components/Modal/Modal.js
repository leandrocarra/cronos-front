import React from 'react';
import { connect } from 'react-redux';
import { actionsModal } from '../../modules/modal';
import { actionsSanfona } from '../../modules/sanfona';

import { bindActionCreators } from 'redux';

import * as style from './ModalStyle';

import closeIcon from '../../icons/close.svg';
import addIcon from '../../icons/add.svg';
import editIcon from '../../icons/edit.svg';
import deleteIcon from '../../icons/delete.svg';
import userIcon from '../../icons/user.svg';
import NewClock from '../NewClock/NewClock';

const Modal = ({ 
  toggleModal,
  toggleSanfona,
  handleToggleModal,
  handleToggleSanfona,
}) => {
  return (
    <style.StyledModal>
      <style.StyledModal__content>
        <style.StyledModal__header>
          Menu
        </style.StyledModal__header>
        <style.StyledModal__close onClick={() => handleToggleModal(toggleModal)}>
          <img src={closeIcon} alt="icon"/>
        </style.StyledModal__close>
        <ul>
          <li>
            <img src={addIcon} alt="icon"/>
            <h2 onClick={() => handleToggleSanfona(toggleSanfona)}>Add New one</h2>
            { toggleSanfona && <NewClock /> }
          </li>
          <li>
            <img src={editIcon} alt="icon"/>
            <h2>Config Time</h2>
          </li>
          <li>
            <img src={deleteIcon} alt="icon"/>
            <h2>Delete one</h2>
          </li>
          <li>
            <img src={editIcon} alt="icon"/>
            <h2>Insert Time</h2>
          </li>
          <li>
            <img src={userIcon} alt="icon"/>
            <h2>Logoff/Login</h2>
          </li>
        </ul>
      </style.StyledModal__content>
    </style.StyledModal>
  );
}

const mapStateToProps = state => ({
  toggleModal: state.modal.toggleModal,
  toggleSanfona: state.sanfona.toggleSanfona,
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    ...actionsModal,
    ...actionsSanfona,
   },dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
