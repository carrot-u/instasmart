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

export function createAnswerSuccess(updatedQuestion){
  return { type: types.CREATE_ANSWER_SUCCESS, updatedQuestion };
} 


export function createAnswer(questionId, payload){
  return dispatch => {
    dispatch(api.answerQuestion(questionId, payload));
  };
}
