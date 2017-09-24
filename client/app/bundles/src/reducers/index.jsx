import {combineReducers} from 'redux';
import questionsReducer from './questionsReducer';
import usersReducer from './usersReducer';
import questionModalReducer from './questionModalReducer';
import warningModalReducer from './warningModalReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  questions: questionsReducer,
  modal: questionModalReducer,
  users: usersReducer,
  warningModal: warningModalReducer,
  search: searchReducer,
});

export default rootReducer;