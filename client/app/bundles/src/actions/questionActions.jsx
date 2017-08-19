import * as types from './actionTypes';
import * as api from '../api/api';

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

export function createPostSuccess(updatedQuestion){
  return { type: types.CREATE_POST_ON_QUESTION_SUCCESS, updatedQuestion };
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

export function deleteQuestionSuccess(questionId){
  return { type: types.DELETE_QUESTION_SUCCESS, questionId };
} 

export function deleteQuestion(payload){
  return dispatch => {
    dispatch(api.deleteQuestion(payload));
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
