import * as types from './actionTypes';
import * as api from '../api/api';

export function loadQuestionsSuccess(questions){
	console.log("loadQuestionsSuccess: ", questions);
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