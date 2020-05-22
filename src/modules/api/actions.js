import axios from 'axios';
import { handleToggleModal } from '../modal/actions';
import { handleToggleSuccess } from '../sanfona/actions';
import { GET_DATA, POST_DATA } from './constants';

const URL = 'http://localhost:7777';

export function getData(){
  const request = axios.get(URL)
  return {
    type: GET_DATA,
    payload: request
  }
}

export function postData(clocks){
  return dispatch => {
    axios.post(URL,{...clocks})
    .then(request => dispatch({type: POST_DATA, payload: request.data}))
    .then(() => dispatch(handleToggleSuccess(false)))
    .then(() => dispatch(handleToggleModal(true)))
  }
}

export function deleteData(id){
  return dispatch => {
    axios.delete(`${URL}/stores/${id}`)
    .then(() => dispatch(getData()))
    .then(() => dispatch(handleToggleModal(true)))
  }
}
