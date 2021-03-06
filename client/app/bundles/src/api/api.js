import * as utils from './apiUtils';
import * as questionActions from '../actions/questionActions';
import * as userActions from '../actions/userActions';
import * as searchActions from '../actions/searchActions';


/************** GET ACTIONS *****************************/
export function getQuestions(offset = 0, limit = 10){
  console.log("get questions", offset, limit);
  return function(dispatch){
    return utils.post('questions/pagination', {offset: offset, limit: limit}).then(questions =>{
      dispatch(questionActions.loadQuestionsSuccess(questions, limit));
    }).catch(error => {
      throw(error);
    });
  };
}

export function getTaggedQuestions(tag){
  return function(dispatch){
    return utils.post('/questions/tagged', { tag: tag }).then(questions =>{
      console.log("tag", tag, "questions", questions);
      dispatch(questionActions.loadTaggedQuestionsSuccess(questions, questions.length));
    }).catch(error => {
      throw(error);
    });
  }
}

export function getQuestionsCount(){
  return function(dispatch){
    return utils.get('/questions/count').then(count =>{
      dispatch(questionActions.loadQuestionsCountSuccess(count));
    }).catch(error => {
      throw(error);
    });
  }
}

export function getQuestionById(id){
  return function(dispatch){
    return utils.get(`/questions/${id}`).then(question =>{
      dispatch(questionActions.loadQuestionByIdSuccess(question));
    }).catch(error => {
      throw(error);
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
      dispatch(userActions.loadUserByIdSuccess(user));
    }).catch(error => {
      throw(error);
    });
  };
}

export function getQuestionsBySearch(searchQuery){
  return function(dispatch){
    return utils.post('/questions/search', searchQuery).then(questions =>{
      dispatch(questionActions.loadQuestionsSuccess(questions));
    }).catch(error => {
      throw(error);
    });
  };
}

export function getSearchSuggestions(searchQuery, type){
  const params = { search: searchQuery }
  return function(dispatch){
    utils.post(`/${type}/suggestions`, params).then(results => {
      dispatch(searchActions.loadSearchSuggestionsSuccess(results, type));
    }).catch(error => {
      throw(error);
    })
  }
}


/************** POST & PUT ACTIONS *****************************/

export function postOnQuestion(questionId, payload, type){
  return function(dispatch){
      utils.post(`/questions/${questionId}/${type}`, payload).then(question => {
        dispatch(questionActions.createPostSuccess(question));
      });
  };
}

export function editQuestion(payload){
  return function(dispatch){
      utils.put(`/questions/${payload.id}/update`, "", payload).then((question) => {
        dispatch(questionActions.editQuestionSuccess(question));
      });
  };
}

export function editPostOnQuestion(postId, questionId, payload, type){
  return function(dispatch){
      utils.put(`/questions/${questionId}/${type}/${postId}`, "", payload).then(question => {
        dispatch(questionActions.editPostSuccess(question));
      });
  };
}

export function acceptAnswerOnQuestion(questionId, acceptedAnswer, previousAcceptedAnswer){
  return function(dispatch){
      utils.put(`/questions/${questionId}/answers/${acceptedAnswer.id}`, "", acceptedAnswer).then(question => {
        if(previousAcceptedAnswer){
          utils.put(`/questions/${questionId}/answers/${previousAcceptedAnswer.id}`, "", previousAcceptedAnswer).then(question => {
            dispatch(questionActions.editPostSuccess(question));
          });
        }else{
          dispatch(questionActions.editPostSuccess(question));
        }
      });
  };
}

export function editPostOnAnswer(postId, answerId, payload, type){
  return function(dispatch){
      utils.put(`/answers/${answerId}/${type}/${postId}`, "", payload).then(answer => {
        dispatch(questionActions.editPostOnAnswerSuccess(answer));
      });
  };
}

export function likeUnlikeQuestion(questionId, type){
  return function(dispatch){
      utils.put(`/questions/${questionId}/${type}`).then(question => {
        dispatch(questionActions.likeUnlikeQuestionSuccess(question));
      });
  };
}

export function likeUnlikeQuestionAnswer(answerId, questionId, type){
  return function(dispatch){
      utils.put(`/questions/${questionId}/answers/${answerId}/${type}`).then(question => {
        dispatch(questionActions.likeUnlikeQuestionSuccess(question));
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

export function newQuestion(payload){
  return function(dispatch){
      utils.post(`/questions`, payload).then(question => {
        dispatch(questionActions.createQuestionSuccess(question));
      });
  };
}


/************** DELETE ACTIONS *****************************/

export function deletePostOnQuestion(postId, questionId, type){
  return function(dispatch){
      utils.deleteRequest(`/questions/${questionId}/${type}/${postId}`).then(() => {
        dispatch(questionActions.deletePostSuccess(postId, questionId, type));
      });
  };
}

export function deletePostOnAnswer(postId, answerId, type){
  return function(dispatch){
      utils.deleteRequest(`/answers/${answerId}/${type}/${postId}`).then(() => {
        dispatch(questionActions.deleteAnswerPostSuccess(postId, answerId, type));
      });
  };
}

export function deleteQuestion(payload){
  return function(dispatch){
      utils.deleteRequest(`/questions/${payload.question.id}`, "", payload).then(() => {
        dispatch(questionActions.deleteQuestionSuccess(payload.question.id));
      });
  };
}










