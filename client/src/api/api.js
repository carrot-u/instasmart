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

export function deleteQuestion(payload){
  return function(dispatch){
      utils.deleteRequest(`/questions/${payload.question.id}`, "", payload).then(() => {
        dispatch(actions.deleteQuestionSuccess(payload.question.id));
      });
  };
}

export function editQuestion(payload){
  return function(dispatch){
      utils.put(`/questions/${payload.id}/update`, "", payload).then((question) => {
        console.log("question gets returned?", question);
        dispatch(actions.editQuestionSuccess(question));
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






