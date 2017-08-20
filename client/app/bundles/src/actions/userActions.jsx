import * as types from './actionTypes';
import * as api from '../api/api';

export function loadUserByIdStart(){
  return { type: types.LOAD_USER_BY_ID_START };

}

export function loadUserByIdSuccess(user){
  return { type: types.LOAD_USER_BY_ID_SUCCESS, user};
}

export function loadUserById(id){
  return dispatch => {
    dispatch(api.getUserById(id));
    dispatch(loadUserByIdStart());
  };
}
