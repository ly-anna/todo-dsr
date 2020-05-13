import React from 'react';
import { connect } from 'react-redux';

function MainPage(props) {
  console.log('MainPage pporops', props); // обсудить
  return (
    <div>
      <h1>Main Page </h1>
      <h2>
Hello,{props.user}
!
</h2>
    </div>
  );
}

function mapStateToProps(state) {
  const { user } = state.authentication;
  return { user };
}

export default connect(mapStateToProps, {})(MainPage);
