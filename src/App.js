import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';

import Navbar from './components/Navbar';
import renderRoutes from './routes';

function App(props) {
  const { loggingIn } = props;
  const { role } = props;
  const routes = renderRoutes(role);
  return (
    <Router>
      <div>{loggingIn && <span>Sending request...</span>}</div>
      {role && <Navbar />}
      <div>{routes}</div>
    </Router>
  );
}

function mapStateToProps(state) {
  const { loggingIn, role } = state.authentication;
  return { loggingIn, role };
}

export default connect(mapStateToProps, null)(App);
