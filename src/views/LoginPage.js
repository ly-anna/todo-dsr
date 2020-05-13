import React from 'react';
import { Formik, Field, Form } from 'formik';
import { connect } from 'react-redux';

import { userActions } from '../redux/actions';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    // this.props.logout();

    this.state = {
      login: '',
      password: '',
    };
  }

  handleSubmit = (values, { props = this.props, setSubmitting }) => {
    props.loginAction(values, setSubmitting);
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
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  return { loggingIn };
}

const actionCreators = {
  loginAction: userActions.loginAction,
  logoutAction: userActions.logoutAction,
};

export default connect(mapStateToProps, actionCreators)(LoginPage);
