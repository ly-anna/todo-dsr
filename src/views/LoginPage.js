import React from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
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
const LoginPage = () => (
  <div>
    <h1>This is login page!</h1>
    <Formik
      initialValues={{ login: '', password: '' }}
      onSubmit={(values, { setSubmitting }) => {
        // что это setSubmitting?
        // const data = new FormData(event.target);

        /*
        Formik will set up state internally for 
        storing user inputs through its initialValues prop, 
        so you don’t need to initialize state from constructor anymore.
        */

        axios
          .post('http://localhost:3000/api/v1/login', values)
          .then((res) => {
            console.log(res);
            console.log('res.data', res.data);
            setSubmitting(false);
            localStorage.setItem('user', JSON.stringify(res.data.name));
            console.log(localStorage.getItem('user', JSON.stringify(res.data.name)));
            if (localStorage.getItem('user')) {
              console.log('zzzzz');
              // history.push('/');
            }
            // <Redirect to="/" />
          })
          .catch((error) => {
            console.log(error);
          });
      }}
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
        <Form onSubmit={handleSubmit} onReset={handleReset}>
          <Field
            type="login"
            name="login"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.login}
            required
          />
          <Field
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            required
          />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
          <button type="reset" disabled={isSubmitting}>
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
            console.log(res);
            console.log(res.data);
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

export default LoginPage;
