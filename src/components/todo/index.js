import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from './List';

class Todo extends Component{
  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return (
      <List {...this.props} />
    );
  }
}

Todo.propTypes = {
  fetch: PropTypes.func.isRequired,
};

export default Todo;