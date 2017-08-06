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

export function answerQuestion(questionId, payload){
  return function(dispatch){
      utils.post(`/questions/${questionId}/answers`, payload).then(question => {
        dispatch(actions.createAnswerSuccess(question));
      });
  };
}

export function newQuestion(payload){
  return function(dispatch){
      utils.post(`/questions`, payload).then(question => {
        dispatch(actions.createQuestionSuccess(question));
      });
  };
}

// return question with answers and comments
export function getQuestionById(id){
  utils.get(`/questions/${id}`).then(json=>{
    return json;
  }).catch(error => {
      throw(error);
  });
}

export function getCommentsByAnswerID(id){
  utils.get(`/answers/${id}/comments`).then(json=>{
    return json;
  });
}





