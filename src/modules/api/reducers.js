import { GET_DATA, POST_DATA } from './constants'

const INITIAL_STATE = {
  data: []
}

export default function api (state = INITIAL_STATE, action){
  switch(action.type) {
    case GET_DATA:
      return { 
        ...state, 
        data: action.payload.data
      }
      case POST_DATA:
      return { 
        ...state, 
        data: action.payload
      }
    default:
      return state;
  }
}