import React from 'react';
import { Formik, Field, Form } from 'formik';
import { connect } from 'react-redux';
import { addTodoAction } from '../redux/todos/actions';
import {
  required,
  minLength,
  composeValidators,
  minTitleLength,
  minDescriptionLength,
} from '../utils/formvalidation';

class addTodo extends React.Component {
  handleSubmit = (values, foo) => {
    const { setSubmitting } = foo;
    const { addTodoAction } = this.props;
    addTodoAction(values, setSubmitting);
    foo.resetForm();
  };

  render() {
    return (
      <div>
        <Formik initialValues={{ title: '', description: '' }} onSubmit={this.handleSubmit}>
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
                type="title"
                name="title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
                placeholder="title"
                validate={composeValidators(required, minLength(minTitleLength))}
              />
              {errors.title && touched.title && <div style={{ color: 'red' }}>{errors.title}</div>}

              <Field
                className="form-group form-control help-block"
                type="description"
                name="description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
                placeholder="description"
                validate={composeValidators(required, minLength(minDescriptionLength))}
              />
              {errors.description && touched.description && (
                <div style={{ color: 'red' }}>{errors.description}</div>
              )}
              <button
                className="btn btn-primary mx-sm-3 mb-2"
                type="submit"
                disabled={isSubmitting}
              >
                Add
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
  addTodoAction,
};

export default connect(null, mapDispatchToprops)(addTodo);
