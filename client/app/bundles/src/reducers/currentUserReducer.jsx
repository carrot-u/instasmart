import * as types from '../actions/actionTypes';



export default function currentUserReducer(state = {}, action){
  console.log("state:", state);
  console.log("action:", action);

  switch(action.type){
    case "@@redux/INIT":
      return {
        currentUser: Object.assign({}, state),
      };

    default:
      return state;

  }
}