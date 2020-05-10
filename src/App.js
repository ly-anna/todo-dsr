import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
// import LoginPage from './views/LoginPage copy';

import Navbar from './components/Navbar';
// import MainPage from './views/MainPage';
// import Todo from './views/TodoPage';
import useRoutes from './routes';
// import authentication from './redux/authentication.reducer';

function App(props) {
  // const { login, logout} = useAuth()
  // const loggingIn = true;
  // const { loggingIn } = props;
  const { loggedIn } = props;

  const routes = useRoutes(loggedIn);
  console.log('loggedIn', loggedIn);
  return (
    <Router>
      {loggedIn && <Navbar />}
      <div>{routes}</div>
    </Router>
  );
}

function mapState(state) {
  const { loggedIn } = state.authentication;
  console.log('state map', state);
  console.log('loggedIn map', loggedIn);
  return { loggedIn };
}

const actionCreators = {};

export default connect(mapState, actionCreators)(App);

// export default App;
