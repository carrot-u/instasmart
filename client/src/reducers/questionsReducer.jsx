import * as types from '../actions/actionTypes';

const initialState = {
  questions: [],
  isLoading: false,
  error: null, //#A
};


export default function questionsReducer(state = initialState, action){
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
    case types.CREATE_QUESTION_SUCCESS:
      return {
        questions: [
          ...state.questions,
          Object.assign({}, action.newQuestion)
        ],
        isLoading: state.isLoading,
        error: state.error
      };
    case types.CREATE_ANSWER_SUCCESS:
      const newQuestions = [
        ...state.questions.filter(question => question.id !== action.updatedQuestion.id),
        Object.assign({}, action.updatedQuestion)
      ];
      return {
        questions: newQuestions,
        isLoading: state.isLoading,
        error: state.error
      };


    default:
      return state;
  }
}