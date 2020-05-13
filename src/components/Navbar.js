import React from 'react';
import { NavLink } from 'react-router-dom';
import { userActions } from '../redux/actions';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a className="navbar-brand">App ToDo</a>
      <NavLink to="/">
        <button className="btn btn-link">Main Page</button>
      </NavLink>
      <NavLink to="/todo">
        <button className="btn btn-link">Todo Page</button>
      </NavLink>
      <button className="btn btn-link" onClick={userActions.logoutAction()}>
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
