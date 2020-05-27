import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userActions } from '../redux/actions';

class AboutMe extends React.Component {
  componentDidMount() {
    const { aboutMeAction } = this.props;
    aboutMeAction();
  }

  render() {
    const { user, role } = this.props;
    if (user && role) {
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
    return <div>Recieving data...</div>;
  }
}

AboutMe.propTypes = {
  user: PropTypes.string,
  role: PropTypes.string,
  aboutMeAction: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const { user, role } = state.authentication;
  return { user, role };
}
const mapDispatchToProps = {
  aboutMeAction: userActions.aboutMeAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutMe);
