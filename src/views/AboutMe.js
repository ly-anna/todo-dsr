import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../redux/actions';

class AboutMe extends React.Component {
  componentDidMount() {
    const { aboutMeAction } = this.props;
    aboutMeAction();
  }

  render() {
    const { user, role } = this.props;
    return (
      <div>
        <h2>
          Hello,
          {user}
        </h2>
        <h2>
          Your role is:
          {role}
        </h2>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { user, role } = state.authentication;
  return { user, role };
}
const actionCreators = {
  aboutMeAction: userActions.aboutMeAction,
};

export default connect(mapStateToProps, actionCreators)(AboutMe);
