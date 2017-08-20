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
  return function(dispatch){
    return utils.get(`/questions/${id}`).then(question =>{
      dispatch(actions.loadQuestionByIdSuccess(question));
    }).catch(error => {
      throw(error);
    });
  };
}


export function postOnQuestion(questionId, payload, type){
  return function(dispatch){
      utils.post(`/questions/${questionId}/${type}`, payload).then(question => {
        dispatch(actions.createPostSuccess(question));
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
        dispatch(actions.editQuestionSuccess(question));
      });
  };
}

export function likeUnlikeQuestion(questionId, type){
  return function(dispatch){
      utils.put(`/questions/${questionId}/${type}`).then(question => {
        dispatch(actions.likeUnlikeQuestionSuccess(question));
      });
  };
}

export function likeUnlikeQuestionAnswer(answerId, questionId, type){
  return function(dispatch){
      utils.put(`/questions/${questionId}/answers/${answerId}/${type}`).then(question => {
        dispatch(actions.likeUnlikeQuestionSuccess(question));
      });
  };
}

export function commentOnAnswer(answerId, questionId, payload){
  return function(dispatch){
    utils.post(`/answers/${answerId}/comments`, payload).then(() => {
      dispatch(getQuestionById(questionId));
    });
  };
}

export function getCommentsByAnswerID(id){
  utils.get(`/answers/${id}/comments`).then(json=>{
    return json;
  });
}

export function getUserById(id){
  return function(dispatch){
    return utils.get(`/users/${id}`).then(user =>{
      dispatch(actions.loadUserByIdSuccess(user));
    }).catch(error => {
      throw(error);
    });
  };
}






