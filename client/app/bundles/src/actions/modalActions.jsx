import * as types from './actionTypes';
import * as api from '../api/api';

export function showModal(){
  return { type: types.SHOW_MODAL_SUCCESS};
}

export function toggleModal(){
  return { type: types.TOGGLE_MODAL_SUCCESS};
}

export function selectEditQuestion(question){
  return { type: types.SELECT_EDIT_QUESTION, question};
}

export function swapTagsOnEditQuesion(tag, currPos, newPos){
  return { type: types.SWAP_TAGS, tag, currPos, newPos};
}

export function addTagOnEditQuesion(addTag){
  return { type: types.ADD_TAG, addTag};
}

export function deleteTagOnEditQuesion(removeTagIndex){
  return { type: types.DELETE_TAG, removeTagIndex};
}
