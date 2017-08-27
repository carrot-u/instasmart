import * as types from './actionTypes';
import * as api from '../api/api';

/**************** CREATE ACTIONS ***************************/
export function createPostSuccess(updatedQuestion){
  return { type: types.POST_ON_QUESTION_SUCCESS, updatedQuestion };
} 

export function createPostOnQuestion(questionId, payload, type){
  return dispatch => {
    dispatch(api.postOnQuestion(questionId, payload, type));
  };
}

export function createQuestionSuccess(newQuestion){
  return { type: types.CREATE_QUESTION_SUCCESS, newQuestion };
} 

export function createQuestion(payload){
  return dispatch => {
    dispatch(api.newQuestion(payload));
  };
}

export function commentOnAnswerSuccess(question){
  return { type: types.CREATE_ANSWER_COMMENT_SUCCESS, question };
}

export function createCommentOnAnswer(answerId, questionId, payload){
  return dispatch => {
    dispatch(api.commentOnAnswer(answerId, questionId, payload));
  };
}

/**************** UPDATE ACTIONS ***************************/
export function editPostSuccess(updatedQuestion){
  return { type: types.POST_ON_QUESTION_SUCCESS, updatedQuestion };
} 

export function editPostOnQuestion(questionId, postId, payload, type){
  return dispatch => {
    dispatch(api.editPostOnQuestion(questionId, postId, payload, type));
  };
}

export function acceptAnswerOnQuestion(questionId, acceptedAnswer, previousAcceptedAnswer){
  return dispatch => {
    dispatch(api.acceptAnswerOnQuestion(questionId, acceptedAnswer, previousAcceptedAnswer));
  };
}


export function editPostOnAnswerSuccess(updatedAnswer){
  return { type: types.EDIT_POST_ON_ANSWER_SUCCESS, updatedAnswer };
} 

export function editPostOnAnswer(postId, answerId, payload, type){
  return dispatch => {
    dispatch(api.editPostOnAnswer(postId, answerId, payload, type));
  };
}

export function editQuestionSuccess(question){
  return { type: types.EDIT_QUESTION_SUCCESS, question };
} 

export function editQuestion(payload){
  return dispatch => {
    dispatch(api.editQuestion(payload));
  };
}

export function selectEditQuestion(question){
  return { type: types.EDIT_QUESTION_SUCCESS, question };
} 

export function likeUnlikeQuestionSuccess(question){
  return { type: types.LIKE_UNLIKE_QUESTION_SUCCESS, question };
} 

export function likeUnlikeQuestion(questionId, type){
  return dispatch => {
    dispatch(api.likeUnlikeQuestion(questionId, type));
  };
}

export function likeUnlikeQuestionAnswer(answerId, questionId, type){
  return dispatch => {
    dispatch(api.likeUnlikeQuestionAnswer(answerId, questionId, type));
  };
}

/**************** DELETE ACTIONS ***************************/

export function deletePostSuccess(postId, questionId, postType){
    return { type: types.DELETE_POST_ON_QUESTION_SUCCESS, postId, questionId, postType };
  } 

export function deletePostOnQuestion(postId, questionId, type){
  return dispatch => {
    dispatch(api.deletePostOnQuestion(postId, questionId, type));
  };
}

export function deleteAnswerPostSuccess(postId, answerId, postType){
    return { type: types.DELETE_POST_ON_ANSWER_SUCCESS, postId, answerId, postType };
  } 

export function deletePostOnAnswer(postId, answerId, type){
  return dispatch => {
    dispatch(api.deletePostOnAnswer(postId, answerId, type));
  };
}

export function deleteQuestionSuccess(questionId){
  return { type: types.DELETE_QUESTION_SUCCESS, questionId };
} 

export function deleteQuestion(payload){
  return dispatch => {
    dispatch(api.deleteQuestion(payload));
  };
}

/**************** LOAD ACTIONS ***************************/

export function loadQuestionByIdSuccess(question){
  return { type: types.LOAD_QUESTIONS_BY_ID_SUCCESS, question};
}

export function loadQuestionByIdStart(){
  return { type: types.LOAD_QUESTIONS_BY_ID_START};
}

export function loadQuestionById(id){
  return dispatch => {
    dispatch(api.getQuestionById(id));
    dispatch(loadQuestionByIdStart());
  };
}

export function loadQuestionsSuccess(questions){
  return { type: types.LOAD_QUESTIONS_SUCCESS, questions};
}

export function loadQuestionsStart(){
  return { type: types.LOAD_QUESTIONS_START};
}

export function loadQuestions(){
  return dispatch => {
    dispatch(api.getQuestions());
    dispatch(loadQuestionsStart());
  };
}

export function sortQuestions(sortType){
  return { type: types.SORT_QUESTIONS_SUCCESS, sortType};
}

export function getSearchResults(searchQuery){
  return dispatch => {
    dispatch(api.getQuestionsBySearch(searchQuery));
    dispatch(loadQuestionsStart());
  };
}

