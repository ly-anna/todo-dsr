import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { todosListAction, deleteTodoAction } from '../redux/todos/actions';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import ErrorBoundary from '../components/ErrorBoundary';

class Todos extends React.Component {
  componentDidMount() {
    console.log('this.props', this.props);
    const { todosListAction } = this.props;
    todosListAction();
  }

  render() {
    const { deleteTodoAction } = this.props;
    return (
      <div>
        <h2>Todos:</h2>
        <ul>
          <AddTodo />
          <ErrorBoundary>
            <TodoList deleteTodoAction={deleteTodoAction} />
          </ErrorBoundary>
        </ul>
      </div>
    );
  }
}

Todos.propTypes = {
  todosList: PropTypes.array,
  todosListAction: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const { todosList } = state.todosReducer;
  return { todosList };
}
const mapDispatchToProps = {
  todosListAction,
  deleteTodoAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
