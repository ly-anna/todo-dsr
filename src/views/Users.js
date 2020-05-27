import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { usersAction } from '../redux/users/actions';

class Users extends React.Component {
  componentDidMount() {
    const { usersAction } = this.props;
    usersAction();
  }

  render() {
    const { usersList } = this.props;
    if (usersList) {
      return (
        <div>
          <h2>Users:</h2>
          <ul>
            {usersList.map((el, i) => (
              <li key={i}>
                name:
                {el.name}
                <span>
                  , login:
                  {el.login}
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

Users.propTypes = {
  usersList: PropTypes.array,
  usersAction: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const { usersList } = state.usersReducer;
  return { usersList };
}
const mapDispatchToProps = {
  usersAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
