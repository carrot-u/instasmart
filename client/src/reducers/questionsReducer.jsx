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

		default:
			return state;
	}
}