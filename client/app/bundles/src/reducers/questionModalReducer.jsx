import * as types from '../actions/actionTypes';
import { formatTagsForClient } from '../components/common/utils';

const initialState = {
  showQuestionModal: false,
  editQuestion: null,
};

let newTagsArray = "";

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
      return {
        showQuestionModal: action.showModal,
        editQuestion: {
          ...action.question,
          formattedTags: formatTagsForClient(action.question.tags)
        }
      };

    //****************** TAG ACTIONS ****************************//
    case types.DELETE_TAG:  
        if(!state.editQuestion.tags){
          return state;
        }
        newTagsArray = Object.assign([], state.editQuestion.tags);
        newTagsArray.splice(action.removeTagIndex, 1);
        return {
          editQuestion: {
            ...state.editQuestion,
            tags: newTagsArray,
            formattedTags: formatTagsForClient(newTagsArray),
          },
          showQuestionModal: state.showQuestionModal,
        };
    case types.ADD_TAG:  
         newTagsArray = state.editQuestion ? Object.assign([], state.editQuestion.tags) : [];
         newTagsArray.push({
          name: action.addTag
         });
        return {
          editQuestion: {
            ...state.editQuestion,
           tags: newTagsArray,
           newQuestion: !state.editQuestion, 
           formattedTags: formatTagsForClient(newTagsArray),
          },
          showQuestionModal: state.showQuestionModal,
        };
    case types.SWAP_TAGS:
        let tag_list = Object.assign([], state.editQuestion.tags);
        let tempTag = tag_list.splice(action.currPos, 1);
        tag_list.splice(action.newPos, 0, tempTag[0]);
        return {
          editQuestion: {
            ...state.editQuestion,
            tags: tag_list,
            formattedTags: formatTagsForClient(tag_list)
          },
          showQuestionModal: state.showQuestionModal,
        };


    default:
      return state;

  }
}