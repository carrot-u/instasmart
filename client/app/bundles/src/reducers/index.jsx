import {combineReducers} from 'redux';
import questionsReducer from './questionsReducer';
import currentUserReducer from './currentUserReducer';
import questionModalReducer from './questionModalReducer';



const rootReducer = combineReducers({
  questions: questionsReducer,
  modal: questionModalReducer,
  currentUser: currentUserReducer,
});

export default rootReducer;