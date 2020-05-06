import { ActionTypes } from '../actions/todo';

const todo = (state = {
  loading: false,
  saving: false,
}, action) => {
  switch (action.type) {
    case `${ActionTypes.FETCH}_PENDING`:
      return {
        ...state,
        loading: true,
      };
    case `${ActionTypes.FETCH}_FULFILLED`:
      return {
        ...state,
        loading: false,
        list: action.payload,
      };
    default:
      return state;
  }
};

export default todo;
