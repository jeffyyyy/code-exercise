import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isEmpty, isNil } from 'ramda';
import { requestCarOfWeekData } from '../../features/Car/actions';
import CarDetailList from '../../components/CarDetailList';

class Dashboard extends React.Component {
  componentDidMount() {
    const carOfWeekDetail = this.props.carofweek;
    if (isEmpty(carOfWeekDetail) || isNil(carOfWeekDetail)) {
      this.props.dispatch(requestCarOfWeekData());
    }
  }

  render() {
    const carOfWeekDetail = this.props.carofweek;
    if (isEmpty(carOfWeekDetail) || isNil(carOfWeekDetail)) {
      return null;
    }
    return (
      <div className='mt-3'>
        <h1 className='text-center'>Car of the Week!</h1>
        <CarDetailList detail={carOfWeekDetail} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  carofweek: state.car.carofweek,
  loading: state.car.loading,
});

Dashboard.defaultProps = {
  carofweek: {},
};

Dashboard.propTypes = {
  dispatch: PropTypes.func.isRequired,
  carofweek: PropTypes.object,
};

export default connect(mapStateToProps)(Dashboard);
