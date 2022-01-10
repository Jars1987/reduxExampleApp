const jokeReducer = (state = '', action) => {
  switch (action.type) {
    case 'get_joke': {
      const newJoke = action.payload.joke;
      return newJoke;
    }

    default:
      return state;
  }
};

export default jokeReducer;
