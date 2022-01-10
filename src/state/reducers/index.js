import { combineReducers } from 'redux';
import todosReducer from './todosReducer';
import jokeReducer from './jokeReducer';

const reducers = combineReducers({
  todos: todosReducer,
  joke: jokeReducer,
});

export default reducers;
