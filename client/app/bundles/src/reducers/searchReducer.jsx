import * as types from '../actions/actionTypes';

const initialState = {
  questionSuggestions: null,
  userSuggestions: null,
  tagSuggestions: null,
  isLoading: false,
}

export default function usersReducer(state = initialState, action){
  switch(action.type){
    case types.LOAD_SEARCH_SUGGESTIONS_SUCCESS:
      switch(action.searchType){

        default:
          return {
            ...state,
            questionSuggestions: action.results,
          }
      }

    case types.CLEAR_SEARCH_SUGGESTIONS_SUCCESS:
      return {
        questionSuggestions: null,
        userSuggestions: null,
        tagSuggestions: null,
        isLoading: false,
      }

    default:
      return state;

  }
}