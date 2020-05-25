import React from 'react';
import { connect } from 'react-redux';

function MainPage(props) {
  const { user } = props;
  return (
    <div>
      <h1>Main Page </h1>
      <h2>
        Hello,
        {user}
      </h2>
    </div>
  );
}

function mapStateToProps(state) {
  const { user } = state.authentication;
  return { user };
}

export default connect(mapStateToProps, null)(MainPage);
