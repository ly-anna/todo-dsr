import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';

import Navbar from './components/Navbar';
import useRoutes from './routes';

function App(props) {
  const { loggedIn } = props;
  console.log('loggedIn from APP', loggedIn);
  const routes = useRoutes(loggedIn);
  return (
    <Router>
      {loggedIn && <Navbar />}
      <div>{loggedIn}</div>
      <div>{routes}</div>
    </Router>
  );
}

function mapStateToProps(state) {
  console.log('state', state);
  console.log('state.authentication map APP', state.authentication);
  const { loggedIn } = state.authentication;
  return { loggedIn };
}

const actionCreators = {};

export default connect(mapStateToProps, actionCreators)(App);
