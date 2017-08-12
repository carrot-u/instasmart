import * as types from './actionTypes';
import * as api from '../api/api';

export function showModal(){
  return { type: types.SHOW_MODAL_SUCCESS};
}

export function toggleModal(){
  return { type: types.TOGGLE_MODAL_SUCCESS};
}