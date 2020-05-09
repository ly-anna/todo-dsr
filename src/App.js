import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './views/LoginPage';
import Navbar from './components/Navbar';
import Main from './views/MainPage';
import Todo from './views/TodoPage'
// import PrivateRoute from './components/PrivateComponent'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/todo" component={Todo} />
            <Route path="/login" component={Login} />
            <Redirect from="*" to="/" />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
// const App = () => (
//   <>
//     <Navbar />
//     <LoginPage />
//   </>
// )

// class App extends Component {
//   constructor() {
//     super();
//   };

//   render() {
//     return (
//       <Provider store={store}>
//       <Router>
//         <div>
//           <nav>
//             <ul className="nav">
//               <li>
//                 <Link to="/">TOP Movies</Link>
//               </li>
//               <li>
//                 <Link to="/tvShows">TOP TV Shows</Link>
//               </li>
//               <li>
//                 <Link to="/people/">People</Link>
//               </li>
//               <li>
//                 <Link to="/compare/">Who is The best?</Link>
//               </li>
//               <li>
//                 <Link to="/about/">Call me</Link>
//               </li>
//             </ul>
//           </nav>

//           <Route path="/" exact component={MoviesList} />
//           <Route path="/tvShows/" component={TvShows} />
//           <Route path="/people/" component={People} />
//           <Route path="/compare/" component={Compare} />
//           <Route path="/about/" component={About} />
//         </div>
//       </Router>
//       </Provider>
//     );
//   }
// }

export default App;


