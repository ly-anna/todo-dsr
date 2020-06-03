import React from 'react';
import { connect } from 'react-redux';

import TodoItem from './TodoItem';

function TodoList(props) {
  const { todosList } = props;
  if (todosList) {
    console.log('todosList', todosList);
    return (
      <div>
        {todosList.map((t) => (
          <TodoItem
            key={t.id}
            id={t.id}
            title={t.title}
            description={t.description}
            createdBy={t.createdBy}
          />
        ))}
      </div>
    );
  }
  return <div>Recieving data...</div>;
}

function mapStateToProps(state) {
  const { todosList } = state.todosReducer;
  return { todosList };
}
// const mapDispatchToProps = {
//   todosAction,
// };

export default connect(mapStateToProps, null)(TodoList);
