import * as types from '../actions/actionTypes';
import { formatTagsForClient } from '../components/common/utils';

const initialState = {
  showQuestionModal: false,
  editQuestion: null,
};

let newTagsArray = "";

export default function questionsReducer(state = initialState, action){
  console.log("questionsReducer(state = initialState, action) ", state, action);
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
        showQuestionModal: true,
        editQuestion: {
          ...action.question,
          formattedTags: formatTagsForClient(action.question.tags)
        }
      };
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
          showQuestionModal: true,
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
          showQuestionModal: true,
        };
    case types.SWAP_TAGS:
        let tagsFormatted = Object.assign([], state.editQuestion.formattedTags);
        // mutate array
        tagsFormatted.splice(action.currPos, 1);
        tagsFormatted.splice(action.newPos, 0, action.tag);
        let tag_list = Object.assign([], state.editQuestion.tag_list);
        // mutate array
        tag_list.splice(action.currPos, 1);
        tag_list.splice(action.newPos, 0, action.tag);
        return {
          editQuestion: {
            ...state.editQuestion,
            tags: tag_list,
            formattedTags: tagsFormatted
          },
          showQuestionModal: true,
        };


    default:
      return state;

  }
}