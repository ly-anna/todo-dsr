import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Link } from 'react-router-dom';

// import { BrowserRouter, Route, Switch } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function Navbar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        component={Link}
        to="/"
        label="Main" value="Main" />
      <BottomNavigationAction
        component={Link}
        to="/todo"
        label="ToDo" value="ToDo" />
      <BottomNavigationAction
        component={Link}
        to="/login"
        label="Login"
        value="Login" />
    </BottomNavigation>
  );
}




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