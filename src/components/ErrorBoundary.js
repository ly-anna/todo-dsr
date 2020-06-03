import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../redux/actions';

class ErrorBoundary extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     hasError: false,
  //   };
  // }

  static getDerivedStateFromError(error) {
    return {
      error,
    };
  }

  render() {
    const { error } = this.props;
    if (error) {
      return <h2>This is error from ErrorBoundary{error}</h2>;
    }
    return this.props.children;
  }
}

function mapStateToProps(state) {
  const { error } = state.authentication;
  return { error };
}

const mapDispatchToProps = {
  error: userActions.error,
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBoundary);
