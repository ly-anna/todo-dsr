import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
// import MainPage from './views/MainPage';
// import Todo from './views/TodoPage';
import useRoutes from './routes';

function App() {
  // const { login, logout} = useAuth()
  const isAuthenticated = true;
  const routes = useRoutes(isAuthenticated);

  return (
    <Router>
      {isAuthenticated && <Navbar />}
      <div>{routes}</div>
    </Router>
  );
}

export default App;
