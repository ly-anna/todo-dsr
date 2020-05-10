import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import MainPage from './views/MainPage';
import TodoPage from './views/TodoPage';
import { LoginPage } from './views/LoginPage';

const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/todo">
          <TodoPage />
        </Route>
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
