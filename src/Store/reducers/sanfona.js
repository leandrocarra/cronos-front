const INITIAL_STATE = {
  toggleSanfona: false
}

export default function sanfona(state = INITIAL_STATE, action) {
  
  if(action.type === 'TOGGLE_SANFONA'){
    return { 
      ...state, 
      toggleSanfona: action.isOpen}
  }
  return state;
}