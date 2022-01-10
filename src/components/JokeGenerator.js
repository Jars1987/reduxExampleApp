import './JokeGenerator.css';
import { useDispatch, useSelector } from 'react-redux';
import { getJoke } from '../state/actions-creators';
import { useEffect } from 'react';

function JokeGenerator() {
  const dispatch = useDispatch();
  const joke = useSelector(state => state.joke);
  const newJoke = () => {
    dispatch(getJoke());
  };

  useEffect(() => {
    dispatch(getJoke());
  }, [dispatch]);

  return (
    <div className='joke__container'>
      <p>{joke}</p>
      <button onClick={newJoke}>Generate New Joke</button>
    </div>
  );
}

export default JokeGenerator;

/*

When passing a callback using dispatch to a child component, 
you may sometimes want to memoize it with useCallback. 
If the child component is trying to optimize render behavior 
using React.memo() or similar, this avoids unnecessary rendering 
of child components due to the changed callback reference.

ex: useCallback(() => {
    dispatch(getJoke());
  }, [dispatch])

*/
