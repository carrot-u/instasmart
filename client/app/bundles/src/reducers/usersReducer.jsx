import * as types from '../actions/actionTypes';

const state = {
  currentUser: null,
  showUser: null,
  allUsers: null,
  isLoading: false,
}

export default function usersReducer(state = {}, action){
  switch(action.type){
    case "@@redux/INIT":
      return {
        currentUser: Object.assign({}, state),
      };
    case types.LOAD_USER_BY_ID_START:
      return {
        ...state, 
        isLoading: true,
      };
    case types.LOAD_USER_BY_ID_SUCCESS:
      return {
        ...state,
        showUser: action.user,
        isLoading: false
      };

    default:
      return state;

  }
}