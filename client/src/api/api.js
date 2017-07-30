import * as utils from './apiUtils';

export function getQuestions(){
	utils.get('/questions').then(json=>{
		return json;
	});
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



