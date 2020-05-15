import { TOGGLE_SANFONA, TOGGLE_SUCCESS } from './constants'

export function handleToggleSanfona(isOpen){
  return {
    type: TOGGLE_SANFONA,
    isOpen: !isOpen
  }
}

export function handleToggleSuccess(isOpen){
  return {
    type: TOGGLE_SUCCESS,
    isOpen: !isOpen
  }
}

