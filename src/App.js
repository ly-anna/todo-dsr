import React from 'react';
import { Formik } from 'formik';

const App = () => (
  <div>
    <h1>Anywhere in your app!</h1>
    <Formik
      initialValues={{ login: '', password: '' }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
        // values.login = ''
        // values.password = ''
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        handleReset,
        /* and other goodies */
      }) => (
          <form onSubmit={handleSubmit} onReset={handleReset}>
            <input
              type="login"
              name="login"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.login}
              required={true}
            />
            {errors.login && touched.login && errors.login}
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              required={true}
            />
            {errors.password && touched.password && errors.password}
            <button type="submit" disabled={isSubmitting}>
              Submit
          </button>
            <button type="reset" disabled={isSubmitting}>
              Reset
          </button>
          </form>
        )}
    </Formik>
  </div>
);

export default App;