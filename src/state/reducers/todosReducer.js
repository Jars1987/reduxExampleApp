//All state updates are handled by reducers

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'add_todo':
      return [...state, action.payload];
    case 'delete_todo': {
      const newArr = state.filter(
        todo => state.indexOf(todo) !== action.payload
      );
      return [...newArr];
    }
    default:
      return state;
  }
};

export default todosReducer;
