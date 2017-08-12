import * as types from '../actions/actionTypes';

const initialState = {
  showQuestionModal: false,
  editQuestionId: null,
};


export default function questionsReducer(state = initialState, action){
  switch(action.type){
    case types.SHOW_MODAL_SUCCESS:
      return {
        showQuestionModal: true,
        editQuestionId: state.editQuestionId,
      };
    case types.TOGGLE_MODAL_SUCCESS:
      return {
        showQuestionModal: state.showNewQuestionModal,
        editQuestionId: state.editQuestionId,
      };

    default:
      return state;

  }
}