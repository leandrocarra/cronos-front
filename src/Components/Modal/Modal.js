import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actionsModal } from '../../modules/modal';
import { actionsSanfona } from '../../modules/sanfona';

import { bindActionCreators } from 'redux';

import * as style from './ModalStyle';

import closeIcon from '../../icons/close.svg';
import addIcon from '../../icons/add.svg';
//import editIcon from '../../icons/edit.svg';
import deleteIcon from '../../icons/delete.svg';
import userIcon from '../../icons/user.svg';

import NewClock from '../NewClock/NewClock';
import DeleteClock from '../DeleteClock/DeleteClock';

const menus = [
  {
    title: 'Novo relogio',
    icon: addIcon,
    component: <NewClock />
  },
  // {
  //   title: 'Configurações',
  //   icon: editIcon,
  //   component: <EditClock />
  // },
  {
    title: 'Deletar',
    icon: deleteIcon,
    component: <DeleteClock />
  },
  // {
  //   title: 'Inserir tempo',
  //   icon: editIcon
  // },
  {
    title: 'Login/Logoff',
    icon: userIcon
  },
]

const MenuList = ({
  id,
  icon,
  selected,
  title,
  handleClick,
  component
}) => {
  return (
    <li key={id} onClick={() => handleClick(id)}>
      <img src={icon} alt="icon"/>
      <h2>{title}</h2>
      { selected && component }
    </li>
  )
}

const Modal = ({ 
  toggleModal,
  handleToggleModal,
}) => {
  const [selected, setSelected] = useState(null);
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
          {menus.map((menu, index) => (
            <MenuList
              key={index}
              id={index}
              icon={menu.icon}
              title={menu.title}
              selected={selected === index}
              handleClick={setSelected}
              component={menu.component}
            />
          ))}
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
