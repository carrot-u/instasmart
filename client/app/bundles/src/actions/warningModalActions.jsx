import * as types from './actionTypes';

export function showWarning(){
  return { type: types.SHOW_WARNING_SUCCESS};
}

export function toggleWarningModal(){
  return { type: types.TOGGLE_WARNING_MODAL_SUCCESS};
}

export function warningModalProceed(){
  return { type: types.WARNING_PROCEED_SUCCESS};
}

export function warningModalCancel(){
  return { type: types.WARNING_CANCEL_SUCCESS};
}

export function setWarningText(body, header){
  return { type: types.SET_TEXT_SUCCESS, body, header};
}

export function warningModalSetProceedActions(proceedActions, actionArguments = "", redirectTo = false){
  return { type: types.SET_WARNING_ACTIONS, proceedActions, actionArguments, redirectTo }
}