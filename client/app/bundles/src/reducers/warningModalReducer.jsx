import * as types from '../actions/actionTypes';

const state = {
  showModal: false,
  proceedAction: null,
  proceedArguments: null,
  modalText: "",
  modalHeader: "",
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

    case types.SET_WARNING_ACTION:
      return {
        showModal: true,
        proceedAction: action.proceedAction,
        proceedArguments: action.actionArguments,
      }

    case types.SET_TEXT_ACTION:
      return {
        ...state,
        modalText: action.body,
        modalHeader: action.header,
      }

    case types.WARNING_CANCEL_SUCCESS:
     return {
       showModal: false,
       proceedArguments: null,
       proceedAction: null,
       modalText: "",
       modalHeader: "",
     }     


    case types.WARNING_PROCEED_SUCCESS:
      console.log("...state.proceedArguments", state.proceedArguments)
      if(state.proceedArguments){
        state.proceedAction(state.proceedArguments);
      }else{
        state.proceedAction();
      }
      return {
        showModal: false,
        proceedArguments: null,
        proceedAction: null,
        modalText: "",
        modalHeader: "",
      }

    default:
      return state;
  }
}