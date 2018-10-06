import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestCarOfWeekData } from '../../features/Car/actions';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(requestCarOfWeekData());
  }
  render() {
    return null;
  }
}

const mapStateToProps = state => ({
  // peopleList: state.people.peopleList,
  // error: state.people.error
});

Dashboard.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Dashboard);
