import React from 'react';
import { connect } from 'react-redux';
import { deleteTodoAction } from '../redux/todos/actions';

const TodoItem = ({ id, title, description, createdBy, deleteTodoAction} ) => {
  // const handleDeleteTodo = (id) => {
  //   // e.preventDefault();
  //   const { deleteTodoAction } = this.props;
  //   deleteTodoAction(id);
  // };
  return (
    <li key={id}>
      <span>{id}</span>
      <span>
        , title:
        {title}
      </span>
      <span>
        , description:
        {description}
      </span>
      <span>
        , createdBy:
        {createdBy}
      </span>
      <button
        className="btn btn-outline-danger btn-sm mb-2"
        type="button"
        onClick={() => deleteTodoAction(id)}
      >
        delete
      </button>
    </li>
  );
};
export default TodoItem;

// const mapDispatchToProps = {
//   deleteTodoAction,
// };

// export default connect(null, mapDispatchToProps)(TodoItem);
