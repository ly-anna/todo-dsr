import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { userActions } from '../redux/actions';

class Navbar extends React.Component {
  handleLogout = (e) => {
    e.preventDefault();
    const { logoutAction } = this.props;
    logoutAction();
  };

  render() {
    return (
      <nav className="navbar">
        <NavLink to="/">
          <button className="btn btn-link" type="button">
            Main
          </button>
        </NavLink>
        <NavLink to="/todos">
          <button className="btn btn-link" type="button">
            Todos
          </button>
        </NavLink>
        <NavLink to="/me">
          <button className="btn btn-link" type="button">
            About me
          </button>
        </NavLink>
        <NavLink to="/users">
          <button className="btn btn-link" type="button">
            Users
          </button>
        </NavLink>
        <button className="btn btn-link" type="button" onClick={(e) => this.handleLogout(e)}>
          Logout
        </button>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  return { loggingIn };
}

const actionCreators = {
  loginAction: userActions.loginAction,
  logoutAction: userActions.logoutAction,
};

export default connect(mapStateToProps, actionCreators)(Navbar);

// export default Navbar;
