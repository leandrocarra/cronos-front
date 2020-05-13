import { TOGGLE_SANFONA } from './constants'

export function handleToggleSanfona(isOpen){
  return {
    type: TOGGLE_SANFONA,
    isOpen: !isOpen
  }
}
