import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { todosAction } from '../redux/todos/actions';

class Todos extends React.Component {
  componentDidMount() {
    const { todosAction } = this.props;
    todosAction();
  }

  // {id: 1, title: "Купить хлеб", description: "Cходить в магазин", createdBy: "admin"}
  render() {
    const { todosList } = this.props;
    if (todosList) {
      return (
        <div>
          <h2>Todos:</h2>
          <ul>
            {todosList.map((el, id) => (
              <li key={id}>
                title:
                {el.title}
                <span>
                  , description:
                  {el.description}
                </span>
                <span>
                  , createdBy:
                  {el.createdBy}
                </span>
              </li>
            ))}
          </ul>
        </div>
      );
    }
    return <div>Recieving data...</div>;
  }
}

Todos.propTypes = {
  todosList: PropTypes.array,
  todosAction: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const { todosList } = state.todosReducer;
  return { todosList };
}
const mapDispatchToProps = {
  todosAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
