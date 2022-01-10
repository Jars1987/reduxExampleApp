// All data fetching, updates and transformation are made in the action creators
import axios from 'axios';

export const addTodo = todo => {
  return { type: 'add_todo', payload: todo };
};

export const deleteTodo = index => {
  return { type: 'delete_todo', payload: index };
};

/* WE CAN'T DO THIS 
Dispatch is synchronous (promise)

export const getJoke = () => {
  const res = axios.get('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json',
    },
  });

  return { type: 'get_joke', payload: res.data };
};

*/

// The right way

export const getJoke = () => async dispatch => {
  const res = await axios.get('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json',
    },
  });
  dispatch({ type: 'get_joke', payload: res.data });
};
