import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Main from './views/Main';
import Todos from './views/Todos';
import LoginPage from './views/LoginPage';
import AboutMe from './views/AboutMe';
import Users from './views/Users';

const useRoutes = (loggedIn) => {
  if (loggedIn) {
    return (
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/todos">
          <Todos />
        </Route>
        <Route path="/me">
          <AboutMe />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Redirect to="/login" />
    </Switch>
  );
};

export default useRoutes;
