import React from 'react';
import { NavLink } from 'react-router-dom';
import { userService } from '../redux/services';

const Navbar = () => {
  return (
    <nav>
      <div className="" style={{ padding: '0 2rem' }}>
        <span className="">Todo App</span>
        <ul id="nav" className="">
          <li>
            <NavLink to="/">Main Page</NavLink>
          </li>
          <li>
            <NavLink to="/todo">Todo Page</NavLink>
          </li>
          <li>
            <a href="/" onClick={userService.logoutFromServer}>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
