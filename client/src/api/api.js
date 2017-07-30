import * as utils from './apiUtils';

getQuestions(){
	utils.get('/questions').then(json=>{
		return json;
	});
}

// return question with answers and comments
getQuestionById(id){
	utils.get(`/questions/${id}`).then(json=>{
		return json;
	});
}

getCommentsByAnswerID(id){
	untils.get(`/answers/${id}/comments`).then(json=>{
		return json;
	});
}



