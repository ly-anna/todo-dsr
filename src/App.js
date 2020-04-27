import React from 'react';
import { Form, Field } from 'react-final-form';
import './App.css';


const onSubmit = values => window.alert(JSON.stringify(values, 0, 2))

const App = () => (
  <Form
    onSubmit={onSubmit}
    render={({ handleSubmit, values, form, pristine }) => (
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
        <button type="submit" disabled={pristine}>Submit</button>
        <button type="button" onClick={form.reset} disabled={pristine}>Reset</button>
      </form>
    )}>

  </Form>
);

export default App;
