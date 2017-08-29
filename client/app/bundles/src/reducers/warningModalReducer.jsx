import * as types from '../actions/actionTypes';
import {HashHistory } from 'react-router-dom';

const state = {
  showModal: false,
  proceedActions: null,
  proceedArguments: null,
  modalText: "",
  modalHeader: "",
  redirectTo: null,
}

export default function warningModalReducer(state = {}, action){
  console.log("warningModalReducer : ", state, action);
  switch (action.type){
    case types.SHOW_WARNING_SUCCESS:
      return {
        ...state,
        showModal: true,
      }

    case types.TOGGLE_WARNING_MODAL_SUCCESS:
      return {
        ...state,
        showModal: !state.showModal,
      }

    case types.SET_WARNING_ACTIONS:
      return {
        showModal: true,
        proceedActions: action.proceedActions,
        proceedArguments: action.actionArguments,
        redirectTo: action.redirectTo,
      }

    case types.SET_TEXT_SUCCESS:
      return {
        ...state,
        modalText: action.body,
        modalHeader: action.header,
      }

    case types.WARNING_CANCEL_SUCCESS:
     return {
       showModal: false,
       proceedArguments: null,
       proceedActions: null,
       modalText: "",
       modalHeader: "",
       redirectTo: null,
     }     


    case types.WARNING_PROCEED_SUCCESS:
      console.log("...state.proceedArguments", state.proceedArguments)
      if(state.proceedArguments){
        if(state.proceedArguments instanceof Array){
          state.proceedActions(...state.proceedArguments);
        } else {
          state.proceedActions(state.proceedArguments);
        }
      } else {
        state.proceedActions();
      }
      if(state.redirectTo){
        window.location.href = state.redirectTo;
      }
      return {
        showModal: false,
        proceedArguments: null,
        proceedActions: null,
        modalText: "",
        modalHeader: "",
        redirectTo: null,
      }

    default:
      return state;
  }
}