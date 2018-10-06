import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as R from 'ramda';
import { requestCarOfWeekData } from '../../features/Car/actions';

class Dashboard extends React.Component {
  componentDidMount() {
    const carOfWeekDetail = this.props.carofweek;
    if (R.isEmpty(carOfWeekDetail) || R.isNil(carOfWeekDetail)) {
      this.props.dispatch(requestCarOfWeekData());
    }
  }

  render() {
    const carOfWeekDetail = this.props.carofweek;
    if (R.isEmpty(carOfWeekDetail) || R.isNil(carOfWeekDetail)) {
      return null;
    }
    return (
      <div>
        <img src={carOfWeekDetail.imageUrl} alt="Car of Week" />
        <div className='d-flex'>
          <p className='font-weight-bold'>Model:</p>
          <p>{R.pathOr('', ['name'], carOfWeekDetail)}</p>
        </div>
        <div className='d-flex'>
          <p className='font-weight-bold'>Price:</p>
          <p>{R.pathOr('', ['price'], carOfWeekDetail)}</p>
        </div>
        <div className='d-flex'>
          <p className='font-weight-bold'>Review:</p>
          <p>{R.pathOr('', ['review'], carOfWeekDetail)}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  carofweek: state.car.carofweek,
  loading: state.car.loading,
  // peopleList: state.people.peopleList,
  // error: state.people.error
});

Dashboard.defaultProps = {
  carofweek: {},
};

Dashboard.propTypes = {
  dispatch: PropTypes.func.isRequired,
  carofweek: PropTypes.object,
};

export default connect(mapStateToProps)(Dashboard);
