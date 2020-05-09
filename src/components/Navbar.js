import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

const Navbar = () => {
  const history = useHistory();
  // const auth = useContext();

  const logoutHandler = (event) => {
    event.preventDefault();
    console.log('logout');
    // auth.logout();
    history.push('/login');
  };
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
            <NavLink to="/login">Logout2</NavLink>
          </li>
          <li>
            <a href="/" onClick={logoutHandler}>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
