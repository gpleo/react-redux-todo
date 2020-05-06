import { fetch, create, update, del } from '../api/todo';

export const ActionTypes = {
  FETCH: 'FETCH_TODO',
  CREATE: 'CREATE_TODO',
  UPDATE: 'UPDATE_TODO',
  DELETE: 'DELETE_TODO',
};

export const fetchTodo = () => ({
  type: ActionTypes.FETCH,
  payload: fetch(),
});

export const createTodo = entity => ({
  type: ActionTypes.CREATE,
  payload: create(entity),
});

export const updateTodo = (id, entity) => ({
  type: ActionTypes.UPDATE,
  payload: update(id, entity),
});

export const deleteTodo = id => ({
  type: ActionTypes.DELETE,
  payload: del(id),
});
