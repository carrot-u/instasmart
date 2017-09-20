import * as types from '../actions/actionTypes';

const initialState = {
  questionSuggestions: null,
  userSuggestions: null,
  tagSuggestions: null,
  showSuggestions: false,
  isLoading: false,
}

export default function usersReducer(state = initialState, action){
  switch(action.type){
    case types.LOAD_SEARCH_SUGGESTIONS_SUCCESS:
      switch(action.searchType){
        case 'users':
          return {
            ...state,
            showSuggestions: true,
            userSuggestions: action.results,
          }
        case 'tags':
          return {
            ...state,
            showSuggestions: true,
            tagSuggestions: action.results,
          }

        default:
          return {
            ...state,
            showSuggestions: true,
            questionSuggestions: action.results,
          }
      }

    case types.CLEAR_SEARCH_SUGGESTIONS_SUCCESS:
      return {
        questionSuggestions: null,
        userSuggestions: null,
        tagSuggestions: null,
        showSuggestions: false,
        isLoading: false,
      }

    default:
      return state;

  }
}