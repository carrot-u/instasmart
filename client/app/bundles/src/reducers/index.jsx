import {combineReducers} from 'redux';
import questionsReducer from './questionsReducer';
import usersReducer from './usersReducer';
import questionModalReducer from './questionModalReducer';



const rootReducer = combineReducers({
  questions: questionsReducer,
  modal: questionModalReducer,
  users: usersReducer,
});

export default rootReducer;