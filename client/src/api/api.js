import * as utils from './apiUtils';
import * as actions from '../actions/questionActions';

export function getQuestions(){
	return function(dispatch){
		return utils.get('/questions').then(questions =>{
			dispatch(actions.loadQuestionsSuccess(questions));
		}).catch(error => {
			throw(error);
		});
	};
}

// return question with answers and comments
export function getQuestionById(id){
	utils.get(`/questions/${id}`).then(json=>{
		return json;
	});
}

export function getCommentsByAnswerID(id){
	utils.get(`/answers/${id}/comments`).then(json=>{
		return json;
	});
}



