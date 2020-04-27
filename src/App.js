import React from 'react';
import { Form, Field } from 'react-final-form';
import './App.css';


const onSubmit = values => {
  return new Promise(resolve => {
    setTimeout(() => {
      window.alert(JSON.stringify(values, 0, 2))
      resolve();
    }, 1000)

  })
}

const App = () => (
  <Form
    onSubmit={onSubmit}
    render={({ handleSubmit, values, form, pristine, submitting }) => (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
          />
        </div>
        <div>
          <label htmlFor="secondName">Second Name</label>
          <Field
            name="secondName"
            component="input"
            type="text"
            placeholder="Second Name"
          />
        </div>


        <pre>{JSON.stringify(values, 0, 2)}</pre>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" onClick={form.reset} disabled={pristine || submitting}>Reset</button>
      </form>
    )}>

  </Form>
);

export default App;
