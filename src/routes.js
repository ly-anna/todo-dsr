import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Main from './views/Main';
import Todos from './views/Todos';
import LoginPage from './views/LoginPage';
import AboutMe from './views/AboutMe';
import Users from './views/Users';
import ErrorBoundary from './components/ErrorBoundary';

// useRoutes - переименовать renderRoutes  или
//
const renderRoutes = (role) => {
  if (role) {
    return (
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/todos" component={Todos} />
        <Route path="/me" component={AboutMe} />
        {role === 'admin' && <Route exact path="/users" component={Users} />}
        {/* <Route path="/users" component={Users} /> */}
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/login">
        <ErrorBoundary>
          <LoginPage />
        </ErrorBoundary>
      </Route>
      <Redirect to="/login" />
    </Switch>
  );
};

export default renderRoutes;
