import * as types from './actionTypes';
import * as api from '../api/api';


export function loadSearchSuggestionsSuccess(results, searchType){
  return { type: types.LOAD_SEARCH_SUGGESTIONS_SUCCESS, results, searchType};
}

export function clearSearchSuggestions(){
  return { type: types.CLEAR_SEARCH_SUGGESTIONS_SUCCESS };
}

export function getSearchSuggestions(searchQuery, type){
  return dispatch => {
    dispatch(api.getSearchSuggestions(searchQuery, type));
  };
}
