import { TOOGLE_MODAL } from './constants'

export function handleToggleModal(isOpen){
  return {
    type: TOOGLE_MODAL,
    isOpen: !isOpen
  }
}
