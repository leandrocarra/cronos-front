export function modalFlow(isOpen){
  return {
    type: 'TOOGLE_MODAL',
    isOpen: !isOpen
  }
}