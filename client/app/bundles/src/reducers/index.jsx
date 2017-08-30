import {combineReducers} from 'redux';
import questionsReducer from './questionsReducer';
import usersReducer from './usersReducer';
import questionModalReducer from './questionModalReducer';
import warningModalReducer from './warningModalReducer';




const rootReducer = combineReducers({
  questions: questionsReducer,
  modal: questionModalReducer,
  users: usersReducer,
  warningModal: warningModalReducer,
});

export default rootReducer;