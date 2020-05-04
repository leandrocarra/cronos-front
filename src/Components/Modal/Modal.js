import React from 'react';
import { connect } from 'react-redux';
import * as modalActions from '../../Store/actions/modal';
import { bindActionCreators } from 'redux';
import axios from 'axios';

import * as style from './ModalStyle';
import addIcon from '../../icons/add.svg';
import editIcon from '../../icons/edit.svg';
import deleteIcon from '../../icons/delete.svg';
import userIcon from '../../icons/user.svg';

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
          <li>
            <img src={addIcon} alt="icon"/>
            <h2>Add New one</h2>
            <style.StyledModal__container>
              <div>
                <input type="text" placeholder="titulo"/>
              </div>
              <div>
                <input type="text" placeholder="QTD de horas iniciais"/>
              </div>
              <style.StyledModal__button onClick={handleAdd}>
                ADICIONAR NOVO
              </style.StyledModal__button>
            </style.StyledModal__container>
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
  toggleModal: state.modal.toggleModal
})

const mapDispatchToProps = dispatch => (
  //handleToggleModal: (toggleModal) => dispatch(modalActions.handleToggleModal(toggleModal))
  bindActionCreators(modalActions, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
