import { useState } from 'react';
import './Todos.css';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo } from '../state/actions-creators/index';

function Todos() {
  const [input, setInput] = useState('');

  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const addOneTodo = e => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput('');
  };

  const deleteOneTodo = i => {
    dispatch(deleteTodo(i));
  };

  return (
    <div className='todo'>
      <div className='todo__input'>
        <form onSubmit={addOneTodo}>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            type='text'
          />
          <button></button>
        </form>
      </div>
      <div className='todo__list'>
        {todos &&
          todos.map((todo, i) => (
            <div key={i} className='todo__option'>
              <p className='todo__optionText'>{todo}</p>
              <p onClick={() => deleteOneTodo(i)} className='todo__delete'>
                X
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Todos;
