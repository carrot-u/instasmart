import * as types from '../actions/actionTypes';

const initialState = {
  showQuestionModal: false,
  editQuestion: null,
};


export default function questionsReducer(state = initialState, action){
  switch(action.type){
    case types.SHOW_MODAL_SUCCESS:
      return {
        showQuestionModal: true,
        editQuestion: null,
      };
    case types.TOGGLE_MODAL_SUCCESS:
      return {
        showQuestionModal: state.showNewQuestionModal,
        editQuestion: state.editQuestion,
      };
    case types.SELECT_EDIT_QUESTION:
      console.log("action.question", action.question);
      return {
        showQuestionModal: true,
        editQuestion: action.question,
      };

    default:
      return state;

  }
}