import * as types from '../actions/actionTypes';
import * as utils from '../components/common/utils';

const initialState = {
  questions: [],
  showQuestion: null,
  isLoading: false,
  error: null, 
  sort: 'recent',
};


export default function questionsReducer(state = initialState, action){
  console.log("question reducer actions", action);
  switch(action.type){
    case types.LOAD_QUESTIONS_SUCCESS:
      return {...state,
        questions: action.questions,
        isLoading: false,
      };
    case types.LOAD_QUESTIONS_START:
      return {...state, 
        isLoading: true,
      };
    case types.LOAD_QUESTIONS_BY_ID_START:
      return {...state, 
        isLoading: true,
      };
    case types.LOAD_QUESTIONS_BY_ID_SUCCESS:
      return {...state,
        showQuestion: action.question,
        isLoading: false,
      };
    case types.CREATE_QUESTION_SUCCESS:
      return {
        questions: [
          ...state.questions,
          Object.assign({}, action.newQuestion)
        ],
        isLoading: state.isLoading,
        error: state.error
      };
    case types.POST_ON_QUESTION_SUCCESS:
      return {
        questions: [
        ...state.questions.filter(question => question.id !== action.updatedQuestion.id),
        Object.assign({}, action.updatedQuestion)
        ],
        showQuestion: action.updatedQuestion,
        isLoading: state.isLoading,
        error: state.error
      };
    case types.DELETE_POST_ON_QUESTION_SUCCESS:
        let newShowQuestion = Object.assign({}, state.showQuestion);
        newShowQuestion[action.postType] = [...state.showQuestion[action.postType].filter(post => post.id !== action.postId)]
        return {
          ...state,
          showQuestion: newShowQuestion,
        };
    case types.DELETE_POST_ON_ANSWER_SUCCESS:
        let newShowQ = Object.assign({}, state.showQuestion);
        newShowQ.answers = newShowQ.answers.map(answer =>{
          if(answer.id === action.answerId){
            return Object.assign( {}, {...answer,
              [action.postType]: answer[action.postType].filter(post => post.id !== action.postId)
            });
          }else{
            return Object.assign({}, answer);
          }
        });
        return {
          ...state,
          showQuestion: newShowQ,
        };
    case types.DELETE_QUESTION_SUCCESS:
      return {
        questions: [...state.questions.filter(question => question.id !== action.questionId)],
        isLoading: state.isLoading,
        error: state.error
      };
    case types.EDIT_QUESTION_SUCCESS:
      return {
        questions:[...state.questions.filter(question => question.id !== action.question.id),
          Object.assign({}, action.question)],
        isLoading: false,
        showQuestion: Object.assign({}, action.question),
        error: state.error,
      };
    case types.LIKE_UNLIKE_QUESTION_SUCCESS:
      return {
        questions:[...state.questions.filter(question => question.id !== action.question.id),
          Object.assign({}, action.question)],
        isLoading: state.isLoading,
        showQuestion: action.question,
        error: state.error,
      };

    case types.SORT_QUESTIONS_SUCCESS:
      return {
        ...state,
        questions: utils.sort(action.sortType, state.questions),
      };
    case types.CREATE_ANSWER_COMMENT_SUCCESS:
      return {...state,
        showQuestion: action.question,
        isLoading: false,
      };

    default:
      return state;
  }
}