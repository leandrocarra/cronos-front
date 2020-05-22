import { TOGGLE_SANFONA, TOGGLE_SUCCESS } from './constants'

const INITIAL_STATE = {
  toggleSanfona: false,
  toggleSuccess: false,
}

export default function sanfona(state = INITIAL_STATE, action) {

  switch(action.type) {
    case TOGGLE_SANFONA:
      return {
        ...state, 
        toggleSanfona: action.isOpen
    }
    case TOGGLE_SUCCESS:
      return { 
        ...state, 
        toggleSuccess: action.isOpen
    }
    default:
      return state;
  }
}