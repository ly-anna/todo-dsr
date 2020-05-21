import React from 'react';
import { connect } from 'react-redux';

function AboutMe(props) {
  const { user, role } = props;
  return (
    <div>
      <h1>
        Hello,
        {user}
      </h1>
      <h2>
        Your role is: 
        {role}
      </h2>
    </div>
  );
}

function mapStateToProps(state) {
  const { user, role } = state.authentication;
  return { user, role };
}

export default connect(mapStateToProps, {})(AboutMe);
