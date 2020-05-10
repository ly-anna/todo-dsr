import React from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import { userService } from '../redux/services';
import { connect } from 'react-redux';
import { userActions } from '../redux/actions';

// import { createBrowserHistory } from 'history';
// import { Redirect } from 'react-router-dom'
axios.defaults.withCredentials = true;

// This will automatically send the cookie in requests.
/*
XMLHttpRequest from a different domain cannot set cookie
 values for their own domain unless withCredentials is 
 set to true before making the request.
 */

// const history = createBrowserHistory();

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    // this.props.logout();

    this.state = {
      login: '',
      password: '',
      // setSubmitting: false,
    };
  }

  // handleSubmit2(e) {
  //   e.preventDefault();

  //   this.setState({ setSubmitting: true });
  //   const { login, password } = this.state;
  //   if (login && password) {
  //     this.props.loginAction(login, password);
  //   }
  // }

  handleSubmit = (values, { props = this.props, setSubmitting }) => {
    props.loginAction(values, setSubmitting);
    // setSubmitting(false);
    return console.log('props.loginAction(values)', values);
  };

  render() {
    return (
      <div>
        <h1>Login!</h1>
        <Formik
          initialValues={{ login: '', password: '' }}
          onSubmit={this.handleSubmit}
          // onSubmit={(values, { setSubmitting }) => {
          //   userService.loginToServer(values, setSubmitting)
          // rootReducer(loginAction);
          // this.props.dispatch(userService.loginToServer(values, setSubmitting));
          // this.setState({ isAuthenticated: true });

          /*
        Formik will set up state internally for 
        storing user inputs through its initialValues prop, 
        so you don’t need to initialize state from constructor anymore.
        */

          // axios
          //   .post('http://localhost:3000/api/v1/login', values)
          //   .then((res) => {
          //     console.log(res);
          //     console.log('res.data', res.data);
          //     setSubmitting(false);
          //     localStorage.setItem('user', JSON.stringify(res.data.name));
          //     console.log(
          //       'localStorage',
          //       localStorage.getItem('user', JSON.stringify(res.data.name)),
          //     );
          //     if (localStorage.getItem('user')) {
          //       console.log('zzzzz');
          //       // history.push('/');
          //     }
          //     // <Redirect to="/" />
          //   })
          //   .catch((error) => {
          //     console.log(error);
          //   });
          // }}
        >
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            handleReset,
            /* and other goodies */
          }) => (
            <Form
              className="form-group mb-3 form-group col-md-6 col-md-offset-3"
              onSubmit={handleSubmit}
              onReset={handleReset}
            >
              <Field
                className="form-group form-control"
                type="login"
                name="login"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.login}
                required
                placeholder="login"
              />
              <Field
                className="form-group form-control help-block"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="password"
                required
              />
              <button
                className="btn btn-primary mx-sm-3 mb-2"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>
              <button className="btn btn-warning mb-2" type="reset" disabled={isSubmitting}>
                Reset
              </button>
            </Form>
          )}
        </Formik>
        <button
          // type="logout"
          onClick={() => {
            axios
              .post('http://localhost:3000/api/v1/logout')
              .then((res) => {
                console.log('res', res);
                console.log('res.data', res.data);
                localStorage.removeItem('user');
              })
              .catch((error) => {
                console.log(error);
              });
          }}
        >
          logout
        </button>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   loggingIn: state.authentication,
// });

// const mapDispatchToProps = {
//   loginAction: userActions.loginAction,
//   logoutAction: userActions.logoutAction,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

// const mapDispatchToProps = (dispatch) => {
//   return {
//       fetchData: (url) => dispatch(itemsFetchData(url))
//   };
// };

function mapState(state) {
  const { loggingIn } = state.authentication;
  return { loggingIn };
}

const actionCreators = {
  loginAction: userActions.loginAction,
  logoutAction: userActions.logoutAction,
};

export default connect(mapState, actionCreators)(LoginPage);
