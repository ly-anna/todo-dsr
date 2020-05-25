import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';

import Navbar from './components/Navbar';
import renderRoutes from './routes';

function App(props) {
  const { loggedIn } = props;
  const { loggingIn } = props;
  const routes = renderRoutes(loggedIn);
  return (
    <Router>
      <div>{loggingIn && <span>Sending request...</span>}</div>
      {loggedIn && <Navbar />}
      <div>{routes}</div>
    </Router>
  );
}

function mapStateToProps(state) {
  const { loggedIn, loggingIn } = state.authentication;
  return { loggedIn, loggingIn };
}

export default connect(mapStateToProps, null)(App);
