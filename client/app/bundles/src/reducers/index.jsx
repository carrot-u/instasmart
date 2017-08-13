import {combineReducers} from 'redux';
import questionsReducer from './questionsReducer';
import questionModalReducer from './questionModalReducer';



const rootReducer = combineReducers({
  questions: questionsReducer,
  modal: questionModalReducer,
});

export default rootReducer;