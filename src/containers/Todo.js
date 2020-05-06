import { connect } from 'react-redux';
import { fetchTodo, createTodo, updateTodo, deleteTodo } from '../actions/todo';
import Todo from '../components/todo';

const mapStateToProps = state => {
  return state.todo;
};

const mapDispatchToProps = (dispatch) => {
  const fetch = () => dispatch(fetchTodo());
  const create = entity => {
    const create = dispatch(createTodo(entity));
    create.then(fetch);
    return create;
  };
  const update = (id, entity) => {
    const update = dispatch(updateTodo(id, entity));
    update.then(fetch);
    return update;
  };
  const del = id => {
    const del = dispatch(deleteTodo(id));
    del.then(fetch);
    return del;
  };

  return {
    fetch,
    create,
    update,
    del,
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
