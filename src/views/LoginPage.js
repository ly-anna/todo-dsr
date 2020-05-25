import React from 'react';
import { Formik, Field, Form } from 'formik';
import { connect } from 'react-redux';

import { userActions } from '../redux/actions';
import {
  required,
  minLength,
  composeValidators,
  minLoginLength,
  minPasswordLength,
} from '../utils/formvalidation';

class LoginPage extends React.Component {
  handleSubmit = (values, foo) => {
    const { setSubmitting } = foo;
    const { loginAction } = this.props;
    loginAction(values, setSubmitting);
  };

  render() {
    return (
      <div>
        <h1>Login!</h1>
        <Formik
          initialValues={{ login: '', password: '' }}
          onSubmit={this.handleSubmit}

          /*
        Formik will set up state internally for 
        storing user inputs through its initialValues prop, 
        so you don’t need to initialize state from constructor anymore.
        */
        >
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            handleReset,
            errors,
            touched,
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
                placeholder="login"
                validate={composeValidators(required, minLength(minLoginLength))}
              />
              {errors.login && touched.login && <div style={{ color: 'red' }}>{errors.login}</div>}

              <Field
                className="form-group form-control help-block"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="password"
                validate={composeValidators(required, minLength(minPasswordLength))}
              />
              {errors.password && touched.password && (
                <div style={{ color: 'red' }}>{errors.password}</div>
              )}
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
      </div>
    );
  }
}

const mapDispatchToprops = {
  loginAction: userActions.loginAction,
};

export default connect(null, mapDispatchToprops)(LoginPage);
