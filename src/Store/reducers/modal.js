const INITIAL_STATE = {
  toggleModal: false
}

export default function modal(state = INITIAL_STATE, action) {
  if(action.type === 'TOOGLE_MODAL'){
    return { 
      ...state, 
      toggleModal: action.isOpen}
  }
  return state;
}