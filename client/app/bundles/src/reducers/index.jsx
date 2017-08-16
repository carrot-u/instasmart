import {combineReducers} from 'redux';
import questionsReducer from './questionsReducer';
import questionModalReducer from './questionModalReducer';



const rootReducer = combineReducers({
  questions: questionsReducer,
  modal: questionModalReducer,
  currentUser: null,
});

export default rootReducer;