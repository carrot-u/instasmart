import * as types from '../actions/actionTypes';
import * as utils from '../components/common/utils';

const initialState = {
  questions: [],
  showQuestion: null,
  isLoading: false,
  error: null, 
  sortType: "recent",
  sort: 'recent',
};


export default function questionsReducer(state = initialState, action){
  switch(action.type){

    //****************** LOAD ACTIONS ****************************//
    case types.LOAD_QUESTIONS_SUCCESS:
      return {...state,
        questions: utils.sort(state.sortType, action.questions.map(question => {
          return {
            ...question,
            answers: utils.sort("accepted", question.answers)
          }
        })),
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
        showQuestion: {
          ...action.question,
              answers: utils.sort("accepted", action.question.answers)
        },
        isLoading: false,
      };
    case types.SORT_QUESTIONS_SUCCESS:
      return {
        ...state,
        sortType: action.sortType,
        questions: utils.sort(action.sortType, state.questions),
      };

    //****************** CREATE ACTIONS ****************************//
    case types.CREATE_QUESTION_SUCCESS:
      return {
        questions:  utils.sort(state.sortType, [
          ...state.questions,
          Object.assign({}, action.newQuestion)
        ]),
        isLoading: state.isLoading,
        error: state.error
      };
    case types.POST_ON_QUESTION_SUCCESS:
      return {
        questions: utils.sort(action.sortType, [
        ...state.questions.filter(question => question.id !== action.updatedQuestion.id),
        Object.assign({}, action.updatedQuestion)
        ]),
        showQuestion: {
          ...action.updatedQuestion,
          answers: utils.sort("accepted", [...action.updatedQuestion.answers])
        },
        isLoading: state.isLoading,
        error: state.error
      };
    case types.CREATE_ANSWER_COMMENT_SUCCESS:
      return {...state,
        showQuestion: action.question,
        isLoading: false,
      };

    //****************** DELETE ACTIONS ****************************//
    case types.DELETE_POST_ON_QUESTION_SUCCESS:
        let newShowQuestion = Object.assign({}, state.showQuestion);
        newShowQuestion[action.postType] = [...state.showQuestion[action.postType].filter(post => post.id !== action.postId)]
        return {
          ...state,
          showQuestion: newShowQuestion,
        };
    case types.DELETE_POST_ON_ANSWER_SUCCESS:
        let newShowQ = Object.assign({}, state.showQuestion);
        newShowQ.answers = utils.sort(state.sortType, newShowQ.answers.map(answer =>{
          if(answer.id === action.answerId){
            return Object.assign( {}, {...answer,
              [action.postType]: answer[action.postType].filter(post => post.id !== action.postId)
            });
          }else{
            return Object.assign({}, answer);
          }
        }));
        return {
          ...state,
          showQuestion: newShowQ,
        };
    case types.DELETE_QUESTION_SUCCESS:
      return {
        questions: utils.sort(state.sortType, [...state.questions.filter(question => question.id !== action.questionId)]),
        isLoading: state.isLoading,
        error: state.error
      };
    
    //****************** EDIT ACTIONS ****************************//
    case types.EDIT_QUESTION_SUCCESS:
      return {
        questions:  utils.sort(state.sortType, [...state.questions.filter(question => question.id !== action.question.id),
          Object.assign({}, action.question)]),
        isLoading: false,
        showQuestion: Object.assign({}, action.question),
        error: state.error,
      };
    case types.EDIT_POST_ON_ANSWER_SUCCESS:
      return {
        ...state,
        showQuestion: {
          ...state.showQuestion,
          answers: utils.sort(state.sortType, [...state.showQuestion.answers.filter(ans => ans.id !== action.updatedAnswer.id), 
            Object.assign({}, action.updatedAnswer)])
        }
      }
    case types.LIKE_UNLIKE_QUESTION_SUCCESS:
      return {
        questions: utils.sort(state.sortType, [...state.questions.filter(question => question.id !== action.question.id),
          Object.assign({}, action.question)]),
        isLoading: state.isLoading,
        showQuestion: Object.assign({}, 
            {...action.question,
              answers: utils.sort("accepted", action.question.answers)
            }),
        error: state.error,
      };

    default:
      return state;
  }
}